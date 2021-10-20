import React, { useState } from 'react'
import Quizcard from './Quizcard'
import trophySVG from '../../assets/images/svg/trophy.svg'
function QuizList({ quizData, resetGame, analytics }) {
    const [countNr, setCountNr] = useState(0)
    const [gameFinished, setGameFinished] = useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    const [hasChosen, setHasChosen] = useState(false)
    const [checked, setChecked] = useState(null)

    const getNextCard = () => {
        setHasChosen(false)
        setChecked(null)
        if (gameFinished) {
            return
        }

        if (countNr < quizData.length - 1) {
            setCountNr(countNr + 1)
        } else {
            setGameFinished(gameFinished => (gameFinished = true))
            analytics.logEvent('game_finished', {
                score: `${correctAnswerCount} of ${quizData.length}`,
            })
            return
        }
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === 'x' ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }

    const checkAnswer = (e, index, answer, correctAnswer) => {
        //console.log('answer:', answer, 'correct_answer:', correctAnswer)
        if (gameFinished) {
            return
        }

        if (answer === correctAnswer) {
            setCorrectAnswerCount(correctAnswerCount + 1)
        } else {
            //console.log('index of wrong answer:', index)
            setChecked(index)
        }
        setHasChosen(true)
    }

    return (
        <div className="pt-5">
            {quizData && quizData.length && (
                <Quizcard
                    checkedIndex={checked}
                    hasChosen={hasChosen}
                    gameFinished={gameFinished}
                    key={uuidv4()}
                    getNextCard={getNextCard}
                    correctAnswerCount={correctAnswerCount}
                    checkAnswer={checkAnswer}
                    correct_answer={quizData[countNr].correct_answer}
                    quiz={quizData[countNr]}
                    nrOfQuestions={quizData.length}
                    questionNr={countNr + 1}></Quizcard>
            )}
            {gameFinished && (
                <div className="max-w-md mx-auto bg-gray-200 rounded-md shadow-quizBox border-1 border-gray-300 mt-10">
                    <img
                        src={trophySVG}
                        className={`mx-auto h-40 w-40 pt-3`}
                        alt="congrats"
                    />
                    <div
                        id="quizFinishedSection"
                        className="mt-5 flex justify-around bg-blue-600">
                        <p className="">
                            {' '}
                            You finished with a score of {
                                correctAnswerCount
                            } / {quizData.length}
                        </p>

                        <button
                            id="resetGame"
                            onClick={resetGame}
                            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-0 px-0 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-10">
                            Replay
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 inline
                                }
                                }`}
                                viewBox="0 0 20 20"
                                fill="black">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuizList
