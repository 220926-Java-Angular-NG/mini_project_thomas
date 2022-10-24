let backButton = document.getElementById("back-button")

backButton.addEventListener('click', (event) => {
event.preventDefault();
window.location.replace("index.html")
})


// we are taking in the user info
// sending a request to our api (localhost)
// tell our webpage to point to our index.html page


let registerButton = document.getElementById("register");

registerButton.addEventListener('click', async(event) =>{
event.preventDefault();


let email1 = document.getElementById("email-register").value;

let password1 = document.getElementById("password-register").value;

let firstname1 = document.getElementById("firstname-register").value;

let lastname1 = document.getElementById("lastname-register").value;

let zodiac1 = document.getElementById("zodiac-register").value;



// creating an JSON Object using the inout from the user
// note that the keys for our objects must match the 
// fields in our Models in the backend

let registerInfo = {
    email: email1,
    password:password1,
    firstname: firstname1,
    lastname:lastname1,
    zodiac: zodiac1

}

// turn our JSON object literal into JSON

let json = JSON.stringify(registerInfo);


try {

    const raw_response = await fetch(`http://localhost:8080/user`,{
        method:"POST", // we hdd the http to be executed
        body:json
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    // raw_response.json().then( (data) => {

    //     let loggedInUser = JSON.stringify(data)

    //     localStorage.setItem("currentUser",loggedInUser)
    //     console.log(loggedInUser);
        
    // })

    setTimeout( ()=>{
        window.location.replace("index.html")
    }, 1000 )


}catch(error){
    console.log(error)
}

})