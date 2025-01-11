const board = document.getElementById('board');

for (let fila = 0; fila < 8; fila++) {
  for (let columna = 0; columna < 8; columna++) {
    const celda = document.createElement('div');
    const ficha = document.createElement('div');
    celda.classList.add('celda');
    ficha.classList.add('ficha');
    

    if ((fila + columna) % 2 === 0) {
      celda.classList.add('blanca');
    } else {
      if (fila == 0 || fila == 1 || fila == 2){
        ficha.classList.add('verde');
      } else if (fila == 5 || fila == 6 || fila == 7) {
        ficha.classList.add('naranja');
      }
      celda.classList.add('negra');
    }
    
    board.appendChild(celda);
    board.appendChild(ficha)
  }
}
