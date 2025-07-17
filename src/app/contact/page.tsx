'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    alert('문의가 성공적으로 전송되었습니다.')
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-12 bg-gray-0">
      <section className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 px-6 py-8 ">



        <div className="h-[100px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-2">Contact</h1>
          <p className="text-gray-700">외주 개발/협업 요청을 환영합니다. 아래 양식으로 문의해 주세요.</p>
        </div>

        <div className="h-[500px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">

          {/* 이름 */}
          <div>
            <label className="block font-semibold mb-1">성함</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="성함을 입력해주세요."
              className="w-[500px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          {/* 회사명 */}
          <div>
            <label className="block font-semibold mb-1">회사명</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="회사명을 입력해주세요."
              className="w-[500px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          {/* 직급 */}
          <div>
            <label className="block font-semibold mb-1">직급</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="직급을 입력해주세요."
              className="w-[500px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          {/* 전화번호 */}
          <div>
            <label className="block font-semibold mb-1">전화번호</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="연락처를 입력해주세요."
              className="w-[500px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          {/* 예산 */}
          <div>
            <label className="block font-semibold mb-1">예산</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="예산을 입력해주세요."
                className="w-[470px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              />
              <span className="text-sm text-gray-600">만원</span>
            </div>
          </div>

          {/* 문의내용 */}
          <div>
            <label className="block font-semibold mb-1">문의내용</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="문의내용을 입력해주세요."
              className="w-[500px] h-[100px] flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="h-[20px]"></div>

          {/* 버튼 */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[500px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-semibold shadow-md"
          >
            프로젝트 문의하기
          </button>
        </div>
      </section>
    </div>
  )
}


