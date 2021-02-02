/*
console.log('conected...')

const userName = prompt('Enter name');
const greeting = 'Greeting';

document.getElementById('output').textContent = greeting + userName;
*/

const userText = prompt('Enter some text.');
const userTextReplaced = userText.replaceAll('a', '@');
document.getElementById('output').textContent = userTextReplaced

