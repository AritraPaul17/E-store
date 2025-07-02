import React from 'react'

const SpinnerLoader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-full mb-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
    </div>
  )
}

export default SpinnerLoader
