window.addEventListener('load', ()=>{

   // const btnMais = document.getElementById("btn-mais")
    const btnMais = document.querySelector("#btn-mais")
    const maisInfo = document.querySelector("#mais-info")
    const rodape = document.querySelector("#contato")

    //ouvindo o evento de click no botao
    btnMais.addEventListener('click', ()=>{
        if (maisInfo.classList.contains('oculto')){
            btnMais.textContent = "Menos..."
            maisInfo.classList.remove('oculto')
            maisInfo.classList.add('visivel')
        }else{
            btnMais.textContent = "Mais..."
            maisInfo.classList.add('oculto')
            maisInfo.classList.remove('visivel')
        }
    })

    //requisição por um documento no servidor
    fetch("./dados.json")  //url
    .then(response => response.json())
    .then(dados => {
//        console.log(dados.nome)
  //      console.log(dados.email)
    //criar um paragrafo e colocar no rodape
        let p = document.createElement('p')
        p.innerHTML = "JS - Professor: "+dados.nome+" - e-mail: "+dados.email

        rodape.appendChild(p)    
    })


})