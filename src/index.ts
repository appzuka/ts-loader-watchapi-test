import render = require('./render');

const iDiv1 = document.createElement('div');
iDiv1.id = 'wrapper1';
const iDiv2 = document.createElement('div');
iDiv2.id = 'wrapper2';
document.getElementsByTagName('body')[0].appendChild(iDiv1);
document.getElementsByTagName('body')[0].appendChild(iDiv2);

document.getElementById('wrapper1').innerHTML = "<h1> Hello World! index.ts V1</h1>";

render();