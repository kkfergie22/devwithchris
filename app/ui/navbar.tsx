'use client';
import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { navLinks, socials } from '@/app/data/data';
import logo from '../../public/ck.png';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden w-full relative">
      <div className="sticky flex justify-between items-center">
        <Image src={logo} width={50} alt={'logo'} />
        {!isOpen && (
          <button
            className="w-auto rounded m-2 px-2 mr-3 py-2 text-brand flex items-center"
            onClick={() => setIsOpen(true)}
            title="menu"
            type="button"
          >
            <i className="bi bi-list text-xl text-brand-500"></i>
          </button>
        )}
      </div>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="bg-black fixed bg-opacity-50 z-10 inset-0"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* SideNav */}
          <div className="w-2/3 h-auto fixed z-20 text-lg transform transition-transform duration-300 ease-in-out top-0 right-0 bg-woodsmoke-950">
            <button
              className="w-auto rounded m-2 px-2 mr-3 py-2 text-brand flex border-brand absolute right-0 items-center"
              onClick={() => setIsOpen(false)}
              title="close"
              type="button"
            >
              <i className="bi bi-x-circle-fill text-brand-500"></i>
            </button>
            <ul className="p-4 font-orbitron text-brand-500">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="w-full p-4 my-2 text-center hover:bg-brand-500 hover:text-white font-semibold"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-auto flex gap-4 items-center justify-center text-brand-500 p-4">
              {socials.map((social, index) => (
                <Link key={index} href={social.href}>
                  <i className={social.icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
