class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Create sets to track seen numbers
        let rows = Array(9).fill().map(() => new Set());
        let cols = Array(9).fill().map(() => new Set());
        let boxes = Array(9).fill().map(() => new Set());

        // Check every cell
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j];

                //Skip empty cells
                if (num === '.' ) continue;

                // Calculate which 3x3 box this cell belpng to 
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                //Check if number already exists in row, column, or box
                if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                    return false; // Found duplicate!
                }

                // Add number to sets
                rows[i].add(num);
                cols[j].add(num);
                boxes[boxIndex].add(num);
            }
        }

        return true; // No duplicates found!
    }
}
