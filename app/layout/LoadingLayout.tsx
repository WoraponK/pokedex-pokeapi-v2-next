import React from 'react'

import LoadingSpinner from '../components/LoadingSpinner'

const LoadingLayout = ({text}: {text?: string}) => {
  return (
    <div className='h-screen flex justify-center items-center space-x-4'>
        <LoadingSpinner />
        <span className='text-3xl font-semibold'>{text}</span>
    </div>
  )
}

export default LoadingLayout