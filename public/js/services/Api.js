myApp.factory('Api',['$resource', function($resource){
    return {
        User: 
            $resource('/api/user/:id', {id: '@id'}),
        Vendor: 
            $resource('/api/vendor/:id', {id: '@id'}),
        Sprovider: 
            $resource('/api/sprovider/:id', {id: '@id'}),
        Troupe:
            $resource('/api/troupe/:id', {id: '@id'}),
        Product:
            $resource('/api/product/:id', {id: '@id'}),
        Project: 
            $resource('/api/project/:id', {id: '@id'}),
        UserTroupe: 
            $resource('/api/user/troupe/:id', {id: '@id'}),
        UserProject: 
            $resource('/api/user/project/:id', {id: '@id'}),
        UserTroupeAddUsr: 
            $resource('/api/user/troupe/addusr/:id', {id: '@id'}),
        UserProjAddUsr: 
            $resource('/api/user/project/addusr/:id', {id: '@id'}),
        UserProjAddtrup: 
            $resource('/api/user/project/addtrup/:id', {id: '@id'}),
        Posts: 
            $resource('/api/posts/:id', {id: '@id'}),
        Likes: 
            $resource('/api/likes/:id', {id: '@id'}),
        Artist: 
            $resource('/api/artist/:id', {id: '@id'}),
        SearchObj: 
            $resource('/api/search/:target/:id', {target: '@target', id: '@id'},
                {
                    'save':  {method:'POST', isArray:true},
                }
            ),
        UserAddrsbook: 
            $resource('/api/user/addbook/:id', {id: '@id'}),
        Notify: 
            $resource('/api/notify/:type/:sid/:tid/:notf', {type: '@type', sid: '@sid', tid: '@tid', notf: '@notf'}),
        UserGallery: 
            $resource('/media/user/gallery/:id', {id: '@id'}),
        MediaCreds: 
            $resource('/media/aws/creds/:id', {id: '@id'})
    };
}]);