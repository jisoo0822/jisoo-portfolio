<template>
  <div class="w1440 wrap">
    <div class="skill flex">
      <div class="skillTxt">Strength.</div>
      <div class="skills">
        <div class="skills__strong">Javascript</div>
        <div class="skills__strong">Vue.js</div>
        <div class="skills__strong">scss</div>
        <div class="skills__strong">jQuery</div>
        <div class="skills__strong">node.js</div>
        <div class="skills__strong">mysql</div>
        <div class="skills__strong">figma</div>
        <div class="skills__strong">Django</div>
      </div>
      <div class="strength">
        <div class="strengthBox" data-aos="flip-right">
          <div class="stName">Vue</div>
          <div class="stContents">
            <div class="stTxt">
              Template와 Component를 사용할 수 있으며, 
            </div>
            <div class="stTxt">
              인스턴스 생성, 화면 부착, 갱신, 소멸 단계를 구분하여 사용할 수 있습니다.
            </div>
            <div class="stTxt">
              배열 데이터를 기본으로 화면 렌더링을 할 수 있으며, 각종 이벤트 함수를 응용할 수 있습니다.
            </div>
          </div>
        </div>
        <div class="strengthBox" data-aos="flip-right">
          <div class="stName">Javascript</div>
          <div class="stContents">
            <div class="stTxt">
              ES6+ 문법에 익숙합니다.
            </div>
            <div class="stTxt">
              ECMAScript의 변화를 꾸준히 살피고 학습합니다.
            </div>
            <div class="stTxt">
              주요개념을 인지하고 있고 가독성 좋은 코드를 만들려 노력합니다.
            </div>
          </div>
        </div>
        <div class="strengthBox" data-aos="flip-right">
          <div class="stName">HTML/CSS</div>
          <div class="stContents">
            <div class="stTxt">
            웹표준을 지키려 노력합니다.
            </div>
            <div class="stTxt">
            SCSS 문법을 사용할 수 있습니다.
            </div>
            <div class="stTxt">
            keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.
            </div>
            <div class="stTxt">
            BEM 방법론을 적용할 수 있습니다.
            </div>
          </div>
        </div>
        <div class="strengthBox" data-aos="flip-right">
          <div class="stName">Node.js</div>
          <div class="stContents">
            <div class="stTxt">
            Express를 이용하여 간단한 백엔드 서버를 구축할 수 있습니다.
            </div>
            <div class="stTxt">
            데이터베이스와 연결하여 간단한 메모, 게시판등의 기능구현이 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill-strength',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skill {
    flex-direction: column;
  }
  .skillTxt{
    width: 95%;
    color: rgb(0, 173, 181);
    position: relative;
    font-size: 3rem;
    font-weight: 800;
  }
  .skillTxt::after{
    content: "Strength.";
    position: absolute;
    color: rgb(238, 238, 238);
    top: -0.3rem;
    left: -0.3rem;
  }
  .skills{
    display: flex;
    width: 95%;
    margin-top: 2rem;
    z-index: 1;
  }
  .skills__strong{
    border: 0.2rem solid white;
    font-weight: 500;
    padding: 0.1rem 0.5rem;
    border-radius: 1rem;
    color: rgb(238, 238, 238);
    margin-right: 1rem;
    font-size: 0.9rem;
  }
  .strength{
    width: 100%;
    margin: 2rem -2rem 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .strengthBox{
    border: 0.2rem solid rgb(0, 173, 181);
    border-radius: 2rem;
    margin: 2rem;
    padding: 2rem;
    position: relative;
  }
  .stName{
    transform: rotate(-10deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    border: 0.2rem solid rgb(238, 238, 238);
    color: rgb(0, 173, 181);
    background-color: rgb(34, 40, 49);
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: 800;
  }
  .stContents{
    margin-top: 1.5rem;
    color: rgb(238, 238, 238);
    line-height: 150%;
  }
  .stTxt{
    line-height: 2rem;
    position: relative;
    z-index: 3;
  }
  @media screen and (max-width: 770px){
  .stName{
    font-size: 1.5rem;
    }
  .strengthBox{
    padding: 1rem;
    }
  }
  @media screen and (max-width: 430px){
    .skills{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: 1rem;
    }
    .skills__strong{
      border: 0.1rem solid white;
      margin: 0.1rem;
      padding: 0.3rem;
      text-align: center;
      font-size: 0.8rem;
    }
    .strength{
        margin: 3rem 0px 0px;
        display: flex;
        flex-direction: column;
      } 
    .strengthBox{
      margin: 0.7rem;
      border: 0.1rem solid rgb(0, 173, 181);

      }
    .stName{
      font-size: 1rem;
      border: 0.1rem solid rgb(238, 238, 238);
      left: -0.5rem;
      }
    .stContents{
      font-size: 0.8rem;
    }
  }
</style>
