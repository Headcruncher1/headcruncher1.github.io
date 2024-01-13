resume()
resume()
resume()
resume()
resume()
resume()
play()
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zombielator.com_atlas_1", frames: [[0,289,858,155],[0,0,1917,287]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap3 = function() {
	this.initialize(ss["zombielator.com_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["zombielator.com_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjnC0QgJgGgFgWQgLg4gEhnQgCgsAQgRQAKgLAfgIIBIgSQA3gPAZgEIAigGQAUgEANgDQAZgGArgPIA5gTQAVgHAKADQATAFALAiIATA7QAIAhAHAjIAGAoQAFAXAGARIAJAWQADANgFAJQgFAMgQAEQgLADgTgBQhbgDhxARQhFALiFAdQgJACgHAAQgKAAgGgDg");
	this.shape.setTransform(36.8236,45.4887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AicMjQgngLgggaQgggagTgkQgPgdgPhBIg1jlQgGAEgIgCQgHgDgFgGQgGgIgCgUIgMiEQgPiwgDhWQgDiSAThzQAYiJA8hwQBDh7BnhJQBAgtA5gHQAugGAwASQAtARAmAhQAyAtApBMIAEAEIAEAFQAFAIAEAOIAFAaIAGAAQA3B6AXCHQAHApAJBTIAsGnQAHADAEAIQAEAIgBAHQgDAMgNAHIgFACQAFADAIABIANCCQAGA0ABAdQABAtgIAkQgIAjgUApQgNAZgcAuQgXAlgRANQgYATgjgBQggAAgdgQQgtgagnhCQhFhygRiDQADCOgkCEQgMAsgRASQgUAWghAFQgKACgMAAQgTAAgUgFgABRoTIg5ATQgqAPgZAGQgNADgVAEIgiAGQgZAEg3APIhIASQgfAIgKALQgQARACAsQAEBoALA4QAFAWAJAGQALAGAVgFQCFgdBGgLQBwgRBbADQATABALgDQAQgEAFgMQAFgJgDgNIgJgWQgGgRgFgXIgGgpQgHgjgIghIgTg7QgLgigTgFIgHgBQgJAAgPAFg");
	this.shape_1.setTransform(42.6039,80.8532);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AARHLQgIgBgFgDIAFgCQAOgHACgMQACgHgEgIQgEgIgHgDIgsmnQgJhTgHgpQgWiHg4h6IgFAAIgGgaQgDgOgFgIQAIgDALgCQAfgHAdgCQAfgCAPAIQARAIAKAXQAFAKALAhQAGARAMAcIATAsQAOAjAJAuQAHAeAHA3QALBNALBpQAEAoAEAUIAOA6QAGAjgBA4QgCBIABASQACAXgBAKQgCATgKAKQgJALgZAHQgdAJggAJQgLADgIAAIgDAAg");
	this.shape_2.setTransform(81.47,63.8571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,96.1,161.7), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOCPIAAkdIEdAAIAAEdg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-14.2,-14.2,28.5,28.5), null);


(lib.SUS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_40 = function() {
		/* Stop at This Frame
		The Animate timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mogussus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
		
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance = new lib.SUS();
	this.instance.setTransform(-224,-233.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(108.6,80.9,1,1,0,0,0,48.1,80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:48,x:104.05,y:80.7},0).wait(1).to({x:99.65,y:80.45},0).wait(1).to({x:95.25,y:80.2},0).wait(1).to({x:90.8,y:79.95},0).wait(1).to({x:86.4,y:79.7},0).wait(1).to({x:82,y:79.5},0).wait(1).to({x:77.55,y:79.25},0).wait(1).to({x:73.15,y:79},0).wait(1).to({x:68.75,y:78.75},0).wait(1).to({x:64.3,y:78.5},0).wait(1).to({x:59.9,y:78.25},0).wait(1).to({x:55.5,y:78.05},0).wait(1).to({x:51.05,y:77.8},0).wait(1).to({x:46.7,y:77.55},0).wait(1).to({x:42.3,y:77.3},0).wait(1).to({x:37.9,y:77.05},0).wait(1).to({x:33.45,y:76.8},0).wait(1).to({x:29.05,y:76.6},0).wait(1).to({x:24.65,y:76.35},0).wait(1).to({x:20.2,y:76.1},0).wait(1).to({x:15.8,y:75.85},0).wait(1).to({x:11.4,y:75.6},0).wait(1).to({x:6.95,y:75.35},0).wait(1).to({x:2.55,y:75.15},0).wait(1).to({x:-1.85,y:74.9},0).wait(1).to({x:-6.3,y:74.65},0).wait(1).to({x:-10.7,y:74.4},0).wait(1).to({x:-15.1,y:74.15},0).wait(1).to({x:-19.55,y:73.9},0).wait(1));

	// Layer_2
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(14.25,142.55);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-7,224.1,168.7);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.mogussus();
	this.instance.setTransform(2012.35,928.5,1.875,1.875,0,0,0,78.4,80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(311.35,42,1.4911,1.2834,-0.7732);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Bitmap5();
	this.instance_2.setTransform(-363,0,1.875,1.875);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(597,540,2634.4,540);
// library properties:
lib.properties = {
	id: '13692DA521E353469E607AF968E58D1D',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zombielator.com_atlas_1.png", id:"zombielator.com_atlas_1"},
		{src:"sounds/testsound.mp3", id:"testsound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['13692DA521E353469E607AF968E58D1D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;