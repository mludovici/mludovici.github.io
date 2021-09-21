import React from 'react'
import easySVG from '../../assets/images/svg/feather.svg'
import middleSVG from '../../assets/images/svg/balance.svg'
import hardSVG from '../../assets/images/svg/muscle.svg'
import correctAnswerSVG from '../../assets/images/svg/correct.svg'

function Quizcard({
    checkedIndex,
    hasChosen,
    gameFinished,
    quiz,
    nrOfQuestions,
    questionNr,
    correct_answer,
    getNextCard,
    checkAnswer,
    correctAnswerCount,
    actualNr,
}) {
    // useEffect(() => {
    //     // console.log('New card Nr: ', questionNr)
    //     // console.log('User already chose:', hasChosen)
    //     // console.log('Quiz properties:', quiz)
    //     // return () => {
    //     //     console.log('Destroy Quizcard')
    //     // }
    // })

    const handleClick = (
        e,
        index,
        answer,
        correct_answer,
        corrAnswerReference
    ) =>
        !hasChosen &&
        checkAnswer(e, index, answer, correct_answer, corrAnswerReference)

    return (
        <div className="max-w-md mx-auto bg-blue-500 rounded-md shadow-quizBox border-1 border-gray-300">
            <div
                className="text-white capitalize tracking-wider leading-8 bg-blue-500 px-3  rounded-md"
                id="quizCategory">
                {decodeURIComponent(quiz.category)}
            </div>
            <div
                className="text-indigo-400 flex align-center content-center justify-between  bg-blue-900 px-3"
                id="quizDifficulty">
                <span className="text-xs">
                    Question {questionNr} of {nrOfQuestions}
                </span>
                {quiz.difficulty === 'easy' ? (
                    <span className="text-green-400 capitalize inline-block ml-4 text-xs 	">
                        {quiz.difficulty}
                        <img
                            src={easySVG}
                            className="h-4 w-4 text-center inline-block ml-1"
                            alt="easy"
                        />
                    </span>
                ) : quiz.difficulty === 'medium' ? (
                    <span className="text-yellow-400 capitalize inline-block ml-4  text-xs">
                        {quiz.difficulty}
                        <img
                            src={middleSVG}
                            className="h-4 w-4 text-center inline-block ml-1"
                            alt="medium"
                        />
                    </span>
                ) : (
                    <span className="text-red-500 capitalize inline-block ml-4 	text-xs">
                        {quiz.difficulty}
                        <img
                            src={hardSVG}
                            className="h-4 w-4 text-center inline-block ml-1"
                            alt="hard"
                        />
                    </span>
                )}
            </div>{' '}
            <div className="bg-gray-50 flex min-w-min">
                <section
                    className="px-3 leading-normal text-sm pt-4 pb-4 w-3/5 overflow-y-auto"
                    id="quizQuestion">
                    {decodeURIComponent(quiz.question)}
                </section>{' '}
                <section
                    className="px-2 pt-4 pb-4 text-sm break-normal text-right w-1/2 pr-1 space-y-2 rounded-md mr-0"
                    id="quizAnswers">
                    {quiz.allAnswers.map((answer, index) => (
                        <span
                            key={index}
                            className={`flex justify-start align-right text-right content-center items-center relative ${
                                !gameFinished &&
                                hasChosen &&
                                answer === correct_answer
                                    ? 'bg-green-400'
                                    : hasChosen && checkedIndex === index
                                    ? 'bg-red-400'
                                    : ''
                            }`}
                            onClick={e =>
                                handleClick(e, index, answer, correct_answer)
                            }>
                            <button className="bg-gray-300 rounded-full hover:bg-green-500 hover:text-white shadow-sm border-solid border-2 border-blue-600 outline-none cursor-pointer font-semibold pt-1.5 pr-3 pb-1.5 pl-3 m-1 leading-6 text-lg inline-block ">
                                {index === 0
                                    ? 'A'
                                    : index === 1
                                    ? 'B'
                                    : index === 2
                                    ? 'C'
                                    : 'D'}
                            </button>
                            <p className="text-left pl-1 " key={index}>
                                {decodeURIComponent(answer)}
                                {!gameFinished &&
                                    hasChosen &&
                                    (answer === correct_answer ? (
                                        <img
                                            alt="answerIcon"
                                            className="h-6 2-6 absolute inline right-0 fill-current text-green-800"
                                            src={correctAnswerSVG}
                                        />
                                    ) : null)}
                            </p>
                        </span>
                    ))}
                </section>
            </div>
            <section className="bg-gray-800 w-full h-auto flex justify-between content-center align-middle text-center ">
                <span className="text-white text-sm align-center ml-3">
                    Score: {correctAnswerCount}/{nrOfQuestions}
                </span>
                <button
                    className="text-sm text-white inline-block"
                    onClick={getNextCard}>
                    Continue
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline ml-2 mr-3 pr-1"
                        viewBox="0 0 20 20"
                        fill="white">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </section>
        </div>
    )
}

export default Quizcard
