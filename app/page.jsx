export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="text-center space-y-4">

        {/* EDIT: Your full name */}
        <h1 className="text-5xl font-bold text-slate-900">Cheah Choon Keat</h1>

        {/* EDIT: Your job title or tagline */}
        <p className="text-xl text-indigo-600 font-medium">Data Analyst Intern | Data Science Intern | IT Systems Analyst Intern</p>

        {/* Contact links */}
        <div className="flex justify-center gap-6 text-sm text-slate-500">

          {/* EDIT: Your email address */}
          <a href="cheahchoonkeat295@gmail.com" className="hover:text-indigo-600 transition-colors">
            cheahchoonkeat295@gmail.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            https://github.com/cck769
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="http://www.linkedin.com/in/cheah-choon-keat-45188338a" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            http://www.linkedin.com/in/cheah-choon-keat-45188338a
          </a>
        </div>

        {/* Download Resume button — replace /resume.pdf in /public with your own PDF */}
        <div className="pt-2">
          <a href="/resume.pdf" download
             className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            Download Resume
          </a>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">About</h2>

        {/* EDIT: Your 2–3 sentence bio */}
        <p className="text-slate-600 leading-relaxed">
          A motivated and detail-oriented Information Systems (Data Analytics) undergraduate with a 
          UEC qualification, seeking an internship opportunity for the Jan – Apr 2027 period to 
          contribute to data-driven decision-making and efficient business operations.
        </p>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Skills</h2>

        {/* EDIT: Replace or add skills. Each skill is a <span> tag — just copy and paste one. */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">SAS</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">R</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Power BI</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Advanced Spreadsheets</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Data Flow Mapping</span>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">Projects</h2>

        <div className="space-y-6">

          {/* ── PROJECT 1 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Predicting Viral Artificial-Intelligence Tweets</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Developed a machine learning pipeline to predict tweet virality using a dataset of over 820,000 AI-related tweets, analysing engagement patterns in an imbalanced dataset.
              Applied text analysis (TF-IDF) and sentiment analysis (VADER) to analyse tweet content, used Random Forest and stacking ensemble models to predict tweet virality, and applied SMOTE-Tomek to address imbalanced data. 
              Developed a Power BI dashboard to visualize engagement patterns and findings.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/cck769/Predicting-Viral-Artificial-Intelligence-Tweets" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 2 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">World Happiness Report 2015 Data Analysis</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Analysed data from 158 countries to examine the relationships between economic, social, and health-related factors and national happiness scores.
              Used SAS Studio for data preparation, visualization, descriptive statistics, Pearson correlation, independent-samples t-tests, and 
              multiple linear regression, including diagnostic assumption testing.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SAS</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/cck769/World-Happiness-Report-2015-Data-Analysis" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

                    {/* ── PROJECT 3 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Global Food & Plastic Waste Analytics Project</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Analysed global food waste and mismanaged plastic waste datasets from 2010–2019, performing data validation and cleaning to prepare the data for statistical analysis.
              Utilized SAS for iterative data cleaning, Complete-Case Filtering protocols, correlation, and regression analysis.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SAS</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/cck769/Global-Food-Plastic-Waste-Analytics" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>
          
                    {/* ── PROJECT 4 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Tech Innovation Hackathon Management System</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Designed an 11-table normalized relational database schema to support event operations, cross-university participant and team management, and project evaluations.
              Used SQL and entity-relationship modelling to define database relationships and maintain referential and data integrity.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SQL</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/cck769/Tech-Innovation-Hackathon-Management-System" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>
          
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Education</h2>

        <div className="space-y-1">
          {/* EDIT: Your degree */}
          <p className="font-semibold text-slate-900">BSc Information Systems</p>

          {/* EDIT: Your university */}
          <p className="text-slate-600">Sunway University</p>

          {/* EDIT: Your expected graduation year */}
          <p className="text-slate-500 text-sm">Expected Graduation: 2027 August</p>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Contact</h2>

        <p className="text-slate-600 mb-4">
          Open to internship and graduate opportunities — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">

          {/* EDIT: Your email address */}
          <a href="cheahchoonkeat295@gmail.com"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            cheahchoonkeat295@gmail.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/cck769" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            https://github.com/cck769
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="http://www.linkedin.com/in/cheah-choon-keat-45188338a" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            http://www.linkedin.com/in/cheah-choon-keat-45188338a
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="text-center text-slate-400 text-sm pt-4 pb-8 border-t border-slate-100">
        {/* EDIT: Your name */}
        <p>© 2026 Cheah Choon Keat· Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  )
}
