import Navbar from "@/components/customs/Nav";
import "./globals.css";
import { ReactNode } from 'react';
import { Toaster } from "sonner";

export const metaData = {
  title: "TechQuest - a platform for tech enthusiasts",
  description: "TechQuest is a platform for tech enthusiasts to learn, share, and grow together. We offer a range of resources, including blogs, quizzes, and interview preparation materials, to help you stay up-to-date with the latest trends in technology.",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </head>
      <body>
        <main>
        <Toaster position="top-right" richColors />
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;