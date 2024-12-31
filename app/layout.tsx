import { Orbitron, Roboto } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Christian Koranteng | Software Engineer',
  description: 'Portfolio website for Christian Koranteng',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
