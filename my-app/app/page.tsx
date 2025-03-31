'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Menu, X } from "lucide-react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#070B1D] text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/GenScriptAI 500Px.png" alt="GenScript AI Logo" className="w-10 h-10" />
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          GENSCRIPT AI
        </span>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex items-center gap-4">
        <div className="text-gray-400 flex items-center gap-2">
          NOT YET GENSCRIPTED?
          <span role="img" aria-label="thinking">🤔</span>
          <span role="img" aria-label="worried">🤨</span>
        </div>
        <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfbSfq7-mfasSMobP6NKp0o4sN5fpqGs0tl1imqB0KpUTS6iA/viewform?usp=header" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <button 
          suppressHydrationWarning={true}
          className="bg-[#1A1F35] text-white px-6 py-2 rounded-lg hover:bg-[#252B45] transition-colors"
        >
          Sign Up
        </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
      suppressHydrationWarning={true}
      onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle Menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#1A1F35] text-white p-4 rounded-lg shadow-lg z-50 md:hidden w-40">
          <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfbSfq7-mfasSMobP6NKp0o4sN5fpqGs0tl1imqB0KpUTS6iA/viewform?usp=header" 
  target="_blank" 
  rel="noopener noreferrer">
          <button 
            suppressHydrationWarning={true}
            className="w-full bg-[#252B45] px-4 py-2 rounded-lg hover:bg-[#2F3659] transition-colors"
          >
            Sign Up
          </button>
          </a>
        </div>
      )}
    </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 text-center mt-32 relative z-10">
        <h1 className="text-4xl  sm:text-5xl md:text-6xl  font-bold leading-tight max-w-5xl mx-auto mb-8">
          Transforming the ideas to success in Media & Entertainment Industry
        </h1>

        <p className="text-gray-400 text-xl mb-4">
          We are aiming to make your decision faster than ever with 100% accuracy.
        </p>

        <p className="text-gray-400 text-xl mb-8">
          Creativity starts here and will end here!
          <br />
          Just signup and explore !
        </p>

        <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfbSfq7-mfasSMobP6NKp0o4sN5fpqGs0tl1imqB0KpUTS6iA/viewform?usp=header" 
  target="_blank" 
  rel="noopener noreferrer">
        <button 
         suppressHydrationWarning={true}
        className="bg-[#4169E1] text-white px-8 py-3 rounded-lg text-lg flex items-center gap-2 mx-auto hover:bg-blue-600 transition-colors">
          Sign Up Today ! <ArrowUpRight className="w-5 h-5" />
        </button>
</a>
        <div className="mt-32 text-2xl text-gray-300">
          Trusted by 250+ Industry Experts (Beta Product)
        </div>
      </main>

      {/* ChatGPT Comparison Section */}
      <section className="mt-32 container mx-auto px-4 relative z-10">
        <div className="bg-[#0A0F25] rounded-3xl p-12 text-center">
          <h2 className="text-6xl font-bold mb-4">How we differ from ChatGPT</h2>
          <p className="text-xl text-gray-400">(Beta Version)</p>
          <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfbSfq7-mfasSMobP6NKp0o4sN5fpqGs0tl1imqB0KpUTS6iA/viewform?usp=header" 
  target="_blank" 
  rel="noopener noreferrer">
          <button 
           suppressHydrationWarning={true}
          className="mt-8 bg-[#1A1F35] text-white px-6 py-2 rounded-lg hover:bg-[#252B45] transition-colors">
            Sign Up
          </button>
          </a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-16 sm:mt-24 md:mt-32 container mx-auto px-4 pb-16 sm:pb-24 md:pb-32 relative z-10">
  <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 text-center mb-10 sm:mb-12 md:mb-16">
    We're part of
  </h3>

  <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
    {[
      { src: "/elevenlabs.png", name: "ElevenLabGrant" },
      { src: "/langchain2.png", name: "LangChain" },
      { src: "/aws.png", name: "AWS Startups" },
      { src: "/microsoft.png", name: "Microsoft for Startups" },
      { src: "/nvidia.png", name: "NVIDIA Inception Program" }
    ].map(({ src, name }) => (
      <div key={name} className="flex items-center gap-3 sm:gap-4">
        <img src={src} alt={name} className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-lg sm:text-xl md:text-2xl">{name}</span>
      </div>
    ))}
  </div>
