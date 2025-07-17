// pages/index.tsx
'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray900">
      {/* [1] 메인 히어로 섹션 */}
      <section className="flex flex-col items-center justify-center text-center h-[800px] px-4 bg-gradient-to-b from-white to-gray-0 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">

        </div>
        <h1 className="flex items-center justify-center text-4xl md:text-4xl font-bold leading-tight mb-10 relative z-10">
          인간과 AI 에이전트가,<br className="hidden md:block" />함께 공존 및 협력하며 만드는 교육 혁신
        </h1>
        <div className="h-[50px] flex items-start justify-center text-1xl font-bold text-center">에듀포스가 그 여정을 함께합니다.</div>

        <button
          className="w-[150px] bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md transition duration-300"
          onClick={() => window.location.href = '/contact'}
        >
          문의하기
        </button>

      </section>


      {/* [2.5] 한 줄 가치 */}
      <section className="h-[100px] py-24 flex items-center justify-center">
        <div className="text-2xl font-bold text-center"> "미래 교육을 여는 AI 솔루션" </div>
      </section>


      {/* [2] 데모 영상 */}
      <section className="w-screen h-[600px] flex items-center justify-center bg-white-200 text-gray-500 text-2xl">
        <video
          src="/showproove.mp4" // public 폴더에 demo.mp4 파일을 넣으세요
          controls
          autoPlay
          loop
          muted
          className="rounded-2xl shadow-lg max-w-3xl w-full h-auto bg-black"
        >
          브라우저가 video 태그를 지원하지 않습니다.
        </video>
      </section>


  
      {/* [3] 서비스 기능 소개 */}
      <section className="w-full h-[500px] py-16 bg-white flex flex-col items-center justify-center">
        {/* 제목 */}
        <h2 className="text-2xl h-[200px] translate-y-35 font-bold text-center mb-12">
          AI 선생님을 만듭니다.
        </h2>

        {/* 카드 리스트 */}
          <div className="h-[200px] rounded-2xl min-w-[600px] max-w-[600px] border-2 border-gray-200 flex items-center justify-center">
            <div className="w-full mx-auto flex flex-row items-center gap-4 flex-wrap justify-center">
              {[
                { title: 'LLM 조교', desc: '학생 질문 응답 자동화', icon: '/llm-icon.svg' },
                { title: 'AI 자소서 코치', desc: '정량 피드백 및 개선 제안', icon: '/coach-icon.svg' },
                { title: 'AI 선생님', desc: '학습 분석 및 진단', icon: '/teacher-icon.svg' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center min-h-[180px] min-w-[180px] max-w-[240px] text-center gap-3"
                >
                  <h2 className="text-xl font-bold text-center">{item.title}</h2>
                  <p className="text-gray-600 text-base text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

      </section>



      {/* [4] 고객사 신뢰 유도 영역 - 통합형 */}
      <section className="w-full h-[500px] py-16 bg-white flex flex-col items-center justify-center">
        {/* 상단 제목 */}
        <h2 className="text-2xl h-[200px] translate-y-35 font-bold text-center mb-12">
          믿을 수 있는 도입사례
        </h2>

        {/* 카드 리스트 */}
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { bigtitle: '', value: '1500명', subtitle: '고려대학교', description: '2,500+ 질의응답' },
            { bigtitle: '', value: '500곳', subtitle: '전국 학원', description: '학습 성과 30% 향상' },
            { bigtitle: '', value: '85%', subtitle: 'AI 자소서 코치', description: '사용자 만족도' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm px-6 py-12 text-center w-[300px] min-h-[150px] flex flex-col items-center justify-center"
            >
              {item.bigtitle && (
                <div className="text-3xl font-extrabold mb-2">{item.bigtitle}</div>
              )}
              <div className="text-3xl font-extrabold mb-1">{item.value}</div>
              <div className="text-lg font-semibold mb-1">{item.subtitle}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>
      </section>


      {/* [5] 문제 제기 */}
      <section className="w-screen min-h-screen flex items-center justify-center bg-gray-0 px-4">
        <div className="text-center">
          <h2 className="text-3xl h-[200px] flex items-center justify-center font-bold mb-16">이런 문제가 있지 않으셨나요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 max-w-4xl mx-auto">
            {[
              "질문 폭주로 교수/강사의 응답 부담",
              "정성 평가 자동화 어려움",
              "학습 피드백 개인화 불가",
              "자소서 피드백 질 편차"
            ].map((msg, i) => (
              <div
                key={i}
                className="bg-[#f0f0f0] rounded-2xl p-8 shadow-none flex flex-col justify-center items-center min-h-[180px] min-w-[260px] min-w-[320px] max-w-[360px] text-center"
              >
                <span className="text-4xl mb-3"></span>
                <p className="font-semibold text-lg leading-relaxed break-keep">
                  {msg}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [6] 해결 방식 */}
      <section className="w-screen min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-5xl w-full px-4 text-center">
          <h2 className="text-3xl h-[300px] flex items-center justify-center font-bold mb-16">우리 기술은 이렇게 해결합니다</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full text-center border-separate border-spacing-y-4 mx-auto">
              <thead>
                <tr className="text-gray-700">
                  <th className="p-4 font-bold text-lg">기능</th>
                  <th className="p-4 font-bold text-lg">설명</th>
                </tr>
              </thead>
              <tbody>
                {[['LLM 조교', '학생 질문 응답 자동화, 수업 집중 유도'], ['AI 내신 선생님', '학습 성취도 분석, 자동 피드백'], ['AI 자소서 코치', '벡터 기반 분석으로 자기소개서 정량 피드백'], ['Predictive Query', '과거 질의 기반 미리보기 응답 예측']].map(([title, desc], i) => (
                  <tr key={i} className="bg-white h-[100px] rounded-2xl shadow-lg">
                    <td className="p-4 font-semibold border-r border-b border-gray-200 text-lg">{title}</td>
                    <td className="p-4 border-b border-gray-200 text-lg">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* [8] CTA */}
      <section className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl w-full px-4 text-center">
          <h2 className="h-[100px] text-3xl font-bold mb-10">지금 EduForce의 AI 시스템을 도입해보세요</h2>
          <div className="h-[80px] flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <Link href="/solution" className="px-8 py-4 rounded-xl border border-gray-300 bg-white text-gray-900 w-[130px] h-[30px] text-lg font-semibold hover:bg-gray-100">솔루션 소개</Link>
            <Link href="/contact" className="px-10 py-5 rounded-xl border border-gray-300 text-gray-900 text-xl w-[130px] h-[30px] font-semibold hover:bg-gray-100 shadow">문의 남기기</Link>
          </div>
          <div className="mt-6">
            <Link href="/guide.pdf" className="text-blue-600 underline hover:text-blue-800 text-lg">제품 소개서 다운로드</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

