myApp.controller('projectProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.userName = $routeParams.userName;
    $scope.userproject = {};
    $scope.varProject = {};
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.UserProject.get({id: $scope.userName }, function(data){
        $scope.userproject = data;
        console.log('Project (data)');
        console.log(data);
        console.log($scope.userproject);
        console.log($scope.userproject.name);
    });
    
    $scope.updatePinfo = function(){
        Api.UserProject.save({id: $scope.userName }, $scope.varProject,
        function(){
            console.log('updated');
        });
    };
}]);

myApp.controller('searchPMemberCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.formSearchM = {};
    $scope.searchUser = {};
    $scope.searchTroupe = {};
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
            Api.SearchObj.save({target: 'troupe', id: searchqrry}, function(data){
                console.log('searcing(troupe) !found');
                console.log(data);
                if(data)
                    $scope.searchTroupe = data;
            });
        }
    };

    $scope.addMembr = function(index){
        console.log('user index: '+index);
        console.log($scope.searchUser[index]);
        
        Api.UserProjAddUsr.save({id: $routeParams.userName}, $scope.searchUser[index], 
            function(data){
                //$scope.searchUser.push(data);
            },
            function(err){
                bootbox.alert('Error: ' + err);
            });
    };

    $scope.addTroupe = function(index){
        console.log('troupe index: '+index);
        
        Api.UserProjAddtrup.save({id: $routeParams.userName}, $scope.searchTroupe[index], 
            function(data){
                //$scope.searchTroupe.push(data);
            },
            function(err){
                bootbox.alert('Error: ' + err);
            });
    };
}]);