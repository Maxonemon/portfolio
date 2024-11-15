import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-4">Maguette Sall</h1>
            <p className="text-xl text-gray-300 mb-8">
              Computer Science Student & Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl">
              I&apos;m a 20-year-old computer science student passionate about
              creating beautiful and functional web and mobile applications.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="bg-gray-800/20 p-8 rounded-lg">
              <p className="text-lg text-gray-300">
                I am currently pursuing my degree in Computer Science, where
                I&apos;m developing a strong foundation in software development
                and problem-solving. My passion lies in creating intuitive and
                responsive web applications using modern technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "HTML", level: "90%" },
                { name: "CSS", level: "85%" },
                { name: "JavaScript", level: "80%" },
                { name: "React", level: "75%" },
                { name: "React Native", level: "70%" },
              ].map((skill) => (
                <div key={skill.name} className="bg-gray-800/40 p-6 rounded-lg">
                  <p className="text-lg mb-2">{skill.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((project) => (
                <div key={project} className="bg-gray-800/40 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    Description of your project goes here. Explain what you
                    built and what technologies you used.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:underline">
                      View Project
                    </a>
                    <a href="#" className="text-primary hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="bg-gray-800/40 p-8 rounded-lg max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    className="w-full p-2 rounded bg-gray-700 text-white h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
