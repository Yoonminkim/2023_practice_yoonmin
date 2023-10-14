
// DOM 함수 임포트 해오기
import dFn from './dom.js';

// liData 임포트 해오기
import liData from './data.js';

// 새로고침 했을 때, 스크롤을 맨 위로 보내기
window.onload = () =>{
    setTimeout(()=>{
        scrollTo(0,0)
    }, 100);
};

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

// 화면을 불러오자마자 처음 단계의 텍스트가 나오도록 설정
Text1.innerText = `${liData[0].TEXT[0]}`
Text2.innerText = `${liData[0].TEXT[1]}`

// 텍스트를 바꾸기 위해 TOP 높이값 확인하기
function moveScreen(){
    
    // section1의 높이에 맞춰 section2의 stikcy 값을 고정
    let nowHeight = dFn.getBCRT(banner1Li[5]);

    // 높이 값에 맞춰 텍스트 변경! 및 클래스 추가 변경으로 색상 조정
    if(nowHeight > 2160){
        Text1.innerText = `${liData[0].TEXT[0]}`
        Text2.innerText = `${liData[0].TEXT[1]}`
        banner[0].classList.remove('color_off');
        banner[1].classList.add('color_off');
    }
    else if(2160 > nowHeight && nowHeight > 1680){
        Text1.innerText = `${liData[1].TEXT[0]}`
        Text2.innerText = `${liData[1].TEXT[1]}`
        banner[0].classList.add('color_off');
        banner[1].classList.remove('color_off');
        banner[2].classList.add('color_off');
    }
    else if(1680 > nowHeight && nowHeight > 1200){
        Text1.innerText = `${liData[2].TEXT[0]}`
        Text2.innerText = `${liData[2].TEXT[1]}`
        banner[1].classList.add('color_off');
        banner[2].classList.remove('color_off');
        banner[3].classList.add('color_off');
    }
    else if(1200 > nowHeight && nowHeight > 720){
        Text1.innerText = `${liData[3].TEXT[0]}`
        Text2.innerText = `${liData[3].TEXT[1]}`
        banner[2].classList.add('color_off');
        banner[3].classList.remove('color_off');
        banner[4].classList.add('color_off');
    }
    else if(720 > nowHeight && nowHeight > 255){
        Text1.innerText = `${liData[4].TEXT[0]}`
        Text2.innerText = `${liData[4].TEXT[1]}`
        banner[3].classList.add('color_off');
        banner[4].classList.remove('color_off');
        banner[5].classList.add('color_off');
    }
    else {
        Text1.innerText = `${liData[5].TEXT[0]}`
        Text2.innerText = `${liData[5].TEXT[1]}`
        banner[5].classList.remove('color_off');
        banner[4].classList.add('color_off');
    }
}

// 배너에 이미지 넣기 ///////////////////////////////////////////////////////////////

// 대상선정: #banner1 li
const banner = dFn.qsa('#banner1 li');

console.log(banner);

banner.forEach((ele,idx) => {
    ele.innerHTML = `
        <div id="inner_box">
            <div id="inner_box2">
                <img class="ban_img" src="${liData[idx].IMAGE}" alt="image"/>
            </div>
        </div>
    `
});

banner.forEach(ele => {
    ele.addEventListener('mouseover', ()=>{
        ele.classList.add('effect_text');
    });
    ele.addEventListener('mouseout', ()=>{
        ele.classList.remove('effect_text');
    });
    ele.addEventListener('click', () => {
        console.log('click!', ele);
    })
});

// 배너에 맞춘 텍스트 가져오기 ////////////////////////////////////////////////////////////////
