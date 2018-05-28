// this file bundles css + js and exports to build UMD
import fs from 'fs';
var css = fs.readFileSync(__dirname + '/../dist/index.css', 'utf8');
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

//import class sticky-notes library
import StickyNotes from "./StickyNotes";

//export StickyNotes
module.exports = StickyNotes;
