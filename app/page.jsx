export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="text-center space-y-4">

        <h1 className="text-5xl font-bold text-slate-900">Cheah Choon Keat</h1>

        <p className="text-xl text-indigo-600 font-medium">Data Analytics Student & Aspiring Data Professional</p>

        <div className="flex justify-center gap-6 text-sm text-slate-500">

          <a href="mailto:cheahchoonkeat295@gmail.com" className="hover:text-indigo-600 transition-colors">
            cheahchoonkeat295@gmail.com
          </a>

          <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/cheah-choon-keat-45188338a" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
        </div>

        <div className="pt-2">
          {/* Note: Make sure to rename your actual PDF file to exactly match this! */}
          <a href="/Cheah_Choon_Keat_Resume.pdf" download
             className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            Download Resume
          </a>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">About</h2>

        <p className="text-slate-600 leading-relaxed">
          I am a final year student at Sunway University specializing in data analytics and enterprise architecture, currently pursuing the Google Data Analytics Professional Certificate. I am passionate about applying technical skills to real-world challenges, such as sustainability, waste management, and public healthcare. I enjoy turning complex datasets into clear insights to drive value creation and better business decisions.
        </p>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Skills</h2>

        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Data Analysis</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">SAS</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Enterprise Architecture</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Spreadsheets</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Bilingual (English/Chinese)</span>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">Projects</h2>

        <div className="space-y-6">

          {/* ── PROJECT 1 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Food and Plastic Waste Analysis (UN SDG 12)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Conducted comprehensive data analysis using SAS to investigate food and plastic waste trends, aligning research questions with UN Sustainable Development Goal 12 (Responsible Consumption and Production).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SAS</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Data Analytics</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Research</span>
            </div>
            <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 2 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Public Healthcare Reform Strategy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Developed a strategic presentation applying enterprise architecture principles to propose actionable reforms for public healthcare systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Enterprise Architecture</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Strategy</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Presentation Design</span>
            </div>
            <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Education</h2>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">BSc Computer Science</p>
            <p className="text-slate-600">Sunway University</p>
            <p className="text-slate-500 text-sm">Expected Graduation: 2026</p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Google Data Analytics Professional Certificate</p>
            <p className="text-slate-600">Coursera</p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Contact</h2>
        <p className="text-slate-600 mb-4">
          Open to internship and graduate opportunities — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:cheahchoonkeat295@gmail.com"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            cheahchoonkeat295@gmail.com
          </a>
          <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cheah-choon-keat-45188338a" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="text-center text-slate-400 text-sm pt-4 pb-8 border-t border-slate-100">
        <p>© 2026 Cheah Choon Keat · Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  )
}
