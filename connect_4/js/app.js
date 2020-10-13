$(() => {
  const yellow = "yellow";
  const red = "red";

  const column0 = [];
  const column1 = [];
  const column2 = [];
  const column3 = [];
  const column4 = [];
  const column5 = [];
  const column6 = [];
  const board = [column0, column1, column2, column3, column4, column5, column6];
  //debugger;
  // if not player1 turn then player2
  // siting myself here via tic-tac-toe project
  let isPlayer1 = false;
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

      if (piece === yellow) {
        const $circle = generateCircle(true);
        $cell.append($circle);
      }
      if (piece === red) {
        const $circle = generateCircle();
        $cell.append($circle);
      }
      if (piece === undefined) {
        const $circle = generateCircle().addClass("background-fill");
        $cell.append($circle);
      }
      $column.append($cell);
    }
  };

  // creates columns with cells in them
  const generateColumn = (index) => {
    const currentColumnInfo = board[index];
    const $column = $("<div>")
      .addClass("column")
      .addClass(`column${index}`)
      .on("click", () => {
        if (currentColumnInfo.length >= 6) {
          return;
        }
        const isPlayer1 = getIsPlayer1Turn();
        if (isPlayer1) {
          currentColumnInfo.push(red);
        } else {
          currentColumnInfo.push(yellow);
        }
        render();
        //winVertically();
        winHorizontally();
      });

    console.log({ currentColumnInfo });
    makeCells($column, currentColumnInfo); // holds info for my cells
    return $column;
  };
  const winHorizontally = () => {
    let score = 0;
    let win = [];
    console.log(score);

    for (let i = 0; i < board.length; i++) {
      const column = board[i];
      console.log("$$$$BOARD$$$$$", board);

      for (let j = 0; j < column.length; j++) {
        console.log("$$$column$$$", column);
        if (column === red) {
          score++;
          console.log("column");
          column.shift();
          win.push(column);
          if (win === 4) {
            console.log("winner");
          }
        } else {
          score++;
          console.log("keep at it");
        }
        // if (piece.includes([red, red, red, red])) {
        //   console.log("*******", piece);
        //   console.log("winner");
        // } else {
        //   score++;
        //   console.log("keep at it");
        // }
      }
    }
  };

  const winVertically = () => {
    let score = 0;
    console.log(score);
    for (let i = 0; i < board.length; i++) {
      const piece = board[i];
      score++;
      console.log("$$$$BOARD$$$$$", board);
      for (let j = 0; j < piece.length; j++) {
        console.log("$$$PIECE$$$", piece);

        if (board.includes(["red", "red", "red", "red"])) {
          console.log("winner");
        }
      }
    }
  };
  // makes multiple columns
  const render = () => {
    $(".wrapper").empty();
    for (let i = 0; i < 7; i++) {
      const $column = generateColumn(i);
      $(".wrapper").append($column);
    }
  };
  render();
});

// cell5 is clicked
//cell5.shift
// cell5.unshift

//if cell is clicked, and its red, push it into the array, then render the array position
//you click in column 0,
//go to the earliest position

// horizontal
//   debugger;
//   if (
//     piece === column0[i] &&
//     piece === column1[i] &&
//     piece === column2[i] &&
//     piece === column3[i]
//   ) {
//     score++;
//     console.log(score)
//     if (score === 4) {
//       alert("winner");
//     }
// }

// if (piece === piece * 4) {
//winner
//} sort it?

// if (array.includes['red', 'red', 'red', 'red']) {
//winner
//}
