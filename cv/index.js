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


flatpickr("#flatpickr", {
mode: "range",
maxDate: "today",
onClose: function(selectedDates, dateStr, instance){
	console.log(selectedDates[0].getTime(), selectedDates[1].getTime());
	console.log(selectedDates, dateStr, instance)
}
});

$('#flatpickr').on('focus', ({ currentTarget }) => $(currentTarget).blur())
$("#flatpickr").prop('readonly', false)

// var picker = new Litepicker({
// 	field: document.getElementById("litepicker"),
// 	singleDate: false,
// 	onSelect: function(start, end){
// 			var str = '';
// 			str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
// 			str += end ? end.format('Do MMMM YYYY') : '...';
// 			document.getElementById('lpoutput').innerHTML = str;
// 	}
// });

$("#cv-form").submit(function(event) {
	event.preventDefault();

	let data = $("#cv-form").serialize();
	console.log(data);
	if ($('#flatpickr').val() === "") {
		console.log("Date empty!");
		return;
	};
	$('#cv-form input:not(#description)').each(
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
	$('#cv-form input:not(#description)').each(
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

	$('#cv-form li').each(
    function(){  
				var list = $(this).text();
				console.log(list);
        //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
    }
	);

}

$( document ).ready(function() {
	$("#cv-svg").on('click', function(e) {
		let cv_descr = $("#description").val();
		if (cv_descr == "") {
			return false;
		}
		$("#cv-job-skills-list")
		.append(`<div class="cv-list-item"><li >${cv_descr}</li><img src="trash.svg" class="cv-list-item-trash"></div>`);

		$("#description").val('');

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
		
});
