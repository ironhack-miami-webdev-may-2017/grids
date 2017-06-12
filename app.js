var myGrid = [
  [0,   0, 0,   0, 0],  // 0
  [0,   0, 'a', 0, 0],  // 1
  [0,   0, 0,   0, 0],  // 2
  [0,   0, 0,   0, 0],  // 3
  ['d', 0, 0,   0, 0]   // 4
];

var dudeRow = 4;
var dudeCol = 0;

function moveOrWin () {
  if (myGrid[dudeRow][dudeCol] === 'a') {
    $('.grid').fadeOut(5000, function () {
      $('body').append('<img src="https://media4.giphy.com/media/7rj2ZgttvgomY/giphy.gif">');
    });
  }
  else {
    myGrid[dudeRow][dudeCol] = 'd';
  }
}

function moveDudeDown () {
  if (dudeRow + 1 === myGrid.length) {
    return;
  }

  myGrid[dudeRow][dudeCol] = 0;
  dudeRow += 1;

  moveOrWin();
  teardownRedraw();
}

function moveDudeUp () {
  if (dudeRow === 0) {
    return;
  }

  myGrid[dudeRow][dudeCol] = 0;
  dudeRow -= 1;

  moveOrWin();
  teardownRedraw();
}

function moveDudeRight () {
  if (dudeCol + 1 === myGrid.length) {
    return;
  }

  myGrid[dudeRow][dudeCol] = 0;
  dudeCol += 1;

  moveOrWin();
  teardownRedraw();
}

function moveDudeLeft () {
  if (dudeCol === 0) {
    return;
  }

  myGrid[dudeRow][dudeCol] = 0;
  dudeCol -= 1;

  moveOrWin();
  teardownRedraw();
}


function teardownRedraw () {

  $('.grid').empty();

  for (var i = 0; i < myGrid.length; i += 1) {
    // var rowHtml = '<div class="row">;
    var rowHtml = '';

    for (var j = 0; j < myGrid[i].length; j+= 1) {
      // console.log( myGrid[i][j] );
      var contents = '';

      if (myGrid[i][j] === 'd') {
        contents += '<img src="https://i.giphy.com/l0IxZpEsbQYba4h6E.webp">';
      }
      else if (myGrid[i][j] === 'a') {
        contents += '<img src="https://i.giphy.com/l0MYx2rhu3WL5fUd2.webp">';
      }

      rowHtml += `
          <div class="cell-${i}-${j}">
            ${contents}
          </div>
      `;
    }

    // rowHtml += '</div>';

    $('.grid').append(rowHtml);
  }

  $('.grid div').click(function () {
    var postSplit = $(this).prop('class').split('-');
    var row = postSplit[1];
    var col = postSplit[2];

    $(this).append('<img src="https://i.giphy.com/l0MYx2rhu3WL5fUd2.webp">');
    myGrid[row][col] = 'a';
  });

}


$(document).ready(function () {
  teardownRedraw();
});


$(document).ready(function () {
  $(document).keydown(function (theEvent) {
    if (theEvent.while === 38 ||
        theEvent.which === 39 ||
        theEvent.which === 40 ||
        theEvent.which === 37) {
      theEvent.preventDefault();
    }

    // up arrow key
    if (theEvent.which === 38) {
      moveDudeUp();
    }
    // right arrow key
    else if (theEvent.which === 39) {
      moveDudeRight();
    }
    // down arrow key
    else if (theEvent.which === 40) {
      moveDudeDown();
    }
    // left arrow key
    else if (theEvent.which === 37) {
      moveDudeLeft();
    }
  });
});
