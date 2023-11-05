# sudoku-qualtrics
Implement a Sudoku puzzle in a Qualtrics survey.

These code and HTML snippets can help implement a Sudoku puzzle inside a Qualtrics survey and record the survey respondent's responses.

## Instructions

1.  Go to the Survey on Qualtrics, and navigate to "Builder" view.
2.  Assuming that the Sudoku question was already created (if not, please create it), update it as follow:

    - In the left panel make sure to set the "Question Type" as "Text/Graphic"
    - "Content Type" can be "Text"
    - Then, click the bottom button "JavaScript", which opens a popup with a text editor. Copy the content of [sudoku.js](./sudoku.js) and paste into it.
    - Finally, click on the question text itself to edit.
    - Switch to HTML view. Copy the content of [sudoku.html](./sudoku.html) and paste into the text editor.
    - You might want to edit the text in the first 3 lines to update the instruction and question.

3.  Now, navigate to the "Survey Flow" tab:

    - Click on the green "Add a New Element Here" button at the bottom of the workflow, select "Embedded Data"
    - Inside this block, create new fields. These should be named `SudokuAnswers` and `PercentageCorrectAnswers` precisely.
    - Once done, move the embedded data block to before the block where the sudoku question is included.
    - Click "Apply" (bottom right corner of the screen)

4.  This should be enough to get the sudoku puzzle recorded in the response. Try to Preview, then type in some responses. Then, go to the "Data & Analysis" tab > "Export & Import" > "Export Data..." > "Download". The 2 new embedded fields should appear as 2 new columns.
    - `PercentageCorrectAnswers` shows the percentage of correct answers the respondent manages to fill in, with value ranging from 0(%) to 100(%).
    - `SudokuAnswers` records the actual answer of the user in the format of a JSON object. It should be self-explanatory, but an online formatter can help with readability. I'm assuming that you don't actually need this directly, other than for recording and troubleshooting purposes.

## Caveats

This implements a fixed puzzle. If you decide to use this code, you might want to implement a different puzzle.

TODO: instruction on how to update the puzzle.