myApp.controller('vendorProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.userName = $routeParams.userName;
     
    $scope.currentuser = {};
    $scope.cuser = {};
    
  Api.User.get({id: $scope.userName }, function(data){
        $scope.currentuser = data;
        console.log('Active vendor (data)');
        console.log($scope.currentuser);
        
    });
    
    $scope.updateVinfo = function(){
        Api.User.save({id: $scope.userName }, $scope.cuser,
        function(){
            console.log('updated');
        });
    };
}]);