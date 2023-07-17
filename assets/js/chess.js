import LichessPgnViewer from 'lichess-pgn-viewer';
import { Chessground } from 'chessground';

let games = document.getElementsByClassName("pgn");
for (var i = 0; i < games.length; i++) {
  let ele = games.item(i);
  let data = ele.innerText;
  LichessPgnViewer(ele, {
    pgn: data,
    showClocks: false,
    scrollToMove: false,
  });
}

let positions = document.getElementsByClassName("fen");
for (var i = 0; i < positions.length; i++) {
  let ele = positions.item(i);
  let data = ele.innerText.trim();
  console.log(data);
  LichessPgnViewer(ele, {
    fen: data,
    //fen: '8/pR3R2/2pk4/3p4/8/3P1p2/PPPK2rP/5N2 w - - 4 36', 
    showMoves: false,
    showClocks: false,
    showPlayers: false,
    showControls: false,
    scrollToMove: false,
    drawArrows: false,
    initialPly: 'last',
    chessground: {
      viewOnly: true,
      disableContextMenu: true,
    },
  });
}
