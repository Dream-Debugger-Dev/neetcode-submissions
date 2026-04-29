class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # check all rows
        for i in range(9):
            if not self.is_valid_group(board[i]):
                return False
        
        # Check all columns
        for j in range(9):
            column = [board[i][j] for i in range(9)]
            if not self.is_valid_group(column):
                return False
        
        # Check all 3x3 boxes
        for box_row in range(3):
            for box_col in range(3):
                box = []
                for i in range(3):
                    for j in range(3):
                        box.append(board[box_row * 3 + i][box_col * 3 + j])
                if not self.is_valid_group(box):
                    return False
        
        return True

    def is_valid_group(self, group):
        """Helper function to check if a group has no duplicates"""
        seen = set()
        for num in group:
            if num != '.' and num in seen:
                return False # Found duplicate!
            if num != '.':
                seen.add(num)
        return True

        