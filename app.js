const conatiner = document.querySelector('#conatiner');

const content = document.createElement('div');
content.classList.add('content');

const pTag = document.createElement('p');
pTag.innerText = 'Hej, jestem czerwony!';
pTag.style.cssText = 'color: red'

const h3Tag = document.createElement('h3');
h3Tag.innerText = 'Jestem niebieskim h3!'
h3Tag.style.cssText = 'color: blue'

const div2 = document.createElement('div');
div2.setAttribute ("style", 'border: 1px solid; background: pink;');

const pTag2 = document.createElement('p');
pTag2.innerText = 'Jestem w div';

const h1Tag = document.createElement('h1');
h1Tag.innerText = 'Ja też';

div2.appendChild(pTag2);
div2.appendChild(h1Tag);

conatiner.appendChild(content);
content.appendChild(pTag);
content.appendChild(h3Tag);
content.appendChild(div2);
