
// layout.tsx
import './globals.css'
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export const metadata = {
  title: 'My Crypto App',
  description: 'Track cryptocurrencies live.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
