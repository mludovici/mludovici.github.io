import React, { useRef, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
//import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { FcFullTrash } from 'react-icons/fc'
function DnDComponent() {
    const [fileDataUrl, setFileDataUrl] = useState(null)
    const [fileTypeError, setFileTypeError] = useState(null)
    const [dragOverText, setDragoverText] = useState(
        'Drag & Drop to Upload image'
    )
    const [isDraggedOver, setIsDraggedOver] = useState(false)
    const inputRef = useRef(null)

    // const storage = getStorage()
    // const imageRef = ref(storage, '/images')

    const handleClick = e => {
        inputRef.current.click()
    }

    const handleImageUpload = () => {}

    const handleFile = e => {
        e.preventDefault()
        e.stopPropagation()

        let file = e.target.files[0]
        const imageType = /image.*/
        if (!file.type.match(imageType)) {
            setFileDataUrl(null)
            setFileTypeError('The file must be of type image!')
            return
        }
        setFileTypeError(null)
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            let res = fileReader.result
            setFileDataUrl(res)
        }
    }

    const handleDragOver = e => {
        e.preventDefault()
        e.stopPropagation()

        setIsDraggedOver(true)
        setDragoverText('Release to upload file')
    }

    const handleDragLeave = e => {
        e.preventDefault()
        e.stopPropagation()

        setDragoverText('Drag & Drop to Upload File')
        setIsDraggedOver(false)
        console.log(e)
    }
    const handleDrop = e => {
        e.preventDefault()
        e.stopPropagation()

        let file = e.dataTransfer.files[0]
        const imageType = /image.*/
        if (!file.type.match(imageType)) {
            setFileTypeError('The file must be of type image!')
            return
        }
        setFileTypeError(null)

        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            let res = fileReader.result
            setFileDataUrl(res)
        }
    }

    return (
        <>
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
                    {fileDataUrl ? (
                        <img
                            src={fileDataUrl}
                            alt="profileImg"
                            className="max-w-sm"
                        />
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
                                ref={inputRef}
                                onChange={e => handleFile(e)}
                            />
                        </>
                    )}
                </div>
            </div>
            {fileDataUrl && (
                <FcFullTrash
                    className="mx-auto"
                    onClick={() => setFileDataUrl(null)}
                />
            )}
            {fileTypeError && (
                <p className="text-center text-red-500">{fileTypeError}</p>
            )}
        </>
    )
}

export default DnDComponent
