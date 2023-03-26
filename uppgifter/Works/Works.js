const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
const likeBtn2 = document.getElementById("like-btn2");
const likeCount2 = document.getElementById("like-count2");
const likeBtn3 = document.getElementById("like-btn3");
const likeCount3 = document.getElementById("like-count3");
const likeBtn4 = document.getElementById("like-btn4");
const likeCount4 = document.getElementById("like-count4");

let likes = parseInt(localStorage.getItem("likes")) || 0;

let hasLiked = localStorage.getItem("hasLiked") || false;

likeCount.textContent = likes;

likeBtn.textContent = hasLiked ? "Unlike" : "Like";

likeBtn.addEventListener("click", function () {
  if (!hasLiked) {
    likes++;
    localStorage.setItem("likes", likes);
    localStorage.setItem("hasLiked", true);
    likeCount.textContent = likes;
    likeBtn.textContent = "Unlike";
    hasLiked = true;
  } else {
    likes--;
    localStorage.removeItem("hasLiked");
    localStorage.setItem("likes", likes);
    likeCount.textContent = likes;
    likeBtn.textContent = "Like";
    hasLiked = false;
  }
});
likeCount2.textContent = likes;

likeBtn2.textContent = hasLiked ? "Unlike" : "Like";

likeBtn2.addEventListener("click", function () {
  if (!hasLiked) {
    likes++;
    localStorage.setItem("likes", likes);
    localStorage.setItem("hasLiked", true);
    likeCount2.textContent = likes;
    likeBtn2.textContent = "Unlike";
    hasLiked = true;
  } else {
    likes--;
    localStorage.removeItem("hasLiked");
    localStorage.setItem("likes", likes);
    likeCount2.textContent = likes;
    likeBtn2.textContent = "Like";
    hasLiked = false;
  }
});

likeCount3.textContent = likes;

likeBtn3.textContent = hasLiked ? "Unlike" : "Like";

likeBtn3.addEventListener("click", function () {
  if (!hasLiked) {
    likes++;
    localStorage.setItem("likes", likes);
    localStorage.setItem("hasLiked", true);
    likeCount3.textContent = likes;
    likeBtn3.textContent = "Unlike";
    hasLiked = true;
  } else {
    likes--;
    localStorage.removeItem("hasLiked");
    localStorage.setItem("likes", likes);
    likeCount3.textContent = likes;
    likeBtn3.textContent = "Like";
    hasLiked = false;
  }
});

likeCount4.textContent = likes;

likeBtn4.textContent = hasLiked ? "Unlike" : "Like";

likeBtn4.addEventListener("click", function () {
  if (!hasLiked) {
    likes++;
    localStorage.setItem("likes", likes);
    localStorage.setItem("hasLiked", true);
    likeCount4.textContent = likes;
    likeBtn4.textContent = "Unlike";
    hasLiked = true;
  } else {
    likes--;
    localStorage.removeItem("hasLiked");
    localStorage.setItem("likes", likes);
    likeCount4.textContent = likes;
    likeBtn4.textContent = "Like";
    hasLiked = false;
  }
});
//Denna kod gör så att min like knap funger. När du ha tryckt på like så ändras knappen till unlike och personen som använder hemsidan kan ta bort sin like.
