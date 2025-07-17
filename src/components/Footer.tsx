

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="flex flex-col items-center justify-center px-6 py-16">
        {/* Left: Logo + Address */}
        <div>
          <div className="h-[100px] flex items-center justify-center text-white text-2xl font-bold mb-4">
            <span className="text-white">eduForce </span>

          </div>
          <div className="h-[100px] flex items-start justify-center text-sm">
            <p>baegyutae@togglecampus.com</p>
          </div>
         
        </div>

      </div>
    </footer>
  )
}
