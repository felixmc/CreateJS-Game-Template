$(document).ready(function() {
	var canvas = document.getElementById('canvas');
	var stage = new createjs.Stage(canvas);
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", function() {
	
		stage.update();
	});
});