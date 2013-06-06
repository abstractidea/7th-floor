(function (window) {

	function Grid() {
		this.initialize();
	}

	var p = Grid.prototype = new createjs.Container();

// public properties:
	Grid.WIDTH = 7;
	Grid.HEIGHT = 14;

// public properties:
	p.color;
	p.gridBody;

// constructor:
	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	p.initialize = function () {
		this.Container_initialize();

		this.gridBody = new createjs.Shape();
		this.color = "#0066cc";

		this.addChild(this.gridBody);

		this.makeShape();
		
	}

// public methods:
	p.makeShape = function () {
		//draw square outline for body
		var g = this.gridBody.graphics;
		g.clear();
		g.beginFill(this.color);

		g.moveTo(0, 0);	//top-left
		g.lineTo(Grid.WIDTH * Block.WIDTH, 0);	//top-right
		g.lineTo(Grid.WIDTH * Block.WIDTH, Grid.HEIGHT * Block.HEIGHT);	//bottom-right
		g.lineTo(0, Grid.HEIGHT * Block.HEIGHT);	//bottom-left
		g.closePath(); //top-left

	}

	p.tick = function (event) {
		//tick event
				
	}

	window.Grid = Grid;

}(window));