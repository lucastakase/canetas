function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById(id="campo-pesquisa").value;

    //se o campo pesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Escreva algo</p>"
        return
    }
    // transforma tudo que for escrito em minusculo
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da pesquisa
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
           //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
              <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais info</a> </div>
          `;
        }
        }  

        if(!resultados) {
            resultados = "<p>Sem resultado</p>"
        }
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }


