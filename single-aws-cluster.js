// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
}
else {
    // author(s):  Patrice-Morgan Ongoly
    // version: 0.3.0
    // last modified: Tuesday, February 11, 2020 00:32 EST
    // description:

    // required modules
    var bodyParser = require('body-parser');
    var express = require('express');
    var WhichBrowser = require('which-browser');
    // main application instance

    var app = express();

    // main application settings

    var config = {
        PORT: process.env.PORT || 8008,
        DIRECTORY: [
            './',           /* 0 */
            './css',        /* 1 */
            './js',         /* 2 */
            './media/texture',  /* 3 */
            './media/gifs', /* 4 */
            './media/pattern', /* 5 */
            './media/img',  /* 6 */
            './media/sounds',   /* 7 */
            './media/vid',    /* 8 */
        ]
    };

    var deviceType = 'unknown';
    let dir = config.DIRECTORY;

    app.engine('html', require('ejs').renderFile);

    /*

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    */

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    app.use(express.static('/'));

    app.get('/', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('index.html',{root: dir[0]});
    });

    app.get('/css/:stylesheet_id', function(req, res){
        let stylesheet_id = req.params.stylesheet_id;
        res.sendFile(stylesheet_id, {root: dir[1]});
    });

    app.get('/js/:script_id', function(req, res){
        var script_id = req.params.script_id;
        res.sendFile(script_id, {root: dir[2]});
    });

    app.get('/media/texture/:texture_id', function(req, res){
        var texture_id = req.params.texture_id;
        res.sendFile(texture_id, {root: dir[3]});
    });

    app.get('/media/gifs/:gif_id', function(req, res){
        var gif_id = req.params.gif_id;
        res.sendFile(gif_id, {root: dir[4]});
    });

    app.get('/media/pattern/:pattern_id', function(req, res){
        var pattern_id = req.params.pattern_id;
        res.sendFile(pattern_id+'.patt', {root: dir[5]});
    });

    app.get('/media/img/:img_id', function(req, res){
        var img_id = req.params.img_id;
        res.sendFile(img_id, {root: dir[6]});
    });

    app.get('/media/sounds/:sound_id', function(req, res){
        var sound_id = req.params.sound_id;
        res.sendFile(sound_id, {root: dir[7]});
    });

    app.get('/media/vid/:video_id', function(req, res){
        var video_id = req.params.video_id;
        res.sendFile(video_id, {root: dir[8]});
    });

    app.get('/media/model/:model_id', function(req, res){
        var model_id = req.params.model_id;
        res.sendFile(model_id, {root: dir[9]});
    });

    var io = require('socket.io').listen(app.listen(config.PORT, function(){
        console.log('connecting \n . \n .. \n ... \n .... \n ..... \n ------------------------------------------');
        console.log('    HOUSE OF VENUS, BENEFIT CORPORATION \n COMPANY LANDING PAGE v 0.0.1 ');
        console.log('------------------------------------------');
        console.log(`[0] listening on port ${config.PORT}`);
        console.log('------------------------------------------');

    }));

    io.sockets.on('connection', function(socket){
        console.log('client connected.');
        //var conn = socket;

        // applicationClient sockets


        // client sockets

        socket.on('disconnect', function(){
            console.log(`socket ${socket.id} disconnected.`);
        });
    });
}//
