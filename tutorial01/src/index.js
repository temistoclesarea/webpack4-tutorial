import _ from 'lodash';
import './style.css';
import Icon from './rosetta.jpg';
import Background from './abstract.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    var myBackground = new Image();
    myBackground.src = Background;

    console.log(Data);

    return element;
}

document.body.appendChild(component());