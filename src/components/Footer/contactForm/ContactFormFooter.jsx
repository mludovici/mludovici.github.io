import React from 'react'
import { useForm } from '@formspree/react'
import FormStyles from './ContactFormFooter.module.css'

function ContactFormFooter() {
	const [state, handleSubmit] = useForm('myyldlpw')
	if (state.succeeded) {
		return <div>Thank you for sending the message!</div>
	}
	return (
		<div className='flex flex-column md:flex-row flex-wrap items-center justify-around bg-gray-500  bottom-0 left-0'>
			<span className='w-full p-5 sm:w-1/2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				possimus soluta corporis ea sed quo. Amet odit sequi sed totam.
				Dolorum saepe consequuntur accusantium asperiores quibusdam
				reprehenderit alias quo facere?
				<a href='#'>Impressum</a>
			</span>
			<form onSubmit={handleSubmit} className='w-full p-5 sm:w-1/2 '>
				<div className={FormStyles['contact-form-wrapper']}>
					<div className={FormStyles['contact-form']}>
						<div className={FormStyles['input-fields']}>
							<input
								type='text'
								name='name'
								className={FormStyles.input}
								placeholder='Name'
								required
							/>
							<input
								type='email'
								name='email'
								className={FormStyles.input}
								placeholder='Email Address'
								required
							/>
							<input
								type='text'
								className={FormStyles.input}
								name='_subject'
								placeholder='Subject'
							/>
						</div>
						<div className={FormStyles.msg}>
							<textarea
								name='message'
								required
								placeholder='Message'
							></textarea>
							<button
								type='submit'
								disabled={state.submitting}
								className={FormStyles.btn}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ContactFormFooter
