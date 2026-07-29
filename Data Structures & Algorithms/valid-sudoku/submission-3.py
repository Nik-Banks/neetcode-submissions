class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # This is just a check duplicates for rows, colums, and boxes

        rows = collections.defaultdict(set)
        cols = collections.defaultdict(set)
        box = collections.defaultdict(set)

        for r in range(9):
            for c in range(9):
                num = board[r][c]
                if num == '.':
                    continue
                elif (num in rows[r]) or (num in cols[c]) or (num in box[(r//3, c//3)]):
                    return False
                else:
                    rows[r].add(num)
                    cols[c].add(num)
                    box[r//3, c//3].add(num)
                
        return True
        
