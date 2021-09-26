import React from 'react'
import { useForm } from '@formspree/react'
import FormStyles from './ContactFormFooter.module.css'
import bgImage from '../../../assets/images/bgFooterContact.jpg'

function ContactFormFooter() {
    const [state, handleSubmit] = useForm('myyldlpw')
    if (state.succeeded) {
        return <div>Thank you for sending the message!</div>
    }
    return (
        <form onSubmit={handleSubmit} className="w-full p-5 sm:w-1/2 ">
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
                className="m-0 p-0 box-border outline-none font-Roboto bg-cover bg-no-repeat bg-center border-4 min-w-400">
                <div className={FormStyles['contact-form']}>
                    <div className={FormStyles['input-fields']}>
                        <input
                            type="text"
                            name="name"
                            className={FormStyles.input}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className={FormStyles.input}
                            placeholder="Email Address"
                            required
                        />
                        <input
                            type="text"
                            className={FormStyles.input}
                            name="_subject"
                            placeholder="Subject"
                        />
                    </div>
                    <div className={FormStyles.msg}>
                        <textarea
                            name="message"
                            required
                            placeholder="Message.."></textarea>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className={FormStyles.btn}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactFormFooter
