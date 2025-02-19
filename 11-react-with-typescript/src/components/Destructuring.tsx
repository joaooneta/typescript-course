import React from 'react'

interface Props{
    title: string
    content: string
    commentsQty: number
    tags: string[]

    //7 - Enum
    category: Category
}

export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  HTML = "HTML"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Comment count: {commentsQty}</p>
        <div>
            {tags.map((tag) => (<span>#{tag}</span>))}
        </div>
        <h3>Category: {category}</h3>
    </div>
  )
}  

export default Destructuring