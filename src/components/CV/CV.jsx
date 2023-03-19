import React, { useState, useEffect, useRef, createRef } from 'react'
import { Timeline } from './CVStyles'
import { useAuth } from '../../providers/AuthProvider'
import CVCardComponent from './CVCardComponent'
import { setErrorTimeout, useTitle } from '../utils'
import { logEvent } from "firebase/analytics";
import { collection, addDoc, doc, updateDoc, getDoc, deleteDoc, onSnapshot, query } from "firebase/firestore";

import {
    IoIosArrowDropupCircle,
    IoIosArrowDropdownCircle,
} from 'react-icons/io'

function CV() {

    const [toggleEdit, setToggleEdit] = useState(false)
    const { firestore, analytics } = useAuth()
    const [cv, setCV] = useState(null)
    const [isEditState, setIsEditState] = useState(false)
    const [indexToUpdate, setIndexToUpdate] = useState(null)
    const [formError, setFormError] = useState(null)

    const editPanelRef= createRef();
    useTitle( "Curriculum Vitae");

    const form = useRef()

    logEvent(analytics, 'notification_received');

    useEffect(() => {
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'CV',
            firebase_screen_class: 'CVPage',
        })
    })

    const createCard = async (e) => {
        e.preventDefault()
        setIsEditState(state => (state = false))

        let fromDate = form.current.elements['dateFrom'].value
        let toDate = form.current.elements['dateTo'].value

        if (new Date(fromDate) > new Date(toDate)) {
            setErrorTimeout(
                setFormError,
                'Date from may not be greater than Date to...'
            )
            return
        }

        let formElements = Array.from(e.currentTarget)
        let inputElements = formElements.filter(
            item => item.nodeName !== 'BUTTON'
        )

        let formData = {}
        inputElements.forEach(item => (formData[item.name] = item.value))
        
        try {
            const docRef = await addDoc(collection(firestore, "cv"), formData);
            if (docRef) {
                handleToggle();
                console.log("Document written with ID: ", docRef.id);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }  
    }

    const updateCard = e => {
        e.preventDefault()
        setIsEditState(state => (state = true))
        console.log(form);
        console.log(e);

        let formElements = Array.from(e.currentTarget)
        let inputElements = formElements.filter(
            item => item.nodeName !== 'BUTTON'
        )
        let formData = {}
        inputElements.forEach(item => (formData[item.name] = item.value))
        formData.id = indexToUpdate
        console.log("doc to update id:", formData);

        const docUpdatedRef = doc(firestore, "cv", formData.id)
        updateDoc(docUpdatedRef, formData).then(docRef => {

            console.log('Document updated with ID: ', docRef)
            form.current.reset()
            handleToggle()
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

        const docRef = doc(firestore, "cv", idx);
        getDoc(docRef).then(doc => {
            if (doc) {
                console.log("doc in updateForm:", doc);
                let document = doc.data()
                for (let property in document) {
                    if (property === 'id') {
                        continue
                    }
                    form.current.elements[property].value = document[property]
                }
            }
        })
        // const q = query(collection(firestore, "cv"), where("id", "==", idx)),
        // const querySnapshot = await getDoc()
        // let document = await firestore.collection('cv').doc(idx).get()
        // if (document.exists) {
        //     let doc = document.data()
        //     for (let property in doc) {
        //         if (property === 'id') {
        //             continue
        //         }
        //         form.current.elements[property].value = doc[property]
        //     }
        // }
    }

    const deleteCard = async (e, idx) => {
        e.preventDefault()
        logEvent(analytics,'delete_cv_item', {
            firebase_screen: 'CV',
            firebase_screen_class: 'CVPage',
            item: idx,
        })
        if (window.confirm('Are you sure you want to delete this entry?')) {
            try {
                const docRef = doc(firestore, "cv", idx);
                await deleteDoc(docRef)
            } catch (error) {
                setErrorTimeout(setFormError, error.message)
            }
        }
    }

    const handleToggle = () => setToggleEdit(!toggleEdit)

    useEffect(() => {
        let unsubscribe;
        try {
        const querySnapshot = query(collection(firestore,"cv"))
        unsubscribe = onSnapshot(querySnapshot, 
            querySnapshot => {
                const cv = [];
                querySnapshot.forEach(doc => {
                    cv.push({
                        ...doc.data(),
                        id: doc.id,
                    })
                })
                cv.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom))

                let filteredCV = cv.filter(item => !item.job?.includes('aktive'))
                setCV(filteredCV)
            }, {source:"cache"})
                        
        } catch(error) {
                //console.log('error:', error)
                setErrorTimeout(setFormError, error.message)
        }
        return () => unsubscribe()
    }, [firestore])

    return (
        <>
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
            {toggleEdit &&
            <form
                ref={form}
                onSubmit={e => {
                    !isEditState ? createCard(e) : updateCard(e)
                }}
                className={`w-full max-w-lg mx-auto my-10 px-10 sm:px-0 ${
                    toggleEdit ? 'block' : 'hidden'
                }`}>
                <div className="flex flex-wrap -mx-3 mb-6" ref={editPanelRef}>
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
                    </div>
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
                    <div>                
                        <button onClick={() => {
                            setToggleEdit(false)
                         }}
                        className="bg-red-600 font-semibold  text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                        Cancel
                        </button>
                        <button
                        type="submit"
                        // onClick={(e) => {
                        //     !isEditState ? createCard(e) : updateCard(e)
                        // }}                           
                            className="bg-purple-600 font-semibold  text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                            {!isEditState ? 'Create' : 'Update'}
                        </button>
                    </div>
                </div>

                <div className="divide-y-4 py-2 w-full">
                    <div></div>
                    <div></div>
                </div>
            </form>  }
            {formError ? (
                <p className="text-red-500 text-center text-xl my-5">
                    {formError}
                </p>
            ) : null}
            <div
                id="timeLineContainer"
                className="border-box bg-bgTimeline font-sans">
                <Timeline>
                    {cv?.length
                        ? cv.map(cventry => (
                                  <CVCardComponent
                                      key={cventry.id}
                                      {...cventry}
                                      updateForm={updateForm}
                                      deleteCard={deleteCard}
                                      setIndexToUpdate={setIndexToUpdate}
                                  />
                              )
                          )
                        : null}
                </Timeline>
            </div>
        </>
    )
}

export default CV
