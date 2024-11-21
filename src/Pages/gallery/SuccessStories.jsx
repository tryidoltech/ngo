import React from 'react'
import StoriesCards from '../../component/StoriesCards'

const SuccessStories = () => {
  const storiesData = [1,2,3,4,5,5]
  return (
    <div>
       <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {storiesData.map((item, index) => (
         <StoriesCards key={index} > </StoriesCards>
        ))}
      </div>
    </div>
    </div>
  )
}

export default SuccessStories