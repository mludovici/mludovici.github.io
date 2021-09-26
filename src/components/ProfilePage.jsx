import React from 'react'
import { GiBirdTwitter, GiLinkedRings, GiFaceToFace } from 'react-icons/gi'
import ProfilePageCSS from './ProfilePageCSS.module.css'
import { Link } from 'react-router-dom'
import DnDComponent from './DnDComponent'

function ProfilePage() {
    return (
        <div className={ProfilePageCSS['content']}>
            <div className={ProfilePageCSS['card']}>
                <DnDComponent>
                    <img
                        src="https://i.pravatar.cc/125?image=3"
                        alt=""
                        className={ProfilePageCSS['profile-img']}
                    />
                </DnDComponent>

                <h2 className={ProfilePageCSS['profile-name']}>
                    Ramsey Harper
                </h2>
                <p className={ProfilePageCSS['profile-position']}>
                    Graphic Designer
                </p>
                <p className={ProfilePageCSS['profile-info']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere a tempore, dignissimos odit accusantium repellat
                    quidem, sit molestias dolorum placeat quas debitis ipsum
                    esse rerum?
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
            </div>
        </div>
    )
}

export default ProfilePage
