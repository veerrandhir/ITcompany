import { Link } from "react-router-dom";

const Blog = () => {
    const posts = [
        {
            slug: "first-blog-post",
            data: {
                title: "The Future of Web Development",
                date: "2024-01-15",
                author: "CODDEX Team",
                excerpt: "Explore the latest trends and technologies shaping the web development landscape.",
                coverImage: "/images/blog/blog-image-1.jpg"
            }
        },
        {
            slug: "seo-tips-for-startups",
            data: {
                title: "SEO Tips for Startups in India",
                date: "2024-02-01",
                author: "Priya Sharma",
                excerpt: "Essential SEO strategies to boost your startup's online visibility in the Indian market.",
                coverImage: "/images/blog/blog-image-2.jpg"
            }
        },
        {
            slug: "ecommerce-success-stories",
            data: {
                title: "E-commerce Success Stories: Case Studies",
                date: "2024-03-10",
                author: "Amit Singh",
                excerpt: "Learn from real-world examples of businesses thriving with their online stores.",
                coverImage: "/images/blog/blog-image-3.jpg"
            }
        }
    ];

    posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

    return (
        <div className="py-12 bg-[var(--section-bg)] transition-colors duration-500">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center text-[var(--text-color)]">Our Blog</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-[var(--card-bg)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            {/* Cover Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.data.coverImage}
                                    alt={post.data.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2 text-[var(--muted-text)] text-sm">
                                    <span>{new Date(post.data.date).toLocaleDateString()}</span>
                                    <span>By {post.data.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-[var(--text-color)]">{post.data.title}</h2>
                                <p className="text-[var(--muted-text)] mb-4">{post.data.excerpt}</p>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-[var(--button-bg)] font-medium hover:text-[var(--button-hover-bg)] transition-colors duration-300"
                                    onClick={() => console.log(`Read More for ${post.data.title} clicked`)}
                                >
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

export default Blog;
