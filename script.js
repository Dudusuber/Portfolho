function trocarPagina(id, elemento){

// troca página
document.querySelectorAll(".pagina")
.forEach(p => p.classList.remove("ativa"))

document.getElementById(id)
.classList.add("ativa")

// remove ativo de todos os links
document.querySelectorAll("nav a")
.forEach(a => a.classList.remove("ativo"))

// adiciona ativo no clicado
elemento.classList.add("ativo")

}



function abrirTrabalho(elemento){

document.querySelectorAll(".trabalho")
.forEach(item=>{
if(item !== elemento){
item.classList.remove("ativo")
}
})

elemento.classList.toggle("ativo")

}



function trocarTrimestre(id, botao){

let pagina = botao.closest(".pagina")

pagina.querySelectorAll(".trimestre")
.forEach(t => t.classList.remove("ativo"))

pagina.querySelectorAll("#" + id)
.forEach(t => t.classList.add("ativo"))

pagina.querySelectorAll(".trimestres button")
.forEach(btn => btn.classList.remove("ativo"))

botao.classList.add("ativo")

}
