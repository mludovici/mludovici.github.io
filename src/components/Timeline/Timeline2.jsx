import React, { useState, useEffect } from 'react'
import { Timeline, Container, Content } from './timeLineComponents'
import { useAuth } from '../../providers/AuthProvider'

import { FaEdit } from 'react-icons/fa'
function Timeline2() {
    const [editable, setEditable] = useState(false)
    const [toggleEdit, setToggleEdit] = useState(true)
    const { currentUser } = useAuth()

    useEffect(() => {})
    return (
        <>
            {' '}
            {toggleEdit && (
                <form className="w-full max-w-lg mx-auto my-10">
                    <p className="mb-4 text-center text-lg">Create new event</p>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-date">
                                Event date
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-date"
                                type="date"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-title">
                                Event Title
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-title"
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-jobposition">
                                Job position
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="text"
                                placeholder="Software Developer"
                            />
                        </div>
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-textarea">
                                Content
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                placeholder="..."
                            />
                            <p className="text-gray-600 text-xs italic">
                                Make it as long and as crazy as you'd like
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
                                for="grid-street">
                                Street
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-street"
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-city">
                                City
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-zip">
                                Zip
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-zip"
                                type="text"
                                placeholder="66123"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                                for="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <input
                                    className="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                    type="text"></input>
                            </div>
                        </div>
                    </div>
                </form>
            )}
            <div
                id="timeLineContainer"
                className="border-box bg-bgTimeline font-sans">
                <Timeline>
                    <Container>
                        <Content>
                            <div className="flex justify-between">
                                <h2>2017</h2>
                                <FaEdit
                                    className="text-center w-4 h-5"
                                    onClick={() => {
                                        alert('PALSPDLAPSLDPALPL!')
                                    }}
                                />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ut, error nulla. Similique,
                                mollitia aut. Dignissimos est eveniet quas
                                perspiciatis optio vitae hic suscipit earum
                                nobis odio. Labore perspiciatis hic voluptatem,
                                molestiae officiis corrupti neque veritatis
                                voluptatum provident dolor amet nisi.
                            </p>
                        </Content>
                    </Container>
                    <TimeLineCard />
                </Timeline>
            </div>
        </>
    )
}

function TimeLineCard() {
    return (
        <Container>
            <Content>
                <h2>2017</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur recusandae nostrum nam dolore, illum ad mollitia
                    ipsa harum tempora a dignissimos aut unde qui modi quaerat
                    tenetur, saepe praesentium labore maiores pariatur illo
                    eligendi quam voluptas assumenda? Laborum quia delectus
                    fugit totam reiciendis odit assumenda, accusantium optio
                    iste accusamus magnam!
                </p>
            </Content>
        </Container>
    )
}

export default Timeline2
