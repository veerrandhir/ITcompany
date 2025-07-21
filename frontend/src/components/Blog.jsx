const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Optimize MongoDB Queries",
      excerpt: "Learn indexing and aggregation techniques.",
      date: "May 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for high-performance backends.",
      date: "April 2, 2023",
      readTime: "8 min read"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};
export default Blog;