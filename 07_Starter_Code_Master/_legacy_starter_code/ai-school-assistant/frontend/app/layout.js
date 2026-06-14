import "./globals.css";

export const metadata = {
  title: "AI School Handbook Assistant",
  description: "Ask handbook questions and get grounded answers with citations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
