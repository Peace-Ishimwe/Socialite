import React from 'react'
import CardSuggested from './suggestedForYou/cardSuggested'

const SuggestedForYou = () => {
  return (
    <div className='main-container min-[320px]:w- min-[360px]:w-10/12 mx-auto h-5 bg-blue-500'>
        <CardSuggested />
    </div>
  )
}

export default SuggestedForYou