const app = angular.module("HomesApp", []);

app.controller("HomesCtrl", ['$scope','$http', '$interval', function ($scope, $http, $interval) {
    let getJson = function() {
        $http.get("http://localhost:3000/homes").then(function (data) {
            $scope.homes = data.data;
        })};

    $interval(getJson, 3000);

    // $scope.clickFunc = function () {
    //     alert("Clicked!!!");
    // }
}]);




// const list = document.getElementById("list");
//
// fetch("http://localhost:3000/homes")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//
//         console.log(data);
//
//         for (const house in data) {
//             for (const room in data[house]) {
//                 for (let i = 0; i < data[house][room].length; i++) {
//                     console.log(data[house][room][i]);
//
//                     let listItem = document.createElement('li');
//
//                     listItem.innerHTML = `${house} <ul>
//                         <li>Rum: ${data[house][room][i].name}</li>
//                         <li>Temperatur: ${data[house][room][i].temperature}</li>
//                         <li>Luftfuktighet: ${data[house][room][i].humidity}</li>
//                     </ul>`;
//
//                     console.log('hello')
//
//                     list.appendChild(listItem);
//                 }
//             }
//         }
//     });