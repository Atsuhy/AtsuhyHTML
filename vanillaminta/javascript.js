const content = [
    ['Bánszki Zoltán', 'Barna János Lőrinc', 'Czigla Dániel', 'Kiss Dzsenifer', 'Papp Nóra',
    'Rácz Szabolcs', 'Rostás Evelin', 'Solymosi Dávid', 'Székács Szabolcs', 'Szekeres Zsolt',
    'Vadász Dániel'],
    ['Baliga József', 'Feke Gergő','Gyebnár Róbert',
    'Magyar Dáriusz', 'Mező Lívia', 'Szabó Bence', 'Vida Dominik']
];

const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const contentElement = document.querySelector('#content');

button.addEventListener('click', () => {
    contentElement.innerHTML = content[0]
        .map(name => `<p>${name}</p>`)      
});
button2.addEventListener('click', () => {
    contentElement.innerHTML = content[1]
        .map(name => `<p>${name}</p>`)      
});
