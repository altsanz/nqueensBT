var maxRows = 8,
	maxColumns = 8,
	board = [],
	solutions = [];


function initBacktracking(size) {
	solutions = [];	// solutions arrays has to be reinitialized.
	maxRows = size;
	maxColumns = size;
	backtracking(1, board);
}

// Start with backtracking(1, board);

function backtracking(level, list) {
	var childs = getChilds(),
		child = -1;
	for(child in childs) {
		//console.log("Child: [" + child + ", " + (level - 1) + "]");
		list.push(child);
		if(childIsValid(list, level)) {
			if(isSolution(list, level)) {
				console.log("SOLUTION FOUND: " + list);
				solutions.push(list.toString());
			} else {
				backtracking(level + 1, list);
			}
		}
		list.pop();
	}
}

function childIsValid(list, level) {
	var valid = true,
		i = 0;

	//console.log("Checking list = [" + list.toString() + "] is valid for level " + level);
	while(valid && i < level) {
		if((level - 1) !== i) {
			if(list[level - 1] === list[i] || Math.abs((level - 1) - i) === Math.abs(list[level - 1] - list[i])) {
				valid = false;
			}
		}

		i++;
	}
	//console.log("Child [" + list[level-1] + "] is valid=" + valid);
	return valid;
}


function getChilds() {
	var listChilds = [];
	for(var i = 0; i < maxColumns; i++) {
		listChilds.push(i);
	}
	return listChilds;
}

/**
 * Checks if the solution array parameter is really a solution
 * @param solution An array which contains pairs where queens'll be located
 * @return true If it's a valid solution
 */

function isSolution(possibleSolution, level) {
	var valid = true,
		i = 0,
		j = 0;

	if(level !== (maxRows)) {
		return false;
	} else {
		while(valid && i < maxColumns) {
			while(valid && j < maxRows) {
				if(i !== j) {
					if(possibleSolution[i] === possibleSolution[j] || Math.abs(possibleSolution[i] - possibleSolution[j]) === Math.abs(i - j)) {
						return false;
					}
				}
				j++;
			}
			i++;
		}
		return true;
	}
}