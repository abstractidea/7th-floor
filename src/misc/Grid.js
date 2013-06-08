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
	
	// 2d array of blocks
	p.blockGrid;

// constructor:
	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	p.initialize = function () {
		this.Container_initialize();

		this.gridBody = new createjs.Shape();
		this.color = "#0066cc";

		this.addChild(this.gridBody);

		this.makeShape();
		
		this.blockGrid = [];
		for (var i=0;i<Grid.WIDTH;i++) {
			this.blockGrid[i]=[];
		}
		
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
	
	// put a block into the blockGrid at position
	p.createBlock = function (col, row, blockType) {
		block = new Block();
		block.setType(blockType);
		this.blockGrid[col][row] = block;
		block.setPosition(col, row);
		this.addChild(block);
	}
	
	// swap a block with block to the right
	p.swapBlocks = function (col, row) {
		block1 = this.blockGrid[col][row];
		block2 = this.blockGrid[col+1][row];
		
		// TODO send blocks into swapping state
		
		this.setBlockPosition(block1, col+1, row);
        this.setBlockPosition(block2, col, row);
	}
	
	// delete the block in position
	p.deleteBlock = function (col, row) {
		this.blockGrid[col][row] = null;
		//remove block container
	}

	// set the blocks x and y coords based on grid cell
	p.setBlockPosition = function (block, col, row) {
        if (block != null) {
            block.setPosition(col, row);
        }
        this.blockGrid[col][row] = block;
	}
	
	p.tick = function (event) {
		//tick event
				
	}

	window.Grid = Grid;

}(window));