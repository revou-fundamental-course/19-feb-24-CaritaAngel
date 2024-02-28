let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
    console.log('nextSlide -> ' + n);
    console.log('slideIndex -> ' + slideIndex);
}

function showSlide(n) {
    let listImages = document.getElementById('header-img');
    console.log('listImage -> ' + listImages.length);
    console.log('n -> ' + n);
    if(n > listImages.length) slideIndex = 1;
    let i = 0;
    while(i < listImages.length) {
        listImages[i].style.display = 'none';
        i++;
    }
    listImages[slideIndex - 1].style.display = 'block';
    console.log(slideIndex);
}

const slideInterval = setInterval(() => nextSlide(1), 1000);

document.getElementById('send-message-us-form').addEventListener('click', () => sendForm());

function sendForm() {
    let date = Date();
    let name = document.forms['message-form']['name'];
    let birth = document.forms['message-form']['birth'];
    let gender = document.forms['message-form']['gender'];
    let message = document.forms['message-form']['message'];
    if(name.value == '' || birth.value == '' || gender.value == '' || message.value == '') {
        alert('Harap Periksa Kembali Inputan Anda');
    }
    else{
        document.getElementById('current-time').innerHTML = date;
        document.getElementById('name'). innerHTML = name.value;
        document.getElementById('birth'). innerHTML = birth.value;
        document.getElementById('gender'). innerHTML = gender.value;
        document.getElementById('message'). innerHTML = message.value;
    }

    return false;
}