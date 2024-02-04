const clickAreas = document.querySelectorAll(".stars div");
const stars = document.querySelectorAll(".stars i");

clickAreas.forEach((area, i) => {
  area.addEventListener("click", () => {
    stars.forEach((star) => (star.className = "bx bx-star"));
    const starCount = (i + 1) / 2;

    for (let j = 0; j < starCount; j++) {
      if (starCount - j === 0.5 && j === starCount - 0.5) {
        stars[j].className = "bx bxs-star-half";
      } else {
        stars[j].className = "bx bxs-star";
      }
    }

    document.querySelector(".rating span").textContent = starCount;
  });
});

document.getElementById("comment").textContent = 2;

"use strict";
const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}
const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const item = document.getElementById("item");
const star = document.querySelector(".rating span");
userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
})


function addPost() {
    if (!userComment.value) return;
    userId.name = userName.value;
    if (userId.name === "Thực khách") {
        userId.identity = false;
        userId.image = "img/guest.png";
    } else {
        userId.identity = true;
        userId.image = "img/user.png"
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();
    let published =
        `<div class="parents">
            <img src="${userId.image}">
            
            <div>
                <h1> ${userId.name}&nbsp;&nbsp;</h1>
                <div> <span class="date">${userId.date}</span> </div>
                <h2>Món: ${item.value}&nbsp;&nbsp;</h2>
                <p>Đánh giá: ${star.textContent} sao</p>
                <p>Bình luận: ${userId.message}</p>
            </div>
        </div>`;

    comments.innerHTML += published;
    userComment.value = "";

    let commentNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentNum;
}

publishBtn.addEventListener("click", addPost)


