(function (window) {

	function Block() {
		this.initialize();
	}

	var p = Block.prototype = new createjs.Container();

// public properties:
	Block.WIDTH;
	Block.HEIGHT;

// public properties:
	p.color;

// constructor:
	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	p.initialize = function () {
		this.Container_initialize();

		this.blockBody = new createjs.Shape();

		this.addChild(this.blockBody);

		this.makeShape();
		
	}

// public methods:
	p.makeShape = function () {
		//draw square outline for body
		var g = this.shipBody.graphics;
		g.clear();
		g.beginStroke("#FFFFFF");

		g.moveTo(0, 0);	//top-left
		g.lineTo(Block.WIDTH, 0);	//top-right
		g.lineTo(Block.WIDTH, Block.HEIGHT);	//bottom-right
		g.lineTo(0, Block.HEIGHT);	//bottom-left
		g.closePath(); //top-left

	}

	p.tick = function (event) {
		//tick event
				
	}

	window.Block = Block;

}(window));