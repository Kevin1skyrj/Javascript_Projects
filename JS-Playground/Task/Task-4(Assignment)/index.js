// Write JavaScript code to dynamically create and append three <li> elements inside the <ul> element with the ID "listContainer". Each <li> element should contain a different text content: "Item 1", "Item 2", and "Item 3".

const listContainer = document.getElementById("listContainer");
const listItems = ['Item-1','Item-2','Item-3'];

for(let i = 0; i < listItems.length; i++){
    const newLi = document.createElement('li');
    newLi.textContent = listItems[i];
    listContainer.appendChild(newLi);
}

const container = document.getElementById('container');
const img = document.createElement('img');
img.src = 'image.jpg';
img.alt = 'Sample Image';
container.appendChild(img);
