document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid')
	let squares = Array.from(document.querySelectorAll('.grid div'))
	const scoreDisplay = document.querySelector('#score')
	const startBtn = document.querySelector('#start-button')
	const width = 10
	let nextRandom = 0
	let timerId
	let score = 0
	let rightIndex = 0
	let leftIndex = 0
	const colors = ['orange', 'red', 'purple', 'green', 'blue']

	//The Tetrominoes
	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2],
	]

	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
	]

	const tTetromino = [
		[1, width, width + 1, width + 2],
		[1, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width * 2 + 1],
	]

	const oTetromino = [
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
	]

	const iTetromino = [
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
	]

	const theTetrominoes = [
		lTetromino,
		zTetromino,
		tTetromino,
		oTetromino,
		iTetromino,
	]

	let currentPosition = 4
	let currentRotation = 0
	//randomly select a Tetromino and its rotation
	let random = Math.floor(Math.random() * theTetrominoes.length)
	let current = theTetrominoes[random][0]

	//draw Tetromino
	function draw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.add('tetromino')
			squares[currentPosition + index].style.backgroundColor =
				colors[random]
		})
	}

	function undraw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.remove('tetromino')
			squares[currentPosition + index].style.backgroundColor = ''
		})
	}

	//make the move down event
	//timeId = setInterval(moveDown, 300)

	//assign functions to keyCodes
	function control(e) {
		if (e.keyCode === 37) {
			moveLeft()
		} else if (e.keyCode === 38) {
			rotate()
		} else if (e.keyCode === 39) {
			moveRight()
		} else if (e.keyCode === 40) {
			moveDown()
		}
	}

	document.addEventListener('keydown', control)

	function moveDown() {
		undraw()
		currentPosition += width
		draw()
		freeze()
	}

	function freeze() {
		if (
			current.some((index) =>
				squares[currentPosition + index + width].classList.contains(
					'taken'
				)
			)
		) {
			current.forEach((index) =>
				squares[currentPosition + index].classList.add('taken')
			)
			random = nextRandom
			nextRandom = Math.floor(Math.random() * theTetrominoes.length)
			current = theTetrominoes[random][currentRotation]
			currentPosition = 4
			draw()
			displayShape()
			addScore()
			gameOver()
		}
	}

	function moveLeft() {
		undraw()
		const isAtLeftEdge = current.some(
			(index) => (currentPosition + index) % width === 0
		)

		if (!isAtLeftEdge) {
			currentPosition -= 1
		}
		if (
			current.some((index) =>
				squares[currentPosition + index].classList.contains('taken')
			)
		) {
			currentPosition += 1
		}
		draw()
	}

	function moveRight() {
		undraw()
		const isAtRightEdge = current.some(
			(index) => (currentPosition + index) % width === width - 1
		)

		if (!isAtRightEdge) {
			currentPosition += 1
		}

		if (
			current.some((index) =>
				squares[currentPosition + index].classList.contains('taken')
			)
		) {
			currentPosition -= 1
		}

		draw()
	}

	function rotate() {
		let previousCurrent = current
		console.log('prev:', previousCurrent)
		undraw()
		currentRotation++

		if (currentRotation === current.length) {
			//if the current rotation gets to 4, make it go back to 0
			currentRotation = 0
		}
		current = theTetrominoes[random][currentRotation]

		console.log('actual:', current)

		const isAtRightEdge = previousCurrent.some(
			(index) => (currentPosition + index) % width === width - 1
		)
		const isAtLeftEdge = previousCurrent.some(
			(index) => (currentPosition + index) % width === 0
		)

		if (
			isAtRightEdge //&&
			// current.some((index) => (currentPosition + index) % width === 0)
		) {
			if (
				previousCurrent.equals([
					1,
					width + 1,
					width * 2 + 1,
					width * 3 + 1,
				])
			) {
				console.log('right edge:', current)
				//i
				currentPosition -= 2
			}
			// rightIndex = current.findIndex(
			// 	(index) => (currentPosition + index) % width === 0
			// )
			// console.log('index right:', rightIndex)
			// if (rightIndex !== -1) {
			// 	currentPosition -= rightIndex
			// }
			else if (current.equals([1, width, width + 1, width * 2 + 1])) {
				// z
				currentPosition -= 1
				console.log('t')
			} else if (
				current.equals([1, width + 1, width * 2 + 1, width * 2])
			) {
				console.log('L')
				currentPosition -= 1
			} else if (current.equals([0, width, width + 1, width * 2 + 1])) {
				//t
				currentPosition -= 1
				console.log('z')
			}
		}

		if (
			isAtLeftEdge //&&
			//current.some((index) => (currentPosition + index) % width === 0)
		) {
			if (
				previousCurrent.equals([
					1,
					width + 1,
					width * 2 + 1,
					width * 3 + 1,
				])
			) {
				console.log('left ddge:', current)
				currentPosition += 1
			}
			// leftIindex = current.findIndex(
			// 	(index) => (currentPosition + index) % width === 0
			// )
			// console.log('index left:', leftIindex)
			// if (leftIindex !== -1) {
			// 	currentPosition += leftIindex
			// }
		}

		// let sum = current.reduce((acc, val) => {
		// 	return acc + Math.floor(val / width)
		// }, 0)
		// console.log(sum)

		// console.log('Current after:', current)
		// console.log('currentPosition after:', currentPosition)
		// console.log(
		// 	'CurrPos+index after:',
		// 	current.map((index) => currentPosition + index)
		// )

		draw()
	}

	Array.prototype.equals = function (array) {
		// if the other array is a falsy value, return
		if (!array) return false

		// compare lengths - can save a lot of time
		if (this.length != array.length) return false

		for (var i = 0, l = this.length; i < l; i++) {
			// Check if we have nested arrays
			if (this[i] instanceof Array && array[i] instanceof Array) {
				// recurse into the nested arrays
				if (!this[i].equals(array[i])) return false
			} else if (this[i] != array[i]) {
				// Warning - two different object instances will never be equal: {x:20} != {x:20}
				return false
			}
		}
		return true
	}
	// Hide method from for-in loops
	Object.defineProperty(Array.prototype, 'equals', { enumerable: false })

	//show up-next tetromino in mini-grid display
	const displaySquares = document.querySelectorAll('.mini-grid div')
	const displayWidth = 4
	const displayIndex = 0

	//the Tetrominos without rotations
	const upNextTetrominoes = [
		[1, displayWidth + 1, displayWidth * 2 + 1, 2],
		[0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
		[1, displayWidth, displayWidth + 1, displayWidth + 2],
		[0, 1, displayWidth, displayWidth + 1],
		[1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1],
	]

	function displayShape() {
		displaySquares.forEach((square) => {
			square.classList.remove('tetromino')
			square.style.backgroundColor = ''
		})
		upNextTetrominoes[nextRandom].forEach((index) => {
			displaySquares[displayIndex + index].classList.add('tetromino')
			displaySquares[displayIndex + index].style.backgroundColor =
				colors[nextRandom]
		})
	}

	startBtn.addEventListener('click', () => {
		if (timerId) {
			clearInterval(timerId)
			timerId = null
		} else {
			draw()
			timerId = setInterval(moveDown, 1000)
			nextRandom = Math.floor(Math.random() * theTetrominoes.length)
			displayShape()
		}
	})

	function addScore() {
		for (let i = 0; i < 199; i += width) {
			const row = [
				i,
				i + 1,
				i + 2,
				i + 3,
				i + 4,
				i + 5,
				i + 6,
				i + 7,
				i + 8,
				i + 9,
			]

			if (
				row.every((index) => squares[index].classList.contains('taken'))
			) {
				score += 10
				scoreDisplay.innerHTML = score
				row.forEach((index) => {
					squares[index].classList.remove('taken')
					squares[index].classList.remove('tetromino')
					squares[index].style.backgroundColor = ''
				})
				const squaresRemoved = squares.splice(i, width)
				squares = squaresRemoved.concat(squares)
				squares.forEach((cell) => grid.appendChild(cell))
			}
		}
	}

	function gameOver() {
		if (
			current.some((index) =>
				squares[currentPosition + index].classList.contains('taken')
			)
		) {
			scoreDisplay.innerHTML = 'end'
			clearInterval(timerId)
		}
	}
})
