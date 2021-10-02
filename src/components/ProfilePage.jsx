import React, { useState, useEffect } from 'react'
import { GiBirdTwitter, GiLinkedRings, GiFaceToFace } from 'react-icons/gi'
import ProfilePageCSS from './ProfilePageCSS.module.css'
// import { useHistory } from 'react-router-dom'
import DnDComponent from './DnDComponent'
import { useAuth } from '../providers/AuthProvider'
function ProfilePage({ currentUser }) {
    // const history = useHistory()
    const { firestore, storage } = useAuth()
    const [editMode, setEditMode] = useState(false)
    const [userName, setUserName] = useState(null)
    const [profileInfo, setProfileInfo] = useState(null)
    const [jobPosition, setJobPosition] = useState(null)
    const [profileImage, setProfileImage] = useState(null)
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        console.log('profile useEffect')
        console.log('currentUser.uid:', currentUser.uid)
        firestore
            .collection('profileData')
            .doc(`${currentUser.uid}`)
            .get()
            .then(docRef => {
                console.log(docRef.data())
                let { userName, jobPosition, profileImageURL, profileInfo } =
                    docRef.data()
                setUserName(userName)
                setJobPosition(jobPosition)
                setProfileInfo(profileInfo)
                setImageURL(profileImageURL)
            })
            .catch(error => {
                console.error('Error adding profile data: ', error)
            })
    }, [firestore, currentUser])
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleUpdate = async () => {
        console.log('inside handleUpdate')
        console.log({ profileImage })
        let profileImageURL = null
        if (profileImage) {
            let storageRef = await storage
                .ref()
                .child(`profile/${currentUser.uid}/profileImage`)
                .putString(profileImage.image, 'data_url')
            // .then(snapshot => {console.log('DOWNLOAD URL :', snapshot.ref.getDownloadURL().then(url => {setImageURL(url)}))

            profileImageURL = await storageRef.ref.getDownloadURL()
            console.log('set image url:', { profileImageURL })
            setImageURL(profileImageURL)
        }

        const profileData = {}
        profileData.profileImageURL = profileImageURL
        profileData.userName = userName
        profileData.jobPosition = jobPosition
        profileData.profileInfo = profileInfo

        try {
            firestore
                .collection('profileData')
                .doc(`${currentUser.uid}`)
                .set(profileData)
                .then()
                .catch(error => {
                    console.error('Error adding profile data: ', error)
                })
        } catch (e) {
            console.log('error: ', e)
        }
        toggleEditMode()
    }

    const deleteImageFromStorage = () => {
        return storage
            .ref()
            .child(`profile/${currentUser.uid}/profileImage`)
            .delete()
    }

    return (
        <div className="h-screen dark:bg-black">
            <div className="pt-96">
                <div className={ProfilePageCSS['content']}>
                    <div className={ProfilePageCSS['card']}>
                        <DnDComponent
                            deleteImageFromStorage={deleteImageFromStorage}
                            setImageURL={setImageURL}
                            profileImage={profileImage}
                            setProfileImage={setProfileImage}
                            imageURL={imageURL}
                            editMode={editMode}
                            className={
                                ProfilePageCSS['profile-img']
                            }></DnDComponent>
                        {/* <img
                    src="https://i.pravatar.cc/125?image=3"
                    alt=""
                    className={ProfilePageCSS['profile-img']}
                /> */}
                        {editMode ? (
                            <div>
                                <input
                                    className={`${ProfilePageCSS['profile-name']}`}
                                    value={userName || ''}
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={e =>
                                        setUserName(e.target.value)
                                    }></input>
                                <div className="divide-y divide-black mt-5"></div>
                            </div>
                        ) : (
                            <h2 className={ProfilePageCSS['profile-name']}>
                                {userName || 'Your name'}
                            </h2>
                        )}
                        {editMode ? (
                            <>
                                <input
                                    className={`${ProfilePageCSS['profile-position']} text-black`}
                                    value={jobPosition || ''}
                                    type="text"
                                    placeholder="job position"
                                    onChange={e =>
                                        setJobPosition(e.target.value)
                                    }></input>

                                <textarea
                                    className={`${ProfilePageCSS['profile-info']} text-black`}
                                    type="text"
                                    value={profileInfo}
                                    placeholder="description"
                                    onChange={e =>
                                        setProfileInfo(e.target.value)
                                    }></textarea>
                            </>
                        ) : (
                            <>
                                <p
                                    className={
                                        ProfilePageCSS['profile-position']
                                    }>
                                    {jobPosition || 'Job Position'}
                                </p>
                                <p className={ProfilePageCSS['profile-info']}>
                                    {profileInfo ||
                                        `Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Hic maxime sint nihil deserunt aperiam eos
                            tenetur voluptatibus tempora ducimus provident`}
                                </p>
                            </>
                        )}

                        <ul className={`${ProfilePageCSS['social-list']}`}>
                            <li>
                                <button
                                    to=""
                                    className={ProfilePageCSS['social-link']}>
                                    <GiBirdTwitter />
                                </button>
                            </li>
                            <li>
                                <button
                                    to=""
                                    className={ProfilePageCSS['social-link']}>
                                    <GiLinkedRings></GiLinkedRings>
                                </button>
                            </li>
                            <li>
                                <button
                                    to=""
                                    className={ProfilePageCSS['social-link']}>
                                    <GiFaceToFace></GiFaceToFace>
                                </button>
                            </li>
                        </ul>

                        <button
                            onClick={
                                !editMode
                                    ? toggleEditMode
                                    : e => handleUpdate(e)
                            }
                            className={`${ProfilePageCSS['btn']} ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>
                            {!editMode ? 'Edit' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
