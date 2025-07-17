import React from "react";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "ai-era-meshed",
    title: "AI 시대, Meshed가 바꾼 3D 디자인 협업 방식",
    content: `AI 시대에 Meshed가 어떻게 3D 디자인 협업 방식을 혁신했는지 소개합니다.\n\n- 구글링 없이 AI로 빠른 협업\n- 실시간 피드백과 공유\n- Meshed만의 차별점 등`,
    date: "2025-01-23",
    image: "/blog1.png",
  },
  {
    slug: "3d-design-collab-important",
    title: "3D 디자인 협업에서 가장 중요한 건 공유입니다",
    content: `3D 디자인 협업에서 공유의 중요성과 Meshed의 새로운 공유 방식을 설명합니다.\n\n- 실시간 소통\n- 빠른 의견 공유\n- 혁신적인 협업 환경`,
    date: "2025-01-23",
    image: "/blog2.png",
  },
  {
    slug: "meshed-3d-collab-core",
    title: "Meshed는 3D디자인 협업에 가장 진심이에요",
    content: `Meshed가 3D 디자인 협업에 진심인 이유와 실제 사례를 소개합니다.\n\n- 일상에서 쓰이는 Meshed\n- 누구나 쉽게 협업\n- 미래의 협업 문화`,
    date: "2025-01-23",
    image: "/blog3.png",
  },
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-2xl">
        <img src={post.image} alt={post.title} className="rounded-xl w-full h-72 object-cover mb-8 bg-gray-100" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-8">
          {new Date(post.date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="text-lg whitespace-pre-line text-gray-800">{post.content}</div>
      </div>
    </main>
  );
} 