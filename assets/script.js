document.getElementById("btn").addEventListener('click', function(){

let passwordLength = 8;
let charset = "abcdefghi1234567890-";
let password = '';

for (let i = 0; i < passwordLength; i++){
    let wordIndex = Math.floor(Math.random() * charset.length);
  password += charset[wordIndex];  
}

document.getElementById('txt').value = password;

})