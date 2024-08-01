import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'えほの自己紹介サイト',
  description: 'このサイトはえほの学校用自己紹介サイトです。',
  openGraph: {
    title: 'えほの自己紹介サイト',
    description: 'このサイトはえほの学校用自己紹介サイトです。',
    url: 'https://ehor.nnn.rest',
    siteName: 'えほの自己紹介サイト',
    images: [
      {
        url: 'https:/ehor.nnn.rest/image/ogp.png',
        width: 960,
        height: 540,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
