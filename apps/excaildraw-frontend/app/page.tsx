import { Pencil, Zap, Users, Download, Lock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Pencil className="w-8 h-8 text-slate-800" strokeWidth={2.5} />
              <span className="text-2xl font-bold text-slate-800">DrawFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <button className="px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/5 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">Powerful visual collaboration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Draw, collaborate,
              <br />
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                create together
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A simple yet powerful drawing tool for sketching diagrams, wireframes, and visual ideas.
              Start creating in seconds, collaborate in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <button className="px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all transform hover:scale-105 font-medium shadow-lg hover:shadow-xl">
                  Sign up
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 transition-all border-2 border-slate-200 font-medium">
                  Sign in
                </button>
              </Link>
            </div>
            <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-slate-200">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Pencil className="w-24 h-24 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">Canvas Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Everything you need to create
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Powerful features designed for seamless visual collaboration
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                <p className="text-slate-600 leading-relaxed">
                  Instant loading, smooth performance. Create complex diagrams without any lag or delay.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-Time Collaboration</h3>
                <p className="text-slate-600 leading-relaxed">
                  Work together with your team in real-time. See changes as they happen, instantly.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Export Anywhere</h3>
                <p className="text-slate-600 leading-relaxed">
                  Export your drawings as PNG, SVG, or JSON. Use them wherever you need.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Privacy First</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your data stays yours. End-to-end encryption ensures your work remains private.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Pencil className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Intuitive Tools</h3>
                <p className="text-slate-600 leading-relaxed">
                  Simple, powerful drawing tools. Shapes, arrows, text, and freehand drawing at your fingertips.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Hand-Drawn Style</h3>
                <p className="text-slate-600 leading-relaxed">
                  Beautiful hand-drawn aesthetic makes your diagrams feel natural and engaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to start creating?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join thousands of creators using DrawFlow to bring their ideas to life
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105 font-bold text-lg shadow-2xl">
              Get Started for Free
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Pencil className="w-6 h-6 text-slate-800" strokeWidth={2.5} />
              <span className="text-xl font-bold text-slate-800">DrawFlow</span>
            </div>
            <div className="flex space-x-6 text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 text-sm">
            © 2025 DrawFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
