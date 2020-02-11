// author(s):  Patrice-Morgan Ongoly
// version: 0.2.2
// last modified: Monday, July 2, 2018 12:32 EST
// description:

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
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
        './media/model',    /* 9 */
        './uploads',        /* 10 */
        './drafts/docs',       /* 11 */
        './media/upload',       /* 12 */
        './media/room',         /* 13 */
        './media/img/bg',       /* 14 */
        './media/room/media/model', /* 15 */
        './board/',             /* 16 */
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

app.get('/link', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    console.log("linking interactive experiences");

    res.render('earthplusmoon.html',{root: dir[0]});
});

app.get('/test', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    console.log("linking interactive experiences");

    res.render('test.html',{root: dir[0]});
});

app.get("/admin", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("admin page");

    res.render("admin.html", {root: dir[0]});
});

app.get("/demos", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos.html", {root: dir[0]});
});

app.get("/demos/a/house", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demo_a_house.html", {root: dir[0]});
});

app.get("/demos/a/deliver", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos_a_deliver.html", {root: dir[0]});
});

app.get("/demos/c/solAR", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos_c_solAR.html", {root: dir[0]});
});

app.get("/demos/c/weAR", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos_c_weAR.html", {root: dir[0]});
});

app.get("/demos/c/keyboARd", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos_c_keyboARd.html", {root: dir[0]});
});

app.get("/demos/c/viewXR", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos_c_viewXR.html", {root: dir[0]});
});

app.get("/demos", function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());

    console.log("demos page");

    res.render("demos.html", {root: dir[0]});
});

app.get("/objectsubject/:objsubj_id", function(req, res){
    var objsubj_id = "objsubj_"+req.params.objsubj_id+".html";
    res.render(objsubj_id, {root: dir[0]});
});

app.get("/checkout/card", function(req, res){
  var result = new WhichBrowser(req.headers);
  console.log(result.toString());

  console.log("cARd checkout page");

  res.render("checkout_card.html", {root: dir[0]});
});

app.get("/checkout/aria", function(req, res){
  var result = new WhichBrowser(req.headers);
  console.log(result.toString());

  console.log("ARia checkout page");

  res.render("checkout_aria.html", {root: dir[0]});
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

app.get('/uploads/:upload_id', function(req, res){
    var upload_id = req.params.upload_id;
    res.sendFile(upload_id, {root: dir[10]});
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
