const grid = document.querySelector('.grid')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let resultsDisplay = document.querySelector('#results')
let results = 0

for (let i = 0; i < 225; i++) {
	const square = document.createElement('div')
	grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	30,
	31,
	32,
	33,
	34,
	35,
	36,
	37,
	38,
	39,
]

function draw() {
	for (let i = 0; i < alienInvaders.length; i++) {
		squares[alienInvaders[i]].classList.add('invader')
	}
}

draw()

function remove() {
	for (let i = 0; i < alienInvaders.length; i++) {
		squares[alienInvaders[i]].classList.remove('invader')
	}
}

squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e) {
	squares[currentShooterIndex].classList.remove('shooter')
	switch (e.key) {
		case 'ArrowLeft':
			if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
			break
		case 'ArrowRight':
			if (currentShooterIndex % width < width - 1)
				currentShooterIndex += 1
			break
	}
	squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)

function moveInvaders() {
	const leftEdge = alienInvaders[0] % width === 0
	const rightEdge =
		alienInvaders[alienInvaders.length - 1] % width === width - 1
	remove()
	if (rightEdge && goingRight) {
		direction = -1
		for (let i = 0; i < alienInvaders.length; i++) {
			alienInvaders[i] += width + 1
		}
		goingRight = false
	}

	if (leftEdge && !goingRight) {
		direction = 1
		for (let i = 0; i < alienInvaders.length; i++) {
			alienInvaders[i] += width - 1
		}
		goingRight = true
	}

	for (let i = 0; i < alienInvaders.length; i++) {
		alienInvaders[i] += direction
	}

	draw()

	if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
		resultsDisplay.innerHTML = 'Game over'
		clearInterval(invadersId)
	}

	for (let i = 0; i < alienInvaders.length; i++) {
		if (alienInvaders[i] >= squares.length - 1) {
			resultsDisplay.innerHTML = 'Game over'
			clearInterval(invadersId)
		}
	}
}

invadersId = setInterval(moveInvaders, 300)

function shoot(e) {
	let laserId
	let currentLaserIndex = currentShooterIndex
	function moveLaser() {
		if (currentLaserIndex > 0)
			squares[currentLaserIndex].classList.remove('laser')

		currentLaserIndex -= width

		if (currentLaserIndex > 0)
			squares[currentLaserIndex].classList.add('laser')

		if (
			currentLaserIndex > 0 &&
			squares[currentLaserIndex].classList.contains('invader')
		) {
			squares[currentLaserIndex].classList.remove('laser')
			squares[currentLaserIndex].classList.remove('invader')
			squares[currentLaserIndex].classList.add('boom')

			setTimeout(
				() => squares[currentLaserIndex].classList.remove('boom'),
				300
			)
			clearInterval(laserId)
			results++
			resultsDisplay.innerHTML = results
			const alienRemoval = alienInvaders.indexOf(currentLaserIndex)
			alienInvaders.splice(alienRemoval, 1)
			if (alienInvaders.length === 0) {
				resultsDisplay.innerHTML = results + ' you won!'
				clearInterval(invadersId)
			}
		}
	}
	switch (e.key) {
		case 'ArrowUp':
			laserId = setInterval(moveLaser, 100)
	}
}

document.addEventListener('keydown', shoot)
