import React from 'react'
import BlogCard from '../BlogCard';
import { title } from 'process'

export default function Mega() {
  const post =[
    {
      id:"1",
      title:"HTML Block of Webdevelopment",
      description:"Explore the fundamental of the HTML, the backbone of every webpage....",
      Date:"2025-01-02",
      imageUrl:"../slide1.jpeg"
    },
    {
      id:"2",
      title:"Javascript is the heart of the web",
      description:"JavaScript is a versatile programming language primarily....",
      Date:"2025-01-02",
      imageUrl:"../slide2.jpeg"
    },
    {
      id:"3",
      title:"CSS is the skin or the visual styling layer",
      description:"CSS, or Cascading Style Sheets, is a language used to style and visually format web content.... ",
      Date:"2025-01-02",
      imageUrl:"../slide3.jpeg"
    },
    {
      id:"4",
      title:"Next Js is a popular framework for building SEO- Friendly websites",
      description:"Next.js is a powerful React-based framework designed for building high-performance....",
      Date:"2025-01-02",
      imageUrl:"../slide4 (2).jpeg"
    },
    {
      id:"5",
      title:" Transforming the Future with Artificial  Intelligence (AI)",
      description:"Artificial Intelligence (AI) refers to the simulation of human intelligence....",
      Date:"2025-01-02",
      imageUrl:"../slide5 (2).jpeg"
    },
    {
      id:"6",
      title:"Web development is the backbone of the digital world",
      description:"Web development involves the creation and maintenance of websites and web applications....",
      Date:"2025-01-02",
      imageUrl:"../slide6.jpeg"
    },
    

  ]; return (
    <div className="my-8">
        <h1 className="text-3xl font-bold text-center  text-red-600 animate-color-change">
            {" "}
            This Blog is based on WeB World
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {post.map((post, index) =>(
            <div className="fade-in" key={post.id}>
                <div className="blog-card">
                    <BlogCard
                     post={post} isDarkBackground={index %2 === 0}/>

                </div>
            </div>
            )  )}
        </div>
</div>

)

}