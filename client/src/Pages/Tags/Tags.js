import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
// import TagList from './TagList'
import './Tags.css'
import TagList from './TagList'

const Tags = () => {
    const TagsList = [
    {
        id:1,
        tagName : "Python",
        tagDesc : "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },
    {
        id:2,
        tagName : "JavaScript",
        tagDesc : "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. "
    },
    {
        id:3,
        tagName : "React.js",
        tagDesc : "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
    },
    {
        id:4,
        tagName : "Java",
        tagDesc : "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself."
    },
    {
        id:5,
        tagName : "html",
        tagDesc : "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },
    {
        id:6,
        tagName : "C#",
        tagDesc : "C# (pronounced \"see sharp\") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft."
    },
    {
        id:7,
        tagName : "PHP",
        tagDesc : "PHP is an open source, multi-paradigm, dynamically-typed and interpreted scripting language designed initially for server-side web development."
    },
    {
        id:8,
        tagName : "SQL",
        tagDesc : "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation"
    },
    {
        id:9,
        tagName : "node.js",
        tagDesc : "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
    },
    {
        id:10,
        tagName : "Json",
        tagDesc : "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. "
    },
]
  return (
    <div className="home-container1">
        <LeftSideBar/>
        <div className="home-container2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A Tag is a keyword or label that categorizes your question with other, similar questions</p>
            <p className='tags-p'>Using the right Tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
                {
                 TagsList.map((tag)=>(
                   <TagList tag={tag} key={TagsList.id}/>
                 ))
                 } 
            </div>
        </div>
    </div>
  )
}

export default Tags