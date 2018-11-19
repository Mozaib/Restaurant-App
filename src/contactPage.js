export default function contactPage(main){
    const contDiv = document.createElement('div');
    const contactTitle = document.createElement('h2');
    const contactNumber = document.createElement('span');

    contDiv.id = 'cont';
    contactTitle.textContent = "Contact Us";
    contactNumber.textContent = "Phone Number:  80085";

    contDiv.appendChild(contactTitle);
    contDiv.appendChild(contactNumber);
    main.appendChild(contDiv);
};