import './particles';
import'./styles/reset.css';
import './styles/sets.less';
import './styles/body.scss';
import './styles/default.sass';
import './styles/text-style.scss';


window.particlesJS.load('particles-js', 'assets/particles.json');

const set_1 = document.querySelector('.set--1');
const set_2 = document.querySelector('.set--2');
const set_3 = document.querySelector('.set--3');
const set_4 = document.querySelector('.set--4');
const set_5 = document.querySelector('.set--5');

set_1.addEventListener('click', () => {location.href="https://github.com/Creator674/webpack-config/blob/basic-config-1.0/README.md"}, false);
set_2.addEventListener('click', () => {location.href="https://github.com/Creator674/webpack-config/blob/light-config-1.0/README.md"}, false);
set_3.addEventListener('click', () => {location.href="https://github.com/Creator674/webpack-config/blob/react-config-1.0/README.md"}, false);
set_4.addEventListener('click', () => {location.href="https://github.com/Creator674/webpack-config/blob/node-config-1.0/README.md"}, false);
set_5.addEventListener('click', () => {location.href="https://github.com/Creator674/webpack-config/blob/super-config-1.0/README.md"}, false);