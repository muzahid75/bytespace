export type Course = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  students: string;
  rating: number;
  reviewsCount?: number;
  price: number;
  description?: string[];
  keyPoints?: string[];
};

const base = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner" as const,
  students: "26+",
  rating: 4.5,
  reviewsCount: 172,
  price: 25,
};

export const courses: Course[] = [
  {
    ...base,
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    level: "Intermediate",
    students: "199 Students",
    rating: 4.8,
    reviewsCount: 172,
    image: "/images/course-video-preview.jpg",
  },
  {
    ...base,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Master UI/UX Design with Hands-on Figma Workflows",
    image: "/images/c1.webp",
  },
  {
    ...base,
    slug: "power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Transform Complex Datasets into Meaningful Business Insights",
    image: "/images/c3.webp",
  },
  {
    ...base,
    slug: "balancing-productivity",
    title: "Balancing Productivity and Self-Care",
    subtitle: "Sustainable Work Habits and Mental Clarity for High Achievers",
    image: "/images/c4.webp",
  },
  {
    ...base,
    slug: "mastering-money",
    title: "Mastering Money Management",
    subtitle: "Personal Finance, Budgeting and Wealth Building Fundamentals",
    image: "/images/c5.webp",
  },
  {
    ...base,
    slug: "idea-to-startup",
    title: "From Idea to Startup Success",
    subtitle: "Validation, Pitching, and Scaling Your First Tech Venture",
    image: "/images/c6.webp",
  },
  {
    ...base,
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    subtitle: "Craft Intuitive, Beautiful User Interfaces from Scratch",
    image: "/images/search-course-10.jpg",
  },
  {
    ...base,
    slug: "creative-marketing-strategies",
    title: "Creative Marketing Strategies",
    subtitle: "Amplify Brand Reach and Engage Modern Digital Audiences",
    image: "/images/search-course-11.jpg",
  },
  {
    ...base,
    slug: "modern-animation-techniques",
    title: "Modern Animation Techniques",
    subtitle: "Bring Motion Design to Life with Seamless 2D and 3D Visuals",
    image: "/images/search-course-12.jpg",
  },
];

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const tags = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
];

export const courseSidebarLessons = [
  { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { num: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

export const courseKeyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const courseModules = [
  {
    moduleNumber: 1,
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    lessonsCount: 14,
    duration: "2h 45m",
  },
  {
    moduleNumber: 2,
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    lessonsCount: 18,
    duration: "3h 20m",
  },
  {
    moduleNumber: 4,
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    lessonsCount: 16,
    duration: "3h 10m",
  },
  {
    moduleNumber: 5,
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    lessonsCount: 22,
    duration: "4h 05m",
  },
  {
    moduleNumber: 6,
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    lessonsCount: 20,
    duration: "3h 40m",
  },
  {
    moduleNumber: 7,
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    lessonsCount: 22,
    duration: "4h 00m",
  },
];

export const courseReviewsData = {
  overallRating: 4.7,
  totalReviews: 885,
  distribution: [
    { stars: 5, count: 720, percentage: 81 },
    { stars: 4, count: 120, percentage: 14 },
    { stars: 3, count: 21, percentage: 2.5 },
    { stars: 2, count: 12, percentage: 1.5 },
    { stars: 1, count: 16, percentage: 2 },
  ],
  reviews: [
    {
      id: "1",
      author: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/images/reviewer-1.jpg",
      rating: 5,
      date: "a year ago",
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: "2",
      author: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/images/reviewer-2.jpg",
      rating: 5,
      date: "a year ago",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "3",
      author: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/images/reviewer-3.jpg",
      rating: 5,
      date: "a year ago",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "4",
      author: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/images/reviewer-4.jpg",
      rating: 5,
      date: "a year ago",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
};

// Aliases for backwards compatibility
export const lessons = courseSidebarLessons.map(l => [l.num, l.title, l.duration] as [string, string, string]);
export const keyPoints = courseKeyPoints;

