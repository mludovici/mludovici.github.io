import React, { useState, useEffect } from 'react'

// import triviaCategories from './triviaCategories.json'
import QuizList from './QuizList'
function Trivia() {
    const [amount, setAmount] = useState(10)
    const [selectedCategory, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [type, setType] = useState('')
    const [options, setOptions] = useState([])
    const [catError, setCatError] = useState('')
    const [quizData, setQuizData] = useState([])
    const [quizAPIError, setQuizAPIError] = useState('')
    const [showOptionPanel, setShowOptionPanel] = useState(true)

    useEffect(() => {
        //console.log('inside Trivia.jsx use Effect!')
        const getInitialCategories = async () => {
            let response = await fetch('https://opentdb.com/api_category.php')
            if (response.status === 200) {
                let categories = await response.json()
                if (categories && categories['trivia_categories']) {
                    categories['trivia_categories'].unshift({
                        id: '',
                        name: 'Any Category',
                    })
                    setOptions(categories['trivia_categories'])
                    setCatError(null)
                } else {
                    setCatError(
                        'Could not retrieve Quiz categories or no connection!'
                    )
                }
            } else {
                setCatError(
                    'Could not retrieve Quiz categories or no connection!'
                )
            }
        }
        getInitialCategories()
        //history.push('/error')
        // return () => {
        //     console.log('destroy Trivia')
        // }
    }, [])

    const prepUpData = quizData => {
        //console.dir(quizData)
        let quizDataEnhanced = quizData.map((quiz, index) => {
            let allAnswers = [...quiz.incorrect_answers]
            allAnswers.splice(
                Math.round(Math.random() * quiz.incorrect_answers.length),
                0,
                quiz.correct_answer
            )
            quiz['allAnswers'] = allAnswers
            return quiz
        })
        //console.table('quizDataEnhanced:', quizDataEnhanced)
        return quizDataEnhanced
    }

    const resetGame = () => {
        setShowOptionPanel(true)
        setQuizData([])
        setQuizAPIError('')
        setCatError('')
    }

    const getQuizData = () => {
        // console.log('GETQUIZDATA!')
        // console.log(amount)
        let quizUrl = `https://opentdb.com/api.php?${
            amount ? 'amount=' + amount : 'amount=10'
        }${selectedCategory ? '&category=' + selectedCategory : ''}${
            difficulty ? '&difficulty=' + difficulty : ''
        }${type ? '&type=' + type : ''}&encode=url3986`

        const fetchData = async () => {
            const response = await fetch(quizUrl, {
                headers: {
                    // 'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            //console.log('response:', response)
            if (response.status === 200) {
                let data = await response.json()
                //console.log('data:', data)
                switch (data.response_code) {
                    case 0:
                        setQuizAPIError(null)
                        setQuizData(prepUpData(data.results))
                        setShowOptionPanel(false)
                        break
                    case 1:
                        setQuizAPIError('No results with those criterias found')
                        setQuizData([])
                        setShowOptionPanel(true)

                        break
                    case 2:
                        setQuizAPIError('invalid quiz parameters')
                        setQuizData([])
                        setShowOptionPanel(true)

                        break
                    case 3:
                        setQuizAPIError('Session Token not found')
                        setShowOptionPanel(true)

                        break
                    case 4:
                        setQuizAPIError('Token empty, reset the token')
                        setShowOptionPanel(true)

                        break
                    default:
                        break
                }
            }
        }
        fetchData() //.then(result => console.log('result:', result))
    }

    return (
        <>
            {showOptionPanel && (
                <div id="quizSection" className="max-w-2xl mx-auto">
                    <h1 className=" text-center text-2xl font-bold text-gray-800 mb-5 mt-10 bg-green-400">
                        Welcome to Trivia!
                    </h1>
                    <div className="max-w-xs text-center mx-auto shadow-xl rounded ">
                        <form className=" shadow-md rounded mb-4px-8 pt-6 pb-8  bg-gray-100">
                            <p className=" leading-relaxed text-center font-bold shadow-md bg-green-600 mx-auto">
                                Setup&nbsp;
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline-block align-middle text-center "
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg>
                            </p>
                            <p className="text-center text-gray-400 text-xs inline-block align-middle content-center h-4 leading-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline-block align-center content-center text-center"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>{' '}
                                Data provided by opentdb.com
                            </p>
                            <hr className="pb-10 " />
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="nrQuestion">
                                    How many questions?
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nrQuestion"
                                    type="number"
                                    placeholder="10"
                                    min="1"
                                    max="100"
                                    value={amount}
                                    onChange={e => {
                                        //console.log('AMOUNT:', e.target.value)
                                        setAmount(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="category">
                                    Category
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="category"
                                    type="select"
                                    value={selectedCategory}
                                    onChange={e => setCategory(e.target.value)}>
                                    {options.length &&
                                        options.map(option => (
                                            <option
                                                key={option.id}
                                                value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                </select>
                                {catError ? (
                                    <p className="text-red-500 text-">
                                        {catError}
                                    </p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="difficulty">
                                    Difficulty
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="difficulty"
                                    type="select"
                                    value={difficulty}
                                    onChange={e =>
                                        setDifficulty(e.target.value)
                                    }>
                                    <option key="1" value="" defaultValue="">
                                        Any difficulty
                                    </option>
                                    <option key="2" value="easy">
                                        Easy
                                    </option>
                                    <option key="3" value="medium">
                                        medium
                                    </option>
                                    <option key="4" value="hard">
                                        hard
                                    </option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="type">
                                    Answer type
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="type"
                                    type="select"
                                    value={type}
                                    onChange={e => setType(e.target.value)}>
                                    <option key="0" value="">
                                        Any Type
                                    </option>
                                    <option key="1" value="multiple">
                                        Multiple Choice
                                    </option>
                                    <option key="2" value="boolean">
                                        True/False
                                    </option>
                                </select>
                                {catError ? (
                                    <p className="text-red-500 text-">
                                        {catError}
                                    </p>
                                ) : null}
                            </div>
                            <div className="items-center ">
                                <button
                                    onClick={getQuizData}
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {quizAPIError && <p>{quizAPIError}</p>}

            {!quizAPIError && quizData.length ? (
                <QuizList resetGame={resetGame} quizData={quizData}></QuizList>
            ) : null}
        </>
    )
}

export default Trivia
