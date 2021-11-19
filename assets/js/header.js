// botão que abre e fecha o menu de opções na versão mobile
const menuButton = document.getElementById('toggleMenuButton');

// container que representa o menu de opções
const menu = document.getElementById('menu');


menuButton.addEventListener('click',()=>{
    toggleMenu();
});


function toggleMenu(){

    menu.classList.toggle('active');
}