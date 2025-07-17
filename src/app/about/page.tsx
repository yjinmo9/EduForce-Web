import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      <section className="max-w-4xl w-full text-center mb-16">
        <h1 className="h-[300px] flex items-center justify-center text-5xl font-extrabold text-gray-900 mb-6">회사 소개</h1>
      </section>

      <div className="grid gap-12 max-w-4xl w-full">
        {/* 비전 및 미션 */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="h-[100px] flex items-center justify-center text-2xl font-bold text-gray-900 mb-3">비전 및 미션</h2>
          <p className="h-[200px] flex items-center justify-center text-3xl text-gray-700">
            AI로 교육의 미래를 혁신합니다
          </p>
        </section>

        {/* 주요 연혁 */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="h-[100px] flex items-center justify-center text-2xl font-bold text-gray-900 mb-3">
            주요 연혁
          </h2>
          <div className="h-[300px] w-[700px] flex items-center justify-center">
          <ul className="h-[300px] list-disc list-inside text-gray-700 space-y-3 text-start">
            <li>
              <strong>2024-05 미래내일 기사 보도</strong><br />
                   “  AI 조교, 교실에 들어오다” 보도로 교육계 주목
            </li>
            <li>
              <strong>2024-09 KAIROS 설립</strong><br />
              LLM 기반 교육 에이전트 연구소 출범
            </li>
            <li>
              <strong>2025-01 고려대학교 AI 조교 도입</strong><br />
              1,500명 이상 사용, 누적 2,500건 질문 응답
            </li>
            <li>
              <strong>2025-03 전국 500개 학원을 위한 내신 분석 시스템 도입</strong><br />
              성적 향상률 30%, 상담 시간 40% 감소
            </li>
            <li>
              <strong>2025-05 AI 자소서 코치 서비스 론칭</strong><br />
              사용자 만족도 85%, 추천률 90% 이상 기록
            </li>
          </ul>
          </div>
        </section>

        {/* 외부 활동 및 미디어 보도 */}
        <section className="h-[300px]"></section>


      </div>
    </div>
  );
}
