import './globals.css'

export const metadata = {
  title: 'Mumbai Police',
  description: 'This is the official website of Mumbai Police Department',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
