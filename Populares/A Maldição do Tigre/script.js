let i = 0
setInterval(() => {
  const arrayImagem = ["imgs/html.png", "imgs/css.png", "imgs/javascript.png", "imgs/php.png", "imgs/sql.jpg", "imgs/bootstrap.png", "imgs/npm.png", "imgs/tailwind.png"];
  const imagem = document.getElementById("img1");
  imagem.src = arrayImagem[i++ % arrayImagem.length];
}, 1000);//Trocador de imagens!!