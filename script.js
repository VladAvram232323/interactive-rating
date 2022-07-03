const submit_btn = document.querySelector(".card__submit");
const card_content_1 = document.querySelector(".card__1");
const card_content_2 = document.querySelector(".card__2");
const rateNums = document.querySelectorAll(".rating__btn");
const score = document.querySelector(".score");
let stars_score = 3;

submit_btn.addEventListener("click", onSubmit);
rateNums.forEach(() => {
  this.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  card_content_2.classList.remove("hidden");
  card_content_1.classList.add("hidden");
  score.textContent = stars_score;
}

function handleRatingBtnClick() {
  rateNums.forEach((btn) => {
    btn.classList.remove("rating__btn--active");
  });

  if (event.target.classList.contains("rating__btn")) {
    event.target.classList.add("rating__btn--active");
  } else {
    event.target.parentElement.classList.add("active");
  }

  stars_score = event.target.textContent;
}
