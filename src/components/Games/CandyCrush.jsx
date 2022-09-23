import { useState, useEffect, useCallback } from 'react'
import CCCSS from './CandyCrush.module.css'
import candy1 from '../../assets/images/Candy/candy1.png'
import candy2 from '../../assets/images/Candy/candy2.png'
import candy3 from '../../assets/images/Candy/candy3.png'
import candy4 from '../../assets/images/Candy/candy4.png'
import candy5 from '../../assets/images/Candy/candy5.png'
import candy6 from '../../assets/images/Candy/candy6.png'
import BlankSquare from '../../assets/images/Candy/ex1.png'

const width = 8

let candyImages = [candy1,candy2,candy3,candy4,candy5,candy6]

const CandyCrush = () => {
    let [numberOfRounds, setNumberOfRounds] = useState(0);
    let [candyColors, setCandyColors] = useState([])
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [squareBeingDragged, setSquareBeingDragged] = useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
    let [scoreDisplay, setScoreDisplay] = useState(0)
    const [isInitial, setIsInitial] = useState(true)



    useEffect(() => {
        setCandyColors(candyImages)
    }, [])

    const checkForColumnOfThree = useCallback(() => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === BlankSquare

            if (
                columnOfThree.every(
                    square =>
                        currentColorArrangement[square] === decidedColor &&
                        !isBlank
                )
            ) {
                !isInitial && setScoreDisplay(score => score + 3)

                columnOfThree.forEach(
                    square => (currentColorArrangement[square] = BlankSquare)
                )
                return true
            }
        }
    }, [currentColorArrangement, isInitial])

    const checkForColumnOfFour = useCallback(() => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === BlankSquare
            if (
                columnOfFour.every(
                    square =>
                        currentColorArrangement[square] === decidedColor &&
                        !isBlank
                )
            ) {
                !isInitial && setScoreDisplay(score => score + 4)
                columnOfFour.forEach(
                    square => (currentColorArrangement[square] = BlankSquare)
                )
                return true
            }
        }
    }, [currentColorArrangement, isInitial])

    const checkForRowOfThree = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const decidedColor = currentColorArrangement[i]
            const notValid = [
                6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
            ]
            const isBlank = currentColorArrangement[i] === BlankSquare

            if (notValid.includes(i)) continue

            if (
                rowOfThree.every(
                    square =>
                        currentColorArrangement[square] === decidedColor &&
                        !isBlank
                )
            ) {
                !isInitial && setScoreDisplay(score => score + 3)

                rowOfThree.forEach(
                    square => (currentColorArrangement[square] = BlankSquare)
                )
                return true
            }
        }
    }, [currentColorArrangement, isInitial])

    const checkForRowOfFour = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decidedColor = currentColorArrangement[i]
            const notValid = [
                5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46,
                47, 53, 54, 55, 62, 63, 64,
            ]

            if (notValid.includes(i)) continue
            const isBlank = currentColorArrangement[i] === BlankSquare

            if (
                rowOfFour.every(
                    square =>
                        currentColorArrangement[square] === decidedColor &&
                        !isBlank
                )
            ) {
                !isInitial && setScoreDisplay(score => score + 4)

                rowOfFour.forEach(
                    square => (currentColorArrangement[square] = BlankSquare)
                )
                return true
            }
        }
    }, [currentColorArrangement, isInitial])

    const moveIntoSquareBelow = useCallback(() => {
        for (let i = 0; i < 64 - width; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === BlankSquare) {
                let randomNumber = Math.floor(
                    Math.random() * candyColors.length
                )
                currentColorArrangement[i] = candyColors[randomNumber]
            }

            if (currentColorArrangement[i + width] === BlankSquare) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = BlankSquare
            }
        }
    }, [currentColorArrangement, candyColors])

    const dragStart = e => {
        isInitial && setIsInitial(false)
        setSquareBeingDragged(e.target)
    }

    const dragDrop = e => {
        
        let newNumber= ++numberOfRounds
        setNumberOfRounds(newNumber);
        console.log("ROUND:", numberOfRounds)
        setSquareBeingReplaced(e.target)
    }

    const dragEnd = e => {
        const squareBeingDraggedId = parseInt(
            squareBeingDragged.getAttribute('data-id')
        )

        if (!squareBeingReplaced) return
        const squareBeingReplacedId = parseInt(
            squareBeingReplaced.getAttribute('data-id')
        )

        const validMoves = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width,
        ]
        const validMove = validMoves.includes(squareBeingReplacedId)

        if (validMove) {
            currentColorArrangement[squareBeingReplacedId] =
                squareBeingDragged.getAttribute('src')
            currentColorArrangement[squareBeingDraggedId] =
                squareBeingReplaced.getAttribute('src')
        }

        const isColumnOfFour = checkForColumnOfFour()
        const isRowOfFour = checkForRowOfFour()
        const isColumnOfThree = checkForColumnOfThree()
        const isRowOfThree = checkForRowOfThree()

        if (
            validMove &&
            squareBeingReplacedId &&
            (isColumnOfFour || isRowOfFour || isColumnOfThree || isRowOfThree)
        ) {
            setSquareBeingDragged(null)
            setSquareBeingReplaced(null)
        } else {
            setScoreDisplay(score => score - 1)
        }
    }

    const createBoard = useCallback(() => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
            const randomNumber = Math.floor(candyColors.length * Math.random())
            const randomColor = candyColors[randomNumber]
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangement)
    }, [candyColors])

    useEffect(() => {
        createBoard()
        let timer = setTimeout(() => {
            setScoreDisplay(0)
        }, 1000)
        return () => clearTimeout(timer)
    }, [createBoard])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 200)
        
        return () => clearInterval(timer)
    }, [
        checkForColumnOfFour,
        checkForRowOfFour,
        checkForColumnOfThree,
        checkForRowOfThree,
        moveIntoSquareBelow,
        currentColorArrangement,
    ])
    return (
        <div>         
            <div
                style={{
                    paddingLeft: '30px',
                    paddingTop: '20px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>
                Score: {scoreDisplay}, Round: {numberOfRounds}
            </div>
            <div className={CCCSS.app}>
                <div className={CCCSS.game}>
                    {currentColorArrangement.map((imgTile, index) => (
                        <img
                            src={imgTile}
                            key={index}
                            alt={imgTile}
                            data-id={index}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={e => e.preventDefault()}
                            onDragEnter={e => e.preventDefault()}
                            onDragLeave={e => e.preventDefault()}
                            onDrop={dragDrop}
                            onDragEnd={dragEnd}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CandyCrush
