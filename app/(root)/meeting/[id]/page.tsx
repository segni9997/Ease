import React from 'react'

const meeting = ({params}:{params:{id:string}}) => {
  return (
    <div>
      Meeting Id is : {params.id}
    </div>
  )
}

export default meeting
