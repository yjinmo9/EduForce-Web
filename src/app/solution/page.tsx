'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function SolutionPage() {
  const faqs = [
    {
      question: '어떤 AI 들을 쓸 수 있어요?',
      answer: (
        <div className="text-left text-gray-700 space-y-1">
          <p>- AI 이미지 생성 : 이미지 기반 프롬프트 입력으로 AI 이미지 4장 생성</p>
          <p>- AI 3D 모델링 생성 1 : 이미지를 기반으로, 낮은 퀄리티의 3D 모델을 빠른 속도로 생성</p>
          <p>- AI 3D 모델링 생성 2 : 이미지를 기반으로, 높은 퀄리티의 3D 모델 생성</p>
          <p className="mt-2 text-sm text-gray-500">
            * 업데이트 예정 : AI 텍스쳐 생성, 리깅, 애니메이션, 멀티 이미지 인풋
          </p>
        </div>
      ),
    },
    {
      question: '업로드 파일 용량 제한이 있나요?',
      answer: '최대 100MB까지 업로드 가능합니다. 더 큰 용량은 유료 플랜에서 지원됩니다.',
    },
    {
      question: '3D 파일 포맷은 어떤 것들을 지원하나요?',
      answer: 'OBJ, FBX, GLB, STL 등 주요 포맷을 지원합니다.',
    },
    {
      question: '요금제는 어떻게 되나요?',
      answer: '베이직은 무료, 프로와 엔터프라이즈 요금제는 기능에 따라 차등 적용됩니다.',
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (i: number) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">

      {/* [섹션 1] 제목 */}
      <section className="flex items-center justify-center h-[200px]">
        <h1 className="text-4xl font-bold text-center">EduForce 솔루션 제공 플로우</h1>
      </section>

      {/* [섹션 2] 1단계: 현황 진단 */}
      <section className="flex h-[300px] flex-col items-center justify-center w-full max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow p-8 w-full text-center flex flex-col items-center">
        <div className="h-[200px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">
            <div className="text-3xl mb-2">step1. 현황 진단</div>
            <div className="text-gray-800 font-semibold mb-2">어디에 문제가 있는가?</div>
            <ul className="text-gray-600 text-base mb-4 list-disc list-inside text-left max-w-md mx-auto">
              <li>고객(학교/학원)의 교육 환경, 대상, 니즈 분석</li>
              <li>반복 질문/시간 낭비/성과 편차 등 핵심 문제 파악</li>
              <li>내부 데이터가 있다면 초기 질의 유형 분석</li>
            </ul>
            <Link href="/contact" className="mt-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">무료 진단 요청</Link>
        </div>
        </div>
      </section>

      {/* [화살표] */}
      <div className="text-3xl text-center my-2">↓</div>

      {/* [섹션 3] 2단계: 맞춤형 AI 설계 */}
      <section className="flex h-[300px] flex-col items-center justify-center w-full max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow p-8 w-full text-center flex flex-col items-center">
          <div className="h-[200px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">
            <div className="text-3xl mb-2">step2. 맞춤형 AI 설계</div>
            <div className="text-gray-800 font-semibold mb-2">당신만의 AI 시스템 만들기</div>
            <ul className="text-gray-600 text-base mb-4 list-disc list-inside text-left max-w-md mx-auto">
              <li>교육자 콘텐츠 기반 LLM fine-tuning 혹은 프롬프트 엔지니어링</li>
              <li>기관의 목표(성적 향상, Q&A 자동화, 피드백 자동화 등)에 따라 구조 설계</li>
              <li>예: AI 조교 / AI 자소서 첨삭 / 내신 분석 코치</li>
            </ul>

          </div>
        </div>
      </section>

      {/* [화살표] */}
      <div className="text-3xl text-center my-2">↓</div>

      {/* [섹션 4] 3단계: 도입/적용 */}
      <section className="flex h-[300px] flex-col items-center justify-center w-full max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow p-8 w-full text-center flex flex-col items-center">
        <div className="h-[200px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">
          <div className="text-3xl mb-2">step3. 도입/적용</div>
          <div className="text-gray-800 font-semibold mb-2">현장 적용 및 사용 시작</div>
          <ul className="text-gray-600 text-base mb-4 list-disc list-inside text-left max-w-md mx-auto">
            <li>수업 자료 업로드, 질의응답 통합, 사용자 등록</li>
            <li>교사/학생의 실 사용 피드백 수집</li>
            <li>초기 테스트 운영 및 조정</li>
          </ul>
          <div className="italic text-gray-500 text-sm mb-2">* 실제 적용 이미지/피드백은 문의 시 제공</div>
          </div>
        </div>
      </section>

      {/* [화살표] */}
      <div className="text-3xl text-center my-2">↓</div>

      {/* [섹션 5] 4단계: 지속적 개선 */}
      <section className="flex h-[300px] flex-col items-center justify-center w-full max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow p-8 w-full text-center flex flex-col items-center">
        <div className="h-[200px] bg-white rounded-2xl border-0 border-gray-200 px-14 py-8 space-y-6 flex flex-col items-center justify-center">
          <div className="text-3xl mb-2">step4. 지속적 개선</div>
          <div className="text-gray-800 font-semibold mb-2">성과 추적과 지속적 업그레이드</div>
          <ul className="text-gray-600 text-base mb-4 list-disc list-inside text-left max-w-md mx-auto">
            <li>학습 효과 측정 (정량지표: 질의 수, 정답률, 업무 시간 절감 등)</li>
            <li>사용자의 피드백 반영하여 모델 업데이트</li>
            <li>예: Predictive Query 기능 강화, 질의 자동 분류 개선 등</li>
          </ul>
          <div className="w-full flex flex-col items-center">
            {/*<div className="font-semibold text-gray-700 mb-2">Before / After 예시</div>*/}
            <div className="flex gap-4 flex-wrap justify-center">
              <span className="bg-green-100 rounded-lg px-4 py-2 text-sm">업무시간 60% 절감</span>
              <span className="bg-green-100 rounded-lg px-4 py-2 text-sm">정답률 30% 향상</span>
              <span className="bg-green-100 rounded-lg px-4 py-2 text-sm">피드백 자동화</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* [섹션 6] CTA */}
      <section className="mt-12 h-[500px] flex flex-col items-center justify-center gap-4">
        <div className="text-xl font-bold mb-2">우리 기관에 도입하려면?</div>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/contact" className="px-8 py-4 rounded-xl border border-gray-300 bg-blue text-white text-lg font-semibold hover:bg-gray-900">빠른 문의 남기기</Link>
          <Link href="/contact" className="px-8 py-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-lg font-semibold hover:bg-gray-100">무료 진단 요청</Link>
        </div>
      </section>

      {/* [섹션 7] 자주 묻는 질문들 */}
      <section className="h-[400px] w-full flex flex-col items-center justify-start bg-white py-24 px-6">
        <h2 className="h-[100px] text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          자주 묻는 질문들
        </h2>

        <div className="max-w-4xl w-full flex flex-col items-center justify-start mx-auto divide-y divide-gray-200 space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="w-[600px]">
              <button
                onClick={() => toggle(i)}
                className="w-[600px] flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <span className="text-gray-400 text-base">
                  {openIndexes.includes(i) ? '▲' : '▼'}
                </span>
              </button>
              {openIndexes.includes(i) && (
                <div className="mt-4 h-[100px] items-center flex justify-center text-sm text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
