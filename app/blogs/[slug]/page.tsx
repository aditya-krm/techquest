'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { marked } from 'marked';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  readingTime: number;
}

export default function BlogPost() {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError('Error fetching blog post. Please try again later.');
        console.error('Error fetching blog post:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
    </div>
  );

  if (error) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
      <p>{error}</p>
      <Link href="/blogs" className="text-blue-500 hover:underline mt-4 inline-block">
        <ArrowLeft className="inline mr-2" />
        Back to all blogs
      </Link>
    </div>
  );

  if (!blog) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
      <Link href="/blogs" className="text-blue-500 hover:underline">
        <ArrowLeft className="inline mr-2" />
        Back to all blogs
      </Link>
    </div>
  );

  const getMarkdownContent = (markdown: string) => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/blogs" className="text-blue-500 hover:underline mb-6 inline-block">
        <ArrowLeft className="inline mr-2" />
        Back to all blogs
      </Link>
      <article className="shadow-lg rounded-lg overflow-hidden border border-white/10">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span className="mr-4 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={getMarkdownContent(blog.content)} 
          />
        </div>
      </article>
    </div>
  );
}