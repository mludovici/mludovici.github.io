$(document).ready(function() { 

	$(".btn-signup").click(function(){
		$(this).addClass("hidden");
		$(".signup").addClass("show");
		$(".login").removeClass("show");
		$(".btn-login").removeClass("hidden");
	})
	$(".btn-login").click(function(){
		$(this).addClass("hidden");
		$(".signup").removeClass("show");
		$(".login").addClass("show");
		$(".btn-signup").removeClass("hidden");
	})

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
	if(firebase) {
		firebase.initializeApp(firebaseConfig);
	}

	let pw1;
	let pw2;
	$("input[name='password']").blur(function(event) {
		pw1 = event.target.value;
	});
	$("input[name='password2']").change(function(event) {
		pw2 = event.target.value;
		if (pw1 !== pw2) {
			$("#errorMsg").text("Passwords do not match!");
		} else {
			$("#errorMsg").text('');
		}
	});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$("#loginstatus").text("Du bist eingelogged!");

			console.log("user logged in:", user);
			// User is signed in.
			var displayName = user.displayName;
			var email = user.email;
			var isAdmin;
			if (email === "ludovicimarc@gmail.com") {
				user.isAdmin = true;
			}
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var uid = user.uid;
			var phoneNumber = user.phoneNumber;
			var providerData = user.providerData;
			user.getIdToken().then(function(accessToken) {
			// 	document.getElementById('sign-in-status').textContent = 'Signed in';
			// 	document.getElementById('sign-in').textContent = 'Sign out';
			// 	document.getElementById('account-details').textContent = JSON.stringify({
			// 		displayName: displayName,
			// 		email: email,
			// 		emailVerified: emailVerified,
			// 		phoneNumber: phoneNumber,
			// 		photoURL: photoURL,
			// 		uid: uid,
			// 		isAdmin: user.isAdmin,
			// 		accessToken: accessToken,
			// 		providerData: providerData
			// 	}, null, '  ');
			 });
		} else {
			// User is signed out.
			// document.getElementById('sign-in-status').textContent = 'Signed out';
			// document.getElementById('sign-in').textContent = 'Sign in';
			// document.getElementById('account-details').textContent = 'null';
			// $("#loginstatus").text = "Du bist ausgelogged!";
		}
	})
	});



	function login() {
		event.preventDefault();
		let emailLogin = document.getElementById("email").value;
		let pwLogin = document.getElementById("signpw").value;
		// let inputs = $("#login :input.form-control");
	
		// var values = {};
		// inputs.each(function() {
		// 		values[this.name] = $(this).val();
		// });
	
		// let email = values["email"];
		// let password = values["password"];
		firebase.auth().signInWithEmailAndPassword(emailLogin, pwLogin).then(user => {
			if (user && user.user.uid === 'GAQKQNTAyVZQsU2ZeXaHGXPs3Km2') {
				console.log("%c Logged in User: ", "color:green; font-weight:bold", {user});

	
				// let loginMessage = `<div>Welcome back !</div>  
				// 												 <div>Please verify your email!</div>`;
				// $(".tile").append(loginMessage);
			}
		}).catch(function(error) {
			// Handle Errors here.
			console.log(error);
			var errorCode = error.code;
			var errorMessage = error.message;
			// $("#errorMsgLogin").text("error:", errorCode, errorMessage);
		});
	}



$("#register").submit(function(event) {
	event.preventDefault();
	let inputs = $("#register :input.form-control");
	var values = {};
	let pw2 = "";
	inputs.each(function() {
		values[this.name] = $(this).val();
	});

	let username = values["name"];
	let email = values["email"];
	let password = values["password"];
	let password2 = values["password2"];
	let role = "default";
	if (email == "ludovicimarc@gmail.com") {
		role = "admin";
	}

	if (values.password !== password2) {
		$("#errorMsg").text("Passwords do not match!");
		return;
	}

	firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {

			user.user.sendEmailVerification().then(function() {
				window.alert("Verification mail sent!");
				return user;
			})
			.then((user) => {
				firebase.database().ref(`/users/${user.user.uid}`)
				.set({
				Name: username,
				Email: email,
				Role: role
			}).then(success => {
				console.log(user);
				window.alert("Registered");
				window.location = "../cv";
			}).catch(err => console.log(err));	
			})

		firebase.database().ref(`/users/${user.user.uid}`)
			.set({
				Name: username,
				Email: email,
				Role: role
			}).then(success => {
				console.log(user);
				window.alert("Registered");
				window.location = "../cv";
			});		
	});

});

function signUpWithoutPassword() {
	alert("Clicked!");
	var actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: 'http://localhost:5500/LoginRegister/confirm.html',
		// This must be true.
		handleCodeInApp: true,
	};
	let email = document.getElementById('input_sgn_nopw').value;
	if (isValidEmail(email)) {
		firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
		.then(function() {
			// The link was successfully sent. Inform the user.
			// Save the email locally so you don't need to ask the user for it again
			// if they open the link on the same device.
			alert("We sent you an email!");
			window.localStorage.setItem('emailForSignIn', email);
		})
		.catch(function(error) {
			console.log(error);
		});
	} else {
			document.getElementById('vldmlrrmsg').textContent = "Invalid Email!";
			return false;
		}

}

function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email.toLowerCase());
}

function login() {
	console.log(event);console.log(this);
	console.log("Login clicked!");
	event.preventDefault();
	let inputs = $("#login :input.form-control");
	console.log(inputs);
	var values = {};
	inputs.each(function() {
			values[this.name] = $(this).val();
	});

	let email = values["email"];
	let password = values["password"];

	firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
		if (user && user.user.uid === 'GAQKQNTAyVZQsU2ZeXaHGXPs3Km2') {
			console.log("Hello admin!");
		}
	}).catch(function(error) {
		// Handle Errors here.
		console.log(error);
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});


	//get current user
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$("#loginstatus").text("Du bist eingelogged!");


			console.log("user logged in:", user);
			// User is signed in.
			var displayName = user.displayName;
			var email = user.email;
			var isAdmin;
			if (email === "ludovicimarc@gmail.com") {
				user.isAdmin = true;
			}
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var uid = user.uid;
			var phoneNumber = user.phoneNumber;
			var providerData = user.providerData;
			user.getIdToken().then(function(accessToken) {
				document.getElementById('sign-in-status').textContent = 'Signed in';
				document.getElementById('sign-in').textContent = 'Sign out';
				document.getElementById('account-details').textContent = JSON.stringify({
					displayName: displayName,
					email: email,
					emailVerified: emailVerified,
					phoneNumber: phoneNumber,
					photoURL: photoURL,
					uid: uid,
					isAdmin: user.isAdmin,
					accessToken: accessToken,
					providerData: providerData
				}, null, '  ');
			});
		} else {
			// User is signed out.
			document.getElementById('sign-in-status').textContent = 'Signed out';
			document.getElementById('sign-in').textContent = 'Sign in';
			document.getElementById('account-details').textContent = 'null';
			$("#loginstatus").text = "Du bist ausgelogged!";
		}
	})
};

//sign out user
function logout() {
	firebase.auth().signOut().then(function() {
		console.log("Sign-out successful.");
	}).catch(function(error) {
		console.log("Error:", error);
	});
}


function initializeFirestore() {
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
	if(firebase) {
		firebase.initializeApp(firebaseConfig);
	}
	
	var dbRef = firebase.database().ref();
	var storage = firebase.storage();
	var storageRef = storage.ref();
}
