(function() {
    'use strict';

    angular
        .module('app.character')
        .controller('CharacterReadController', CharacterRead)
        .controller('CharacterUpdateController', CharacterUpdate)
        .controller('CharacterListController', CharacterList)
    ;

    CharacterRead.$inject = ["$scope","socket","$state","$stateParams","$location","wlfgAppTitle"];
    function CharacterRead($scope,socket,$state,$stateParams,$location,wlfgAppTitle) {
        wlfgAppTitle.setTitle($stateParams.name+' @ '+$stateParams.realm+' ('+$stateParams.region.toUpperCase()+')');
        //Reset error message
        $scope.$parent.error=null;

        //Initialize $scope variables
        $scope.$parent.loading = true;
        $scope.current_url =  window.encodeURIComponent($location.absUrl());

        socket.emit('get:character',{"region":$stateParams.region,"realm":$stateParams.realm,"name":$stateParams.name});

        socket.forward('get:character',$scope);
        $scope.$on('socket:get:character',function(ev,character){
            $scope.character = character;
            if (character.ad.btag_display) {
                socket.emit('get:characterBattleTag', character._id);
                socket.forward('get:characterBattleTag',$scope);
                $scope.$on('socket:get:characterBattleTag',function(ev,battleTag){
                    $scope.$parent.loading = false;
                    $scope.character.battleTag = battleTag;
                });
            } else {
                $scope.$parent.loading = false;
            }
        });

        $scope.updateCharacter = function(){
            $scope.$parent.loading = true;
            socket.emit('update:character',{"region":$stateParams.region,"realm":$stateParams.realm,"name":$stateParams.name});
        };

        socket.forward('update:character',$scope);
        $scope.$on('socket:update:character',function(ev,queuePosition){
            $scope.queuePosition = queuePosition;
            $scope.$parent.loading = false;
        });
    }

    CharacterUpdate.$inject = ["$scope","socket","$state","$stateParams","$translate","LANGUAGES","TIMEZONES"];
    function CharacterUpdate($scope,socket,$state,$stateParams,$translate,LANGUAGES,TIMEZONES) {
        //Reset error message
        $scope.$parent.error=null;
        $scope.timezones = TIMEZONES;

        //Redirect not logged_in users to home
        $scope.$watch("$parent.user", function() {
            if($scope.$parent.user && $scope.$parent.user.logged_in===false)
                $state.go('dashboard');
        });


        $scope.$watch('selectedLanguages', function() {
            if($scope.character) {
                $scope.character.ad.languages = [];
                $scope.selectedLanguages.forEach(function (language) {
                    $scope.character.ad.languages.push(language.id);
                });
            }
        });


        //Initialize $scope variables
        $scope.$parent.loading = true;

        socket.emit('get:character',{"region":$stateParams.region,"realm":$stateParams.realm,"name":$stateParams.name});

        socket.forward('get:character',$scope);
        $scope.$on('socket:get:character',function(ev,character){
            $scope.$parent.loading = false;
            $scope.character = character;
            $scope.languages = [];
            LANGUAGES.forEach(function(language){
                $scope.languages.push({id:language,name:$translate.instant("LANG_"+language.toUpperCase()),selected:$scope.character.ad.languages.indexOf(language)!=-1});
            });

        });

        $scope.save = function(){
            $scope.$parent.loading = true;
            socket.emit('put:characterAd',$scope.character);
        };

        socket.forward('put:characterAd',$scope);
        $scope.$on('socket:put:characterAd',function(){
            $scope.$parent.loading = false;
            $state.go("account");
        });
    }

    CharacterList.$inject = ['$scope', '$stateParams', '$state', 'socket', "wlfgAppTitle","characters"];
    function CharacterList($scope, $stateParams, $state, socket, wlfgAppTitle,characters) {
        wlfgAppTitle.setTitle('Characters LFG');
        //Reset error message
        $scope.$parent.error = null;
        $scope.$parent.loading = true;
        $scope.characters = [];
        $scope.last = {};
        $scope.filters = {};
        $scope.filters.states = {};

        $scope.$watch('filters', function() {
            if ($scope.filters.states.classes && $scope.filters.states.faction && $scope.filters.states.role && $scope.filters.states.ilevel && $scope.filters.states.levelMax && $scope.filters.states.transfert && $scope.filters.states.days && $scope.filters.states.rpw && $scope.filters.states.languages && $scope.filters.states.realm && $scope.filters.states.realmZones && $scope.filters.states.sort && $scope.filters.states.progress) {
                // && $scope.filters.states.timezone
                $scope.characters=[];

                getCharacterAds();
            }
        },true);

        $scope.resetFilters = function(){
            $state.go($state.current,null,{reload:true,inherit: false});
        };

        $scope.getMoreCharacters = function(){
            if (($scope.$parent && $scope.$parent.loading) || $scope.loading) {
                return;
            }
            getCharacterAds();
        };

        function getCharacterAds() {
            $scope.loading = true;

            var params = {lfg: true, view: "detailed",number:7};

            if ($scope.characters.length > 0) {

                if($scope.filters.sort == "progress"){
                    if ($scope.characters[$scope.characters.length-1].progress) {
                        params.last = $scope.characters[$scope.characters.length - 1]._id + "." + $scope.characters[$scope.characters.length-1].progress[Object.keys($scope.characters[$scope.characters.length-1].progress)[0]].score;
                    } else {
                        params.last = $scope.characters[$scope.characters.length - 1]._id + ".0";
                    }
                }
                if($scope.filters.sort == "ilevel"){
                    if ($scope.characters[$scope.characters.length-1].wowProgress) {
                        params.last = $scope.characters[$scope.characters.length - 1]._id + "." + $scope.characters[$scope.characters.length-1].bnet.items.averageItemLevelEquipped;
                    } else {
                        params.last = $scope.characters[$scope.characters.length - 1]._id + ".0";
                    }
                }
                else {
                    params.last = $scope.characters[$scope.characters.length - 1]._id + "." + $scope.characters[$scope.characters.length - 1].ad.updated;
                }
            }

            angular.extend(params, $scope.filters);
            delete params.states;

            characters.query(params, function (characters) {
                $scope.$parent.loading = false;
                $scope.loading = false;

                $scope.characters = $scope.characters.concat(characters);

            });
        }
    }
})();