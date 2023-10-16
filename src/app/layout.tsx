import "./global.css";
import styles from "./app.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const test = function () {
  console.log("hola")
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.headerFooter}>
          <nav className={styles.navBar}>
            <Link href="/">Home</Link>
            <Link href="/totfosk">Tot Fosk</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/teaching">Teaching</Link>
            <div className={styles.dropDownTitle}>
              Influences
              <div className={styles.dropDownNav}>
                <Link href="/albums" className={styles.dropLinks}>
                  Albums
                </Link>
                <Link href="/electronic" className={styles.dropLinks}>
                  Electronic
                </Link>
                <Link href="/singles" className={styles.dropLinks}>
                  Singles
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.headerFooter}>© Copyright Tot Fosk</footer>
      </body>
    </html>
  );
}
