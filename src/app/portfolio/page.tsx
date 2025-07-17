import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-20 px-4">
      
      <div className="h-32 md:h-48" />
      {/* 헤더 */}
      <section className="max-w-4xl w-full mb-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">포트폴리오</h1>
        <p className="text-xl text-gray-600">EduForce가 참여한 프로젝트 및 연구 실적을 소개합니다.</p>
      </section>

      {/* AI 교수님 사례 */}
      <section className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">KAI</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">고려대학교</h2>
                <p className="text-sm text-blue-600 font-medium">AI 교수님 도입 사례</p>
              </div>
            </div>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              고려대학교에 도입된 AI 조교 시스템은 1500명 이상이 사용하고 있으며, 누적 2500개 이상의 질의응답을 통해 학습 만족도와 교수 업무 효율성을 크게 높였습니다.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600">1500+</div>
                <div className="text-sm text-gray-500">누적 사용자</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600">2500+</div>
                <div className="text-sm text-gray-500">응답된 질문</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://kai-swbasics.streamlit.app/"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                데모 보기
              </a>
              <a
                href="https://www.tokenpost.kr/news/insights/248458"
                className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                보도자료 보기
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">연구 및 산학협력</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
                필수교양 3과목 AI 교수 시스템 개발 중 (2025-2)
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
                논문 발표: Predictive Query Management (1저자, CIKM 2025)
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
                KT A-Pattern팀과 기술교류 발표 진행
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* AI 내신 선생님 */}
      <section className="w-full py-20 bg-gray-50">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI 내신 선생님</h2>
              <p className="text-lg text-gray-600">전국 학원 500곳 이상에 도입된 학습 분석 시스템</p>
            </div>

            <div className="flex justify-center">
              <div className="w-full sm:w-3/4 bg-white p-8 rounded-xl shadow-md text-center">
                <p className="text-base text-gray-700 mb-6">
                  전국 500개 이상의 학원에서 AI 내신 분석 시스템을 도입해 학생 성적 향상 및 개별 피드백 자동화를 달성했습니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">도입 학원 수</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                    <div className="text-sm text-gray-600">성적 향상</div>
                  </div>
                </div>

                <a
                  href="https://www.notion.so/06-22-21999892e31680e28993f4d5177fef1b"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  현황 보고 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      {/* AI 자소서 코치 */}
      <section className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI 자소서 코치</h2>
            <p className="text-lg text-gray-600">LLM 기반 자소서 피드백 시스템</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 bg-gray-50 p-8 rounded-xl shadow-md text-center">
              <p className="text-base text-gray-700 mb-6">
                LLM Twining 기술을 활용하여 사용자의 자기소개서를 벡터화하고 직무별 유사도를 분석, 맞춤 피드백을 제공합니다. 2025 AI Seoul 코엑스 전시에서 시연 및 높은 관심을 받았습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">사용자 만족도</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">AI Seoul</div>
                  <div className="text-sm text-gray-600">2025 코엑스 전시 참가</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 논문 및 발표 */}
      <section className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">연구 실적</h2>
            <p className="text-lg text-gray-600 mb-10">EduForce가 수행한 학술 발표 및 논문</p>
            <ul className="text-left text-gray-700 space-y-3">
              <li>
                <span className="font-semibold">CIKM 2025 단편 논문</span> — Predictive Query Management (1저자)
              </li>
              <li>
                <span className="font-semibold">KT A-Pattern 기술교류 발표</span> — 고려대 AI 교수님 시스템 소개 및 기술 방향 공유
              </li>
              <li>
                <span className="font-semibold">LLM Twining 기반 AI 자소서 피드백 시스템</span> — AI Seoul 2025 참가 전시
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}