const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
	navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

export function test() {
	return 'hi from test'
}
