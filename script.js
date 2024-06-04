// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB28oWXnVhhjSVIz5Pul5rB1lcnLdOw3dc",
    authDomain: "moviesearchapp-1a4b0.firebaseapp.com",
    projectId: "moviesearchapp-1a4b0",
    storageBucket: "moviesearchapp-1a4b0.appspot.com",
    messagingSenderId: "613935009746",
    appId: "1:613935009746:web:f7d9cf83459a2ed8e3420b",
    measurementId: "G-CQTBRSB4Q5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('signUp').addEventListener('click', function () {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', function () {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('sign-up-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const name = document.getElementById('signup-name').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            var user = userCredential.user;
            console.log('User signed up:', user);
            // Redirect or do something else
            window.location.href = 'home.html'; // Change 'home.html' to your desired page
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error signing up:', errorMessage);
        });
});

document.getElementById('sign-in-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            var user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect or do something else
            window.location.href = 'home.html'; // Change 'home.html' to your desired page
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error signing in:', errorMessage);
        });
});
