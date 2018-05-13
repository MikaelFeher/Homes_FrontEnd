const app = angular.module('HomesApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'homes.html',
        controller: 'HomesCtrl'
    })
    .when('/homes/:id', {
        templateUrl: 'house.html',
        controller: 'HouseCtrl'
    })
    .otherwise({redirectTo: '/'});
}])

app.controller('HomesCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {
    // Get all houses from API...
    let getAllHomes = function () {
        $http.get('//localhost:3000/homes')
            .then(function (data) {
                $scope.homes = data.data;
            }
        )
    };

    // Get the data for initial page load...
    getAllHomes();

    // Get data every 3 seconds...
    $interval(getAllHomes, 3000);

    // Get house id for the clicked house and redirect to that house view...
    $scope.getHouseById = function(houseId) {
        $location.url(`/homes/${houseId}`)
    }
}]);

app.controller('HouseCtrl', ['$scope', '$http', '$routeParams', '$interval',  function($scope, $http, $routeParams, $interval) {
    $scope.houseId = $routeParams.id;

    // Get 1 house from API
    let getHouse = function() {
        $http.get(`//localhost:3000/homes/${$scope.houseId}/data`)
            .then(function (data) {
                $scope.house = data.data == 'Data does not exist' ? null : data.data;
            }
        )
    }

    // Get the data for initial page load...
    getHouse();

    // Get data every 3 seconds...
    $interval(getHouse, 3000);
}]);