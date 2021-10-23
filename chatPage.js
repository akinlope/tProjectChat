//Initiallize firebase
const firebaseConfig = {
    apiKey: "AIzaSyBsGaNkZoKUpjU8am4UJl-n6ZFqXm6b4cE",
    authDomain: "personal-portfolio-webpa-1ac06.firebaseapp.com",
    databaseURL: "https://personal-portfolio-webpa-1ac06-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-webpa-1ac06",
    storageBucket: "personal-portfolio-webpa-1ac06.appspot.com",
    messagingSenderId: "1034824003323",
    appId: "1:1034824003323:web:746be8f91b70bab70d0a5e",
    measurementId: "G-L6E2DR1P51"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});

//create variables
var messages = document.querySelector(".chats");
var textbox = document.getElementById("textbox");
var button = document.getElementById("send-btn")

//for send button
button.addEventListener("click", function () {
    
    var newMessage = document.createElement("ul")
    newMessage.innerHTML = textbox.value; 
    messages.appendChild(newMessage);
    textbox.value = ""
     

    
});


db.collection('chats').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
})