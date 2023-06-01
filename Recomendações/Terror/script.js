let i = 0
setInterval(() => {
  const arrayImagem = ["/imagens/DEPMA.jpg", "/imagens/DEPMA2.jpg", "/imagens/DEPMA3.jpg"];
  const imagem = document.getElementById("img");
  console.log("Funcionando");
  imagem.src = arrayImagem[i++ % arrayImagem.length];
}, 1000);//Trocador de imagens!!