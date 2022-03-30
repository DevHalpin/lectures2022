const getDinoCats = () => {
    $.ajax({
        url: "/dinoCats",
        type: "GET"
    }).then(function(data) {
        $('#dinocat-container').empty()
        addDinoCat(data);
    })
}

const addDinoCat = (dinoCatArray) => {
    for(const dinoCat of dinoCatArray) {
        const array = []
        
        const article = $('<article>');

        const size = $('<h3>').text(`Size: ${dinoCat.size}`);
        const colour = $('<h3>').text(`Colour: ${dinoCat.colour}`);
        const weight = $('<h3>').text(`Weight: ${dinoCat.weight}`);
        const tail = $('<h3>').text(`Tail: ${dinoCat.tail}`);
        const prey = $('<h3>').text(`Prey: ${dinoCat.prey}`);
        const temperament = $('<h3>').text(`Temperament: ${dinoCat.temperament}`);

        array.push(size,colour,weight,tail, prey, temperament)
        
        const dinoCatArticle = article.append(array);

        $('#dinocat-container').prepend(dinoCatArticle);
    }
    
}


$(() => {
 
    getDinoCats();

    $('.dinocat-form').on('submit', function(e) {
        e.preventDefault()
        $('#submit-button').prop("disabled", true).text("Loading")
        $.ajax({
            type: "POST",
            url: "/dinoCats",
            data: $('.dinocat-form').serialize()
        }).then((data) => {
            $('#submit-button').prop("disabled", false).text("Submit")
            console.log("I am here",data)
            getDinoCats();
        })
    })
    
})