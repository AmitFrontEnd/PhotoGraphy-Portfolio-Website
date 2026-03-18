import { Facebook, Instagram, Github, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white border-t border-gray-200 dark:border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Zoomin</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Professional photography services capturing beautiful moments,
            landscapes, and memories that last forever.
          </p>

          <div className="flex gap-4 pt-2">
            <a className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition">
              <Facebook size={18} />
            </a>
            <a className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition">
              <Instagram size={18} />
            </a>
            <a className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition">
              <Github size={18} />
            </a>
            <a className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li><Link to="/" className="hover:text-black dark:hover:text-white transition">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-black dark:hover:text-white transition">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-black dark:hover:text-white transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>Photography</li>
            <li>Videography</li>
            <li>Drone Photography</li>
            <li>Video Editing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>+91 98765 43210</li>
            <li>hello@zoomin.com</li>
            <li>New Delhi, India</li>
          </ul>
        </div>

      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-200 dark:border-white/10 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Zoomin Photography. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer