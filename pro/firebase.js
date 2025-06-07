<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaAvD5F5RWlnJsG_wg1B5qpP2r8Yp0rbY",
    authDomain: "collegeattendanceapp-b8903.firebaseapp.com",
    projectId: "collegeattendanceapp-b8903",
    storageBucket: "collegeattendanceapp-b8903.firebasestorage.app",
    messagingSenderId: "218095249582",
    appId: "1:218095249582:web:6a34a9651ea9d91baee53f",
    measurementId: "G-TBH7Y8J406"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>