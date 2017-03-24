// Only create the angular module ONCE PER PROJECT.
// Make myAppModule here because it's the first JS file to be loaded.
var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("PlayerFactory", function(){
   // Hard code a list of players. Normally the factory would connect to a MognoDB database.
   var players = [
      {name:"Johnny Cage", team:"Wolverines"},
      {name:"Blanka", team:"Buckeyes"}
   ];
   // Initialize your factory so you can add methods and parameters to it. OOP style!
   var factory = {};

   // Make a method for getting players. This method will be used by one or more controllers
   factory.getPlayers = function(callback){
      callback(players);
   }

   // Add new player to the list
   factory.addPlayer = function(player){
      player.team = ""; //New players don't belong to a team
      players.push(player);
   }

   //Remove the player from the list
   factory.removePlayer = function($index){
      players.splice($index, 1);
   }

   //Set a player's team name
   factory.addPlayerToTeam = function(data){
      players[data.playerIdx].team = data.team;
   }

   // Keep the player but remove them from a team. Do this by changing the players
   // name to "" (If MongoDB was being used the 'document' would still persist)
   factory.removePlayerFromTeam = function($index){
      players[$index].team = "";
   }
   return factory;
})
