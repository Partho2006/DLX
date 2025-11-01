export const metadata = {
  title: 'DLX Shop',
  description: 'Created by Partho.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
