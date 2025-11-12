import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../assets/data/blogs';
import ReactMarkdown from 'react-markdown';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Blog post not found</h1>
        <p className="text-gray-500 mt-2">The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
        <section className="py-16 md:py-24 text-center bg-white shadow-sm">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {blog.category}
            </span>
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        </section>

        <div className="prose prose-lg max-w-none text-gray-700">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Article;
