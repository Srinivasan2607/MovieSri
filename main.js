// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB28oWXnVhhjSVIz5Pul5rB1lcnLdOw3dc",
    authDomain: "moviesearchapp-1a4b0.firebaseapp.com",
    projectId: "moviesearchapp-1a4b0",
    storageBucket: "moviesearchapp-1a4b0.appspot.com",
    messagingSenderId: "613935009746",
    appId: "1:613935009746:web:714401e040a61812e3420b",
    measurementId: "G-K84BPHXBET"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            // document.write("You are Signed Up")
            window.location.href = 'indexx.html';
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            // document.write("You are Signed In")
            window.location.href = 'indexx.html';
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}