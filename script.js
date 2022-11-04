let cardDiv = document.createElement("card");
const img = document.createElement('img')
const infoDiv = document.createElement('div')
const nameP = document.createElement('p')
const titleP = document.createElement('p')
const famP = document.createElement('p')
const bday = document.createElement('p')


let src = ""
img.setAttribute("src", src);
infoDiv.setAttribute("class", "info");
cardDiv.setAttribute("class", "card");

nameP.setAttribute("id", "name")
nameP.setAttribute("class", "name")

titleP.setAttribute("id", "title")
titleP.setAttribute("class", "title")

famP.setAttribute("id", "family")
famP.setAttribute("class", "family")

bday.setAttribute("id", "phone")
bday.setAttribute("class", "phone")

img.classList.add('w-max', 'rounded-full', 'p-2', 'block', 'bg-blue-500')
infoDiv.classList.add('text-lg', 'font-semibold', 'text-justify', 'my-4')
cardDiv.classList.add('p-5', 'w-72', 'h-82', 'm-5', 'shadowCustom', 'flex', 'flex-col', 'items-center', 'rounded-xl', 'bg-slate-200', 'scale-[0.85]')
nameP.classList.add('py-1', 'text-xl', 'font-extrabold')
titleP.classList.add('py-1')
famP.classList.add('py-1')
bday.classList.add('py-1')


// bday_arr = [];
// for (let i = 0; i < 10; i++) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '25823ba57dmsh5ae0a22908fe6bfp14b8e4jsn9a46d658e006',
//             'X-RapidAPI-Host': 'random-user-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     fetch('https://random-user-by-api-ninjas.p.rapidapi.com/v1/randomuser', options)
//         .then(response => response.json())
//         .then(response => {
//             bday_arr[i] = response.birthday
//         })
//         .catch(err => console.error(err));

// }
// console.log(bday_arr)

let response_aar = []
const options_GOT = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '25823ba57dmsh5ae0a22908fe6bfp14b8e4jsn9a46d658e006',
        'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
    }
};

fetch('https://game-of-thrones1.p.rapidapi.com/Characters', options_GOT)
    .then(response => response.json())
    .then(response => {
        let data = response.slice(0, 10);
        let cardData = '';
        let i
        console.log(data)
        data.map((vals) => {
           cardData+=`
           <div id="gridBox"
           class="p-5 w-72 h-82 m-5 shadowCustom flex flex-col items-center rounded-xl bg-slate-200 scale-[0.85] hover:shadowCustomHover transition-shadow">

           <img class="image w-max rounded-full p-2 block bg-blue-500 aspect-square"
               src=${vals.imageUrl} alt="logo">

           <div class="text-lg font-semibold text-justify my-4">

               <p id="name" class="py-1 text-xl font-extrabold"><b>Name: </b>${vals.firstName}</p>
               <p id="title" class="py-1"><b>Title: </b> ${vals.title}</p>
               <p id="family" class="py-1"><b>Family: </b>${vals.family}</p>
               
            </div>
            </div>
               `
            })
            let box = document.getElementById("gridBox")
            box.innerHTML = cardData
        })
        .catch(err => console.error(err));
        
        
        // response_aar = getGOt
        // console.log(response_aar)
        // for (var i = 0; i < 10; i++) {
            
            // <p id="bday" class="py-1"><b>birthday: </b>${vals.title}</p>

    // nameP.textContent = response_aar[i].fullName
    // titleP.textContent = response_aar[i].title
    // famP.textContent = response_aar[i].family
    // bday.textContent = bday_arr[i]
    // src = response_aar[i].imageUrl

    // img.setAttribute("src", src);
    // infoDiv.append(nameP, titleP, famP, bday);
    // cardDiv.append(img, infoDiv)
// }