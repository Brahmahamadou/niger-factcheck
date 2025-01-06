import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importer les icônes

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© 2024 Niger Fact-Check. Tous droits réservés.</p>
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
    </footer>
  );
}
