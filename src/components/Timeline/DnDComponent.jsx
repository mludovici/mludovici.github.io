import React, { useRef, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
//import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { FcFullTrash } from 'react-icons/fc'
import placeHolderPerson from '../../assets/images/placeholder_person.jpg'
function DnDComponent({
    editMode,
    profileImage,
    setProfileImage,
    imageURL,
    setImageURL,
    deleteImageFromStorage,
}) {
    const [fileTypeError, setFileTypeError] = useState('')
    const [dragOverText, setDragoverText] = useState(
        'Drag & Drop to Upload image'
    )
    const [isDraggedOver, setIsDraggedOver] = useState(false)
    const inputRef = useRef('')

    // const storage = getStorage()
    // const imageRef = ref(storage, '/images')

    const handleClick = e => {
        inputRef.current.click()
    }

    // const handleImageUpload = () => {}

    const handleFile = e => {
        if (!editMode) return
        e.preventDefault()
        e.stopPropagation()
        setProfileImage(null)

        let file = e.target.files[0]
        let fileName = file.name
        const imageType = /image.*/
        if (file && !file.type.match(imageType)) {
            setProfileImage(null)
            setFileTypeError('The file must be of type image!')
            return
        }
        setFileTypeError(null)
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        let imageResult = {}
        fileReader.onload = () => {
            console.log('onload')
            imageResult.image = fileReader.result
            imageResult.fileName = fileName
            setProfileImage(imageResult)
        }
    }

    const handleDragOver = e => {
        if (!editMode) return

        e.preventDefault()
        e.stopPropagation()
        console.log('dragover')
        setIsDraggedOver(true)
        setDragoverText('Release to upload file')
    }

    const handleDragLeave = e => {
        if (!editMode) return

        e.preventDefault()
        e.stopPropagation()
        console.log('dragleave')

        setDragoverText('Drag & Drop to Upload File')
        setIsDraggedOver(false)
        console.log(e)
    }
    const handleDrop = e => {
        if (!editMode) return

        e.preventDefault()
        e.stopPropagation()
        console.log('drop')
        setProfileImage(null)

        let file = e.dataTransfer.files[0]
        let fileName = file.name
        const imageType = /image.*/
        if (file && !file.type.match(imageType)) {
            setFileTypeError('The file must be of type image!')
            return
        }
        setFileTypeError(null)

        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        let imageResult = {}
        fileReader.onload = () => {
            console.log('onload')
            imageResult.image = fileReader.result
            imageResult.fileName = fileName
            setProfileImage(imageResult)
        }
    }

    const deleteImage = () => {
        console.log(profileImage)
        if (profileImage) {
            setProfileImage(null)
        }
        console.log(imageURL)
        if (imageURL) {
            deleteImageFromStorage()
                .then(result => {
                    console.log({ result })
                    setImageURL(null)
                })
                .catch(error => {
                    console.log(
                        'Error deleting profile photo from storage:',
                        error
                    )
                })
        }
    }

    return (
        <>
            {editMode ? (
                <div
                    className=" flex flex-column items-center justify-center max-w-xl"
                    style={{ backgroundColor: '#5256ad' }}>
                    <div
                        className={`border-2 h-auto w-auto rounded-md flex flex-col items-center justify-center  box-border ${
                            isDraggedOver ? 'border-solid' : 'border-dashed'
                        }`}
                        onDragOver={e => handleDragOver(e)}
                        onDragLeave={e => handleDragLeave(e)}
                        onDrop={e => handleDrop(e)}>
                        {profileImage ? (
                            <>
                                <img
                                    src={profileImage.image}
                                    alt="profileImg"
                                    className="max-w-xs w-32"
                                />
                                <FcFullTrash
                                    className="mx-auto"
                                    onClick={deleteImage}
                                />
                                {fileTypeError && (
                                    <p className="text-center text-red-500">
                                        {fileTypeError}
                                    </p>
                                )}
                            </>
                        ) : imageURL ? (
                            <>
                                <img
                                    src={imageURL}
                                    alt="profileImg"
                                    className="max-w-xs w-32"
                                />

                                <FcFullTrash
                                    className="mx-auto"
                                    onClick={deleteImage}
                                />

                                {fileTypeError && (
                                    <p className="text-center text-red-500">
                                        {fileTypeError}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <div>
                                    <FaCloudUploadAlt className="text-xl text-blue" />
                                </div>
                                <header className="text-white text-xs font-medium">
                                    {dragOverText}
                                </header>
                                <span className="text-white text-xs font-small mt-1 mb-1">
                                    or
                                </span>
                                <button
                                    className="py-2 px-8 font-thin text-xs rounded-md cursor-pointer outline-none"
                                    style={{
                                        color: 'black',
                                    }}
                                    onClick={e => handleClick(e)}>
                                    Browse File
                                </button>
                                <input
                                    type="file"
                                    hidden
                                    value=""
                                    ref={inputRef}
                                    onChange={e => handleFile(e)}
                                />
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <img
                    src={
                        profileImage
                            ? profileImage.image
                            : imageURL
                            ? imageURL
                            : placeHolderPerson
                    }
                    alt="profileImg"
                    className="max-w-xs w-32"
                />
            )}
        </>
    )
}

export default DnDComponent
