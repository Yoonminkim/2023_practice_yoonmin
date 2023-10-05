
import dFn from './dom.js';

// section1 요소 선택
const section1 = dFn.qs('.section1');
// section2 요소 선택
const section2 = dFn.qs('.section2');

// section1 마우스 들어올 경우 이벤트
dFn.addEvt(section1, 'mouseenter', ()=>{
    console.log('mouseenter', event.currentTarget);
});

// section2 마우스 들어올 경우 이벤트
dFn.addEvt(section2, 'mouseenter', ()=>{
    console.log('mouseenter', event.currentTarget);
});

// banner1에 들어있는 li 요소 선택
const banner1Li = dFn.qsa('.section1 li');

// banner1에 들어있는 li요소 하나의 높이값 설정
const oneLiHeight = banner1Li[0].scrollHeight;
console.log(oneLiHeight);

// 화면을 내릴 때 
dFn.addEvt(window, 'scroll', moveScreen);

function moveScreen(){

    // section1의 높이에 맞춰 section2의 stikcy 값을 고정
    let bBottom = dFn.getBCRB(banner1Li[4]);
    console.log(bBottom);

}