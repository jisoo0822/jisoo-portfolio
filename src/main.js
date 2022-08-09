import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from "vue";


export const app = createApp(App)
app.AOS = new AOS.init({disable:false});

app.use(AOS).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfQm6jsgUHgr1fVEZJzbS9uiaB3LfqHCk",
  authDomain: "first-project-jisoo.firebaseapp.com",
  databaseURL: "https://first-project-jisoo-default-rtdb.firebaseio.com",
  projectId: "first-project-jisoo",
  storageBucket: "first-project-jisoo.appspot.com",
  messagingSenderId: "480091289967",
  appId: "1:480091289967:web:548f7e6a16c150b71b509a"
};

// Initialize Firebase
initializeApp(firebaseConfig);