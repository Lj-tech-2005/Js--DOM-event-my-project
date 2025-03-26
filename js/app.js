
var images = document.querySelectorAll(".images")
var btn = document.querySelectorAll(".btn")

console.log(btn)

btn[0].disabled = true;
var poe = 0;
btn[1].addEventListener(

    "click",
    function () {

        if (images.length - 3 > poe) {

            poe++
            for (img of images) {
                img.style.transform = `translateX(-${poe * 100}%)`
            }


        }

        btn[0].disabled = false
        if (poe === images.length - 3) {

            btn[1].disabled = true
        }



    }
)

btn[0].addEventListener(

    "click",
    function () {
        if (poe > 0) {
            poe--
            for (img of images) {
                img.style.transform = `translateX(-${poe * 100}%)`
            }
        }
        btn[1].disabled = false; 
        if (poe === 0) {
            btn[0].disabled = true; 
        }

    }
)


const mainimg = document.querySelector(".main-img");



function swap(ele) {

    mainimg.style.backgroundImage = `url(${ele.src})`


}






// section second salider




var img_slider_containor = document.querySelector(".img-slider-containor");
var buttonslide = document.querySelectorAll(".middle-img-slider-containor button")



for (var i = 1; i <= 10; i++) {

    var divtag = document.createElement("div")
    divtag.classList.add("item")
    img_slider_containor.appendChild(divtag)
    var imgtag = document.createElement("img")
    imgtag.classList.add("Slideimg")
    divtag.appendChild(imgtag)
    imgtag.src = `images/${i}.jpg`

}

var item = document.querySelectorAll(".item")



buttonslide[0].disabled = true;
var poe = 0;
buttonslide[1].addEventListener(

    "click",
    function (e) {

        if (item.length - 2 > poe) {
            poe++
            for (img of item) {
                img.style.transform = `translateX(-${poe * 100}%)`
            }
        }
        buttonslide[0].disabled = false; 
        if (poe === item.length - 1) {
            buttonslide[1].disabled = true; 
        }


    }
)


buttonslide[0].addEventListener("click", function (e) {
    if (poe > 0) {
        poe--;
        for (var img of item) {
            img.style.transform = `translateX(-${poe * 100}%)`;
        }
        buttonslide[1].disabled = false;
        if (poe === 0) {
            buttonslide[0].disabled = true;
        }
    }
});








// api js






const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const myinput = document.querySelector("#myinput")
const movies_Container = document.querySelector("#movies_Container");



async function getMovies(api) {

    const responce = await fetch(api)
    const data = await responce.json()
    showmovies(data.results)

    console.log(data.results)

}

getMovies(APIURL)


function showmovies(movie) {

    movies_Container.innerHTML = ""
    movie.forEach(
        (movie, index) => {
            const poster_path = IMGPATH + movie.poster_path;
            const divElem = document.createElement("div");
            divElem.classList.add("col-3");
            divElem.innerHTML = `<div> 
             <img src="${poster_path}" alt=""> 
             <div class="title">${movie.title}</div>
             <div class="details">

            <div>
              <span>Title:-</span>
              <span>${movie.title}</span>
             </div>
             
             <div>
              <span>Language:-</span>
              <span>${movie.original_language}</span>
             </div>
              <div>
              <span>Popularity:-</span>
              <span>${movie.popularity}</span>
             </div>
              <div>
              <span>Release_Date:-</span>
              <span>${movie.release_date}</span>
             </div>
              <div>
              <span>Vote_Average:-</span>
              <span>${movie.vote_average}</span>
             </div>
            
             
             </div>

             </div> `
            movies_Container.appendChild(divElem)

        }

    )


}


myinput.addEventListener(

    "keyup",
    (e) => {

        if (e.target.value == "") {

            getMovies(APIURL)
        } else {

            getMovies(SEARCHAPI + e.target.value)

        }



    }


)



// faq js




var show = document.querySelectorAll(".show")
var content = document.querySelectorAll(".content")
var button = document.querySelectorAll(".click-heading")
var plus = document.querySelectorAll(".fa-plus")
var cross = document.querySelectorAll(".fa-xmark")






button.forEach(

    function (btn, index) {

        btn.addEventListener(

            "click",
            function () {

                button.forEach(

                    function (value, i) {

                        if (index == i) {

                            content[i].classList.toggle("show")
                            plus[i].classList.toggle("plusshow")
                            cross[i].classList.toggle("crossshow")

                        } else {

                            content[i].classList.remove("show")
                            plus[i].classList.remove("plusshow")
                            cross[i].classList.remove("crossshow")

                        }


                    }

                )


            }

        )

    }

)







// add tudo js


var containormovies = document.querySelector(".containor-top-movies ol")




for (var i = 1; i <= 24; i++) {

    var litag = document.createElement("li")
    containormovies.appendChild(litag)
    litag.classList.add("item")
    litag.style.backgroundImage = `Url(images/top/${i}.jpg)`


}