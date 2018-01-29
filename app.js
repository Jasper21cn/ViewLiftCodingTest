var testApp = angular.module('testApp', []);
testApp.controller('mainCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://www.snagfilms.com/apis/films.json?limit=10'
        }).then(function success(response) {
            $scope.filmData = [];
            angular.forEach(response.data.films.film, function (value, key) {
                $scope.filmData.push(value);
            });
            console.log($scope.filmData);
        }, function error(response) {
            console.log(response.statusText);
        });
    }
]);