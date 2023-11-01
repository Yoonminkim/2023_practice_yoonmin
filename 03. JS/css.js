
import dFn from './dom.js';

import 

const Page0_Up_Text = dFn.qs('#up');
const Page0_Down_Text = dFn.qs('#down');


function StartTimeOut(){
    setTimeout(()=>{
        Page0_Up_Text.innerText = 'Manchester City'
        Page0_Up_Text.classList.add('FadeinText');
        Page0_Down_Text.classList.add('FadeinText');
    },200);

    setTimeout(()=>{
        Page0_Up_Text.classList.add('FadeinText');
        Page0_Down_Text.classList.add('FadeinText');
    },2000);

    setTimeout(()=>{
        Page0_Up_Text.classList.add('FadeinText');
        Page0_Down_Text.classList.add('FadeinText');
    },3000);
    
    setTimeout(()=>{
        Page0_Up_Text.classList.add('FadeinText');
        Page0_Down_Text.classList.add('FadeinText');
    },4000);


}

StartTimeOut();

