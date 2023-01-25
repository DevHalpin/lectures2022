const getDinoCatData = () => {
  $.ajax({
    url: "/dinoData",
    type: "GET",
    dataType: "json",
    success: (data) => {
      console.log("This request succeeded and here is our data ", data);
      $("#dinocat-container").empty();
      for (const dinoCat of data) {
        createDinoCatArticle(dinoCat);
      }
    },
    error: (error) => {
      console.error("An error occurred ,", error);
    },
  });
};

// Above function written with .get shortform function instead
// $.get("/dinoData")
//   .then((data) => {
//     console.log("This request succeeded and here is our data ", data);
//     $("#dinocat-container").empty();
//     for (const dinoCat of data) {
//       createDinoCatArticle(dinoCat);
//     }
//   })
//   .catch((err) => console.log(err));

const postDinoCatData = () => {
  $.ajax({
    url: "/dinoCats",
    type: "POST",
    data: $(".dinocat-form").serialize(),
    dataType: "json",
    success: (data) => {
      console.log(data);
      // set button back to enabled and clickable
      $("#submit").prop("disabled", false).text("Submit");
      // reload articles with new dino cat info
      getDinoCatData();
    },
    error: (error) => {
      console.error("An error occurred ,", error);
    },
  });
};

// Above function written with .post shortform function
// $.post("/dinoCats", $(".dinocat-form").serialize())
//   .then((data) => {
//     console.log(data);
//     $("#submit").prop("disabled", false).text("Submit");
//     getDinoCatData();
//   })
//   .catch((err) => console.log(err));

const createDinoCatArticle = (data) => {
  const clawLength = $("<h2>").text(`Claw Length: ${data.clawLength}`);
  const speed = $("<h2>").text(`Speed: ${data.speed}`);
  const diet = $("<h2>").text(`Diet: ${data.diet}`);
  const numOfHeads = $("<h2>").text(`Number of Heads: ${data.numOfHeads}`);
  const jumpHeight = $("<h2>").text(`Jump Height: ${data.jumpHeight}`);
  const article = $("<article>");

  const dinoCatArticle = article.append(
    clawLength,
    speed,
    diet,
    numOfHeads,
    jumpHeight
  );

  $("#dinocat-container").prepend(dinoCatArticle);
};

$(document).ready(() => {
  console.log("jQuery is ready");
  $(".data-button").click((e) => {
    e.preventDefault();
    getDinoCatData();
  });
  // handle submit event from form
//$(".dinocat-form").on("submit", (e) =>{
//     e.preventDefault();
    // prevent spam clicking the submit button
//     $("#submit").prop("disabled", true).text("Loading");
    // process form data
//     postDinoCatData();
//});
  //handle same form with the click event from the submit button
  $("#submit").click((e) => {
    e.preventDefault();
    // prevent spam clicking the submit button
    $("#submit").prop("disabled", true).text("Loading");
    // process form data
    postDinoCatData();
  });
  // How to use event delegation to handle events on dynamically loaded elements
  $("#dinocat-container").click("article", (e) => {
    console.log(e);
    e.preventDefault();
    console.log("You clicked on the article");
  });
});
