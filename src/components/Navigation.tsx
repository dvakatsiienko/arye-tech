'use client'

import React from 'react'

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] px-10 py-5 bg-zinc-950/95 backdrop-blur-[10px] border-b border-zinc-800">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-[2px]">
          ARYE
        </div>

        <ul className="flex items-center gap-[30px] list-none">
          <li>
            <a
              href="#specs"
              className="text-zinc-400 hover:text-white transition-colors duration-300 no-underline"
            >
              Specs
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-zinc-400 hover:text-white transition-colors duration-300 no-underline"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-white transition-colors duration-300 no-underline"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#buy"
              className="text-green-500 font-medium hover:text-green-400 transition-colors duration-300 no-underline"
            >
              Buy Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}