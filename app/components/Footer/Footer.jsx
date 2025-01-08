import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importer les icônes
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className='flex justify-around items-center'>
      <div className="">
        <Link href="/">
          <Image
            src="/images/fact2.png" // Remplacez par le chemin de votre logo
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="hover:text-blue-600" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="hover:text-blue-700" />
        </a>
      </div>
      </div>
      <p>© 2024 Niger Fact-Check. Tous droits réservés.</p>
  
    </footer>
  );
}
