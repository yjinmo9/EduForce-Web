import Link from 'next/link'

export default function Technology() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-4">
      <section className="max-w-3xl w-full mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">기술력</h1>
        <p className="text-lg text-gray-700">우리는 차별화된 AI 기술로 교육 혁신을 이끕니다.</p>
      </section>
      <section className="max-w-4xl w-full mb-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">LLM Twining</h2>
          <p className="text-gray-600">LLM을 활용한 맞춤형 지식 확장 (더미 설명)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">논문 프레임워크</h2>
          <p className="text-gray-600">최신 논문 기반 AI 시스템 (더미 설명)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">MCP</h2>
          <p className="text-gray-600">Modular Chat Pipeline (더미 설명)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">A2A</h2>
          <p className="text-gray-600">Agent to Agent 시스템 (더미 설명)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">프롬프트 엔지니어링</h2>
          <p className="text-gray-600">효과적인 AI 활용을 위한 프롬프트 설계 (더미 설명)</p>
        </div>
      </section>
      <section className="max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-2">연구 논문 및 프로젝트</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><Link href="#" className="text-blue-600 hover:underline">CIKM Short 논문 PDF</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">KT 협력 자료 PDF</Link></li>
        </ul>
      </section>
    </div>
  )
} 