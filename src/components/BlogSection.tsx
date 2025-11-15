import Link from "next/link";

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
            category: "UI/UX Design",
            author: "Amjad Ali",
            date: "10 Nov, 2023",
            image: "gradient-purple",
            excerpt: "Exploring the creative process behind stunning user interfaces and seamless experiences.",
        },
        {
            id: 2,
            title: "Building Scalable Mobile Apps: Best Practices",
            category: "App Design",
            author: "Amjad Ali",
            date: "09 Oct, 2023",
            image: "gradient-green",
            excerpt: "Learn the essential techniques for creating mobile applications that scale effortlessly.",
        },
        {
            id: 3,
            title: "Flutter vs React Native: A Developer's Perspective",
            category: "App Design",
            author: "Amjad Ali",
            date: "13 Aug, 2023",
            image: "gradient-yellow",
            excerpt: "An in-depth comparison of two leading cross-platform mobile development frameworks.",
        },
    ];

    const gradients = {
        "gradient-purple": "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(124, 58, 237, 0.3))",
        "gradient-green": "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))",
        "gradient-yellow": "linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3))",
    };

    return (
        <div className="blog-section">
            <div className="blog-header">
                <h2 className="blog-title">
                    From my<br />
                    <span className="gradient">blog post</span>
                </h2>
                <Link href="/blog" className="blog-see-all">
                    See All
                </Link>
            </div>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article key={post.id} className="blog-card">
                        <div
                            className="blog-card-image"
                            style={{ background: gradients[post.image as keyof typeof gradients] }}
                        >
                            <div className="blog-mockup">
                                <div className="mockup-screen">
                                    <div className="mockup-elements">
                                        <div className="element element-1"></div>
                                        <div className="element element-2"></div>
                                        <div className="element element-3"></div>
                                    </div>
                                </div>
                            </div>
                            <Link href={`/blog/${post.id}`} className="blog-arrow-btn">
                                ↗
                            </Link>
                        </div>

                        <div className="blog-card-content">
                            <div className="blog-meta">
                                <span className="blog-category">{post.category}</span>
                            </div>

                            <div className="blog-author-date">
                                <span className="blog-author">● {post.author}</span>
                                <span className="blog-date">● {post.date}</span>
                            </div>

                            <h3 className="blog-card-title">
                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
