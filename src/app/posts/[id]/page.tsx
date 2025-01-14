"use client"
import CommentSection from '@/components/CommentSection';
import Authorcard from '@/components/ui/AuthorCard';
import Footer from '@/components/Footer';

const posts = [
  {
    Id: "1",
    title: "Mastering HTML",
    image: "../slide1.jpeg",
    description: "HTML, or HyperText Markup Language, is the backbone of web development. It structures content on web pages using elements that are defined with tags. These tags serve specific purposes, such as displaying text, images, or links. HTML documents begin with a declaration (<!DOCTYPE html>), followed by the <html> element, which contains two main parts: the <head> and <body>. The <head> includes metadata and links to styles or scripts, while the <body> contains the visible content of the page. Common elements include <p> for paragraphs, <a> for hyperlinks, <img> for images, and <ul> or <ol> for lists. Each tag may also have attributes, like href in links or src in images, to provide additional details. HTML elements can be nested to create complex page structures, making it a versatile and essential tool for web development. ",
  },
  {
    Id: "2",
    title: "Mastering Javascript",
    image: "../slide2.jpeg",
    description: "JavaScript is a versatile programming language primarily used to create interactive and dynamic features on websites. It allows developers to manipulate web page content, control multimedia, animate graphics, and handle user interactions. Unlike HTML and CSS, which structure and style a page, JavaScript adds behavior, enabling real-time updates, form validation, and interactive elements like dropdown menus or sliders. It runs on the client-side in most cases, meaning it executes directly in the user's browser, ensuring quick responsiveness. JavaScript can also work on the server side with platforms like Node.js, making it a full-stack language. With features like event handling, asynchronous programming, and the ability to integrate with APIs, JavaScript has become an essential tool for modern web development.",
  }, {
    Id: "3",
    title: "Mastering css",
    image: "../slide3.jpeg",
    description: "CSS, or Cascading Style Sheets, is a language used to style and visually format web content. It works alongside HTML and JavaScript to create attractive, functional, and responsive websites. While HTML provides the structure and content of a webpage, CSS controls its presentation, including layout, colors, fonts, and spacingThe term cascading refers to how CSS resolves conflicts when multiple rules apply to the same element. It uses a priority system based on specificity, importance, and the order in which styles are defined. This ensures that the most relevant styles are applied css is essential because it separates content from design, making web development more efficient and easier to maintain. Instead of styling each element individually, a single CSS file can define consistent styles across an entire website. this not only saves time but also ensures a uniform appearance One of the most important features of CSS is its ability to create responsive designs. With CSS, web pages can adapt seamlessly to different screen sizes and devices, which is crucial for modern web development. It also enables animations, transitions, and flexible layouts, enhancing the user experience. CSS evolved through various versions, starting with CSS1, which introduced basic styling capabilities. CSS2 added features like media types and positioning, while CSS3 brought modular updates, animations, and tools for responsive design. Today, CSS continues to evolve, offering advanced functionalities that keep pace with the demands of modern web development.In practice, CSS can be applied directly to HTML elements, embedded within a webpage, or written in a separate file. This flexibility allows developers to choose the best approach for their projects. Learning CSS is fundamental for anyone interested in web development, as it provides the tools to transform basic webpages into visually appealing and user-friendly designs. "
  }, {
    Id: "4",
    title: "Mastering Next.js",
    image: "../slide4 (2).jpeg",
    description: "Next.js is a powerful React-based framework designed for building high-performance, server-rendered, and static web applications. It simplifies the development process by providing built-in features like server-side rendering (SSR) and static site generation (SSG), which improve website speed and SEO. Next.js supports dynamic routing, enabling seamless navigation between pages. It also offers automatic code splitting, ensuring faster loading times by delivering only the code needed for each page. With built-in API routes, developers can create backend functionality without additional tools. Additionally, Next.js integrates with modern tools like TypeScript and supports incremental static regeneration, making it ideal for scalable and optimized web ap ",
  }, {
    Id: "5",
    title: "Mastering in Artificial intelligence",
    image: "../slide5 (2).jpeg",
    description: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines designed to perform tasks that typically require human cognition, such as learning, reasoning, problem-solving, understanding language, and perception. AI systems are powered by algorithms and vast amounts of data, enabling them to identify patterns, make predictions, and adapt to new information. AI is categorized into narrow AI, which focuses on specific tasks like voice assistants or image recognition, and general AI, which aims to replicate human-like understanding across various domains. Common applications of AI include chatbots, recommendation systems, autonomous vehicles, medical diagnosis, and fraud detection. As AI continues to evolve, it plays an increasingly transformative role across industries, enhancing efficiency, decision-making, and innovation.",
  }, {
    Id: "6",
    title: "Mastering WEB Development",
    image: "../slide6.jpeg",
    description: "Web development involves the creation and maintenance of websites and web applications, ensuring they are functional, user-friendly, and visually appealing. It encompasses two primary areas: front-end development, which focuses on the visual elements and user interactions using HTML, CSS, and JavaScript, and back-end development, which manages server-side processes, databases, and application logic. Full-stack development combines both areas, allowing developers to build complete systems. Modern web development also incorporates frameworks, libraries, and tools like React, Node.js, and APIs to streamline processes and enhance functionality. Web development plays a critical role in connecting businesses, organizations, and individuals with a global audience through interactive and responsive online platforms. ",
  }
];


export default async  function Post({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const post = posts.find((p) => p.Id === id);
  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>

    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {""}
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4' />
      )}
      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.Id} />
      <Authorcard />
      <Footer />
    </div>
  )
}










