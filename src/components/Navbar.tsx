'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center h-20 w-full bg-white border-b border-gray-200">
      {/* 좌측 빈 여백 */}
      <div className="flex-[0.5]" />
      
      {/* 가운데 컨텐츠 (로고+메뉴+버튼) */}
      <div className="flex items-center justify-between w-4/5 min-w-[700px]">
        {/* 좌측: 에듀포스 이미지 + 메뉴 */}
        <div className="flex items-center gap-16">
          <Link href="/" className="font-bold text-xl">EduForce</Link>
          <div className="flex gap-8 items-center">
            <Link href="/about">회사소개</Link>
            <Link href="/solution">솔루션</Link>
            <Link href="/blog">블로그</Link>
            <Link href="/contact">문의하기</Link>
          </div>
        </div>
        {/* 우측: 버튼 */}
        <div>
          <button className="px-8 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 text-lg font-semibold">
            제품 소개서 다운로드
          </button>
        </div>
      </div>
      
      {/* 우측 빈 여백 */}
      <div className="flex-[0.5]" />
    </nav>
  )
} 
