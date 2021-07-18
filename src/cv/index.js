// var picker = new Litepicker({
// 	element: document.getElementById("litepicker"),
// 	singleMode: false,
// 	onSelect: function (e, v) {
// 		console.log(e.getTime(), v.getTime());
// 	},
// });



// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// let fb = firebase.database().ref();
// fb.on("value", function(snap) {

// 	console.log(snap.val());
// }, function(err) {
// 	console.log(err);
// });


var firebaseConfig = {
	apiKey: "AIzaSyAOAYKUnaTDDyCtfo80GbcvglW8cLbDNus",
	authDomain: "homepage-e3c03.firebaseapp.com",
	databaseURL: "https://homepage-e3c03.firebaseio.com",
	projectId: "homepage-e3c03",
	storageBucket: "homepage-e3c03.appspot.com",
	messagingSenderId: "725579697927",
	appId: "1:725579697927:web:82e60e338295eecbccffa2"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


flatpickr("#flatpickr", {
mode: "range",
maxDate: "today",
onClose: function(selectedDates, dateStr, instance){
	if (selectedDates) {
		let firstDate = selectedDates[0];
		let secondDate = selectedDates[1];
		console.log(firstDate, secondDate);
	}
}
});

$('#flatpickr').on('focus', ({ currentTarget }) => $(currentTarget).blur())
$("#flatpickr").prop('readonly', false)


$("#cv-form").submit(function(event) {
	event.preventDefault();

	let data = $("#cv-form").serialize();
	console.log(data);
	if ($('#flatpickr').val() === "") {
		console.log("Date empty!");
		return;
	};
	$('#cv-form input:not(#skillset)').each(
    function(){  
			if( $(this).id === "flatpickr" ) {                      //if it is blank. 
				console.log("Flatpicker:", this);
		} else {
			var input = $(this);
			console.log(input);
			alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
		}
    }
	);

	$('#cv-form ul li').each(
    function(){  
				var list = $(this).text();
				console.log(list);
        //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
    }
	);
});

function getFormData() {
	console.log("getFormData");	
	if ($('#flatpickr').val() === "") {
		console.log("Date empty!");
		return;
	};
	$('#cv-form input:not(#skillset)').each(
    function(){  
			if( $(this).id === "flatpickr" ) {                      //if it is blank. 
				console.log("Flatpicker:", this);
		} else {
			var input = $(this);
			console.log(input);
			alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
		}
				
    }
	);

	$('#cv-list-item').each(
    function(){  
				var list = $(this).text();
				console.log("list:", list);
        //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
    }
	);

}

$( document ).ready(function() {
	$("#cv-svg").on('click', function(e) {
		let cv_skill = $("#skillset").val();
		if (cv_skill == "") {
			return false;
		}
		$("#cv-job-skills-list")
		.append(`<li class="cv-list-item">${cv_skill}<img src="./assets/trash.svg" class="cv-list-item-trash"></li>`);

		$("#skillset").val('');

	$('.cv-list-item').on('click', '.cv-list-item-trash' , function(event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		if (!confirm("are you sure to delete this list item?" )) {
			event.preventDefault();
		} else {
			$(this).parent().remove();
		}
	})
	});

	
				//get current user
	firebase.auth().onAuthStateChanged(function(user) {
		if (user && user.uid == 'GAQKQNTAyVZQsU2ZeXaHGXPs3Km2') {
			console.log(user);
			$(".cv-page").css("display", "block");
			// User is signed in.
		} else {
			$(".cv-page").css("display", "none");
			// No user is signed in.
		}
	});
		
});


function getRadioVal(form, name) {
	var val;
	// get list of radio buttons with specified name
	var radios = form.elements["radCat"];
	
	// loop through list of radio buttons
	for (var i=0, len=radios.length; i<len; i++) {
			if ( radios[i].checked ) { // radio checked?
					val = radios[i].value; 
					// if so, hold its value in val
					break; // and break out of for loop
			}
	}
	return val; // return value of checked radio or undefined if none checked
}

$('input[type="radio"]:checked').val();

// axios.get("https://homepage-e3c03.firebaseio.com/posts.json")
// .then(result => console.log(result))
// .catch(err => console.log(err));



var database = firebase.database();


// database.once('value', function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {
//     var childKey = childSnapshot.key;
// 		var childData = childSnapshot.val();
// 		console.log("childata:", childData);
//   });
// });

// fetch("https://homepage-e3c03.firebaseio.com/recommendations.json", {
//   method: "GET",
//   headers: [
//     ["Content-Type", "application/json"],
//     ["Content-Type", "text/plain"]
//   ]
// }).then(result => result.json()).then(result => console.log(result))
// .catch(err => console.log(err));