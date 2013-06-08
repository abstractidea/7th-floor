(function (window) {

	function Block() {
		this.initialize();
	}

	var p = Cursor.prototype = new createjs.Container();

// public properties:
	Cursor.BLOCK_WIDTH = 32;
	Cursor.BLOCK_HEIGHT = 32;

// public properties:
	p.cursorBody;
	p.color;
	p.row = 0;
	p.col = 0;

// constructor:
	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	p.initialize = function () {
		this.Container_initialize();

		this.cursorBody = new createjs.Shape();
		this.addChild(this.cursorBody);
		this.color = "#ff0000";
		this.row = 0;
		this.col = 0;

		this.makeShape();
	}

// public methods:
	p.makeShape = function () {
		//draw square outline for body
		var g = this.cursorBody.graphics;
		g.clear();
		g.beginStroke("#123019");
		g.setStrokeStyle(1.5);
		g.moveTo(0, 0);	//top-left
		g.lineTo(Cursor.BLOCK_WIDTH, 0);	//top-right
		g.lineTo(Cursor.BLOCK_WIDTH, Cursor.BLOCK_HEIGHT);	//bottom-right
		g.lineTo(0, Cursor.BLOCK_HEIGHT);	//bottom-left
		g.closePath(); //top-left
	}

	p.tick = function (event) {
		//tick event
				
	}

	p.setLeftPosition = function (col, row) {
		this.col = col;
		this.row = row;
		this.x = col * Cursor.BLOCK_WIDTH;
		this.y = (Grid.HEIGHT - row - 1) * Cursor.BLOCK_HEIGHT;
	}
	
	window.Cursor = Cursor;

}(window));