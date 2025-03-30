import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { getAllPosts } from '../lib/blog';
import { ArrowRight } from 'lucide-react';

export function BlogSection() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  const posts = getAllPosts();

  return (
    <section ref={sectionRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="hidden-element flex flex-col p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform h-full"
            >
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <div className="flex items-center gap-2 mb-2">
                {post.categories?.map(category => (
                  <span key={category} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                    {category}
                  </span>
                ))}
              </div>
              
              <time className="text-sm text-gray-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-300 line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
              
              <a 
                href={`/blog/${post.slug}`} 
                className="inline-flex items-center mt-auto text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read more <ArrowRight size={16} className="ml-1" />
              </a>
            </article>
          ))}
        </div>
        
        {posts.length > 3 && (
          <div className="mt-12 text-center">
            <a 
              href="/blog"
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              View All Posts
            </a>
          </div>
        )}
      </div>
    </section>
  );
}