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

btnEl.addEventListener('click', toggleOptions)

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

//pesquisa

const input= window.document.querySelector('#src')
input.addEventListener("input",function(){
	const ps= this.value
	console.log(ps)
})
  