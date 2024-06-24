import './global.css';

export const metadata = {
  title: 'Match Movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black/95">{children}</body>
    </html>
  );
}
