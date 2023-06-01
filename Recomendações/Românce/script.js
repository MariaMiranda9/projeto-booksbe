let i = 0
setInterval(() => {
  const arrayImagem = ["/imagens/ACPV.jpg", "/imagens/ACPV2.jpg"];
  const imagem = document.getElementById("img");
  console.log("Funcionando");
  imagem.src = arrayImagem[i++ % arrayImagem.length];
}, 1000);//Trocador de imagens!!