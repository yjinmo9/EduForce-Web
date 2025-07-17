import React from "react";
import Link from "next/link";

const posts = [
  {
    slug: "ai-era-meshed",
    title: "AI 시대, Meshed가 바꾼 3D 디자인 협업 방식",
    summary: "구글링 No, 매시드 AI Yes!",
    date: "2025-01-23",
    image: "/blog1.png",
  },
  {
    slug: "3d-design-collab-important",
    title: "3D 디자인 협업에서 가장 중요한 건 공유입니다",
    summary: "완전히 새로운 방식의 공유를 선보입니다",
    date: "2025-01-23",
    image: "/blog2.png",
  },
  {
    slug: "meshed-3d-collab-core",
    title: "Meshed는 3D디자인 협업에 가장 진심이에요",
    summary: "‘Meshed 링크 보냈어’가 일상에서 쓰일 수 있도록",
    date: "2025-01-23",
    image: "/blog3.png",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-20 px-4">
      <h1 className="h-[100px] flex items-center justify-center text-4xl font-bold mb-6 text-center">Blog</h1>

      <div className="w-[600px] h-[400px] flex flex-col items-center justify-center max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white h-[200px] rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition cursor-pointer border border-gray-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl w-full h-56 object-cover mb-4 bg-gray-100"
            />
            <div className="font-bold text-lg mb-1">{post.title}</div>
            <div className="text-gray-500 text-base mb-2">{post.summary}</div>
            <div className="text-gray-400 text-xs mt-auto text-right">
              {new Date(post.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 