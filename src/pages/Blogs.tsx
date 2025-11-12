import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
// Import statically from our new data file
import { blogs, BlogPost } from '../assets/data/blogs.ts';

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={post.imageUrl} // No STRAPI_URL needed
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {post.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 h-14 overflow-hidden">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
      </div>
      <Link 
        to={`/blogs/${post.slug}`} 
        className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
      >
        Read More →
      </Link>
    </div>
  </div>
);

export default function Blog() {
  // Automation is now just splitting the array
  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  // No loading state is needed
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20">
      <section className="py-16 md:py-24 text-center bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            From the Ground Up
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Stories, insights, and updates from our mission to re-green our world.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div className="grid md:grid-cols-2">
              <div className="relative w-full h-64 md:h-full min-h-[300px] overflow-hidden">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <Link
                  to={`/blogs/${featuredPost.slug}`}
                  className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}