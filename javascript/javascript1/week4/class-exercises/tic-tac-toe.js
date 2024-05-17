// DATA

const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
  ];

const position1 = [
    ['x', 'o', 'o '],
    ['x', 'o', 'o'],
    ['o', 'x', 'x']
  ];

// LOGIC

function getRenderedGame(position) {

    let result = "*******" + "\n";

    for(let i = 0; i < position.length; i++) {

        result += "*";

        for(let j = 0; j < position[i].length; j ++) {
            result += position[i][j] + "*";
        }

        result += "\n";

    }

    result += "*******";

    return result;

}

function getGameInfo(position) {

    const result = {
        winner: undefined,
        looser: undefined,
        hasEnded: false,
        nextPlayer: "x",
    }

    let xCount = 0;
    let oCount = 0;
    let emptyCount = 0;

    for(let i = 0; i < position.length; i++) {
        for(let j = 0; j < position.length; j++) {
            if (position[i][j] === 'x') xCount++;
            if (position[i][j] === 'o') oCount++;
            if (position[i][j] === ' ') emptyCount++;
        }
    }

    result.nextPlayer = xCount > oCount ? 'o' : 'x';

    function checkWinner(player) {
        for (let i = 0; i < 3; i++) {
            if (position[i][0] === player && position[i][1] === player && position[i][2] === player) {
                return true
            }
            if (position[0][i] === player && position[1][i] === player && position[2][i] === player) {
                return true;
            }
        }

        if (position[0][0] === player && position[1][1] === player && position[2][2] === player) {
            return true
        }
        if (position[0][2] === player && position[1][1] === player && position[2][0] === player) {
            return true;
        }
        return false;
    }

    if (checkWinner('x')) {
        result.winner = 'x';
        result.looser = 'o';
        result.hasEnded = true;
        result.nextPlayer = "";
    } else if (checkWinner('o')) {
        result.winner = 'o';
        result.looser = 'x';
        result.hasEnded = true;
        result.nextPlayer = "";
    } else if (emptyCount === 0) {
        result.hasEnded = true;
        result.nextPlayer = "";
    }

    return result;

}

// RENDER
  
  const renderedGame = getRenderedGame(position);
  console.log(renderedGame);

  const gameInfo = getGameInfo(position1);
  console.log(gameInfo);