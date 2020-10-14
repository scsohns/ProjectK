
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATvQWWodvFb8mWeUnyvx1MZmmSneeGSg8",
    authDomain: "handyman2-ed9da.firebaseapp.com",
    databaseURL: "https://handyman2-ed9da.firebaseio.com",
    projectId: "handyman2-ed9da",
    storageBucket: "handyman2-ed9da.appspot.com",
    messagingSenderId: "325981399856",
    appId: "1:325981399856:web:183341333a67b054f5f6f5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
  }

  function signIn(){
    alert("Sign In")
  }

  function signOut(){
    alert("Signed Out");
  }
