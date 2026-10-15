let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");
let buttonEl = document.getElementById("likeButton");
let isImageLiked = false;


function changePuppyImage() {
    if (isImageLiked === false) {
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.style.color = "#0967d2";
        buttonEl.style.backgroundColor = "#0967d2";
        buttonEl.style.color = "#ffffff";
        isImageLiked = true;
    }
    else {
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconEl.style.color = "#9aa5b1";
        buttonEl.style.backgroundColor = "#9aa5b1";
        buttonEl.style.color = "#cbd2d9";
        isImageLiked = false;
    }
}