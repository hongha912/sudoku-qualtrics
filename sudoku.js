// This is specific to the puzzle in sudoku.html.
// If you update the puzzle, please update this solution
const sudokuSolution = {
  "col3-row1": 4,
  "col4-row1": 6,
  "col6-row1": 8,
  "col7-row1": 9,
  "col8-row1": 1,
  "col9-row1": 2,
  "col2-row2": 7,
  "col3-row2": 2,
  "col7-row2": 3,
  "col8-row2": 4,
  "col9-row2": 8,
  "col1-row3": 1,
  "col4-row3": 3,
  "col5-row3": 4,
  "col6-row3": 2,
  "col7-row3": 5,
  "col9-row3": 7,
  "col2-row4": 5,
  "col3-row4": 9,
  "col4-row4": 7,
  "col6-row4": 1,
  "col7-row4": 4,
  "col8-row4": 2,
  "col1-row5": 9,
  "col1-row6": 5,
  "col1-row7": 4,
  "col1-row8": 3,
  "col1-row9": 1,
};

Qualtrics.SurveyEngine.addOnload(function () {});

Qualtrics.SurveyEngine.addOnReady(function () {});

Qualtrics.SurveyEngine.addOnPageSubmit(function () {
  const sudokuCells = document.querySelectorAll(
    "#sudoku-puzzle input:not(:disabled)"
  );
  let numCorrect = 0;
  const sudokuResults = {};
  for (const cell of sudokuCells) {
    sudokuResults[cell.id] = cell.value;
    if (Number(cell.value) === sudokuSolution[cell.id]) {
      numCorrect += 1;
    }
  }

  Qualtrics.SurveyEngine.setEmbeddedData(
    "SudokuAnswers",
    JSON.stringify(sudokuResults)
  );
  Qualtrics.SurveyEngine.setEmbeddedData(
    "PercentageCorrectAnswers",
    (numCorrect / Object.keys(sudokuSolution).length) * 100.0
  );
});
