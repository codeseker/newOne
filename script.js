document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000); 

  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  const responseScreen = document.querySelector(".response-screen");

  yesBtn.addEventListener("click", function () {
    showResponseScreen(true);
  });

  noBtn.addEventListener("click", function () {
    showResponseScreen(false);
  });

  function showResponseScreen(isPositive) {
    const responseContent = document.querySelector(".response-content");

    if (isPositive) {
      responseContent.innerHTML =
        "<p>Thank you for giving another chance! 🌟</p>";
      responseContent.innerHTML += '<img src="thankYou.gif" alt="Thank You">';
    } else {
      responseContent.innerHTML = "<p>Are you sure? 😢</p>";
      responseContent.innerHTML +=
        '<img src="areYouSure.gif" alt="Are You Sure">';
    }
    responseScreen.style.display = "flex";
    responseScreen.addEventListener("click", function () {
      responseScreen.style.display = "none";
    });
  }
});
