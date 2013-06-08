YUI({ useBrowserConsole: true }).use('test', function (Y) {
	var swapCase = new Y.Test.Case({

		name: "Swapping Test",

		//---------------------------------------------
		// Setup and tear down
		//---------------------------------------------

		setUp : function () {
			this.grid = new Grid();
			this.grid.createBlock(0,0,1);
			this.grid.createBlock(1,0,1);
		},

		tearDown : function () {
			//delete this.grid;
		},

		//---------------------------------------------
		// Tests
		//---------------------------------------------

		testSwap : function () {
			var block1 = this.grid.getBlock(0,0);
			var block2 = this.grid.getBlock(1,0);
			this.grid.swapBlocks(0,0);
			Y.Assert.areEqual(block1, this.grid.getBlock(1,0), "Swapped correctly");
			Y.Assert.areEqual(block2, this.grid.getBlock(0,0), "Swapped correctly");
		}

	});
	Y.Test.Runner.add(swapCase);
	Y.Test.Runner.run();
});