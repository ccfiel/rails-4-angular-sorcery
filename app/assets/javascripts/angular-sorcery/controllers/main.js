//
angular.module('angularDevise.controllers').controller('MainController', ['$scope', '$location', '$cookieStore', 'Session', function($scope, $location, $cookieStore, Session) {

  $scope.session_resource = Session;

}]);