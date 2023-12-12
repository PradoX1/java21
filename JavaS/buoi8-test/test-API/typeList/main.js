const API = "https://jsonplaceholder.typicode.com/";
const list = document.querySelector('.list');
const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');

let activeButton = null;

const fetchDataAndRender = async (endpoint, type) => {
    try {
        const res = await axios.get(API + endpoint);
        const items = res.data.map(item => `<li>${item.title}</li>`).join('');
        list.innerHTML = items;
        h1.innerHTML = `<h1>Type: ${type}</h1>`;
        setActiveButtonColor(type);
    } catch (error) {
        console.error(error);
    }
}

const setActiveButtonColor = (type) => {
    if (activeButton) {
        activeButton.classList.remove('red');
    }
    const currentActiveButton = Array.from(buttons).find(button => button.id === `btn${type}`);
    currentActiveButton && currentActiveButton.classList.add('red');
    activeButton = currentActiveButton;
}

const attachButtonClickHandler = (button, endpoint, type) => {
    button.addEventListener('click', () => {
        fetchDataAndRender(endpoint, type);
    });
}

const buttonConfig = [
    { button: document.querySelector('#btn1'), endpoint: 'posts', type: 'posts' },
    { button: document.querySelector('#btn2'), endpoint: 'photos', type: 'photos' },
    { button: document.querySelector('#btn3'), endpoint: 'albums', type: 'albums' }
];

buttonConfig.forEach(({ button, endpoint, type }) => {
    attachButtonClickHandler(button, endpoint, type);
});

// Initial load
fetchDataAndRender('posts', 'posts');
