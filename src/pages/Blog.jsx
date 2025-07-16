// import Link from 'next/link';
import { Link } from "react-router-dom";
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const Blog = () => {
    // Mock posts data as fs and path are not available in browser environment
    const posts = [
        {
            slug: "first-blog-post",
            data: {
                title: "The Future of Web Development",
                date: "2024-01-15",
                author: "WebWeavers Team",
                excerpt: "Explore the latest trends and technologies shaping the web development landscape.",
                coverImage: "blog-image-1.jpg"
            },
            content: "..."
        },
        {
            slug: "seo-tips-for-startups",
            data: {
                title: "SEO Tips for Startups in India",
                date: "2024-02-01",
                author: "Priya Sharma",
                excerpt: "Essential SEO strategies to boost your startup's online visibility in the Indian market.",
                coverImage: "blog-image-2.jpg"
            },
            content: "..."
        },
        {
            slug: "ecommerce-success-stories",
            data: {
                title: "E-commerce Success Stories: Case Studies",
                date: "2024-03-10",
                author: "Amit Singh",
                excerpt: "Learn from real-world examples of businesses thriving with their online stores.",
                coverImage: "blog-image-3.jpg"
            },
            content: "..."
        }
    ];

    // Sort posts by date (client-side sorting)
    posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
                                [Featured image: {post.data.coverImage}]
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">{new Date(post.data.date).toLocaleDateString()}</span>
                                    <span className="text-sm text-gray-500">By {post.data.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3">{post.data.title}</h2>
                                <p className="text-gray-600 mb-4">{post.data.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800" onClick={() => console.log(`Read More for ${post.data.title} clicked`)}>
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'blog', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      slug: filename.replace('.md', ''),
      data,
      content
    };
  });

  // Sort posts by date
  posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return {
    props: {
      posts
    }
  };
}

export default Blog;