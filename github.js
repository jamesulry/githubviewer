/**
 * Created by jamesu on 1/6/15.
 */
(function(){

    var github = function($http){

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username).then(function(response){
                return response.data;
            });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url).then(function(response){
               return response.data;
            });
        };

        var getRepositoryDetails = function(username, repoName){
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + repoName;

            return $http.get(repoUrl).then(function(response){
                //repo = response.data;
                //return $http.get(repoUrl + "/collaborators");
                return response.data;
            });
//                .then(function(response){
//                    repo.collaborators = response.data;
//                    return repo;
//               });
        };


        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepositoryDetails: getRepositoryDetails
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);
}());