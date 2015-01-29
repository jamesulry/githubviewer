/**
 * Created by jamesu on 1/6/15.
 */
(function(){

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location){

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if ($scope.countdown < 1){
                search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        var search = function(username){
            if (countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

            $location.path("/user/" + username);
        };

        $scope.username = "angular";
        $scope.search = search;
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainController", ["$scope", "$interval", "$location", MainController]);
}());
