<template>
  <div class="contectWrap">
    <div class="w1440 wrap con">
      <div class="coTitle">Contact.</div>
      <div class="contacted flex">
        <div class="number">
          <div class="nums">jssj384@gmail.com</div>
          <div class="nums">010 - 3731 - 6294</div>
          <div class="git ">
            <div class="gitLink"><a href="https://github.com/jisoo0822" target="blank">JisooGithub</a></div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z">

                </path>
              </svg>
            </div>
          </div>
        </div>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="mail">
            <div class="mailTop">
            <input type="text" name="to_name" class="mName" placeholder="Name">
            <input type="email" name="from_name" class="mName" placeholder="Email">
            </div>
            <input name="message" class="mailBot" placeholder="Message">
            <input type="submit" value="Send"  class="submit" @click="thanks = true">
          </div>
        </form>
        <div class="thanks" v-if="thanks==true">
          <div>Thank You :)</div>
          <div class="back"  @click="thanks = false">back</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'contact-me',
  methods: {
    sendEmail() {
      emailjs.sendForm('jssj384', 'template_icid3mn', this.$refs.form, 'Tu7xC5SZfmpsuUM9Q')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  },
  data(){
    return{
      thanks:false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contectWrap{
    position: relative;
    background-color: #000;
    padding: 7rem 0;
  }
  .con{
    position: relative;
    padding: 250px 0;
  }
  .coTitle{
    color: #00FF94;
    position: absolute;
    box-sizing: border-box;
    font-size: 8rem;
    font-weight: 800;
    left: 1rem;
    top: -5rem;
    width: 100%;
  }
  .coTitle::after{
    content: "Contact.";
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 0.1rem #001AFF;
    top: -0.4rem;
    left: -0.4rem;
  }
  .contacted{
    color: #00FF94;
    padding-left: 2rem;
    padding-top: 10rem;
  }
  .number{
    width: 50%;
  }
  .nums{
    margin-bottom: 1rem;
  }
  .git{
    display: flex;
    align-items: center;
  }
  .git a{
    color: #00FF94;
  }
  .icon>.svg{
    fill:#00FF94;
  }
  .mail{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .mail input{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #00FF94;
    outline: none;
    color:#00FF94;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;    
  }
  .mail input::placeholder{
    color:#00FF94;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    position: relative;
  }
  .mailTop{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .mName{ 
    width: 45%;
  }
  .mName:first-child{
    margin-right: 1rem;
  }
  .mail>.submit{
    width: 20%;
    border:1px solid #00FF94;
    border-radius: 2rem;
    background-color: transparent;
    color:#00FF94;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    line-height: 2rem;
    margin-top: 2rem;
    position: absolute;
    bottom: -3.5rem;
    right: 0;
  }
  .thanks{
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #000;
    top: 50%;
    right: 0;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }
  .back{
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    width: 10%;
    border:1px solid #00FF94;
    border-radius: 2rem;
    line-height: 2rem;
    position: absolute;
    right: 10rem;
    top: 10rem;
  }

  @media screen and (max-width: 430px){
    .con{
      padding: 100px 0;
    }
    .coTitle{
      font-size: 3rem;
    }
    .coTitle::after{
      top: -0.2rem;
      left: -0.2rem;
    }
    .contacted{
      padding-left: 0;
      padding-top: 4rem;
      flex-direction: column;
    }
    .number{
      margin: 0 auto;
      margin-bottom: 2rem;
      text-align: center;
    }
    .mail{
      width: 90%;
      margin: 0 auto;
    }
    .mail>.submit{
      right: 2rem;
    }
    .git{
      justify-content: center;
    }
    .thanks{
      width: 100%;
      top: 55%;
      font-size: 2rem;
    }
    .back{
      width: 20%;
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>
