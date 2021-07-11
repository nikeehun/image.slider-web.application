//Made with jQueary


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
    /*viewer: */
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-text').text(imagesData[photoNumber].text);

    /*hightlight --> thumbnail 
        photonumber értéke egyenlő a thumbnail id-val
    */
    $('#' + photoNumber).css('border', '6px solid white');
    $('.thumbnail').not($('#' + photoNumber)).css('border', '2px solid white');/*ez azért kell, hogy visszaállítsa a thumbnail eredeti kinézetére, miután elkattintotunk*/
    $('#' + photoNumber).css('opacity', '1');
    $('.thumbnail').not($('#' + photoNumber)).css('opacity', '0.7');

}; 



/* nyilak: */

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

/*thumbnail: */

let myImages = ["images/flowers.jpg", "images/flowers_1.jpg", "images/flowers_2.jpg", "images/green.jpg", "images/lights.jpg", "images/little_lake.jpg"];

myImages.forEach((image, number) => {
    $('#thumbnails').append(`<img src="${image}" class="thumbnail" id="${number}">`)
});

$('.thumbnail').click(() => {
    let numberClicked = $(event.target).attr('id');
    let numberIndex = parseInt(numberClicked); /* string --> number */
    currentPhoto = numberIndex;
    loadPhoto(currentPhoto);
})


/*hogy az egészet betöltse, mert először csináltam a highlightot a thumbnailnek (loadphotonál), de csak később csináltam magát a thumbnail részt:*/
loadPhoto(currentPhoto);

/*this is jut a comment for playing with git commit...*/