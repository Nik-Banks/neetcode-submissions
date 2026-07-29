class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # This is just a check duplicates for rows, colums, and boxes

        # Rows
        for i in range(9):
            s = set()
            for j in range(9):
                if board[i][j] in s:
                    return False
                elif board[i][j] != ".":
                    s.add(board[i][j])
        
        # Columns
        for i in range(9):
            s = set()
            for j in range(9):
                if board[j][i] in s:
                    return False
                elif board[j][i] != ".":
                    s.add(board[j][i])

        # Boxes
        starts = [(0,0), (0,3), (0,6), 
                (3,0), (3,3), (3,6),
                (6,0), (6,3), (6,6)]
        for i, j in starts:
            s = set()
            for row in range(i, i+3):
                for col in range(j, j+3):
                    ting = board[row][col]
                    if ting in s:
                        return False
                    elif ting != '.':
                        s.add(ting)
        
        return True
