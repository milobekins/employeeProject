<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADZ7wRcMq8_8KZ5ARFedD1l2ECfGhyTiM",
    authDomain: "employeeproject-c1948.firebaseapp.com",
    databaseURL: "https://employeeproject-c1948.firebaseio.com",
    projectId: "employeeproject-c1948",
    storageBucket: "",
    messagingSenderId: "929025616005"
  };
  firebase.initializeApp(config);


var database = firebase.database();

$("submitBtn").on("click", function() {
    event.preventDefault();
    var name = $(".nameInput").val().trim();
    var role = $(".roleInput").val().trim();
    var date = $(".startDateInput").val().trim();
    var rate = $(".monthlyRateInput").val().trim();

    $(".nameInput").val("");
    $(".roleInput").val("");
    $(".startDateInput").val("");
    $(".monthlyRate.Input").val("");

    database.ref().push( {
        nameInput: name,
        roleInput: role,
        startDateInput: date,
        monthlyRateInput: rate
    })
})

