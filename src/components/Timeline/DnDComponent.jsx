import React, { useRef, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
//import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

function DnDComponent() {
    //const [file, setFile] = useState(null)
    const [dragOverText, setDragoverText] = useState(
        'Drag & Drop to Upload File'
    )
    const [isDraggedOver, setIsDraggedOver] = useState(false)
    const inputRef = useRef(null)

    // const storage = getStorage()
    // const imageRef = ref(storage, '/images')

    const handleClick = e => {
        inputRef.current.click()
    }

    const handleFile = e => {
        e.preventDefault()
        if (e.target?.files[0]) {
            //setFile(e.target.files[0])
        }
        let filename = e.target?.files[0]?.name
        console.log({ filename })
        // const imgNameRef = ref(imageRef, filename)
        // uploadBytes(imgNameRef, e.target.files[0]).then(snapshot => {
        //     getDownloadURL(snapshot.ref).then(downloadURL => {
        //         console.log('File available at', downloadURL)
        //     })
        //     console.log('Uploaded a blob or file!', snapshot)
        // })
    }

    const handleDragOver = e => {
        e.preventDefault()
        setIsDraggedOver(true)
        setDragoverText('Release to upload file')
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setDragoverText('Drag & Drop to Upload File')
        setIsDraggedOver(false)
        console.log(e)
    }
    const handleDrop = e => {
        e.preventDefault()
        console.log(e.dataTransfer.files[0])
    }

    return (
        <div
            className=" flex items-center justify-center h-screen"
            style={{ backgroundColor: '#5256ad' }}>
            <div
                className={`drag-area border-2 border-white h-[500px] w-[700px] rounded-md flex flex-col items-center justify-center  box-border ${
                    isDraggedOver ? 'border-solid' : 'border-dashed'
                }`}
                onDragOver={e => handleDragOver(e)}
                onDragLeave={e => handleDragLeave(e)}
                onDrop={e => handleDrop(e)}>
                <div>
                    <FaCloudUploadAlt className="text-9xl text-white" />
                </div>
                <header className="text-white text-3xl font-medium">
                    {dragOverText}
                </header>
                <span className="text-white text-3xl font-medium mt-3 mb-4">
                    OR
                </span>
                <button
                    className="py-2 px-8 font-medium text-lg border-none outline-none rounded-md cursor-pointer"
                    style={{ color: '#5256ad', backgroundColor: 'white' }}
                    onClick={e => handleClick(e)}>
                    Browse File
                </button>
                <input
                    type="file"
                    hidden
                    ref={inputRef}
                    onChange={e => handleFile(e)}
                />
            </div>
        </div>
    )
}

export default DnDComponent
