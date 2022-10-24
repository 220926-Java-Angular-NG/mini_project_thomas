let currentUser = localStorage.getItem("currentUser");
currentUser = JSON.parse(currentUser);
console.log(currentUser);
console.log(currentUser.zodiac.toLowerCase())

let zodiacc = currentUser.zodiac.toLowerCase();




let info = document.getElementById("info");

let br = document.createElement('br');

info.append(br);
info.append(br);

let firstName = document.createElement("h3");
firstName.innerHTML = `Name: ${currentUser.firstname} ${currentUser.lastname} `
info.appendChild(firstName);
info.append(br);

let Email = document.createElement("h3");
Email.innerHTML = `${currentUser.email} `
info.appendChild(Email);
info.append(br);

let ZOdiac = document.createElement("h3");
ZOdiac.innerHTML = `${currentUser.zodiac} `
info.appendChild(ZOdiac);
info.append(br);

// let firstName = document.createElement("h3");
// firstName.innerHTML = `${currentUser.firstname} `
// info.appendChild(firstName);
// info.append(br);

// let firstName = document.createElement("h3");
// firstName.innerHTML = `${currentUser.firstname} `
// info.appendChild(firstName);
// info.append(br);






let api = `http://sandipbgt.com/theastrologer/api/horoscope/${zodiacc}/today`

let welcomeLabel = document.getElementById("welcome-label");
welcomeLabel.innerHTML = `Welcome ${currentUser.firstname}!`


let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", async(event) => {
    event.preventDefault();

    try {
        // fetch send a get request by default unless directed to do otherwise
        let raw_response = await fetch(`http://sandipbgt.com/theastrologer/api/horoscope/` + zodiacc + `/today`)

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        raw_response.json().then( (data) => {

            // create a helper function that will use the json data from the request to manipulate the dom
            // console.log(data); print the array we get back from our http request
            currentUser.mood = data.meta.mood
            // console.log(currentUser);
            addMood(data);
            updateMood.click();


            let horoscope = document.getElementById("horoscope");
            console.log(data);
            console.log(data.horoscope);

            let information = document.createElement("h3");
            information.innerHTML = ` ${data.horoscope} `
            horoscope.appendChild(information);
            horoscope.append(br);

            

        })

    } catch(error){
        console.log(error)
    }
})

function addMood(horo){

    let title = document.getElementById("moods");

    let br = document.createElement('br');

    title.append(br);
    title.append(br);

    // console.log(horo)
    let cardElement = document.createElement("h3");
    cardElement.innerHTML = `mood: ${horo.meta.mood} `
    title.appendChild(cardElement);

    
    


}

// we are taking in the user info
// sending a request to our api (localhost)
// tell our webpage to point to our index.html page


let updateMood = document.getElementById("update-mood");

updateMood.addEventListener('click', async(event) =>{
event.preventDefault();


let email1 = currentUser.email;

let mood1 = currentUser.mood;




// creating an JSON Object using the inout from the user
// note that the keys for our objects must match the 
// fields in our Models in the backend

let userinfo = {
    email: email1,
    mood:mood1


}

// turn our JSON object literal into JSON

let json = JSON.stringify(userinfo);


try {

    const raw_response = await fetch(`http://localhost:8080/user`,{
        method:"PUT", // we hdd the http to be executed
        body:json
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }




}catch(error){
    console.log(error)
}

})

