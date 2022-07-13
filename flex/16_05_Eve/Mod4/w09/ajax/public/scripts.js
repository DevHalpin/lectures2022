const getDinoCatData = () => {
  $.ajax({
    url: "/dinoData",
    type: "GET",
    dataType: "json",
    success: (data) => {
      console.log("this request succeeded and here's the data", data);
      $("#dinocat-container").empty();
      for (const dinoCat of data) {
        createDinoCatArticle(dinoCat);
      }
    },
    error: (error) => {
      console.log("this request failed and this was the error", error);
    },
  });
};

const postDinoCatData = () => {
  $.post("/dinoCats", $(".dinocat-form").serialize()).then((data) => {
    console.log(data);
    $("#submit").prop("disabled", false).text("Submit");
    getDinoCatData();
  });
};

const createDinoCatArticle = (data) => {
  const clawLength = $("<h2>").text(`Claw Length: ${data.clawLength}`);
  const speed = $("<h2>").text(`Speed: ${data.speed}`);
  const diet = $("<h2>").text(`Diet: ${data.diet}`);
  const numOfHeads = $("<h2>").text(`Number of Heads: ${data.numOfHeads}`);
  const jumpHeight = $("<h2>").text(`Jump Height: ${data.jumpHeight}`);
  const article = $("<article>");

  //   const dinoCatArticle = article.append(clawLength).append(speed).append(diet)
  const dinoCatArticle = article.append(
    clawLength,
    speed,
    diet,
    numOfHeads,
    jumpHeight
  );

  $("#dinocat-container").prepend(dinoCatArticle);
};

$(() => {
  getDinoCatData();
  $(".dinocat-form").on("submit", function (e) {
    e.preventDefault();
    $("#submit").prop("disabled", true).text("Loading");
    postDinoCatData();
  });
});
