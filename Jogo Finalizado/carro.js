//código do carro
let carroComprimento = [70, 50, 100, 50, 70, 100];
let carroAltura = [40, 35, 45, 35, 40, 45];
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [39, 98, 148, 212, 261, 316];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], carroComprimento[i], carroAltura[i]);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
       xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}