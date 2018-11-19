import aboutPage from './aboutPage'
import menuPage from './menuPage'
import contactPage from './contactPage'


const content = document.querySelector('#content');

window.onload = function(){   
    // const pageItem = document.getElementById('main');
    createSkel();
    aboutPage(content);
    oneControl('about', aboutPage);
    oneControl('contact', contactPage);
    oneControl('menu', menuPage)
}

function createSkel() {
    const pageDiv = document.createElement('div');
    const logoDiv = document.createElement('div');
    const logoImg = document.createElement('img');
    const navUl = document.createElement('ul');

    const aboutLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');

    navUl.id = 'navbar';

    aboutLi.id = 'about';
    menuLi.id = 'menu';
    contactLi.id = 'contact';

    aboutLi.innerHTML = '<a href="#">About</a></li>';
    menuLi.innerHTML = '<a href="#">Menu</a></li>';
    contactLi.innerHTML = '<a href="#">Contact info</a></li>';

    content.id = 'main'

    pageDiv.id = 'page';
    logoDiv.id = 'logo';
    navUl.id = 'nav';
    navUl.innerHTML += aboutLi.outerHTML + menuLi.outerHTML + contactLi.outerHTML;

    logoImg.setAttribute('src', 'http://www.summa3d.com/wp/wp-content/uploads/2014/12/logo_placeholder.png');
        
    content.appendChild(pageDiv);
    pageDiv.appendChild(logoDiv);
    logoDiv.appendChild(logoImg);
    pageDiv.appendChild(navUl);
}

function oneControl(tab, func){
    const tabItem = document.getElementById(tab);
    const pageItem = document.getElementById('main');
    tabItem.addEventListener("click", function(){
        appendItem(pageItem, func)
        console.log(pageItem)
    })
}


function appendItem(main, contentFunction){
    while (main.hasChildNodes()) {
      main.firstChild.remove();
    }
    createSkel();
    contentFunction(main);
    oneControl('about', aboutPage);
    oneControl('contact', contactPage);
    oneControl('menu', menuPage)
}