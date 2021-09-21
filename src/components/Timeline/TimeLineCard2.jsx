import React from 'react'
import { Container, Content } from './timeLineComponents'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import TimeLineCSS from './TimeLineCard.module.css'
import { useAuth } from '../../providers/AuthProvider'

function TimeLineCard2({
    id,
    job,
    content,
    dateFrom,
    dateTo,
    street,
    city,
    zip,
    state,
    employerName,
    updateForm,
    deleteCard,
    setIndexToUpdate,
}) {
    const { currentUser } = useAuth()
    return (
        <Container key={id}>
            <Content
                className=""
                // animation={animation}
                // onClick={handleClick}
                // toggle={toggle}
            >
                {' '}
                {currentUser && currentUser.email === 'ludovicimarc@gmail.com' && (
                    <div className="flex justify-end">
                        <a href="#createCard">
                            <FaEdit
                                className=""
                                onClick={e => updateForm(e, id)}
                            />
                        </a>
                        <FaTrashAlt
                            className="text-center w-3 h-4 inline"
                            onClick={e => deleteCard(e, id)}></FaTrashAlt>
                    </div>
                )}
                <div className="text-center">
                    <div className={TimeLineCSS['jobtitle']}>{job}</div>
                    <div className="mb-2">
                        {dateFrom && <span>{dateFrom.replace(/-/g, '/')}</span>}{' '}
                        {new Date(dateTo).toISOString() && (
                            <span>- {dateTo.replace(/-/g, '/')}</span>
                        )}
                    </div>
                    <div className="flex justify-center mb-3 text-center mx-auto leading-3 text-xs tracking-tighter">
                        <div className="uppercase text-sm mb-2 text-address">
                            {employerName} {street} {city} {zip} {state}
                        </div>
                    </div>
                    <p className="font-light opacity-70 text-gray-700 max-h-72 overflow-y-auto">
                        {content}
                    </p>
                </div>
            </Content>
        </Container>
    )
}
export default TimeLineCard2
//"tracking-wide mt-2 text-2xl leading-4"
