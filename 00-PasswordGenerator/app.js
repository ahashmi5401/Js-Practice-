let screen = document.getElementById("screen");
let genPass = document.getElementById("genPass");

genPass.addEventListener('click' , generatePass);

const wordBank = "1wdfgiop56yEXUBT7U$%^&ufd$edxswe$thS456dfbf45yhCGUDE456YGDGHJ";
function generatePass () {
    let password = "";
    console.log("run");
    for(let i = 0 ; i < 8 ; i++){
        let random = Math.floor(Math.random() * wordBank.length);
        password += wordBank[random];
    }
    screen.innerHTML = password;

}
