import Link from "next/link";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    link?: string;
}

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "\"Null\" Is Everywhere: From WhatsApp Glitches to Flutter Code [Dart Null Safety]",
            category: "Flutter Development",
            author: "Mrxamjad",
            date: "14 May, 2025",
            image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ugJZgOqpnI0FkdI9BQkCTQ.jpeg",
            excerpt: "Exploring null safety in Dart and how it helps Flutter developers write more robust and error-free code.",
            link: "https://medium.com/@mrxamjad/null-is-everywhere-from-whatsapp-glitches-to-flutter-code-dart-null-safety-34ba198a5af6",
        },
        {
            id: 2,
            title: "Push Notifications in Flutter (iOS & Android)",
            category: "Flutter Development",
            author: "Mrxamjad",
            date: "26 Apr, 2025",
            image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*muoRZpr5jJaBNhNvV627bw.png",
            excerpt: "Complete guide for Push notifications setup for Android and iOS with Flutter, Firebase, and APNs.",
            link: "https://medium.com/@mrxamjad/push-notifications-in-flutter-ios-android-b0c0e0e0e0e0",
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
                            style={{
                                background: post.image.startsWith('http')
                                    ? `url(${post.image}) center/cover no-repeat`
                                    : gradients[post.image as keyof typeof gradients]
                            }}
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
                            <a
                                href={post.link || `/blog/${post.id}`}
                                className="blog-arrow-btn"
                                target={post.link ? "_blank" : undefined}
                                rel={post.link ? "noopener noreferrer" : undefined}
                            >
                                ↗
                            </a>
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
                                {post.link ? (
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {post.title}
                                    </a>
                                ) : (
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                )}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
