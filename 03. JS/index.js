
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

// 화면 스크롤에 따른 텍스트값 변경을 위해 대상 선정 및 함수 추가
// 대상: Text1 > 메인 제목
// 대상: Text2 > 아래 작성되는 내용
const Text1 = dFn.qs('#stAreaText1');
const Text2 = dFn.qs('#stAreaText2');

// 텍스트를 바꾸기 위해 TOP 높이값 확인하기
let i = 1;
let countHeight = nowHeight-480/2;


function moveScreen(){
    
    // section1의 높이에 맞춰 section2의 stikcy 값을 고정
    let nowHeight = dFn.getBCRT(banner1Li[5]);
    let bBottom = dFn.getBCRB(banner1Li[4]);
    // console.log(bBottom);
    console.log(nowHeight);

    // 높이 값에 맞춰 텍스트 변경!
    if(nowHeight > 2160){
        console.log("1");
        Text1.innerText = `${liData.banner1.TEXT[0]};`
        Text2.innerText = `${liData.banner1.TEXT[1]};`
    }
    else if(2160 > nowHeight && nowHeight > 1680){
        Text1.innerText = `${liData.banner2.TEXT[0]};`
        Text2.innerText = `${liData.banner2.TEXT[1]};`
    }
    else if(1680 > nowHeight && nowHeight > 1200){
        Text1.innerText = `${liData.banner3.TEXT[0]};`
        Text2.innerText = `${liData.banner3.TEXT[1]};`
    }
    else if(1200 > nowHeight && nowHeight > 720){
        Text1.innerText = `${liData.banner4.TEXT[0]};`
        Text2.innerText = `${liData.banner4.TEXT[1]};`
    }
    else if(720 > nowHeight && nowHeight > 255){
        Text1.innerText = `${liData.banner5.TEXT[0]};`
        Text2.innerText = `${liData.banner5.TEXT[1]};`
    }
    else {
        Text1.innerText = `${liData.banner6.TEXT[0]};`
        Text2.innerText = `${liData.banner6.TEXT[1]};`
    }

}

// 배너에 이미지 넣기 ///////////////////////////////////////////////////////////////

// 대상선정: #banner1 li
const banner = dFn.qsa('#banner1 li');

banner.forEach((ele)=>{
    ele.innerHTML = `
        <div id="inner_box">
            <div id="inner_box2">
                <img src="${liData.banner1.IMAGE}" alt="images"></img>
            </div>
        </div>
        `;
});



// 배너에 맞춘 텍스트 가져오기 ////////////////////////////////////////////////////////////////