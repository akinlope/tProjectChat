//create variables
var messages = document.querySelector(".chats");
var textbox = document.getElementById("textbox");
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    
    var newMessage = document.createElement("ul")
    newMessage.innerHTML = textbox.value; 
    messages.appendChild(newMessage);
    textbox.value = ""
     

    
});