myApp.controller('troupeProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.userName = $routeParams.userName;
    $scope.usertroupe = {};
    $scope.varTroupe = {};
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.UserTroupe.get({id: $scope.userName }, function(data){
        $scope.usertroupe = data;
        console.log('Troupe (data)');
        console.log(data);
        console.log($scope.usertroupe);
        console.log($scope.usertroupe.name);
        console.log($scope.usertroupe.name);
    });
    
    $scope.updateTinfo = function(){
        Api.UserTroupe.save({id: $scope.userName }, $scope.varTroupe,
        function(){
            console.log('updated');
        });
    };
}]);

myApp.controller('searchTMemberCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.formSearchM = {};
    $scope.searchUser = {};
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    $scope.searchMembr = function(searchqrry){
        if(searchqrry){
            Api.SearchObj.save({target: 'user', id: searchqrry}, function(data){
                console.log('searcing(user) !found');
                console.log(data);
                if(data)
                    $scope.searchUser = data;
            });
        }
    };

    $scope.addMembr = function(index){
        console.log('user index: '+index);
        console.log($scope.searchUser[index]);
        
        Api.UserTroupeAddUsr.save({id: $routeParams.userName}, $scope.searchUser[index], 
            function(data){
                //$scope.searchUser.push(data);
            },
            function(err){
                bootbox.alert('Error: ' + err);
            });
    };

}]);