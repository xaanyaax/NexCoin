// app/layout.tsx
export const metadata = {
  title: 'My Crypto App',
  description: 'Track cryptocurrencies live.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
