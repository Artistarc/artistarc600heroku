//angular.module('myApp', ['ngResource']);

var myApp = angular.module('myApp', [
	'ngRoute',
    'ngResource',
    'ngAnimate',
    'ui.calendar',
    'chart.js']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/page1', {templateUrl: 'partials/page1.ejs', controller: 'page1Controller'});
        
		$routeProvider.when('/page2', {templateUrl: 'partials/page2.ejs'});
        
        $routeProvider.when('/', {templateUrl: 'partials/test.ejs', controller: 'testController'});
        
        $routeProvider.when('/user/:userName', {templateUrl: 'partials/user.ejs', controller: 'userProfileCtrl'});
        
        $routeProvider.when('/vendor/:userName', {templateUrl: 'partials/vendor.ejs', controller: 'vendorProfileCtrl'});
        
        $routeProvider.when('/sprovider/:userName', {templateUrl: 'partials/sprovider.ejs', controller: 'sproviderProfileCtrl'});
        
        $routeProvider.when('/troupe/:userName', {templateUrl: '../partials/troupe.ejs', controller: 'troupeProfileCtrl'});
       
        $routeProvider.when('/project/:userName', {templateUrl: '../partials/project.ejs', controller: 'projectProfileCtrl'});
        
        $routeProvider.when('/troupe', {templateUrl: 'partials/troupelist.ejs', controller: 'aboutController'});
        
        $routeProvider.when('/project', {templateUrl: 'partials/projectlist.ejs', controller: 'projectListCtrl'});
        
        $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.ejs', controller: 'galleryController'});
        
        $routeProvider.when('/contacts', {templateUrl: 'partials/contacts.ejs', controller: 'galleryController'});
        
        $routeProvider.when('/calendar', {templateUrl: 'partials/calendar.ejs', controller: 'calendarController'});
        
        $routeProvider.when('/task', {templateUrl: 'partials/task.ejs', controller: 'galleryController'});
        
        $routeProvider.when('/messages', {templateUrl: 'partials/messages.ejs', controller: 'galleryController'});
        
        $routeProvider.when('/edit', {templateUrl: 'partials/edit.ejs', controller: 'aboutController'});
        
        $routeProvider.when('/analytics', {templateUrl: 'partials/analytics.ejs', controller: 'analyticsController'});
        
		$routeProvider.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}])

    .filter('startFrom', function(){
        return function(data, start){
            return data.slice(start);
        };
    });
