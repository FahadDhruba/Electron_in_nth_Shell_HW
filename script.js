const form = document.querySelector(".wrapper form"),
fullURL = form.querySelector("input"),
shortenBtn = form.querySelector("form button"),
blurEffect = document.querySelector(".blur-effect"),
popupBox = document.querySelector(".popup-box"),
infoBox = popupBox.querySelector(".info-box"),
form2 = popupBox.querySelector("form"),
shortenURL = popupBox.querySelector("form .shorten-url"),
copyIcon = popupBox.querySelector("form .copy-icon"),
saveBtn = popupBox.querySelector("button");

form.onsubmit = (e)=>{
    e.preventDefault();
}

shortenBtn.onclick = ()=>{
                blurEffect.style.display = "block";
                popupBox.classList.add("show");
}
