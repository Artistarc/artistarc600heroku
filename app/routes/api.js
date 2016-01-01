var Troupe = require('../models/troupe');
var Project = require('../models/project');
var Posts = require('../models/posts');
var User = require('../models/user');
var Vendor = require('../models/vendor');
var Sprovider = require('../models/sprovider');
var Product = require('../models/product');
var Notfstore = require('../models/notfstore');
var NotfGallery = require('../models/notfgallery');
var NotfProject = require('../models/notfproject');
var NotfTroupe = require('../models/notftroupe');
var NotfStream = require('../models/notfstream');
var Notify = require('../models/notify');
var Addrsbook = require('../models/addrsbook');

module.exports = function(router){
    
    /*------------------------------------------------------
    ------------------------ TROUPE ------------------------
    ------------------------------------------------------*/
    router.post('/troupe', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Troupe();
        troupe.name = req.body.troupename;
        troupe.username = req.body.username;
        troupe.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        troupe.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/troupe', function(req, res){
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data)         {
            res.json(data);
        });
    });
    
    router.delete('/troupe', function(req, res){
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/troupe/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/troupe/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/troupe/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            troupe.name = req.body.troupename;
            troupe.username = req.body.username;
            troupe.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------ PROJECTS ----------------------
    ------------------------------------------------------*/
    router.post('/project', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var project = new Project();
        project.name = req.body.projectname;
        project.username = req.body.username;
        project.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        project.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/project', function(req, res){
        Project.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/project', function(req, res){
        Project.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/project/:id', function(req, res){
        Project.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/project/:id', function(req, res){
        Project.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/project/:id', function(req, res){
        Project.findOne({_id: req.params.id}, function(err, data){
            var project = data;
            project.name = req.body.projectname;
            project.username = req.body.username;
            project.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            project.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- POSTS ------------------------
    ------------------------------------------------------*/
    router.post('/posts', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var posts = new Posts();
        posts.body = req.body.postBody;
        posts.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        posts.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/posts', function(req, res){
        Posts.find({}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/posts', function(req, res){
        Posts.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/posts/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/posts/:id', function(req, res){
        Posts.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/posts/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            var posts = data;
            posts.body = req.body.postBody;
            posts.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            posts.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------- USER TROUPE Var --------------------
    ------------------------------------------------------*/
    router.post('/user/troupe', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Troupe();
        troupe.name = req.body.troupename;
        troupe.username = req.body.username;
        troupe.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        troupe.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/user/troupe', function(req, res){
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/user/troupe', function(req, res){
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/troupe/:id', function(req, res){
        console.log('data from server! - req.params.id');
            console.log(req.params.id);
        Troupe.findOne({'username': req.params.id}, function(err, data){
            res.json(data);
            
            console.log('yo isAdmin(troupe)?');
            if(isAdmin(req.user.local.username,data)){
                console.log('Admin!');
            }else
                console.log('Not Admin!');
        })
    });
    
    router.delete('/user/troupe/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    });
    
    router.post('/user/troupe/:id', function(req, res){
        Troupe.findOne({'username': req.params.id}, function(err, data){
            var troupe = data;
            if(req.body.name){
                troupe.name = req.body.fname;
            }
            if(req.body.about){
                troupe.about = req.body.about;
            }
            if(req.body.email){
                troupe.email = req.body.email;
            }
            if(req.body.website){
                troupe.website = req.body.website;
            }
            if(req.body.mobile){
                troupe.mobile = req.body.mobile;
            }
            if(req.body.location){
                troupe.location = req.body.location;
            }
            if(req.body.tags){
                troupe.tags.push((req.body.tags).split(";"));
            }
            
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    router.post('/user/troupe/addusr/:id', function(req, res){
        console.log('addusrapi!');
        console.log(req.body);
        Troupe.findOne({'username': req.params.id}, function(err, data){
            var troupe = data;
            
            troupe.members.push({'name': req.body.fname,'username': req.body.local.username});
                                    
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    
    /*------------------------------------------------------
    ------------------- USER PROJECT Var -------------------
    ------------------------------------------------------*/
    router.post('/user/project', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var project = new Project();
        project.name = req.body.troupename;
        project.username = req.body.username;
        project.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        project.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/user/project', function(req, res){
        Project.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/user/project', function(req, res){
        Project.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/project/:id', function(req, res){
        console.log('data from server! - req.params.id');
            console.log(req.params.id);
        Project.findOne({'username': req.params.id}, function(err, data){
            res.json(data);
            
        })
    });
    
    router.delete('/user/project/:id', function(req, res){
        Project.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    });
    
    router.post('/user/project/:id', function(req, res){
        console.log('wtf is wrong');
        Project.findOne({'username': req.params.id}, function(err, data){
            var project = data;
            
            if(req.body.name){
                project.name = req.body.fname;
            }
            if(req.body.category){
                project.category = req.body.category;
            }
            if(req.body.about){
                project.about = req.body.about;
            }
            if(req.body.email){
                project.email = req.body.email;
            }
            if(req.body.website){
                project.website = req.body.website;
            }
            if(req.body.mobile){
                project.mobile = req.body.mobile;
            }
            if(req.body.location){
                project.location = req.body.location;
            }
            if(req.body.tags){
                project.tags.push((req.body.tags).split(";"));
            }
            
            project.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    router.post('/user/project/addusr/:id', function(req, res){
        console.log('addusrapi!');
        console.log(req.body);
        Project.findOne({'username': req.params.id}, function(err, data){
            var project = data;
            
            project.members.push({'name': req.body.fname,'username': req.body.local.username});
                                    
            project.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    router.post('/user/project/addtrup/:id', function(req, res){
        console.log('addusrapi!');
        console.log(req.body);
        Project.findOne({'username': req.params.id}, function(err, data){
            var project = data;
            
            project.troupes.push({'name': req.body.name,'username': req.body.username});
                                    
            project.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------ VENDOR ------------------------
    -------------------------------------------------------*/
    router.get('/vendor', function(req, res){
        Vendor.findOne({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.post('/vendor/:id', function(req, res){
        console.log('yo vendor');
        Vendor.findOne({'local.author_username': req.user.local.username}, function(err, data){
            
            var vendor = data;
            if(req.body.banner){
                vendor.banner = req.body.banner;
            }
            if(req.body.title){
                vendor.title = req.body.title;
            }
            if(req.body.about){
                vendor.about = req.body.about;
            }
            if(req.body.description){
                vendor.description = req.body.description;
            }
            if(req.body.vcategory){
                vendor.vcategory = req.body.vcategory;
            }
            if(req.body.website){
                vendor.website = req.body.website;
                vendor.social.website = req.body.social.website;
            }
            if(req.body.location){
                vendor.location = req.body.location;
            }
            if(req.body.mobile){
                vendor.mobile = req.body.mobile;
            }
            
            vendor.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ----------------------- SPROVIDER ----------------------
    -------------------------------------------------------*/
    router.get('/sprovider', function(req, res){
        User.findOne({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.post('/sprovider/:id', function(req, res){
        console.log('yo vendor');
        Sprovider.findOne({'local.author_username': req.user.local.username}, function(err, data){
            
            var sprovider = data;
            if(req.body.banner){
                sprovider.banner = req.body.banner;
            }
            if(req.body.title){
                sprovider.title = req.body.title;
            }
            if(req.body.about){
                sprovider.about = req.body.about;
            }
            if(req.body.description){
                sprovider.description = req.body.description;
            }
            if(req.body.vcategory){
                sprovider.vcategory = req.body.vcategory;
            }
            if(req.body.website){
                sprovider.website = req.body.website;
                sprovider.social.website = req.body.social.website;
            }
            if(req.body.location){
                sprovider.location = req.body.location;
            }
            if(req.body.mobile){
                sprovider.mobile = req.body.mobile;
            }
            
            sprovider.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------ PRODUCT ------------------------
    -------------------------------------------------------*/
    router.get('/product/:id', function(req, res){
        Product.findOne({'username': req.params.id}, function(err, data){
            res.json(data);
        });
    });
    
    router.post('/product/:id', function(req, res){
        console.log('yo ba');/*
        Product.findOne({'local.username': req.params.id}, function(err, data){
            
            var product = data;
            if(req.body.fname){
                product.fname = req.body.fname;
            }
            if(req.body.username){
                product.local.username = req.body.username;
            }
            if(req.body.email){
                product.email = req.body.email;
            }
            if(req.body.pursuit.primary){
                product.pursuit.primary = req.body.pursuit.primary;
            }
            if(req.body.pursuit.secondary){
                product.pursuit.secondary = req.body.pursuit.secondary;
            }
            if(req.body.password){
                product.local.password = user.generateHash(req.body.password);
            }
            if(req.body.dob){
                product.meta.dob = req.body.dob;
            }
            if(req.body.about){
                product.about = req.body.about;
            }
            if(req.body.social.website){
                product.social.website = req.body.social.website;
            }
            if(req.body.mobile){
                product.mobile = req.body.mobile;
            }
            if(req.body.gender){
                product.gender = req.body.gender;
            }
            if(req.body.address){
                product.address = req.body.address;
            }
            if(req.body.location.country){
                product.location.country = req.body.location.country;
            }
            if(req.body.location.city){
                product.location.city = req.body.location.city;
            }
            if(req.body.tags){
                product.tags.push((req.body.tags).split(";"));
            }
            
            product.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });*/
    });
    
    /*------------------------------------------------------
    ------------------------- USER -------------------------
    -------------------------------------------------------*/
    router.get('/user', function(req, res){
        User.findOne({'local.username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/user', function(req, res){
        User.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/:id', function(req, res){
        User.findOne({'local.username': req.params.id}, function(err, data){
            res.json(data);
            
            console.log('yo isAdmin(user)?');
            if(isAdmin(req.user.local.username,data)){
                console.log('Admin!');
            }else
                console.log('Not Admin!');
        })
    })
    
    router.delete('/user/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/user/:id', function(req, res){
        console.log('yo ba');
        User.findOne({'local.username': req.params.id}, function(err, data){
            
            var user = data;
            if(req.body.fname){
                user.fname = req.body.fname;
            }
            if(req.body.username){
                user.local.username = req.body.username;
            }
            if(req.body.email){
                user.email = req.body.email;
            }
            if(req.body.pursuit.primary){
                user.pursuit.primary = req.body.pursuit.primary;
            }
            if(req.body.pursuit.secondary){
                user.pursuit.secondary = req.body.pursuit.secondary;
            }
            if(req.body.password){
                user.local.password = user.generateHash(req.body.password);
            }
            if(req.body.dob){
                user.meta.dob = req.body.dob;
            }
            if(req.body.about){
                user.about = req.body.about;
            }
            if(req.body.social.website){
                user.social.website = req.body.social.website;
            }
            if(req.body.mobile){
                user.mobile = req.body.mobile;
            }
            if(req.body.gender){
                user.gender = req.body.gender;
            }
            if(req.body.address){
                user.address = req.body.address;
            }
            if(req.body.location.country){
                user.location.country = req.body.location.country;
            }
            if(req.body.location.city){
                user.location.city = req.body.location.city;
            }
            if(req.body.tags){
                user.tags.push((req.body.tags).split(";"));
            }
            
            user.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------- USER ADDBOOK Var -------------------
    ------------------------------------------------------*/
    router.post('/user/addbook', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var addrsbook = new Addrsbook();
        addrsbook.name = req.body.troupename;
        addrsbook.username = req.body.username;
        addrsbook.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        addrsbook.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/user/addbook', function(req, res){
        Addrsbook.findOne({'local.author_username': req.user.local.username}, function(err, data){/*
            var addrsbook = new Addrsbook();
            addrsbook.local.author_username = req.user.local.username;
            addrsbook.save(function(err){
                if(err)
                    throw err;
            });*/
            res.json(data);
        });
    });
    
    router.delete('/user/addbook', function(req, res){
        Addrsbook.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/addbook/:id', function(req, res){
        //console.log('data from server! - req.params.id');
        //    console.log(req.params.id);
        Addrsbook.findOne({'local.author_username': req.params.id}, function(err, data){
            res.json(data);
            console.log('data from server!');
            console.log(data);
        });
    });
    
    router.delete('/user/addbook/:id', function(req, res){
        Addrsbook.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/user/addbook/:id', function(req, res){
        Addrsbook.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            addrsbook.name = req.body.troupename;
            addrsbook.username = req.body.username;
            addrsbook.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            addrsbook.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- LIKES ------------------------
    ------------------------------------------------------*/
     router.post('/likes/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            var posts = data;
            posts.meta.likes.push(req.user.local.username);
            //posts.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            posts.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- SEACRH ------------------------
    ------------------------------------------------------*/
    
    router.post('/search/:target/:id', function(req, res){
        console.log('#server.js -- Searching( ' + req.params.id + ' )' );
         var chow = req.params.target.toString().trim();
         console.log(chow);
        if(chow === 'user'){
            console.log('yes');
            User.find({'local.username': new RegExp(req.params.id)}, function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        }
        if(chow === 'troupe'){
            console.log('yes');
            Troupe.find({'username': new RegExp(req.params.id)}, function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        }
        if(chow === 'project'){
            console.log('yes');
            Project.find({'username': new RegExp(req.params.id)}, function(err, data){
                if(err)
                    throw err;
                res.json(data);
                console.log(data);
            });
        }
    });
    
    router.post('/search/', function(req, res){
        var data = {"result": "typing..." };
            res.json(JSON.stringify(data));
    });
    
    /*------------------------------------------------------
    ------------------------- USER ------------------------
    ------------------------------------------------------*/
     router.post('/artist/', function(req, res){
        User.findOne({_id: req.user.id}, function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    /*------------------------------------------------------
    --------------------- NOTIFICATIONS --------------------
    ------------------------------------------------------*/
     router.post('/notify/:type/:sid/:tid/:notf', function(req, res){
         
        console.log('api called!');
         /*
        var notfproject = new NotfProject();
        notfproject.local.author_username = req.user.local.username;
        notfproject.local.author_name = req.user.fname;
         console.log(notfproject.local.author_username);
         console.log(notfproject.local.author_name);
         
        var notftroupe = new NotfTroupe();
        notftroupe.local.author_username = req.user.local.username;
        notftroupe.local.author_name = req.user.fname;
         
        var notfgallery = new NotfGallery();
        notfgallery.local.author_username = req.user.local.username;
        notfgallery.local.author_name = req.user.fname;
         
        var notfstream = new NotfStream();
        notfstream.local.author_username = req.user.local.username;
        notfstream.local.author_name = req.user.fname;
         
        notfproject.save(function(err, data){
            if(err)
                throw err;
            console.log(data);
        });
         
        notftroupe.save(function(err, data){
            if(err)
                throw err;
            console.log(data);
        });
         
        notfgallery.save(function(err, data){
            if(err)
                throw err;
            console.log(data);
        });
         
        notfstream.save(function(err, data){
            if(err)
                throw err;
            console.log(data);
        });*/
         res.send('yo');
         console.log('yo');
    });
     
    router.get('/notify/:type/:uder/:notf', function(req, res){
         
        console.log('api called!');
         
        Notfstore.findOne({'local.author_username': req.user.local.username}, function(err, data){
            
            var notfstore = data;
            var notfbody = '';
            
            if(!data){
                console.log('new user notf!');
                notfstore = new Notfstore();
                notfstore.local.author_username = req.user.local.username;
            }
            
            if(req.params.type=='posted'){
                notfbody = ' added a new post'; 
            } 
            if(req.params.type=='tagpost'){
                notfbody = ' tagged you in a post'; 
            }
            if(req.params.type=='likes'){
                notfbody = ' your post'; 
            }
            if(req.params.type=='commented'){
                notfbody = ' commented on the post'; 
            }
            if(req.params.type=='following'){
                notfbody = ' started following you'; 
            }
            if(req.params.type=='artrep'){
                notfbody = ' added you a reputation'; 
            }
            if(req.params.type=='other'){
                notfbody = req.params.notf; 
            }
            /*
            notfstore.notifications = [ req.params.sid, notfbody,' ', ' ', Date.now ];
            */
            notfstore.notifications.push({'subject': req.params.sid,body: notfbody});
            notfstore.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        });
    });
};

var isAdmin = function(username, Object) {
    console.log('yo isAdmin()?');
	if(Object.local.author_username==username){
		return true;
	}if(Object.local.username==username){
		return true;
	}
    else
        return false;
};