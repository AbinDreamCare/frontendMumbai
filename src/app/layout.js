import './globals.css'

export const metadata = {
  title: 'Navi Mumbai Police | Government of Maharashtra',
  description: 'This is the official website of Navi Mumbai Police Department',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
