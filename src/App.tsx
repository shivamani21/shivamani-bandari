import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, GraduationCap, Briefcase, User, Code, Send, Wrench } from 'lucide-react';
import portfolioImage from './shivamani portofolio image.jpg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 20;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:shivamanibandari3@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return(
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-blue-100'
            }`}>Shivamani Bandari</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>About</a>
              <a href="#education" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>Education</a>
              <a href="#projects" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>Projects</a>
              <a href="#profiles" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>Coding Profiles</a>
              <a href="#skills" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>Skills</a>
              <a href="#contact" className={`nav-link transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}>Contact</a>
            </div>
            <button className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shivamani Bandari</h1>
              <p className="text-xl mb-6">Information Technology Student, Mentor at Smatinterviews & Aspiring Software Developer</p>
              <div className="flex space-x-4">
                <a href="https://github.com/shivamani21" className="hover:text-blue-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/shivamani-bandari" className="hover:text-blue-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:shivamanibandari3@gmail.com" className="hover:text-blue-200 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3 reveal delay-200">
              <img 
                src={portfolioImage} 
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <User className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed reveal delay-200">
          Hello! My name is Shivamani Bandari. I am currently in my final year of B.Tech at CMR Engineering College in Hyderabad, specializing in Information Technology (IT). Alongside my studies, I have gained valuable experience as a mentor, where I guide students in enhancing their skills, particularly in problem-solving and technical concepts.

I have a strong foundation in programming, data structures, and algorithms, with practical knowledge gained through hands-on projects and challenges. My experience in mentoring has also helped me develop excellent communication and debugging skills.

I am passionate about exploring innovative ideas in technology and am always eager to collaborate on exciting projects and discussions. Feel free to connect with me!
          </p>
        </div>
      </section>

      <section id="education" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <GraduationCap className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 reveal delay-200 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Bachelor's of Technology in Information Technology</h3>
            <p className="text-gray-600">CMR Engineering College</p>
            <p className="text-gray-500">2021 - Present</p>
            <p className="mt-2">CGPA: 8.70/10</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 reveal delay-200 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Intermediate in MPC</h3>
            <p className="text-gray-600">TSRJC Nandi Medaram</p>
            <p className="text-gray-500">2019 - 2021</p>
            <p className="mt-2">MARKS: 868/1000</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 reveal delay-200 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">School</h3>
            <p className="text-gray-600">ZPHS Rudravaram</p>
            <p className="text-gray-500">2014 - 2019</p>
            <p className="mt-2">GPA: 9.0/10</p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <Code className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal delay-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Machine Learning Project"
                className="w-full h-48 object-cover transition-transform hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bank Customer Churn Prediction</h3>
                <p className="text-gray-600 mb-4">Machine Learning based customer churn prediction in a bank</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Flask</span>
                </div>
                <a href="#" className="flex items-center mt-4 text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal delay-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
                alt="Coding Platform Project"
                className="w-full h-48 object-cover transition-transform hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coding Cube</h3>
                <p className="text-gray-600 mb-4">A 3D cube represents a coding platform on each respective side, and the project provides updates on its content</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Express.js</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
                </div>
                <a href="#" className="flex items-center mt-4 text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profiles" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <Briefcase className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Coding Profiles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://leetcode.com/yourusername" className="bg-white rounded-lg shadow-md p-6 reveal delay-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
              <p className="text-gray-600">Problems Solved: 450+</p>
              <p className="text-gray-600">Contest Rating: 1431</p>
            </a>
            <a href="https://www.hackerrank.com/yourusername" className="bg-white rounded-lg shadow-md p-6 reveal delay-300 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">HackerRank</h3>
              <p className="text-gray-600">4⭐ Problem Solving</p>
              <p className="text-gray-600">3⭐ Java</p>
            </a>
            <a href="https://www.codechef.com/users/yourusername" className="bg-white rounded-lg shadow-md p-6 reveal delay-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
              <p className="text-gray-600">Rating: 1423</p>
              <p className="text-gray-600">Division: 3</p>
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <Wrench className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 reveal delay-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-8 h-8 mr-3" alt="C" />
                  <span>C</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8 mr-3" alt="Java" />
                  <span>Java</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 mr-3" alt="Python" />
                  <span>Python</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 reveal delay-300 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-4">Web Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-8 h-8 mr-3" alt="HTML" />
                  <span>HTML5</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-8 h-8 mr-3" alt="CSS" />
                  <span>CSS3</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8 mr-3" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 reveal delay-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-4">Frameworks & Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-8 h-8 mr-3" alt="Bootstrap" />
                  <span>Bootstrap</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-8 h-8 mr-3" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8 mr-3" alt="MongoDB" />
                  <span>MERN Stack</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 reveal delay-500 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-4">Emerging Tech</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-8 h-8 mr-3" alt="Machine Learning" />
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 mr-3" alt="ML Libraries" />
                  <span>ML Libraries</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#627EEA"/>
                    <path d="M12.374 3v6.652l5.623 2.513L12.374 3z" fill="#FFFFFF" fillOpacity="0.602"/>
                    <path d="M12.374 3L6.75 12.165l5.624-2.513V3z" fill="#FFFFFF"/>
                    <path d="M12.374 16.476v4.52L18 13.212l-5.626 3.264z" fill="#FFFFFF" fillOpacity="0.602"/>
                    <path d="M12.374 20.996v-4.52L6.75 13.212l5.624 7.784z" fill="#FFFFFF"/>
                    <path d="M12.374 15.425l5.623-3.26-5.623-2.513v5.773z" fill="#FFFFFF" fillOpacity="0.2"/>
                    <path d="M6.75 12.165l5.624 3.26V9.652l-5.624 2.513z" fill="#FFFFFF" fillOpacity="0.602"/>
                  </svg>
                  <span>Blockchain</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 reveal delay-600 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-4">Other Skills</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8 mr-3" alt="MySQL" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-8 h-8 mr-3 text-blue-600" />
                  <span>DSA</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-8 h-8 mr-3 text-blue-600" />
                  <span>System Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 reveal">
            <Mail className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg mb-8 reveal delay-200">
              I'm always open to discussing new projects and opportunities
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 reveal delay-300">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Hello, I'd like to connect with you..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
            <div className="flex justify-center space-x-6 mt-8 reveal delay-400">
              <a href="https://github.com/shivamani21" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/shivamani-bandari" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shivamanibandari3@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Shivamani Bandari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;