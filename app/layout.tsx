import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import GQLProvider from './gql-provider'

const inter = Inter({ subsets: ['latin'] })

/* 
Keep your own providers as close to the children prop as possible
This will avoid wierd bugs/conflict with 3rd party providers
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GQLProvider>{children}</GQLProvider>
        </Providers>
      </body>
    </html>
  )
}
