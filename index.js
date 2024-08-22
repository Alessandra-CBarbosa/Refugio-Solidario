// document.addEventListener('DOMContentLoaded', function () {

// //criar um elemento
// //manipular o elemento criado
// //adicionar o elemento na página


// let iconMenu = document.createElement("div");
//     iconMenu.id = 'icon-menu';
//     iconMenu.innerHTML= '&#9776';
//     iconMenu.style.fontSize = '30px';
//     iconMenu.style.cursor = 'pointer';
//     iconMenu.style.position = 'absolute';
//     iconMenu.style.top = '5px';
//     iconMenu.style.left = '5px';
//     document.body.appendChild(iconMenu);    

// let myMenu = document.createElement("div");
//     myMenu.id = 'my-menu';
//     myMenu.style.display = 'none';
//     myMenu.style.position = 'absolute';
//     myMenu.style.top = '50px';
//     myMenu.style.left = '10px';
//     myMenu.style.backgroundColor = '#ffd700)';
//     myMenu.style.width = '200px';
//     myMenu.style.zIndex = '1';
//     document.body.appendChild(myMenu);

// let linkPages = [
//     {text: 'Início', href: 'index.html'},
//     {text: 'Quem somos', href: 'quemsomos.html'},
//     {text: 'voluntario', href: 'sejavoluntario.html'},
//     {text: 'Contato', href: 'contato.html'},
//     {text: 'Política de Privacidade', href: 'politica-de-privacidade.html'}
// ];
//     linkPages.forEach(function(linkData) {
//     let link = document.createElement('a');
//     link.href = linkData.href;
//     link.textContent = linkData.text;
//     link.style.color = 'white';
//     link.style.borderRadius = '8px'
//     link.style.padding = '12px 16px';
//     link.style.textDecoration = 'none';
//     link.style.display = 'block';
//     link.addEventListener('mouseover', function() {
//     link.style.backgroundColor = '#ffd700';
//     link.style.fontWeight = '500'

// });

//     link.addEventListener('mouseout', function() {
//         link.style.backgroundColor = '#3333';

// });

//     myMenu.appendChild(link)

// });

//     iconMenu.addEventListener('click', function() {
//         if (myMenu.style.display === 'block') {
//             myMenu.style.display = 'none';

//         } else {
//             myMenu.style.display = 'block';
//         }
// });

// })