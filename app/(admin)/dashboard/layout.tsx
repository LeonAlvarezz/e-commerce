import Sidebar from '@/app/(admin)/dashboard/component/Sidebar/Sidebar';
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
          <Sidebar />
          <div className='flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
