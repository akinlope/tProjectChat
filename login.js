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
//   firebase.analytics();

//   initialize variables

const auth = firebase.auth();
const database = firebase.database();
//for Registration 
  

    function register(){
        // Get all input fields 
    username = document.getElementById('uname').value;
    firstname = document.getElementById('fname').value;
    surname = document.getElementById('sname').value;
    email = document.getElementById('email').value;
    password = document.getElementById('pwd').value;
    // passWord2 = document.getElementById('pwd2').value;

    //validate password
console.log(password);
        function validate_password(password){
            if (password < 6){
                return false
            }else{
                return true
            }
        }
    //validate input fields 
    if(email == null || validate_password(password) == false){
        alert('Email or Password is not correct');
    
        //don't continue the code 
    }

    // move on with auth
    auth.createUserWithEmailAndPassword(email, password).then(function(){
        // declear user variable
        var user = auth.currentUser

        // add this user to firebase database
        var database_ref = database.ref()

        // create user data
        var user_data = {
            username : username,
            firstname : firstname,
            surname : surname,
            email : email,
            last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data);

    alert('User created')

    // link to the next page
    //window.location
    document.getElementById("myButton").onclick = function() {
        location.href = "./mainpage.html"
    }
    

    })
    .catch(function(error){
        // firebase will use this to alert of it's error
        var error_code = error.code
        var error_message =error.message 

        alert(error_message)

  
       
    })
    }

//for login

