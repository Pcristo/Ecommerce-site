// Initialize Firebase (ADD YOUR OWN DATA)

var firebaseConfig = {
    apiKey: "AIzaSyCQNZXSXjoRhFir8yyp0W3xH6EJXla0iZU",
    authDomain: "contact-form-6962f.firebaseapp.com",
    databaseURL: "https://contact-form-6962f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-form-6962f",
    storageBucket: "contact-form-6962f.appspot.com",
    messagingSenderId: "960961243030",
    appId: "1:960961243030:web:86a89a59cd8bc9ed769fb7",
    measurementId: "G-P8LKMSN9PD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages'); 



// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('apelido');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var subject = getInputVal('subject');

  // Save message
  saveMessage(name, apelido, email, phone, subject, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    apelido:apelido,
    email:email,
    phone:phone,
    subject:subject,
    message:message
  });
}

