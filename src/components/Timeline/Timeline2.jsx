import React, { useState, useEffect, useRef } from 'react'
import { Timeline } from './timeLineComponents'
import { useAuth } from '../../providers/AuthProvider'
import TimeLineCard2 from './TimeLineCard2'
import { setErrorTimeout } from '../utils'
import {
    IoIosArrowDropupCircle,
    IoIosArrowDropdownCircle,
} from 'react-icons/io'

function Timeline2() {
    //const [editable, setEditable] = useState(false)
    const [toggleEdit, setToggleEdit] = useState(false)
    const { /*currentUser, app, storage,*/ firestore, analytics } = useAuth()
    const [cv, setCV] = useState(null)
    const [isEditState, setIsEditState] = useState(false)
    const [indexToUpdate, setIndexToUpdate] = useState(null)
    const [formError, setFormError] = useState(null)
    const form = useRef()
    // console.log(app)
    // console.log(firestore)
    // console.log(storage)
    // const db2 = app.database()

    useEffect(() => {
        analytics.logEvent('screen_view', {
            firebase_screen: 'CV',
            firebase_screen_class: 'CVPage',
        })
    })
    const createCard = e => {
        e.preventDefault()
        // console.log('vally:', e.target.elements[0].value)
        // console.log('elements:', e.currentTarget.elements['input'])
        //console.log('elements:', form.current.elements)
        //let fd = new FormData(form.current)
        let fromDate = form.current.elements['dateFrom'].value
        let toDate = form.current.elements['dateTo'].value

        if (new Date(fromDate) > new Date(toDate)) {
            setErrorTimeout(
                setFormError,
                'Date from may not be greater than Date to...'
            )
            return
        }

        //console.log({ fd })
        let formElements = Array.from(e.currentTarget)
        let inputElements = formElements.filter(
            item => item.nodeName !== 'BUTTON'
        )
        //console.log({ inputElements })

        let formData = {}
        inputElements.forEach(item => (formData[item.name] = item.value))

        //console.log(formData)

        firestore
            .collection('cv')
            .add(formData)
            .then(docRef => {
                console.log('docref:', docRef)
                // console.log('Document written with ID: ', docRef.id)
                form.current.reset()
            })
            .catch(error => {
                setErrorTimeout(setFormError, error.message)
                console.error('Error adding document: ', error)
            })
    }

    const updateCard = e => {
        e.preventDefault()

        let formElements = Array.from(e.currentTarget)
        let inputElements = formElements.filter(
            item => item.nodeName !== 'BUTTON'
        )
        let formData = {}
        inputElements.forEach(item => (formData[item.name] = item.value))
        formData.id = indexToUpdate

        firestore
            .collection('cv')
            .doc(indexToUpdate)
            .set(formData)
            .then(docRef => {
                //console.log('Document updated with ID: ', docRef)
                form.current.reset()
            })
            .catch(error => {
                console.error('Error adding document: ', error)
                setErrorTimeout(setFormError, error.message)
            })
    }

    const updateForm = async (e, idx) => {
        setToggleEdit(true)
        setIsEditState(state => (state = true))
        setIndexToUpdate(prevIdx => (prevIdx = idx))

        let document = await firestore.collection('cv').doc(idx).get()
        if (document.exists) {
            let doc = document.data()
            for (let property in doc) {
                if (property === 'id') {
                    continue
                }
                form.current.elements[property].value = doc[property]
            }
        }
    }

    const deleteCard = async (e, idx) => {
        e.preventDefault()
        analytics.logEvent('delete_cv_item', {
            firebase_screen: 'CV',
            firebase_screen_class: 'CVPage',
            item: idx,
        })
        if (window.confirm('Are you sure you want to delete this entry?')) {
            try {
                let document = await firestore
                    .collection('cv')
                    .doc(idx)
                    .delete()
                console.log('document: ', document, ' successfully deleted!')
            } catch (error) {
                setErrorTimeout(setFormError, error.message)
            }
            // let document = await firestore.collection('cv').doc(idx).delete().then((doc) => {
            //     console.log('document: ', doc, ' successfully deleted!')
            // }).catch((error) => {
            //     console.error("Error removing document: ", error);
            //     setErrorTimeout(setFormError, error.message)
            // });
            // console.log('document: ', document, ' successfully deleted!')
        }
    }

    const handleToggle = () => setToggleEdit(!toggleEdit)

    useEffect(() => {
        let unsubscribe = firestore.collection('cv').onSnapshot(
            querySnapshot => {
                var cv = []
                querySnapshot.forEach(doc => {
                    cv.push({
                        ...doc.data(),
                        id: doc.id,
                    })
                })
                //console.log('CV: ', { cv })
                cv.sort(function (a, b) {
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.dateFrom) - new Date(a.dateFrom)
                })
                //console.log(cv)
                let filteredCV = cv.filter(item => !item.job.includes('aktive'))
                //console.log(filteredCV)
                setCV(filteredCV)
            },
            error => {
                console.log('error:', error)
                setErrorTimeout(setFormError, error.message)
            }
        )
        return () => unsubscribe()
    }, [firestore])

    return (
        <>
            {/* {currentUser && currentUser.email === 'ludovicimarc@gmail.com' && ( */}
            <p
                id="createCard"
                className="mb-5 text-center text-lg relative w-full max-w-lg mx-auto my-5">
                Create new event{' '}
                {!toggleEdit ? (
                    <IoIosArrowDropdownCircle
                        className="inline-block "
                        onClick={handleToggle}
                    />
                ) : (
                    <IoIosArrowDropupCircle
                        className="inline-block "
                        onClick={handleToggle}
                    />
                )}
            </p>
            {/* )} */}
            {/* {currentUser && currentUser.email === 'ludovicimarc@gmail.com' ? ( */}
            <form
                ref={form}
                onSubmit={e => {
                    !isEditState ? createCard(e) : updateCard(e)
                }}
                className={`w-full max-w-lg mx-auto my-10 ${
                    toggleEdit ? 'block' : 'hidden'
                }`}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-0 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-date">
                            Event From - To
                        </label>
                        <input
                            className="appearance-none m-autoinline-block w-6/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-date"
                            type="date"
                            required
                            name="dateFrom"
                        />
                        <input
                            className="appearance-none inline-block w-6/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-date"
                            type="date"
                            required
                            name="dateTo"
                        />
                        {/* <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p> */}
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-title">
                                Event Title
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-title"
                                type="text"
                                placeholder="Title"
                                required
                                name="title"
                            />
                        </div> */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-jobposition">
                            Job position
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-job"
                            type="text"
                            placeholder="Software Developer"
                            name="job"
                        />
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-textarea">
                            Content
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-content"
                            placeholder="..."
                            required
                            name="content"
                        />
                        <p className="text-gray-600 text-xs italic">
                            Job description
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-0 md:mb-0">
                        Employer adress
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-empName">
                            Employee Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-emp"
                            type="text"
                            name="employerName"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-street">
                            Street
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-street"
                            type="text"
                            name="street"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-city">
                            City
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            name="city"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                            htmlFor="grid-zip">
                            Zip
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="number"
                            placeholder="66123"
                            name="zip"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                            htmlFor="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <input
                                className="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                                type="text"
                                name="state"></input>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end divide-y-8">
                    <button
                        type="submit"
                        className="bg-purple-600 font-semibold  text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                        {!isEditState ? 'Create' : 'Update'}
                    </button>
                </div>
                {formError ? (
                    <p className="text-red-500 text-center text-xl my-5">
                        {formError}
                    </p>
                ) : null}
                <div className="divide-y-4 py-2 w-full">
                    <div></div>
                    <div></div>
                </div>
            </form>
            {/* ) : null} */}
            <div
                id="timeLineContainer"
                className="border-box bg-bgTimeline font-sans">
                <Timeline>
                    {cv && cv.length
                        ? cv.map(cventry => {
                              console.log({ cventry })
                              return (
                                  <TimeLineCard2
                                      key={cventry.id}
                                      {...cventry}
                                      updateForm={updateForm}
                                      deleteCard={deleteCard}
                                      setIndexToUpdate={setIndexToUpdate}
                                  />
                              )
                          })
                        : null}
                </Timeline>
            </div>
        </>
    )
}

export default Timeline2
