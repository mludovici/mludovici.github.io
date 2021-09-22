import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar
        className="inline"
        color={selected ? 'goldenrod' : 'grey'}
        onClick={onSelect}
    />
)

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0)
    const createArray = length => [...Array(length)]
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            {/* <p>
                {selectedStars} of {totalStars} stars
            </p> */}
        </>
    )
}
