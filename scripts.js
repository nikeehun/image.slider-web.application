
/*let data = {
    photo: "images/flowers.jpg",
    title: "Sziklakert",
    text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
};

$('#photo').attr('src', data.photo);
$('#photo-title').append(data.title);
$('#photo-text').append(data.text); */


let currentPhoto = 0;
let imagesData = [
    {
        photo: "images/flowers.jpg",
        title: "Sziklakert, közelről",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/flowers_1.jpg",
        title: "Sziklakert, távolról",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/flowers_2.jpg",
        title: "Színes virágok",
        text: "Ezek a vidám virágok mindenkit vidámmá tesznek."
    },
    {
        photo: "images/green.jpg",
        title: "Bazsalikom",
        text: "Niki gondozza, és jelenleg többször van bent, mint kint."
    },
    {
        photo: "images/lights.jpg",
        title: "Éjjeli fények",
        text: "A zöld növényes részeket nagyon feldobja egy díszes kerti lámpa."
    },
    {
        photo: "images/little_lake.jpg",
        title: "Tavacska",
        text: "Kisebb-nagyobb halak otthona, amit szép kavicsok és élénk zöld fű vesz körül."
    }

];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-text').text(imagesData[photoNumber].text);

    $('#' + photoNumber).css('border', '6px solid black');
    $('.thumbnail').not($('#' + photoNumber)).css('border', '2px solid white');

};


loadPhoto(currentPhoto);


/*$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-text').text(imagesData[currentPhoto].text);*/



$('#next').click(() => {
    if (currentPhoto < imagesData.length - 1) {
    currentPhoto++; } else {
        currentPhoto = 0;
    }

    loadPhoto(currentPhoto);

    
 }); 


$('#back').click(() => {
    if (currentPhoto > 0) {
    currentPhoto--;  } else {
        currentPhoto = imagesData.length - 1;
    }
    
    loadPhoto(currentPhoto);
});

let myImages = ["images/flowers.jpg", "images/flowers_1.jpg", "images/flowers_2.jpg", "images/green.jpg", "images/lights.jpg", "images/little_lake.jpg"];

myImages.forEach((image, number) => {
    $('#thumbnails').append(`<img src="${image}" class="thumbnail" id="${number}">`)
});

$('.thumbnail').click(() => {
    let numberClicked = $(event.target).attr('id');
    let numberIndex = parseInt(numberClicked); /* string --> number */
    loadPhoto(numberIndex)
})




/*let bazsalikom = "images/green.jpg";*/

/*if (currentPhoto === 3) 
        { $('#viewer').css("height", "550px") };*/