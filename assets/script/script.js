// READING DATA
let data = [
  {
      "id" : "1",
      "name" : "Angelica May",
      "age" : "26",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["skiing", "programming", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl01.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "2",
      "name" : "Meghan Marsh",
      "age" : "25",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["skiing", "dancing", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl02.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "3",
      "name" : "Amelia Morris",
      "age" : "27",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["design", "code", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl03.jpeg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "4",
      "name" : "Maryann Love",
      "age" : "23",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["eat", "sleep", "code"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl04.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "5",
      "name" : "Heather Morgan",
      "age" : "26",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["sleepping", "eating", "sleeping"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl05.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "6",
      "name" : "Veronica Boyd",
      "age" : "25",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["running", "programming", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl06.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "7",
      "name" : "Holly Green",
      "age" : "24",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["skiing", "skating", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl07.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "8",
      "name" : "Naomi Simmons",
      "age" : "23",
      "gender" : "female",
      "location" : "Vienna",
      "hobbies" : ["drawing", "running", "sleeping"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/girl08.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "9",
      "name" : "Cecil Ross",
      "age" : "23",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["drawing", "eating", "sleeping"],
      "favmusic" : "rock",
      "imgurl" : "./assets/img/guy01.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "10",
      "name" : "Phil Abbott",
      "age" : "22",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["programming", "dancing", "travel"],
      "favmusic" : "rock",
      "imgurl" : "./assets/img/guy02.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "11",
      "name" : "Tom Ward",
      "age" : "25",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["skating", "eating", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/guy03.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "12",
      "name" : "Marco Massey",
      "age" : "26",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["skiing", "dancing", "music"],
      "favmusic" : "rnb",
      "imgurl" : "./assets/img/guy04.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "13",
      "name" : "Reginald Norton",
      "age" : "29",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["running", "sleeping", "music"],
      "favmusic" : "house",
      "imgurl" : "./assets/img/guy05.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "14",
      "name" : "Abraham Fletcher",
      "age" : "27",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["programming", "eating", "running"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/guy06.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "15",
      "name" : "Perry Curtis",
      "age" : "25",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["skiing", "cooking", "dancing"],
      "favmusic" : "Chill",
      "imgurl" : "./assets/img/guy07.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
  {
      "id" : "16",
      "name" : "Edwin Stevenson",
      "age" : "23",
      "gender" : "male",
      "location" : "Vienna",
      "hobbies" : ["travel", "eating", "music"],
      "favmusic" : "Rock",
      "imgurl" : "./assets/img/guy08.jpg",
      "text" : "bla bla bla bla bla",
      "isFav" : "false"
  },
]

let containerPeople = document.getElementById('container-people')
let containerFav = document.getElementById('container-favorites')

init()

function init() {
    showPeople(data)
    showFavorite()
    favoriteToggle()
    fPeople(data)
    searchPeople(data)
   
}
// DIPLAY PEOPLE
function showPeople(arr) {
    containerPeople.innerHTML = ""
    for(let person of arr) {
        containerPeople.innerHTML +=
        `
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card" style="width: 100%;" id="${person.id}">
                <img src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                        <p class="card-text">${person.text}</p>
                        <button class="${person.isFav === "true" ? "btn btn-primary active" : "btn btn-primary"}">&hearts;</button>
                    </div>
            </div>
        </div>
        `
    }
}
// DISPLAY FAVORITE PEOPLE
function showFavorite() {
    containerFav.innerHTML = ""
    for(let person of data) {
        if(person.isFav === "true") {
            containerFav.innerHTML +=
            `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="card" style="width: 100%;" id="${person.id}">
                    <img src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title mb-0">${person.name}, <small style="color:grey">${person.age}</small></h5>
                        <p class="card-text mt-0"><i class="fa fa-map-marker"></i> ${person.location}</p>
                        <p class="card-text">My hobbies are ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}.</p>
                        <p class="card-text text-right mb-0 pb-0"><i class="fa fa-music"></i> ${person.favmusic}</p>
                        <a href="#" class="btn btn-primary" style="background-color : red;border-color:darkred">&cross;</a>
                    </div>
                </div>
            </div>
            `
        } else {

        }
    }
}

function favoriteToggle() {
    containerPeople.addEventListener('click', e => {
        if(e.target.innerText === "♥") {
            console.log(e.target.parentNode.parentNode.id)
            e.target.classList.toggle("active")
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav === "false" ? data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "true" : data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
        }
        showFavorite()
    })
    // FILTERING PEOPLE
function fPeople(arr) {
    let btn = document.getElementById('filterBtn')
    btn.children[0].addEventListener('click', e => {
        arr.sort((a, b) => parseInt(a.age) - parseInt(b.age))
        showPeople(arr)
        
    })
    btn.children[1].addEventListener('click', e => {
        let newArr = arr.filter(x => x.gender === "female")
        showPeople(newArr)
        
    })
    btn.children[2].addEventListener('click', e => {
        let newArr = arr.filter(x => x.gender === "male")
        showPeople(newArr)
      
    })
}
// CONTAINER FAVORITE PERSON
    containerFav.addEventListener('click', e => {
        if(e.target.innerText === "✗") {
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
            let current = document.getElementById(e.target.parentNode.parentNode.id)
            current.lastElementChild.lastElementChild.classList.remove("active")
        }
        showFavorite()
    })
}

// SEARCHING PEOPLE
function searchPeople(arr) {
    let btn = document.getElementById('searchBtn')
    let input = document.getElementById('searchInput')
    let newArr = []
    btn.addEventListener('click', e => {
        newArr = arr.filter(x => x.name.toLowerCase().startsWith(input.value.toLowerCase()))
        e.preventDefault()
        showPeople(newArr)
        dragDrop()
    })

    //CONTACT 
    (function($) {
  "use strict"; // Start of use strict

  // Detect when form-control inputs are not empty
  $(".cool-b4-form .form-control").on("input", function() {
    if ($(this).val()) {
      $(this).addClass("hasValue");
    } else {
      $(this).removeClass("hasValue");
    }
  });
})(jQuery); // End of use strict
}

