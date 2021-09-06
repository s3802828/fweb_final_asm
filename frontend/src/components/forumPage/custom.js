const likeBtn = document.querySelector(".like__btn")
const likeIcon = document.querySelector("#like-icon")
const count = document.querySelector("#count")

// button clicked

let clicked = false;

likeBtn.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fa fa-thumbs-up hover-icon vote-button w3-large" value="0"></i>`;
        count.textContent++;
    }
    else {
        clicked = false;
        likeBtn.innerHTML = `<i class="fa fa-thumbs-up hover-icon vote-button w3-large" value="0"></i>`;
        count.textContent--;
    }
})