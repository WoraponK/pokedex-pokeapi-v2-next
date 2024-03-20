'use client'

import React from 'react'

// Icons
import { FaSpinner } from "react-icons/fa6";

const LoadingSpinner = () => {
    return (
        <span className='animate-spin text-3xl w-fit flex justify-center items-center'>
            <FaSpinner />
        </span>
    )
}

export default LoadingSpinner