</section>


      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>

      {/* Newsletter Section */}
      <div className="bg-[#0A0A1F] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
            Join Our NewsLetter
          </h2>
          <p className="text-gray-400 mb-8">
            Stay tuned for our exclusive script release and latest updates.
            <br />
            <span className="block mt-1">(Coming soon)</span>
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="text-left">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jane Smith"
                className="w-full bg-[#1A1A2E] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="jane@framer.com"
                className="w-full bg-[#1A1A2E] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Security Section */}
      <section className="mt-32 container mx-auto px-4 pb-32 relative z-10">
        <h2 className="text-6xl font-bold text-center mb-16">
          How your data is secured ?
        </h2>
        <img src="/cia triad.png" alt="CIA Triad" className="mx-auto" />
      </section>

      {/* Blog Articles Section */}
      <section className="mt-32 container mx-auto px-4 pb-32 relative z-10">
        <h2 className="text-6xl font-bold text-center mb-4">Latest blog articles</h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Sharing the recent updates on GenScriptAI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title:
                'Your Script, Your Rights: The Ultimate Guide to Exclusive Script Purchases',
              content:
                "Uncover the benefits of purchasing exclusive scripts with full rights. Learn how to secure your script's ownership, ensuring your creative work is protected and uniquely yours, ready for immediate use without legal complications.",
            },
            {
              title:
                'AI-Aided Plagiarism-Free Scripts: The New Standard in Content Creation',
              content:
                'Explore how AI ensures plagiarism-free scripts and maintains high-quality standards, revolutionizing content creation. Dive into the article to understand how AI based platform provide a new benchmark for originality and efficiency in writing.',
            },
            {
              title:
                'Harnessing Creativity. Exclusive Script Offerings for Unmatched Storytelling',
              content:
                'Dive into Harnessing Creativity: Exclusive Script Offerings for Unmatched Storytelling, where we explore how our scripts provide unique, copyright-cleared content perfect for distinguished narratives.',
            }
          ].map((article, idx) => (
            <div key={idx} className="bg-[#0A0F25] rounded-3xl p-8 flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-6">{article.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{article.content}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-gray-400">Genscript AI </span>
                {/* <ArrowUpRight className="w-6 h-6 text-white" /> */}
                <span className="text-gray-400">Learn More </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0C0C24] text-white px-4 sm:px-6 lg:px-20 py-10 font-sans overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-700 pb-6">
            <div className="flex items-center gap-4">
              <img src="/GenScriptAI 500Px.png" alt="Logo" className="h-8" />
              <span className="text-xl font-bold">GENSCRIPT AI</span>
              <div className="hidden lg:block border-l border-gray-600 h-6 mx-4" />
              <span className="text-gray-300 text-sm hidden lg:block">
                Solutions that drive content&apos;s success
              </span>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 lg:mt-0 text-sm text-gray-300">
              <span>More Features (Coming Soon)</span>
              <span>Pricing</span>
              <span>Reviews</span>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6 text-sm text-gray-300">
            Contact Us –{' '}
            <a
              href="mailto:marketing@genscriptai.com"
              className="text-white font-medium"
            >
              marketing@genscriptai.com
            </a>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-gray-400 text-sm leading-relaxed">
              <p>Copyright © 2024 AaraIipi Media technology Pvt. Ltd.</p>
              <p>All Rights Reserved</p>
              <p>
                We are recognized by Startup India with DIPP180145 (Media &
                Entertainment industry).
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-white text-lg relative z-50 pointer-events-auto">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <a href="https://pin.it/41LwfeIaf" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="hover:text-red-500 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@GenscriptAI" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
              </a>
              <a href="https://www.producthunt.com/products/gensciptai" target="_blank" rel="noopener noreferrer">
    <img 
      src="/product_hunt.png" 
      alt="Product Hunt" 
      className="w-6 h-6 hover:opacity-80 cursor-pointer" 
    />
  </a>

              <a href="https://x.com/GenscriptA28862?s=08" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
              </a>
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <a href="https://www.linkedin.com/company/genscript-ai/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
      </a>
      
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;