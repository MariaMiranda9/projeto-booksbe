let i = 0
 setInterval(() => {
   const arrayImagem = ["imagens/cde.jpg", "imagens/oep.jpg", "imagens/opp.jpg", "imagens/tigre.jpg", "imagens/hp.jpg", "imagens/teste.jpg"];
   const imagem = document.getElementById("img");
   console.log("Funcionando");
   imagem.src = arrayImagem[i++ % arrayImagem.length];
 }, 1000);//Trocador de imagens!!