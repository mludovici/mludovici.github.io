import React, { useState } from 'react'
import { GiBirdTwitter, GiLinkedRings, GiFaceToFace } from 'react-icons/gi'
import ProfilePageCSS from './ProfilePageCSS.module.css'
import { Link } from 'react-router-dom'
import DnDComponent from './Timeline/DnDComponent'

function ProfilePage() {
    const [editMode, setEditMode] = useState(false)
    return (
        <div className="h-screen dark:bg-black">
            <div className="pt-96">
                <div className={ProfilePageCSS['content']}>
                    <div className={ProfilePageCSS['card']}>
                        <DnDComponent
                            //editMode={editMode}
                            className={
                                ProfilePageCSS['profile-img']
                            }></DnDComponent>
                        {/* <img
                    src="https://i.pravatar.cc/125?image=3"
                    alt=""
                    className={ProfilePageCSS['profile-img']}
                /> */}
                        {!editMode && (
                            <h2 className={ProfilePageCSS['profile-name']}>
                                Marc Ludovici
                            </h2>
                        )}{' '}
                        {editMode && (
                            <input type="text" placeholder="Your Name"></input>
                        )}
                        <p className={ProfilePageCSS['profile-position']}>
                            Developer
                        </p>
                        <p className={ProfilePageCSS['profile-info']}>
                            Ich bin Master-Absolvent in praktischer Informatik
                            mit 3 Jahren Berufserfahrung. Meine Erfahrungen sind
                            auf dem Gebiet Web-Entwicklung mit dem Javascript
                            Stack und Data Science. In meiner Freizeit bilde ich
                            mich fortlaufend weiter.
                        </p>
                        <ul className={ProfilePageCSS['social-list']}>
                            <li>
                                <Link
                                    to="twitter.com"
                                    className={ProfilePageCSS['social-link']}>
                                    <GiBirdTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="linkedin.com"
                                    className={ProfilePageCSS['social-link']}>
                                    <GiLinkedRings></GiLinkedRings>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="facebook.com"
                                    className={ProfilePageCSS['social-link']}>
                                    <GiFaceToFace></GiFaceToFace>
                                </Link>
                            </li>
                        </ul>
                        <button
                            className={`${ProfilePageCSS['button']} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right`}>
                            {!editMode ? 'Edit' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
