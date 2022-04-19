function setup() {
    createCanvas(500, 400);
    trilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }