myApp.controller('testController', ['$scope', '$location', function($scope, $location){
    
    
    console.log('testController!');
    
    
    
    $scope.myInterval = 5000;
    $scope.slides = [{
        image: "images/slide(1).jpg",
        link: "google.com"
    },
    {
        image: "images/slide(2).jpg",
        link: "google.com"
    },
    {
        image: "images/slide(3).jpg",
        link: "google.com"
    },
    {
        image: "images/slide(4).jpg",
        link: "google.com"
    }];
    
    // Line Chart
      $scope.labels = ["January", "February", "March", "April", "May", "June"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55],
        [28, 48, 40, 19, 86, 27]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    //Donut Chart
      $scope.dlabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.ddata = [300, 500, 100];
}]);

myApp.controller('troupeCtrl2', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.troupe = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.animate = true;
    
    $scope.openTrModal = function(){
        console.log('open modal!');
          //$('.ui.modal')
          //.modal()
          //;
          $('.modalT')
          .modal({
              closable  : true,
              onDeny    : function(){
                window.alert('Wait not yet!');
                return false;
              },
              onApprove : function() {
                window.alert('Approved!');
              }
            })
          .modal('attach events', '.test.button', 'show')
        //.modal('behavior name', argumentOne, argumentTwo)
          ;
    };
    
    console.log('troupeController!');
    
    Api.Troupe.query({}, function(data){
        $scope.troupe = data;
    console.log(data);
    });
    
    $scope.deleteAll = function(){
        Api.Troupe.delete({}, function(data){
            $scope.troupe = [];
        });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this troupe?", function(answer){
            if(answer === true)
                Api.Troupe.delete({id: $scope.troupe[index]._id}, function(data){
                    $scope.troupe.splice(index, 1);
                });
        });
    };
    
    $scope.addToDatabase = function(){
        Api.Troupe.save({}, $scope.form, 
        function(data){
            $scope.troupe.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
    };
}]);


myApp.controller('projectCtrl2', ['$scope', 'Api', function($scope, Api){
    $scope.projectform = {};
    $scope.project = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    
    $scope.openPrModal = function(){
        console.log('open modal!');
          //$('.ui.modal')
          //.modal()
          //;
          $('.modalP')
          .modal({
              closable  : true,
              onDeny    : function(){
                window.alert('Wait not yet!');
                return false;
              },
              onApprove : function() {
                window.alert('Approved!');
              }
            })
          .modal('attach events', '.test.button', 'show')
        //.modal('behavior name', argumentOne, argumentTwo)
          ;
    };
    
    
    Api.Project.query({}, function(data){
        $scope.project = data;
    });
    
    $scope.deleteAll = function(){
        Api.Project.delete({}, function(data){
            $scope.project = [];
        });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this troupe?", function(answer){
            if(answer === true)
                Api.Project.delete({id: $scope.project[index]._id}, function(data){
                    $scope.project.splice(index, 1);
                });
        });
    };
    
    $scope.addToDatabase = function(){
        Api.Project.save({}, $scope.projectform, 
        function(data){
            $scope.project.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
    };
}]);


myApp.controller('troupeController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.troupe = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.animate = true;
    
    console.log('troupeController!');
    
    Api.Troupe.query({}, function(data){
        $scope.troupe = data;
    });
    
    $scope.deleteAll = function(){
        Api.Troupe.delete({}, function(data){
            $scope.troupe = [];
        });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this troupe?", function(answer){
            if(answer === true)
                Api.Troupe.delete({id: $scope.troupe[index]._id}, function(data){
                    $scope.troupe.splice(index, 1);
                });
        });
    };
    
    $scope.addToDatabase = function(){
        Api.Troupe.save({}, $scope.form, 
        function(data){
            $scope.troupe.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
    };
}]);


myApp.controller('projectController', ['$scope', 'Api', function($scope, Api){
    $scope.projectform = {};
    $scope.project = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    Api.Project.query({}, function(data){
        $scope.project = data;
    });
    
    $scope.deleteAll = function(){
        Api.Project.delete({}, function(data){
            $scope.project = [];
        });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this troupe?", function(answer){
            if(answer === true)
                Api.Project.delete({id: $scope.project[index]._id}, function(data){
                    $scope.project.splice(index, 1);
                });
        });
    };
    
    $scope.addToDatabase = function(){
        Api.Project.save({}, $scope.projectform, 
        function(data){
            $scope.project.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
    };
}]);


myApp.controller('postsController', ['$scope', 'Api', function($scope, Api){
    $scope.formPost = {};
    $scope.posts = [];
    $scope.pageSize = 15;
    $scope.currentPage = 1;
    $scope.animate = true;
    $scope.Artistuser = {};
    
    Api.Posts.query({}, function(data){
        $scope.posts = data;
    });
    
    $scope.deleteAll = function(){
        Api.Posts.delete({}, function(data){
            $scope.posts = [];
        });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this posts?", function(answer){
            if(answer === true)
                Api.Posts.delete({id: $scope.posts[index]._id}, function(data){
                    $scope.posts.splice(index, 1);
                });
        });
    };
    
    $scope.addLike = function(index){
        
        Api.Artist.save({}, 
            function(data){
                $scope.Artistuser = data;
                console.log($scope.Artistuser);
                console.log($scope.Artistuser.local.username);
        
                if((($scope.posts[index].meta.likes).indexOf($scope.Artistuser.local.username)) > -1)
                    console.log("Exsist!");
                else console.log("No!");

                Api.Likes.save({id: $scope.posts[index]._id}, function(){
                    console.log('addLike() !done');
                });

        });
    };
    
    $scope.addComment = function(index){
        
    };
    
    $scope.addShare = function(index){
        
    };
    
    $scope.addPostToDatabase = function(){
        Api.Posts.save({}, $scope.formPost, 
        function(data){
            $scope.posts.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
        
        Api.Notify.save({type: 'posted', sid: 'testuser', tid: 'testarget', notf: 'na'}, function(){
            console.log('nitfadd() !done');
        });
        
    };
}]);

myApp.controller('searchController', ['$scope', 'Api', function($scope, Api){
    $scope.formSearch = {};
    $scope.searchUser = {};
    $scope.searchTroupe = {};
    $scope.searchProject = {};
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    $scope.searchVar = function(searchqrry){
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
            Api.SearchObj.save({target: 'project', id: searchqrry}, function(data){
                console.log('searcing(project) !found');
                console.log(data);
                if(data)
                    $scope.searchProject = data;
            });
        }
    };

}]);

myApp.controller('freindsController', ['$scope', 'Api', function($scope, Api){
    $scope.formSearch = {};
    $scope.addrsbook = {};
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    
    Api.UserAddrsbook.query({}, function(data){
        $scope.addrsbook = data;
    });
}]);