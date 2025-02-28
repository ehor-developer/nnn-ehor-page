import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google'
import './style.css';
const notosans_jp = Noto_Sans_JP({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'えほの自己紹介サイト',
  description: 'このサイトはえほの学校用自己紹介サイトです。',
  openGraph: {
    title: 'えほの自己紹介サイト',
    description: 'このサイトはえほの学校用自己紹介サイトです。',
    url: 'https://n.ehor.jp',
    siteName: 'えほの自己紹介サイト',
    images: [
      {
        url: 'https:/n.ehor.jp/image/ogp.png',
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
      <body className={`${notosans_jp.className}`}>{children}</body>
    </html>
  );
}
