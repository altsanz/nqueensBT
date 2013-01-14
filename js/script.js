var MYAPP = (function() {
	var randomSolution;
	

	backtracking(1, board);
	var MYAPP = {
		showAnotherResult: function() {
			var table = document.getElementById("9queens");
			randomSolution = solutions[parseInt(Math.random() * solutions.length, 10)];
			arraySolution = randomSolution.split(",");
			for(var i = 1; i < table.rows.length; i++) {
				table.rows[i].cells[parseInt(arraySolution[i - 1], 10) + 1].innerHTML = "<img src=\"./img/tux.png\" />";
			}
		}
	};
	MYAPP.showAnotherResult();
	return MYAPP;


}());