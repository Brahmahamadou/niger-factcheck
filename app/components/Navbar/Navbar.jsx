'use client'; // Si vous utilisez le nouvel App Router, assurez-vous d'inclure cette directive

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around bg-gray-800 py-2">
       {/* Logo et nom du site */}
       <div className="">
        <Link href="/">
          <Image
            src="/images/Fact2.png" // Remplacez par le chemin de votre logo
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <ul className="flex justify-center list-none m-0 p-0">
        <li className="mx-3">
          <Link
            href="/"
            className={`${pathname === '/' ? 'font-bold text-white' : 'text-gray-400'} hover:text-gray-200 text-2xl px-4`}
          >
            Accueil
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/quisommesnous"
            className={`${pathname === '/qui-sommes-nous' ? 'font-bold text-white' : 'text-gray-400'} hover:text-gray-200 text-2xl px-4`}
          >
            Qui sommes-nous
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/factchecking"
            className={`${pathname === '/fact-checking' ? 'font-bold text-white' : 'text-gray-400'} hover:text-gray-200 text-2xl px-4`}
          >
            Fact-checking
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/blog"
            className={`${pathname === '/Blog' ? 'font-bold text-white' : 'text-gray-400'} hover:text-gray-200 text-2xl px-4`}
          >
            Blog
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/contacternous"
            className={`${pathname === '/contactez-nous' ? 'font-bold text-white' : 'text-gray-400'} hover:text-gray-200 text-2xl px-4`}
          >
            Contactez-Nous
          </Link>
        </li>
      </ul>
    </nav>
  );
}
