const project = document.querySelector('#js-project');

const lists = [
    'no_image_square.jpg',
    'no_image_square.jpg',
];

for(let i=0 ; i<lists.length; i++){
    const content = `<div><img class="js-img" src="images/${lists[i]}" alt=""></div>`;
    project.insertAdjacentHTML('beforeend',content);
}