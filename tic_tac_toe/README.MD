Challenge name: Find Winner on a Tic Tac Toe Game

Description: Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
In this Tic-Tac-Toe challenge, you are given a 3 x 3 grid representing the game board. Two players, A and B, take turns placing their respective characters ('X' and 'O') into empty squares of the grid.

The game continues until there are three of the same characters in a row, column, or diagonal, resulting in a win for the player with the matching characters.

If all squares are filled without any player achieving a winning combination, the game ends in a draw.

Additionally, if there are still empty squares on the grid and no winner has been determined, the game is considered to be ongoing (pending).
You can assume that 'moves' array is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

Constraints:

 1 <= moves.length <= 9
 moves[i].length == 2
 0 <= row[i], col[i] <= 2
 There are no repeated elements on 'moves'.
 'moves' follow the rules of tic tac toe.

Your task is to implement a function/method that takes the 3 x 3 array as input and returns the winner of the game (A or B) if there is one, or "Draw" if the game ends in a draw, or "Pending" if the game is still ongoing.

Your implementation should also include the necessary unit test cases to verify the correctness of your solution.

- Example 1:
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.

- Example 2:
Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: "B"
Explanation: B wins.

- Example 3:
Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: "Draw"
Explanation: The game ends in a draw since there are no moves to make.