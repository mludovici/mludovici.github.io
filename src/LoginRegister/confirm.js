

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
firebase.initializeApp(firebaseConfig);
window.addEventListener('load', function() {
	if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
		// Additional state parameters can also be passed via URL.
		// This can be used to continue the user's intended action before triggering
		// the sign-in operation.
		// Get the email if available. This should be available if the user completes
		// the flow on the same device where they started it.
		var stored_email = window.localStorage.getItem('emailForSignIn');
		if (!stored_email) {
			// User opened the link on a different device. To prevent session fixation
			// attacks, ask the user to provide the associated email again. For example:
			stored_email = window.prompt('Please provide your email for confirmation');
		}
		// The client SDK will parse the code from the link for you.
		firebase.auth().signInWithEmailLink(stored_email, window.location.href)
			.then(function(result) {
				console.log("result:", result.user);
				document.getElementById('status').textContent = result.user;
				// Clear email from storage.
				window.localStorage.removeItem('emailForSignIn');
				// You can access the new user via result.user
				// Additional user info profile not available via:
				// result.additionalUserInfo.profile == null
				// You can check if the user is new or existing:
				// result.additionalUserInfo.isNewUser
			})
			.catch(function(error) {
				console.log("error:", error);
			});


			var user = firebase.auth().currentUser;
			console.log("User logged in?:", user);

	// document.getElementByName("password2").onchange = function(event) {
	// 	pw2 = event.target.value;
	// 	$("#errorMsg").text("Passwords do not match!");
	// }
		}
});
