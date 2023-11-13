import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peter India",
  description: "Information Technology",
  content: "This Portal is for portraying all kinds of digitalization and digitalization technologies and their immaculate contributions in bringing in a bevy of real, resilient, and rewarding transformations across industry sectors. You can find links to state-of-the-art digital technologies, platforms, products, patterns, practices, and processes. This portal is meticulously being updated with fresh links for the growing ecosystem of cutting-edge digital technology solutions and services. Professionals and pioneers in information and communication technologies (ICT) can immensely benefit in their everyday engagements through this portal. Pethuru Raj PhD",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
