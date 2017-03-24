// Inject your factories by making them parameters to associationsController.
// Then, associationsController will have access to the methods of your factories
myAppModule.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
    // Intialize $scope variables that will be used in your html
    $scope.players =[];
    $scope.teams =[];

    // Call the getTeams method from TeamFactory.
    TeamFactory.getTeams(function(teams){
       $scope.teams = teams;
    })

    // Call the getPlayers method from PlayerFactory. Note that getPlayers uses a callback function
    // to make sure that PlayerFactory is loaded before the variable $scope.player is given a value
    PlayerFactory.getPlayers(function(players){
       $scope.player = players;
    })

    // We need to use $index to remove a player.
    $scope.removePlayer = function($index){
       PlayerFactory.removePlayer($index);  // Pass $index to the PlayerFactory method removePlayer
    }

    // Same goes for teams
    $scope.removeTeam = function($index){
       TeamFactory.removeTeam($index);  // Pass $index to the TeamFactory method removeTeam
    }
})
