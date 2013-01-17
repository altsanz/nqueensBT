var MYAPP = (function() {
	var randomSolution;
	function generateBoard() {
		var article, table, i, tableHeader, tableHeaderNode, size;
		size = parseInt(document.getElementById('sizeBoard').value, 10);

		function generateHeaderCell(content, scope) {
			var headerCell = document.createElement('th');
			headerCell.setAttribute('scope', scope);
			headerCell.innerHTML = content;
			return headerCell;
		}

		function generateColumnHeaders() {
			var tableRow = document.createElement('tr'),
			i = 0;
			tableRow.appendChild(generateHeaderCell('', 'col'));

			for (i=1; i<size+1; i++) {
				tableRow.appendChild(generateHeaderCell(i, 'col'));
			}
			return tableRow;
		}

		function generateRow(contentHeader) {
			var tableRow = document.createElement('tr'), i = 0;
			// Adds row header
			tableRow.appendChild(generateHeaderCell(contentHeader, 'row'));

			for(i=0; i<size; i++) {
				tableRow.appendChild(document.createElement('td'));
			}

			return tableRow;
		}


		console.log(typeof size);
		table = document.createElement('table');
		table.setAttribute('id', 'nqueens');
		// Generates column header's row:
		table.appendChild(generateColumnHeaders());

		// Generate every row
		for (i=0; i<size; i++) {
			table.appendChild(generateRow(i+1));
			console.log(size);
		}
		article = document.getElementsByTagName('article')[0];
		article.appendChild(table);



	}

	initBacktracking(8);
	return {
		generateBoard: generateBoard,

		showAnotherResult: function() {
			var table = document.getElementById("nqueens"),
			size = parseInt(document.getElementById('sizeBoard').value, 10);
			table.parentNode.removeChild(table);
			MYAPP.generateBoard();
			initBacktracking(size);
			MYAPP.fillTheBoard();
		},

		fillTheBoard: function() {
			var table = document.getElementById("nqueens");
			randomSolution = solutions[parseInt(Math.random() * solutions.length, 10)];
			arraySolution = randomSolution.split(",");
			for(var i = 1; i < table.rows.length; i++) {
				console.log(arraySolution);
				table.rows[i].cells[parseInt(arraySolution[i - 1], 10) + 1].innerHTML = "<img src=\"./img/tux.png\" />";
			}
		}
	};
}());


MYAPP.generateBoard();
MYAPP.showAnotherResult();