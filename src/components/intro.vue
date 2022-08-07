<template>
  <div class="content_wrap">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text"> 안녕하세요 !</p>
        
          <ul class="content__container__list">
            <li class="content__container__list__item">꿈꾸는</li>
            <li class="content__container__list__item">창의적인</li>
            <li class="content__container__list__item">소통하는</li>
            <li class="content__container__list__item">생각하는</li>
          </ul>
          <p class="content__container__text">
          프론트엔드 개발자 정지수 입니다
          </p>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'intro-page',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_wrap{
  width: 100%;
  height: 100%;
  padding: 500px 0;
}
.content {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  line-height: 40px;
  color: #ecf0f1;
}
.content__container {
  overflow: hidden;
  height: 40px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  
}
.content__container:before {
  content: "[";
  left: 0;
  font-weight: 700;
}
.content__container:after {
  content: "]";
  position: absolute;
  right: 0;
  font-weight: 700;
}
.content__container:after, .content__container:before {
  position: absolute;
  top: 0;
  color: #00ADB4;
  font-size: 2.2rem;
  line-height: 40px;
  -webkit-animation-name: opacity;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-name: opacity;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.content__container__text{
  font-weight: 600;
}
.content__container__list {
  margin: 0 30px;
  color: #00ADB4;
  text-align: center;
  font-weight: 700;
  font-size: 39px;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
.content__container__list__item {
  line-height: 40px;
  margin: 0;
}


@media screen and (max-width: 1440px){
  .content{
    width: 80%;
  }
  .content__container{
    padding: 0;
  }
}
@media screen and (max-width: 1000px){
  .content{
    width: 90%;
    font-size: 1.5rem;
  }
  .content__container__list{
    font-size: 1.6rem;
  }
}

@media screen and (max-width: 770px){
  .content{
    font-size: 1rem;        
  }
  .content__container__list{
    font-size: 1.1rem;
    margin: 0;
  }
}

@media screen and (max-width: 430px){
  .content_wrap{
    padding: 350px 0;
  }
  .content{
    font-size: 0.7rem;        
  }  
  .content__container__list{
    font-size: 0.8rem;
  }      
}
</style>
