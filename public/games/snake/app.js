document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.grid div')
	const scoreDisplay = document.querySelector('span')
	const startBtn = document.querySelector('.start')
	const status = document.querySelector('.status')

	const width = 10
	let currentIndex = 0 //so first div in our grid
	let appleIndex = 0 //so first div in our grid
	let currentSnake = [2, 1, 0] //so the div in our grid being 2 (or the HEAD), and 0 being the end
	//(TAIL, with all 1's	being the body from now on)
	let direction = 1
	let score = 0
	let speed = 0.9
	let intervalTime = 0
	let interval = 0
	let previousKeyCode = 0

	//to start and restart the game
	function startGame() {
		currentSnake.forEach((index) =>
			squares[index].classList.remove('snake')
		)
		squares[appleIndex].classList.remove('apple')
		clearInterval(interval)
		score = 0
		randomApple()
		direction = 1
		scoreDisplay.innerHTML = score
		status.innerHTML = ''
		intervalTime = 1000
		currentSnake = [2, 1, 0]
		currentIndex = 0
		currentSnake.forEach((index) => squares[index].classList.add('snake'))
		//squares[currentSnake[0]].classList.add('snake-head-right')
		interval = setInterval(moveOutcomes, intervalTime)
	}

	//function that deals with ALL the move outcomes of the Snake
	function moveOutcomes() {
		//deals with snake hitting border and snake hitting self
		console.log(currentIndex, currentSnake, direction)
		if (
			(currentSnake[0] + width >= width * width && direction === width) || //if snake hits bottom
			(currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
			(currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
			(currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
			squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
		) {
			status.innerHTML = 'Game over.'
			return clearInterval(interval) //this will clear the interval if any of the above happen
		}

		const tail = currentSnake.pop()
		console.log('tail:', tail) // remove last item of array
		squares[tail].classList.remove('snake')
		//squares[currentSnake[1]].classList.remove('snake-head-right')

		currentSnake.unshift(currentSnake[0] + direction) //gives direction to the head

		//deals with snake getting apple
		if (squares[currentSnake[0]].classList.contains('apple')) {
			squares[currentSnake[0]].classList.remove('apple')
			squares[tail].classList.add('snake')
			currentSnake.push(tail)
			randomApple()
			score++
			scoreDisplay.innerText = score
			clearInterval(interval)
			intervalTime = intervalTime * speed
			interval = setInterval(moveOutcomes, intervalTime)
		}
		squares[currentSnake[0]].classList.add('snake')
	}

	//generate new apple once apple is eaten
	function randomApple() {
		do {
			appleIndex = Math.floor(Math.random() * squares.length)
			console.log('apIndex:', appleIndex)
		} while (squares[appleIndex].classList.contains('snake'))
		squares[appleIndex].classList.add('apple')
	}

	function keyCodeIsContrary(keyCode) {
		if (keyCode === 39 && previousKeyCode === 37) {
			direction = -1
			return true
		} else if (keyCode === 38 && previousKeyCode === 40) {
			direction = +width
			return true
		} else if (keyCode === 37 && previousKeyCode === 39) {
			direction = 1
			return true
		} else if (keyCode === 40 && previousKeyCode === 38) {
			direction = -width
			return true
		}
	}

	//assign functions to keycodes
	function control(e) {
		//squares[currentIndex].classList.remove('snake')

		if (keyCodeIsContrary(e.keyCode)) {
			return
		}
		if (e.keyCode === 39) {
			//squares[currentSnake[0]].classList.add('snake-head-right')
			direction = 1 //if we press the right arrow on our keyboard, the snake will go right
		} else if (e.keyCode === 38) {
			direction = -width // if we press the up arrow, the snake will go back ten divs, appearing to go up
		} else if (e.keyCode === 37) {
			direction = -1 // if we press left, the snake will go left one div
		} else if (e.keyCode === 40) {
			direction = +width //if we press down, the snake head will go 10 divs "to the right (means down)" instantly
		}
		previousKeyCode = e.keyCode
	}

	document.addEventListener('keyup', control)
	startBtn.addEventListener('click', startGame)
})
