/**
 * Created by jamesu on 1/7/15.
 */
(function(){
    var app = angular.module("githubViewer");

    var RepositoryController = function($scope, github, $routeParams){

        var username = $routeParams.username;
        var repoName = $routeParams.repoName;

        var onComplete = function(data){
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = "Could not fetch the data.";
        };


        github.getRepositoryDetails(username, repoName).then(onComplete, onError);

    };

    app.controller("RepositoryController", ["$scope", "github", "$routeParams", RepositoryController]);
}());