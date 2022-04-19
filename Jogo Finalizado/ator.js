//código do ator

let xAtor = 100;
let yAtor = 390;
let atorComprimento = 30;
let atorAltura = 30;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, atorComprimento, atorAltura);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMoverY()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMoverXEsquerda()){
      xAtor -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverXDireita()){
      xAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < xCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], carroComprimento[i], carroAltura[i], xAtor, yAtor, 15);
    if(colisao){
      somColisao.play();
      voltaAtorParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 390;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 140, 0));
  rect(370, 3, 140, 29);
  fill(0);
  text("Pontos:", 420, 26);
  fill(255);
  text(pontos, 480, 27);
}

function marcaPonto(){
  if (yAtor <= 20){
    voltaAtorParaPosicaoInicial();
    pontos += 1;
    somPonto.play();
  }
}

function podeSeMoverY(){
  return yAtor < 390;
}

function podeSeMoverXEsquerda(){
  return xAtor > -10;
}

function podeSeMoverXDireita(){
  return xAtor < 480;
}

function pontosMaiorQueZero(){
  return pontos > 0;
}