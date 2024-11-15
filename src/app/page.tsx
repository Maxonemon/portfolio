export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Maguette Sall</h1>
          <p className="text-xl text-gray-300">
            Computer Science Student & Developer
          </p>
          <div className="text-gray-400 mt-2">
            <p>📧 maguettemaguettesall@gmail.com</p>
            <p>📱 +221 785998132</p>
            <p>📍 Dakar, Senegal</p>
          </div>
        </header>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor in Computer Science
              </h3>
              <p className="text-gray-400">University Name • 2022 - Present</p>
              <p className="text-gray-300">
                Relevant coursework: Data Structures, Algorithms, Web
                Development
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-300">HTML, CSS, JavaScript, Python</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
              <p className="text-gray-300">React, Next.js, Git, Node.js</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Web Development Intern</h3>
              <p className="text-gray-400">
                Jumia Senegal • June 2023 - August 2023
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed and maintained responsive web applications</li>
                <li>Collaborated with senior developers on various projects</li>
                <li>Implemented new features using React and Next.js</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Personal Portfolio Website
              </h3>
              <p className="text-gray-300">
                Built using Next.js, Tailwind CSS, and TypeScript
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Chatbot for Excel user</h3>
              <p className="text-gray-300">
                Developed a chatbot using mistral api
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Languages
          </h2>
          <div className="space-y-2">
            <p className="text-gray-300">English (Fluent)</p>
            <p className="text-gray-300">French (Native)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
