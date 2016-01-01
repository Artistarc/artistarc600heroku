
myApp.controller('userProfileCtrl', ['$scope', '$location', '$routeParams', 'Api', function($scope, $location, $routeParams, Api){

    
    $scope.currentuser = {};
    $scope.cuser = {};
    $scope.userName = $routeParams.userName;
    
  Api.User.get({id: $scope.userName }, function(data){
        $scope.currentuser = data;
        console.log('Active User (data)');
        console.log($scope.currentuser);
        
    });
    
    
        Api.Notify.save({type: 'posted', sid: 'testuser', tid: 'testarget', notf: 'na'}, function(){
            console.log('notfcreate() !done');
        });
        
    console.log('usercontroller!');
      
    
    $scope.updateinfo = function(){
        Api.User.save({id: $scope.userName }, $scope.cuser,
        function(){
            console.log('updated');
        });
    };
}]);