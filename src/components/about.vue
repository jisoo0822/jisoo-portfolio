<template>
  <div class="w1440 wrap">
    <div class="aboutBox flex" data-aos="fade-up"
     data-aos-duration="3000">
      <div class="textSliderWrap">
        <div class="textSlider">
          <span class="sliderText">Frotend</span>
        </div>
        <div class="textSlider">
          <span class="sliderText">HTML/CSS</span>
        </div>
        <div class="textSlider">
          <span class="sliderText">Javascript</span>
        </div>
        <div class="textSlider">
          <span class="sliderText">Vue.js</span>
        </div>
      </div>
      <div class="barWrap">
        <div class="textBar"></div>
      </div>
      <div class="infomation">
        <div class="memoji">
          <div class="dev">
            Developer
          </div>
          <div class="memojiCircle"></div>
          <div class="memojiCircleH"></div>
          <div class="memojiImg">
            <img src="../assets/img/memoji.png" alt="축하미모지">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="memojiCursor">
            <path d="M21 14.655l-5.799.908 3.393 6.917L15.483 24l-3.413-6.982L8 20.669V4.812l13 9.843M8.208 3.75l-1.042.519L5.63 1.182 6.673.663 8.208 3.75zM10.807.173L9.655 0l-.513 3.409 1.152.173.513-3.409zM6.028 6.021l.557-1.023L3.557 3.35 3 4.373l3.028 1.648z"></path>
          </svg>
        </div>
        <div class="info">
          <div class="infoButton">Jeong Jisoo</div>
          <div class="infoButton">1996.08.22</div>
          <div class="infoButton">한양여자대학교 정보경영과 졸업</div>
          <div class="infoButton">그린컴퓨터학원 프론트엔드 과정 수료</div>
        </div>
      </div>
      <div class="infoText">
        <div>
          <span class="highlight">Frotend</span>를 깊이있게 다져나가고자 하는<span class="highlight">신입개발자</span>입니다. <br>
          Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.<br>
          사용자를 즐겁게 하는 <span class="highlight">창의적인</span> 작업을 하는 모든 것들을 즐깁니다. 또한, 지금보다 더 나은 결과를 위해서
          <br> 새로운 것을 배우는 것을 마다하지 않으며, 무엇이든 관심이 생기면 빠르게 <span class="highlight">도전</span> 하고 <span class="highlight">실행</span> 합니다.
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutV',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutBox{
    background-color: #eeeeee;
    border-radius: 2rem;
    height: 100%;
    padding: 3rem 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    top: 0;
    flex-direction: column;
  }
  .textSliderWrap{
    display: flex;
    overflow: hidden;
    width: 400%;
    animation: slide 16s infinite;
  }
  .textSlider{
    font-family: 'Montserrat', sans-serif;
    color: #00ADB4;
    font-size: 4.5rem;
    font-weight: 800;
    padding-left: 4%;
    box-sizing: border-box;
    width: 100%;
  }
  .barWrap{
    position: relative;
    height: 0.2rem;
    width: 70%;
  }
  .textBar{
    height: 0.3rem;
    background: linear-gradient(128.93deg, rgb(0, 173, 181) 22.41%, rgb(57, 62, 70) 93.45%);
    position: absolute;
    animation: 4s ease 0s infinite normal none running progress;
  }
  .infomation{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 5rem;
    position: relative;
  }
  .memoji{
    width: 208px;
    height: 208px;
    position: relative;
  }
  .dev{
    position: absolute;
    background-color: rgb(57, 62, 70);
    padding: 0.5rem 1.5rem;
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 2rem;
    color: rgb(238, 238, 238);
    left: -1rem;
    top: 1.8rem;
    transform: rotate(-10deg);
    border: 0.2rem solid white;
  }
  .memojiCircle{
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    background-color: rgb(0, 173, 181);
  }
  .memojiCircleH{
    opacity: 0;
    transition: all 0.3s ease 0s;
    position: absolute;
    top: 0px;
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    background-color: rgb(57, 62, 70);
  }
  .memojiImg{
    position: absolute;
    top: 3rem;
    left: 4rem;
  }
  .memojiImg>img{
    width: 177px;
    height: 177px;
  }
  .memojiCursor{
    position: absolute;
    left: 1.2rem;
    bottom: 1.2rem;
    fill: rgb(255, 255, 255);
    transform: rotate(60deg);
    animation: 1s linear 0s infinite normal none running opacity;
  }
  .info{
    border-radius: 2.5rem;
    padding: 4rem;
    margin-left: 5rem;
    box-sizing: border-box;
    height: 13rem;
    display: flex;
    font-weight: 600;
    letter-spacing: 0.1rem;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 0.2rem solid rgb(0, 173, 181);
  }
  .infoButton{
    cursor: pointer;
    width: 100%;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    border: 0.5rem solid rgb(238, 238, 238);
    background-color: rgb(57, 62, 70);
    color: rgb(238, 238, 238);
  }
  .infoButton:hover{
     background-color:rgb(0, 173, 181);
  }
  .infoText{
    white-space: pre-line;
    line-height: 230%;
    margin-top: 3rem;
    font-size: 1.1rem;
    width: 70%;
  }
  .infoText .highlight{
    font-weight: 700;
    font-size: 1.3rem;
    margin-left: 0.3rem;
    background: linear-gradient(to right, #00ADB4 0%, #014447 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 1000px){
    .textSlider{
      font-size: 4rem;
    }
  } 
  @media screen and (max-width: 720px){
    .textSlider{
      font-size: 3rem;
    }
    .infomation{
      flex-direction: column;
      padding: 3rem 0;
    }
    .dev{  
      font-size: 1rem;
    }
    .memojiCircle{
      width: 10rem;
      height: 10rem;
    }
    .memojiImg{
      left: 3rem;
  }
    .memojiImg>img{
      width: 150px;
      height: 150px;
  }
  .memojiCursor{
    bottom: 3.5rem;
    margin: 0;
  }
    .info{
      height: 10rem;
      margin-left: 0;
      padding: 2rem;
      font-size: 0.8rem;
    }
    .infoButton{
      width: 90%;
      padding: 0.5rem 1.5rem;
    }
    .infoText{
      font-size: 0.8rem;
      margin-top: 1rem;
    }
    .infoText .highlight{
      font-size: 1rem;
    }
  } 
  @media screen and (max-width: 430px){
    .textSlider{
      font-size: 2rem;
    }
    .dev{  
      font-size: 0.8rem;
    }
    .info{
      padding: 0rem;
      font-size: 0.6rem;
    }
    .infoButton{
      width: 70%;
    }
    .infoText{
      font-size: 0.6rem;
    }
    .infoText .highlight{
      font-size: 0.7rem;
    }
  } 

</style>
