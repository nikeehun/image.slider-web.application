
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
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/flowers_1.jpg",
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/flowers_2.jpg",
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/green.jpg",
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/lights.jpg",
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    },
    {
        photo: "images/little_lake.jpg",
        title: "Sziklakert",
        text: "A hátsó kertben található meg, ahol a látványa azonnal odavonzza a kíváncsi tekinteteket."
    }

];

$('#photo').attr('src', imagesData[currentPhoto].photo)
$('#photo-title').append(imagesData[currentPhoto].title)
$('#photo-text').append(imagesData[currentPhoto].text)

$('#next').click((event) => {
    ;
})

