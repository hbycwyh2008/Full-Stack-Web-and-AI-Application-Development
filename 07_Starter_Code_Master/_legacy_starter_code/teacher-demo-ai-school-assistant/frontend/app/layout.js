import "./globals.css";

// This is the root layout for the Next.js App Router.
// Every page is rendered inside this layout.
export const metadata = {
  title: "AI School Assistant Demo",
  description: "A small teaching demo of an AI School Assistant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
