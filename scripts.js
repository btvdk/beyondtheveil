<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5iIr7sbq6m08YH37Qjo_wf5vjdh2pwFA",
    authDomain: "btv-backend.firebaseapp.com",
    projectId: "btv-backend",
    storageBucket: "btv-backend.appspot.com",
    messagingSenderId: "9416678862",
    appId: "1:9416678862:web:3c8e7bd6a8d621bc9cdf9f",
    measurementId: "G-KCDWB0FCD9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
