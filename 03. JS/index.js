
// DOM 함수 임포트 해오기
import dFn from './dom.js';

// liData 임포트 해오기
import liData from './data.js';

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

// banner1에 들어있는 li요소 하나의 높이값을 가져와 oneLiHeight 변수에 저장
const oneLiHeight = banner1Li[0].scrollHeight;
console.log(oneLiHeight);

// 화면을 아래로 스크롤, 위로 스크롤 할때를 알기위한 이벤트 함수
dFn.addEvt(window, 'scroll', moveScreen);

function moveScreen(){

    // section1의 높이에 맞춰 section2의 stikcy 값을 고정
    let bBottom = dFn.getBCRB(banner1Li[4]);
    console.log(bBottom);

}

// 배너에 이미지 넣기 ///////////////////////////////////////////////////////////////

// 대상선정: #banner1 li
const banner = dFn.qsa('#banner1 li');
const DATA_IMAGE = liData;

const Data = liData.banner1.IMAGE;


console.log(liData);
console.log(liData.banner1.IMAGE);

banner.forEach((ele,idx)=>{
    ele.innerText = `<h1>Wow!${idx}</h1>`;
    // ele.innerHTML = `<img src="${liData.banner1 +}"/>`
})

// banner.forEach((ele,idx)=> InputBanner(ele,idx));

// // InputBanner 함수: li에 데이터 정보 넣기

// function InputBanner(ele, idx){

//     ele.innerHTML = `<img src="${liData[1]}`
//     ele.innerHTML = `<img src="${liData.banner1.IMAGE}" />`

// }