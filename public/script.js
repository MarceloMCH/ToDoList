const CloseMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

CloseMessage.addEventListener("click",() => {
    message.style.display = "none";
});

setTimeout(()=>{
    message.style.display = "none";
}, 5000);