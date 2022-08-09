<template>
  <div class="w1440 wrap">
    <div class="proCard"  data-aos="zoom-in">
      <div class="clickBtn clickBtnR">
        <img src="../assets/img/clickL.png" alt="클릭버튼">
      </div>
      <div class="proTxtWrap">
        <div class="proTitle">
          서문야시장
          <span>
            2022.03~2022.05
          </span>
          <div class="proEx">
            <span>처음으로 만들어본 벤치마킹 페이지 입니다.</span>
            <span>기존 사이트의 개선을 더한 반응형웹 사이트 입니다.</span>
            <span>node.js와 Mysql을 사용하여 게시판을 제작하였습니다.</span>
            <!-- <span>카카오api를 활용하여 로그인을 구현하였습니다.</span> -->
            <br>
            <span>Skills</span>
            <span>HTML/CSS , JS , Node.js , Mysql</span>
            <span>Tools</span>
            <span>VScode , Photoshop , Illustrator</span>
            <br>
            <span>개인제작</span>
            <span>참여도100%</span>
            <div class="view viewL">
              <div class="btnView"><a href="https://seomoon0822.herokuapp.com/" target="_blank">VIEW</a></div>
              <div class="btnView"><a href="https://github.com/jisoo0822/project"  target="_blank">CODE</a></div>
            </div>
          </div>
        </div>
        <div class="proImg" @click="modalS = true">
        <img src="../assets/img/mockup_semoon.png" alt="서문시장이미지">
        </div>
      </div>
      <div class="project proL">Project1#</div>
      <div class="prNarrow nrowL"></div>
    </div>
    <div class="proCard right"  data-aos="zoom-in">
      <div class="clickBtn clickBtnL">
        <img src="../assets/img/click.png" alt="클릭버튼">
      </div>
      <div class="proTxtWrap">
        <div class="proImg proImgL" @click="modalN = true">
          <img src="../assets/img/mockup_nowon.png" alt="노원문화원이미지">
        </div>
        <div class="proTitle titleL">
          노원문화원
          <span>
            2022.05~2022.06
          </span>
          <div class="proEx">
            <span>팀 프로젝트로 진행한 리뉴얼 사이트 입니다.</span>
            <span>기존 사이트의 조잡한 메뉴 구성과 </span>
            <span>메인페이지의 중복메뉴 등 </span>
            <span>아쉬운점을 개선하여 제작하였습니다.</span>
            <br>
            <span>Skills</span>
            <span>HTML/CSS , JS , Node.js , Mysql</span>
            <span>Tools</span>
            <span>VScode , Photoshop , Illustrator</span>
            <br>
            <span>4인제작</span>
            <span>Navigation_script, Main section2</span>
            <span>문화강좌 page, 노원아카이브-마들농요 page 제작</span>
            <div class="view viewR">
              <div class="btnView"><a href="https://nw5jo.herokuapp.com/" target="_blank">VIEW</a></div>
              <div class="btnView"><a href="https://github.com/jisoo0822/nwcc" target="_blank">CODE</a></div>
            </div>
        </div>
        </div>
      </div>
      <div class="project proR project2">Project2#</div>
      <div class="prNarrow nrowR"></div>
    </div>
    <div class="proCard" data-aos="zoom-in">
      <div class="proTxtWrap">
        <div class="proTitle">
          싱그러운집
          <span>
            2022.03~2022.05
          </span>
          <div class="proEx">
          <span>싱그러운집 웹클론 사이트입니다.</span>
          <span> Swiper 슬라이드 플러그인을 사용하였으며,</span>
          <span> 반응형으로 제작 되었습니다.</span>
          <br>
          <span>Skills</span>
          <span>HTML/CSS , JS</span>
          <span>Tools</span>
          <span>VScode</span>
          <br>
          <span>개인제작</span>
          <span>참여도100%</span>
          <div class="view viewL">
              <div class="btnView"><a href="http://ddoroy.dothome.co.kr/singhouseWT.html" target="_blank">VIEW</a></div>
              <div class="btnView"><a href="https://github.com/jisoo0822/shouse" target="_blank">CODE</a></div>
          </div>
        </div>
        </div>
        <div class="proImg">
        <img src="../assets/img/mockup_sing.png" alt="서문시장이미지">
        </div>
      </div>
      <div class="project proL webclone1">Webclone1#</div>
      <div class="prNarrow nrowL"></div>
    </div>
    <div class="proCard right"  data-aos="zoom-in">
      <div class="proTxtWrap">
        <div class="proImg proImgL">
        <img src="../assets/img/mockup_pollex.png" alt="서문시장이미지">
        </div>
        <div class="proTitle titleL">
          폴렉스존
          <span>
            2022.04~2022.05
          </span>
          <div class="proEx">
          <span>폴렉스존 웹클론 사이트입니다.</span>
          <span>반응형으로 제작 되었습니다.</span>
          <br>
          <span>Skills</span>
          <span>HTML/CSS , Javascript</span>
          <span>Tools</span>
          <span>VScode</span>
          <br>
          <span>개인제작</span>
          <span>참여도100%</span>
          <div class="view viewR">
              <div class="btnView"><a href="http://ddoroy.dothome.co.kr/pollexzone.html" target="_blank">VIEW</a></div>
              <div class="btnView"><a href="https://github.com/jisoo0822/pollexzone" target="_blank">CODE</a></div>
          </div>
        </div>
        </div>
      </div>
      <div class="project proR webclone2">Webclone2#</div>
      <div class="prNarrow nrowR"></div>
    </div>
        <div class="proCard" data-aos="zoom-in">
      <div class="proTxtWrap">
        <div class="proTitle">
          대전문화재단
          <span>
            2022.05~2022.06
          </span>
          <div class="proEx">
          <span> 대전문화재단 웹클론 사이트입니다.</span>
          <span>반응형으로 제작 되었습니다.</span>
          <br>
          <span>Skills</span>
          <span>HTML/CSS , Javascript </span>
          <span>Tools</span>
          <span>VScode</span>
          <br>
          <span>개인제작</span>
          <span>참여도100%</span>
          <div class="view viewL">
              <div class="btnView"><a href="http://ddoroy.dothome.co.kr/dcaf.html" target="_blank">VIEW</a></div>
              <div class="btnView"><a href="https://github.com/jisoo0822/dcaf" target="_blank">CODE</a></div>
          </div>
        </div>
        </div>
        <div class="proImg">
        <img src="../assets/img/mockup_decf.png" alt="서문시장이미지">
        </div>
      </div>
      <div class="project proL webclone3">Webclone3#</div>
      <div class="prNarrow nrowL"></div>
    </div>
    <div class="proCard right" data-aos="zoom-in">
      <div class="proTxtWrap">
        <div class="proImg proImgL">
        <img src="../assets/img/mockup_ha.png" alt="서문시장이미지">
        </div>
        <div class="proTitle titleL">
          HOBBYIST
          <span>
            2018.04~2018.10
          </span>
          <div class="proEx">
          <span>졸업작품으로 제작한 사이트 입니다.</span>
          <span>현재 서버가 남아있지 않아 Mockup과 ERD만 볼 수 있습니다.</span>
          <span>원데이클래스 수강을 신청하는 사이트 입니다.</span>
          <span>팀프로젝트로 진행하였으며, </span>
          <span>강사신청,클래스 등록,수강 신청</span>
          <span>기능구현과 페이지를 맡아 제작하였습니다.</span>
          <br>
          <span>Skills</span>
          <span>HTML/CSS , Javascript, python, Django, SQLite</span>
          <span>Tools</span>
          <span>sublimetext3 , Photoshop , Illustrator</span>
          <br>
          <span>3인 제작</span>
          <span>참여도30%</span>
          <div class="view viewR">
              <div class="btnView"><a @click="modalH = true">Mockup</a></div>
              <div class="btnView"><a  @click="modalE = true">ERD</a></div>
          </div>
        </div>
        </div>
      </div>
      <div class="project proR project3">Project3#</div>
      <div class="prNarrow nrowR"></div>
    </div>
    <div class="black-bg" v-if="modalN == true"  @click="modalN = false">
      <div class="imgbox">
        <img src="../assets/img/nwcc.jpg" alt="">
      </div>
    </div>
    <div class="black-bg" v-if="modalS == true"  @click="modalS = false">
      <div class="imgbox">
        <img src="../assets/img/seomoonmockup.jpg" alt="">
      </div>
    </div>
    <div class="black-bg" v-if="modalH == true"  @click="modalH = false">
      <div class="imgbox">
        <img src="../assets/img/hobbyist.jpg" alt="">
      </div>
    </div>
    <div class="black-bg" v-if="modalE == true"  @click="modalE = false">
      <div class="imgbox imgboxE">
        <img src="../assets/img/erd.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return{
      modalN:false,
      modalS:false,
      modalH:false,
      modalE:false,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .proCard{
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 6rem;
    /* padding-right: 4.5rem; */
    padding-bottom: 0;
    border-left: 0.5rem solid #c84b31;
    margin-bottom: 10rem;
    top: 2rem;
    left: 3rem;
    z-index: 99;
  }
  .right{
    border-left:none;
    border-right: 0.5rem solid #c84b31;
    left: 0;
  }
  .clickBtn{
    width: 100px;
    height: 100px;
    position: absolute;
    animation: updown 0.9s infinite alternate;
    top: 13rem;

  }
  .clickBtnL{
    left: 3rem;
  }
  .clickBtnR{
    right: 3rem;
  }
  .clickBtn>img{
    width: 100%;
  }
  .proTxtWrap{
    display: flex;
    justify-content: space-between;
  }
  .proTitle{
    width: 40%;
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 800;
    color: #346751;
  }
  .titleL{
    text-align: right;
  }
  .proTitle>span{
    color: #393e46;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .proEx{
    position: relative;
    color: #393e46;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
  }
  .proEx>span{
    display: block;
  }
  .view{
    position: absolute;
    display: flex;
    margin-top: 2rem;
  }
  .viewR{
    right: 0;
  }
  .viewL{
    left: 0;
  }
   .view>.btnView{
    background-color: #d9d9d9;
    padding: 0.3rem 0;
   }
  .view>.btnView>a{
    color: #393e46;
    padding: 1rem 1rem;
    box-sizing: border-box;
    cursor: pointer;
  }
  .view>.btnView:last-child{
    margin-left: 1rem;
  }
  
  .project{
    color: white;
    background-color: #c84b31;
    position: absolute;
    font-size: 3rem;
    font-weight: 800;
    top: 0;

    line-height: 2.8rem;
  }
  .project::after{
    content: "Project1#";
    position: absolute;
    color: rgb(34, 40, 49);
    top: -0.3rem;
    left: -0.3rem;
  }
  .proL{
    left: -1rem;
  }
  .proR{
    right: -1rem;
  }
  .project2::after{
    content: "Project2#";
  }
  .webclone1::after{
     content: "Webclone1#";
  }
  .webclone2::after{
    content: "Webclone2#";
  }
  .webclone3::after{
    content: "Webclone3#";
  }
  .project3::after{
    content: "Project3#";
  }
  .proImg{
    cursor: pointer;
    width: 60%;
    padding-right: 50px;
  }
  .proImg>img{
    width: 100%;
  }
  .proImgL{
    padding-left: 50px;
    padding-right: 0;
  }
  .prNarrow{
    bottom: -0.2rem;

    position: absolute;
    height: 3rem;
    width: 0.5rem;
    background-color: #c84b31;
  }
  .nrowL{
    left: 0.5rem;
    transform: rotate(40deg);
  }
  .nrowR{
    right: 0.5rem;
    transform: rotate(-40deg);
  }
  .black-bg{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 20px;
    cursor: pointer;
  }
  .imgbox{
    width: 60%;
    height: 800px;
    overflow-y:scroll;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .imgboxE{
     overflow:auto;
  }
  .imgbox>img{
    width: 100%;
  }

  @media screen and (max-width: 780px){
    .proCard{
      padding: 3rem
    }
    .proTxtWrap{
      flex-direction: column;
    }
    .proImg{
      width: 100%;
    }
    .proImgL{
      order: 2;
    }
    .proImg>img{
      width: 50%;
    }
    .proImgL>img{
      padding-left: 35%;
    }
    .proTitle{
      width: 100%;
    }
    .view{
      bottom: -10rem;
    }

  }
  @media screen and (max-width: 430px){
  .proCard{
    border-left: 0.3rem solid #c84b31;
    margin-bottom: 5rem;
    left:15px;
  }
  .proTitle{
    font-size: 1.3rem;
  }
  .right{
    border-left:none;
    border-right: 0.3rem solid #c84b31;
    left: -25px;
  }
  .project{
    font-size: 2rem;
  }
  .prNarrow{
    width: 0.3rem;
    bottom:-0.3rem;
  }
  .project::after{
    top: -0.2rem;
    left: -0.2rem;
  }
  .proEx{
    font-size: 0.8rem;
  }
  .clickBtnL{
    left: 3rem;
    top: 23rem;
  }
  .clickBtnR{
    top: 21rem;
  }
}
</style>
