import Sidebar from '@/app/(admin)/dashboard/component/Sidebar/Sidebar';
import cn from '@/lib/util';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex'>
          <Sidebar></Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
