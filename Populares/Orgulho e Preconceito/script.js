const btnEl = document.querySelector('.btn')
const toggleOptions = () => {
	const wrapperEl = document.querySelector('.wrapper')
		const iconEl = btnEl.querySelector('i')

	wrapperEl.classList.toggle('active')

	if (iconEl.classList.contains('ri-share-line')) {
	    iconEl.classList.replace('ri-share-line', 'ri-close-line')
	} else {
        iconEl.classList.replace('ri-close-line', 'ri-share-line')
		}
}

//

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

//

let i = 0
setInterval(() => {
  const arrayImagem = ["/imagens/oep.jpg", "/imagens/oep2.jpg", "/imagens/oep3.jpg", "/imagens/oep4.jpg"];
  const imagem = document.getElementById("img");
  console.log("Funcionando");
  imagem.src = arrayImagem[i++ % arrayImagem.length];
}, 1000);//Trocador de imagens!!
