import React from 'react'

interface Props{
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h2>My second component</h2>
        <p>Its name is {props.name}</p>
    </div>
  )
}

export default SecondComponent