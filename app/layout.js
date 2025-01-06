// app/layout.js
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
export const metadata = {
  title: 'My App',
  description: 'Description de votre app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
