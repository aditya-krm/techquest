'use client'

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError('Error fetching blogs. Please try again later.');
        console.error('Error fetching blogs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post._id} className="border-b border-gray-200 pb-8 last:border-b-0">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blogs/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
              <Button variant="link" asChild>
                <Link href={`/blogs/${post.slug}`}>Read more</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {blogPosts.length === 0 && <p>No blog posts found.</p>}

      {blogPosts.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline">Load More Posts</Button>
        </div>
      )}
    </div>
  );
}