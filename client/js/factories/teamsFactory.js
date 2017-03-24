myAppModule.factory("TeamFactory", function(){
   // Hard code a list of teams (normally MongoDB handles this)
   var teams = [
      {name:"Wolverines"},
      {name:"Buckeyes"},
   ];
   var factory = {};

   // A factory runs at least one controller.

   // Make a function for getting your team list. The function uses a callback to show teams
   factory.getTeams = function(callback){callback(teams);}

   // Make a function, addTeam that pushes a new team to the teams array
   factory.addTeam = function(team){
      teams.push(team);
   }

   // Make a function, removeTeam, that uses splice and the service $index to
   // remove a specified team from the team list
   factory.removeTeam = function($index){
      teams.splice(teams.indexOf($index), 1);
   }
   // Because your controllers will load this factory and need access to it's methods
   return factory;
})
