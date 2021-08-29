$('.login-form').hide()
$('.login').css('background', 'none')

$('.login').click(function () {
	$('.signup-form').hide()
	$('.login-form').show()
	$('.signup').css('background', 'none')
	$('.login').css('background', '#fff')
})

$('.signup').click(function () {
	$('.signup-form').show()
	$('.login-form').hide()
	$('.login').css('background', 'none')
	$('.signup').css('background', '#fff')
})

var firebaseConfig = {
	apiKey: 'AIzaSyAOAYKUnaTDDyCtfo80GbcvglW8cLbDNus',
	authDomain: 'homepage-e3c03.firebaseapp.com',
	databaseURL: 'https://homepage-e3c03.firebaseio.com',
	projectId: 'homepage-e3c03',
	storageBucket: 'homepage-e3c03.appspot.com',
	messagingSenderId: '725579697927',
	appId: '1:725579697927:web:82e60e338295eecbccffa2',
}
// Initialize Firebase
if (firebase) {
	firebase.initializeApp(firebaseConfig)
}

var dbRef = firebase.database().ref()
var storageRef = firebase.storage().ref()

// getUserStatus();

function login(email, password) {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			if (user) {
				console.log({ user })
				$('.formContent').css('display', 'none')
				$('.show-welcome').css('display', 'block')

				if (user.user.uid === 'GAQKQNTAyVZQsU2ZeXaHGXPs3Km2') {
					console.log(
						'%c Hello Admin!: ',
						'color:green; font-weight:bold',
						{ user }
					)
				}
				// $(".showLogin").css({ display: "none"})
				// $(".showWelcome").css({ display: "block"})

				// let loginMessage = `<div>Welcome back !</div>
				// 												 <div>Please verify your email!</div>`;
				// $(".tile").append(loginMessage);
			}
		})
		.catch((error) => {
			var errorCode = error.code
			var errorMessage = error.message
			document.getElementById('logInErrorMsg').textContent = errorMessage
		})
}

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		$('.showLogin').css({ display: 'none' })
		$('.showWelcome').css({ display: 'block' })

		// $("#loginstatus").text("Du bist eingelogged!");

		console.log('user logged in:', { user })
		// User is signed in.
		var displayName = user.displayName
		var email = user.email

		var emailVerified = user.emailVerified
		var photoURL = user.photoURL
		var uid = user.uid
		var phoneNumber = user.phoneNumber
		var providerData = user.providerData
		console.dir({ user })
		user.getIdToken().then(function (accessToken) {
			console.log({ accessToken })
			// document.getElementById('sign-in-status').textContent = 'Signed in';
			// document.getElementById('sign-in').textContent = 'Sign out';
			// document.getElementById('account-details').textContent = JSON.stringify({
			// 	displayName: displayName,
			// 	email: email,
			// 	emailVerified: emailVerified,
			// 	phoneNumber: phoneNumber,
			// 	photoURL: photoURL,
			// 	uid: uid,
			// 	isAdmin: user.isAdmin,
			// 	accessToken: accessToken,
			// 	providerData: providerData
			// }, null, '  ');
		})
	} else {
		$('.showLogin').css({ display: 'block' })
		$('.showWelcome').css({ display: 'none' })
		// User is signed out.
		// document.getElementById('sign-in-status').textContent = 'Signed out';
		// document.getElementById('sign-in').textContent = 'Sign in';
		// document.getElementById('account-details').textContent = 'null';
		// $("#loginstatus").textContent = "Du bist ausgelogged!";
	}
})

async function getWelcomeMessage() {
	let user = await getCurrentUser()
	if (user) {
		const person = {
			name: 'Wes',
			job: 'Web Developer',
			city: 'Hamilton',
			bio: 'Wes is a really cool guy that loves to teach web development!',
		}

		let messageText = `
			<div class="person">
				 <h2>
						 ${person.name}
				 </h2>
				 <p class="location">${person.location}
				 <p class="bio">${person.bio}
			</div>
		 `

		let messageDiv = document.querySelector('.showWelcome')
		messageDiv.innerHTML = messageText
	}
}

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')
}

async function getUserStatus() {
	let user = await firebase.auth().currentUser
	if (user) {
		$('.showLogin').css({ display: 'none' })
		$('.showWelcome').css({ display: 'block' })
	} else {
		$('.showLogin').css({ display: 'block' })
		$('.showWelcome').css({ display: 'none' })
	}
	return user
}

function checkPasswordsMatch(pw1, pw2) {
	return pw1 === pw2
}

