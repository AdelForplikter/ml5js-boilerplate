// basic example with webcam and MobileNet. Delete everything in this file for a fresh start
let video;
let mobilenet;
let label = '';

function modelLoaded() {
	console.log('Model Loaded');
	mobilenet.classify(gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		label = results[0].label;

		//mobilenet.classify(gotResults); // uncoment this for classify-loop
	}
}
function videoReady() {
	console.log('Video Loaded');
}
function setup(){
	createCanvas(1280, 820);
	background(0);
	video = createCapture(VIDEO, videoReady);
	video.hide();
	console.log('Waiting for results...');
	mobilenet = ml5.imageClassifier('MobileNet', video, modelLoaded);
}

function draw(){
	image(video, 0, 0);
	fill(255);
	textSize(32)
	text(label, 40, height-40);
}
