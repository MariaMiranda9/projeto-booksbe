document.addEventListener("keypress",function(e){
    
    //variavel que armazena o valor do input de pesquisa
    const pesquisa= window.document.querySelector('.pesquisa').value
    
    
    //se o usuario apertar a tecla enter enquanto digita, e o texto digitado for igual a "teste" executa o window.location 
    if(e.key==="Enter" && pesquisa == "livro"){
       
        window.location.href = "Recomendações/Ficção/index.html" //redireciona para pagina do resultado da pesquisa

    }
}) 
