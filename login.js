console.log("connected...");
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBsGaNkZoKUpjU8am4UJl-n6ZFqXm6b4cE",
    authDomain: "personal-portfolio-webpa-1ac06.firebaseapp.com",
    projectId: "personal-portfolio-webpa-1ac06",
    storageBucket: "personal-portfolio-webpa-1ac06.appspot.com",
    messagingSenderId: "1034824003323",
    appId: "1:1034824003323:web:746be8f91b70bab70d0a5e",
    measurementId: "G-L6E2DR1P51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //   initialize variables
const auth = firebase.auth();
const database = firebase.database();


  //setting up the login function login
function login() {
  //get required input field
  email = document.getElementById('email').value;
  password = document.getElementById('pwd').value;
  
  //validate input fields
  if(email == null || password == null){
      alert('Email or Password cannot be empty');
      //dont continue running the code
  }
  
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password)
  .then(function () {
              // declear user variable
              var user = auth.currentUser

              // add this user to firebase database
              var database_ref = database.ref()
      
              // create user data
              var user_data = {
                  last_login : Date.now()
          }
          //Push to firebase database
          database_ref.child('users/' + user.uid).update(user_data);
      
          alert('User logged in')
          window.location.href="./chatPage.html"
      //  console.log("button is working...");   
  })
  .catch(function (error) {
            // firebase will use this to alert of it's error
            var error_code = error.code
            var error_message =error.message 
    
            alert(error_message)  
  })
}
