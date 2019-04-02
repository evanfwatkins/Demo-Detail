import Home from './src/pages/Home';
// import Header from './src/Header';
// import Navigation from './src/Navigation';
// import Content from './src/Content';
// import Footer from './src/Footer';
import * as state from './state';
// import axios from 'axios';
import { startCase } from 'lodash';
import Navigo from 'navigo';
// import Model from './src/Model';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
            ${Home(state)}
        `;
    router.updatePageLinks();
}

function navHandler(params){
    var destination = startCase(params.page);
    
    render(state[destination]);
}

document.querySelectorAll('#navImgInt').forEach((link) => link.addEventListener('click', (event) => {
    render(Interior.state);
}));

document.querySelectorAll('#navImgExt').forEach((link) => link.addEventListener('click', (event) => {
    render(Exterior.state);
}));


function mouseOver(){
    document.getElementById('extPageImg').style.color = 'red';
}

function mouseOut(){
    document.getElementById('extPageImg').style.color = 'black';
}


router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();
