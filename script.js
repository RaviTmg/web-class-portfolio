
document.addEventListener("DOMContentLoaded", () => {
    let firstName;
    let message;

    const nameInputElement = document.getElementById("input_first_name")
    nameInputElement.addEventListener("input", (e) => {
        firstName = e.target.value;
    });

    const messageInputElement = document.getElementById("input_message");
    messageInputElement.addEventListener("input", (e) => {
        message = e.target.value;
    });

    const sendButton = document.getElementById("btn_send");
    sendButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(firstName, message);
        alert("message sent successfully");
    })
});

console.log("hello world before dom ready");
