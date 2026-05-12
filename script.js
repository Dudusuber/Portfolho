function trocarPagina(id, elemento) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('ativo'));
    elemento.classList.add('ativo');
    // fechar sidebar no mobile
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
}
 
function abrirCard(el) {
    const jaAberto = el.classList.contains('ativo');
    document.querySelectorAll('.card').forEach(c => c.classList.remove('ativo'));
    if (!jaAberto) el.classList.add('ativo');
}
 
function trocarTrimestre(id, botao) {
    const pagina = botao.closest('.pagina');
    pagina.querySelectorAll('.trimestre').forEach(t => t.classList.remove('ativo'));
    pagina.querySelectorAll('.tab').forEach(b => b.classList.remove('ativo'));
    document.getElementById(id).classList.add('ativo');
    botao.classList.add('ativo');
    // fechar cards ao trocar trimestre
    document.querySelectorAll('.card').forEach(c => c.classList.remove('ativo'));
}
 
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
}
