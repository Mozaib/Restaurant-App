export default function menuPage(main){
    const contDiv = document.createElement('div');
    const menuTitle = document.createElement('h2');
    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');

    contDiv.id = 'cont';

    menuTitle.textContent = "Menu";
    menuItem1.textContent = "Pizza";
    menuItem2.textContent = "Burgers";
    menuItem3.textContent = "Wraps";
    
    contDiv.appendChild(menuTitle);
    contDiv.appendChild(menuItem1);
    contDiv.appendChild(menuItem2);
    contDiv.appendChild(menuItem3);
    main.appendChild(contDiv)
  };