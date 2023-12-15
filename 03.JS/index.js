import dFn from "./dom.js";
import liData from "./data.js";

window.onload = () => {
  setTimeout(() => {
    scrollTo(0, 0);
  }, 100);
};

const section1 = dFn.qs(".section1");
const section2 = dFn.qs(".section2");

const text1 = dFn.qs("#textarea_1");
const text2 = dFn.qs("#textarea_2");

const bannerLi = dFn.qsa(".section1 li");

const banner_0_height = dFn.getBCRB(bannerLi[bannerLi.length - (bannerLi.length)])
const banner_0_height_d = banner_0_height / 100 * 17;

const banner_1_height = dFn.getBCRB(bannerLi[bannerLi.length - (bannerLi.length - 1)])
const banner_1_height_d = banner_1_height - banner_0_height_d

const banner_2_height = dFn.getBCRB(bannerLi[bannerLi.length - (bannerLi.length - 2)])
const banner_2_height_d = banner_2_height - banner_0_height_d

const banner_3_height = dFn.getBCRB(bannerLi[bannerLi.length - (bannerLi.length - 3)])
const banner_3_height_d = banner_3_height - banner_0_height_d

const banner_4_height = dFn.getBCRB(bannerLi[bannerLi.length - (bannerLi.length - 4)])
const banner_4_height_d = banner_4_height - banner_0_height_d

const DISPLAY_HEIGHT = window.innerHeight;

dFn.addEvt(window, "scroll", moveScreen);

function moveScreen() {
    var nowscrollposition = window.scrollY || document.documentElement.scrollTop;
    console.log(nowscrollposition, banner_1_height, banner_1_height_d);

    if(nowscrollposition < banner_0_height){
        text1.innerText = `${liData[0].TEXT[0]}`
        text2.innerText = `${liData[0].TEXT[1]}`
    }

    if(nowscrollposition > banner_0_height - banner_0_height_d){
        bannerLi[1].classList.remove('color_off');
        text1.innerText = `${liData[1].TEXT[0]}`
        text2.innerText = `${liData[1].TEXT[1]}`
    }

    if(nowscrollposition > banner_1_height_d){
        bannerLi[2].classList.remove('color_off');
        text1.innerText = `${liData[2].TEXT[0]}`
        text2.innerText = `${liData[2].TEXT[1]}`    
    }

    if(nowscrollposition > banner_2_height_d){
        bannerLi[3].classList.remove('color_off');
        text1.innerText = `${liData[3].TEXT[0]}`
        text2.innerText = `${liData[3].TEXT[1]}`    
    }

    if(nowscrollposition > banner_3_height_d){
        bannerLi[4].classList.remove('color_off');
        text1.innerText = `${liData[4].TEXT[0]}`
        text2.innerText = `${liData[4].TEXT[1]}`    
    }

    if(nowscrollposition > banner_4_height_d){
        bannerLi[5].classList.remove('color_off');
        text1.innerText = `${liData[5].TEXT[0]}`
        text2.innerText = `${liData[5].TEXT[1]}`    
    }
}

bannerLi.forEach((ele, idx) => {
  ele.innerHTML = `
    <div id="inner_box">
        <div id="inner_box2">
            <img class="ban_img" src="${liData[idx].IMAGE}" alt="image"/>
        </div>
    </div>
    `;
});


