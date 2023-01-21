
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAi120UPmID-Rpe1SKND4Ja3mIFIYnFtUo",
    authDomain: "study-b4c14.firebaseapp.com",
    databaseURL: "https://study-b4c14-default-rtdb.firebaseio.com",
    projectId: "study-b4c14",
    storageBucket: "study-b4c14.appspot.com",
    messagingSenderId: "840035717177",
    appId: "1:840035717177:web:a5bfa9b3e4875c0bc77de8",
    measurementId: "G-YZ0KS5NDZZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
