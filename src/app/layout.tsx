import './globals.css'
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'Weather app description'
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang='en'>
    <body className={ `${ inter.className } bg-white my-20` }>
      <main>
        <div className='w-full max-w-[615px] mx-auto'>
          { children }
        </div>
      </main>
    </body>
    </html>
  )
}
