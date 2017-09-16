var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


    // Automatically Refreshes everytime Add Contact button is pressed
    var refresh = function() {
        $http.get('/contactList').then(function(response) {
            console.log("data receieved");
            $scope.contactList = response.data;
            // Clear input box after entered 
            // $scope.contact = "";
        });
    };
    // Calling Refresh function 
    refresh();

    $scope.addContact = function() {
        console.log($scope.contact)
        $http.post("/contactList", $scope.contact).then(function(response) {
            console.log(response);
            refresh();
        })
    };

    $scope.remove = function(id) {
    	console.log(id);
        $http.delete('/contactList/' + id).then(function(response) {
            refresh();
        })

    }


}]);



//------SPORT ARRAY-----------

//     $scope.sports = ['Golf',
// 'Tennis',
// 'Cricket',
// 'Basketball',
// 'Baseball',
// 'American Football',
// 'Aquatics',
// 'Archery',
// 'Automobile Racing',
// 'Badminton',
// 'Beach Volleyball',
// 'Bobsleigh',
// 'Body Building',
// 'Boxing',
// 'Cross Country Running',
// 'Cross Country Skiing',
// 'Curling',
// 'Cycling',
// 'Darts',
// 'Decathlon',
// 'Down Hill Skiing',
// 'Equestrianism',
// 'eSports',
// 'Fencing',
// 'Field Hockey',
// 'Figure Skating',
// 'Gymnastics',
// 'Ice Hockey',
// 'Martial Arts',
// 'Mixed Martial Arts',
// 'Modern Pentathlon',
// 'Motorcycle Racing',
// 'Netball',
// 'Polo',
// 'Racquetball',
// 'Rowing',
// 'Rugby',
// 'Sailing',
// 'Softball',
// 'Shooting',
// 'Skateboarding',
// 'Skeet Shooting',
// 'Skeleton',
// 'Snow Boarding',
// 'Soccer (Football)',
// 'Squash',
// 'Surfing',
// 'Swimming',
// 'Track and Field'];
