import React from 'react'

interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

const List: React.FC<IProps> = () => {
  return (
    <div>
        <h2>I am a list</h2>
    </div>
  )
}

export default List;