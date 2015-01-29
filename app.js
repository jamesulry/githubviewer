/**
 * Created by jamesu on 1/6/15.
 */
(function(){
    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", { templateUrl: "main.html", controller: "MainController" })
            .when("/user/:username", { templateUrl: "user.html", controller: "UserController" })
            .when("/repo/:username/:repoName", { templateUrl: "repository.html", controller: "RepositoryController"})
            .otherwise({redirectTo:"/main"});
    });

}());