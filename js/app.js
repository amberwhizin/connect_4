$(() => {
  const yellow = "yellow";
  const red = "red";

  const column0 = [];
  const column1 = [];
  const column2 = [];
  const column2 = [];
  const column2 = [];
  const column2 = [];
  const column6 = [];
  const board = [column0, column1, column2, [], [], [], column6];
  debugger;
  // if not player1 turn then player2
  // siting myself here via tic-tac-toe project
  let isPlayer1 = true;
  const getIsPlayer1Turn = () => {
    isPlayer1 = !isPlayer1;
    return isPlayer1;
  };
  // returns red circles, if true is passed in then return yellow
  const generateCircle = (isYellow = false) => {
    const $circle = $("<div>").addClass("circle");
    if (isYellow) {
      $circle.addClass("yellow");
    }
    return $circle;
  };

  // invokes circles when screen clicked, switches between the two
  const makeCells = ($column, columnInfo) => {
    for (let i = 0; i < 6; i++) {
      const piece = columnInfo[i];
      const $cell = $("<div>")
        .addClass("cell")
        .addClass("cell" + i);
      // .on("click", () => {
      //   const isPlayer1Turn = getIsPlayer1Turn();
      //   if (isPlayer1Turn === column0) {
      //      column0 += piece;
      //   }
      //   const $circle = generateCircle(isPlayer1Turn);
      //   $cell.append($circle).off("click");
      // });
      if (piece === yellow) {
        const $circle = generateCircle(true);
        $cell.append($circle);
      }
      if (piece === red) {
        const $circle = generateCircle();
        $cell.append($circle);
      }
      $column.append($cell);
    }
  };
  // creates columns with cells in them
  const generateColumn = (index) => {
    const $column = $("<div>").addClass("column").addClass(`column${index}`);
    const currentColumnInfo = board[index];
    console.log({ currentColumnInfo });
    makeCells($column, currentColumnInfo); // holds info for my cells
    return $column;
  };
  // makes multiple columns
  const render = () => {
    for (let i = 0; i < 7; i++) {
      debugger;
      const $column = generateColumn(i);
      $(".wrapper").append($column);
    }
  };

  // cell5 is clicked
  //cell5.shift
  // cell5.unshift

  //if cell is clicked, and its red, push it into the array, then render the array position
  //you click in column 0,
  //go to the earliest position
});
