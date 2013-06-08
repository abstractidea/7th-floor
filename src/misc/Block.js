(function (window) {

	function Block() {
		this.initialize();
	}

	var p = Block.prototype = new createjs.Container();

// public properties:
	Block.WIDTH = 32;
	Block.HEIGHT = 32;

// public properties:
	p.color;
	p.blockBody;
	p.type;
	p.state;
	p.col;
	p.row;

// constructor:
	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	p.initialize = function () {
		this.Container_initialize();

		this.blockBody = new createjs.Shape();
		this.addChild(this.blockBody);
		this.color = "#ff0000";
		this.col = 0;
		this.row = 0;

		this.makeShape();
	}

// public methods:
	p.makeShape = function () {
		//draw square outline for body
		var g = this.blockBody.graphics;
		g.clear();
		g.beginFill(this.color);
		g.beginStroke("#fff");
		g.setStrokeStyle(1.5);
		g.moveTo(0, 0);	//top-left
		g.lineTo(Block.WIDTH, 0);	//top-right
		g.lineTo(Block.WIDTH, Block.HEIGHT);	//bottom-right
		g.lineTo(0, Block.HEIGHT);	//bottom-left
		g.closePath(); //top-left

	}

	p.tick = function (event) {
		//tick event
				
	}

	p.setType = function (blockType) {
		this.type = blockType;
	}
	
	p.getType = function () {
		return this.type;
	}
	
	p.setPosition = function (col, row) {
		this.col = col;
		this.row = row;
		this.x = col * Block.WIDTH;
		this.y = (Grid.HEIGHT - row - 1) * Block.HEIGHT;
	}
	
	window.Block = Block;

}(window));