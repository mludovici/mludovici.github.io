import React from 'react'
import { Container, Content } from './CVStyles'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'

function CVCardComponent({
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
}) {

    const intl = useIntl()

    return (
        <Container>
            <Content
                className=""
            >
                <div className="flex justify-end">
                    <a href="#createCard">
                        <FaEdit className="" onClick={e => updateForm(e, id)} />
                    </a>
                    <FaTrashAlt
                        className="text-center w-3 h-4 inline"
                        onClick={e => deleteCard(e, id)}></FaTrashAlt>
                </div>
                <div className="text-center">
                    <div>
                        <FormattedMessage
                            id={`${id}.job`}
                            defaultMessage={job}></FormattedMessage>
                    </div>
                    <div className="mb-2">
                        {dateFrom && (
                            <span>
                                {
                                    intl.formatDate(
                                        dateFrom
                                    ) /*.replace(/-/g, '/')*/
                                }
                            </span>
                        )}{' '}
                        {dateTo && (
                            <span>
                                -{' '}
                                {
                                    intl.formatDate(
                                        dateTo
                                    ) /*.replace(/-/g, '/')*/
                                }
                            </span>
                        )}
                    </div>
                    <div className="flex justify-center mb-3 text-center mx-auto leading-3 text-xs tracking-tighter">
                        <div className="uppercase text-sm mb-2 text-address max-w-xs">
                            {employerName} {street} {city} {zip} {state}
                        </div>
                    </div>
                    <p className="font-light opacity-70 text-gray-700 max-h-72 overflow-y-auto">
                        <FormattedMessage
                            id={`${id}.content`}
                            defaultMessage={content}></FormattedMessage>
                    </p>
                </div>
            </Content>
        </Container>
    )
}
export default CVCardComponent