$('#register').submit(function (event) {
	event.preventDefault()
	let inputs = $('#register :input.form-control')
	var values = {}
	inputs.each(function () {
		values[this.name] = $(this).val()
	})

	let username = values['name']
	let email = values['email']
	let password = values['password']
	let password2 = values['password2']
	let role = 'default'

	if (values.password !== password2) {
		$('#errorMsg').text('Passwords do not match!')
		return
	}

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => {
			user.user
				.sendEmailVerification()
				.then(function () {
					$('.showLogin').css({ display: 'none' })

					let registeredMessage = `<div>You have been registered!</div>  
																	<div>Please verify your email!</div>`
					$('.showWelcome').appendChild(registeredMessage)
					return user
				})
				.then((user) => {
					firebase.database().ref(`/users/${user.user.uid}`).set({
						Name: username,
						Email: email,
						Role: role,
					})
					return user
				})
				.then((user) => {
					console.log(user)
				})
				.catch((error) => {
					switch (error.code) {
						case 'auth/email-already-in-use':
							$('#errorMsgRegister').text(
								`Email address ${this.state.email} already in use.`
							)
							break
						case 'auth/invalid-email':
							$('#errorMsgRegister').text(
								`Email address ${this.state.email} is invalid.`
							)
							break
						case 'auth/operation-not-allowed':
							$('#errorMsgRegister').text(`Error during sign up.`)
							break
						case 'auth/weak-password':
							$('#errorMsgRegister').text(
								'Password is not strong enough. Add additional characters including special characters and numbers.'
							)
							break
						default:
							$('#errorMsgRegister').text(error.message)
							break
					}
				})
		})
})

function isValidEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email.toLowerCase())
}

function validatePassword(password) {
	let strongRegex = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
	)
	let mediumRegex = new RegExp(
		'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
	)
	let pwStrengthDiv = document.getElementById('pwColor')
	if (strongRegex.test(password)) {
		pwStrengthDiv.style.backgroundColor = 'green'
	} else if (mediumRegex.test(password)) {
		pwStrengthDiv.style.backgroundColor = 'orange'
	} else {
		pwStrengthDiv.style.backgroundColor = 'red'
	}
}

// document.getElementsByName("password")[0].addEventListener('change',function(event) {
// 	validatePassword(event.target.value)
// });

$("input[name='password']").blur(function (event) {
	validatePassword(event.target.value)
})

$("input[name='passwordrepeat']").change(function (event) {
	if ($("input[name='password']").val() !== event.target.value) {
		$('#signUpErrorMsg').text('Passwords do not match!')
		$('#pwStrength').css({ display: 'none' })
	} else {
		$('#signUpErrorMsg').text('')
		$('#pwStrength').css({ display: 'flex' })
	}
})

// function signUpWithoutPassword() {
// 	var actionCodeSettings = {
// 		// URL you want to redirect back to. The domain (www.example.com) for this
// 		// URL must be in the authorized domains list in the Firebase Console.
// 		url: 'http://localhost:5500/LoginRegister/confirm.html',
// 		// This must be true.
// 		handleCodeInApp: true,
// 	};
// 	let email = document.getElementById('input_sgn_nopw').value;
// 	if (isValidEmail(email)) {
// 		firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
// 		.then(function() {
// 			// The link was successfully sent. Inform the user.
// 			// Save the email locally so you don't need to ask the user for it again
// 			// if they open the link on the same device.
// 			alert("We sent you an email!");
// 			window.localStorage.setItem('emailForSignIn', email);
// 		})
// 		.catch(function(error) {
// 			console.log(error);
// 		});
// 	} else {
// 			document.getElementById('vldmlrrmsg').textContent = "Invalid Email!";
// 			return false;
// 		}

// }

$('.btn').click(function (event) {
	event.preventDefault()
	let inputs = document.querySelectorAll('.input')

	let inputObj = {}
	inputs.forEach((input) => {
		inputObj[input.name] = input.value
	})

	// CASE LOG IN
	if (event.target.innerText === 'LOG IN') {
		let email = inputObj['emailsignin']
		let password = inputObj['pwsignin']
		login(email, password)
	} else {
		if (inputObj['passwordrepeat'] !== inputObj['password']) {
			return
		}
	}
})

//sign out user
function logout() {
	firebase
		.auth()
		.signOut()
		.then(function () {
			console.log('Sign-out successful.')
		})
		.catch(function (error) {
			console.log('Error:', error)
		})
}

function verifyEmail() {
	var user = firebase.auth().currentUser

	user.sendEmailVerification()
		.then(function () {
			// Email sent.
		})
		.catch(function (error) {
			// An error happened.
		})
}
