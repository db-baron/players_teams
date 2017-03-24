// Establish routes so index.html can render the partial views inside it.
app.config(function($routeProvider){
   $routeProvider
      .when("/players", {
         // We set the location of the static folder in server.js so only
         // have to define the path of the partial htmls within static
         templateUrl: "static/partials/players.html"
      })
      .when("/teams", {
         templateUrl: "static/partials/teams.html"
      })
      .when("/associations", {
         templateUrl: "static/partials/associations.html"
      })
      .otherwise({
         redirectTo: "/players"
      })
})
