"use client";

import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";

export default function EnhancedPortfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-4xl font-bold mb-4">
                  Welcome to My Portfolio
                </CardTitle>
                {mounted && (
                  <TypeAnimation
                    sequence={[
                      "I develop MERN stack applications",
                      1000,
                      "I solve complex problems with React and Node.js",
                      1000,
                      "I create sleek, user-friendly interfaces",
                      1000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    className="text-2xl text-blue-400"
                    repeat={Infinity}
                  />
                )}
              </CardHeader>
              <CardContent>
                <p className="mt-4 text-base">
                  I am a passionate Full Stack Developer with hands-on
                  experience in the MERN stack, including MongoDB, Express.js,
                  React.js, and Node.js. My expertise extends to React Native,
                  Next.js, and a variety of tools such as JWT, Tailwind CSS, and
                  Socket.io. I thrive in developing dynamic and secure web
                  applications, and I’m continuously expanding my skill set to
                  tackle new challenges. With a strong foundation in programming
                  languages like JavaScript,Typescript, Python, C++, and Java, I
                  enjoy working on innovative projects and contributing to
                  open-source communities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Aditya Karmakar
                </CardTitle>
                <p className="text-gray-400">Full Stack Developer</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p>
                    <MailIcon className="inline mr-2" /> adkarmakar521@gmail.com
                  </p>
                  <p>
                    <PhoneIcon className="inline mr-2" /> 6296306334
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://github.com/aditya-krm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://linkedin.com/in/aditya-karmakar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Button className="w-full" asChild>
                  <Link
                    href={`https://drive.google.com/uc?export=download&id=${process.env.NEXT_PUBLIC_RESUME_ID}`}
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I'm currently pursuing my B.Tech in Computer Science with hands-on
              experience in building full-stack applications using the MERN
              stack. Some of my notable projects include a real-time chat
              system, a social media platform, and a role-based dashboard.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold">Front-end:</span>{" "}
                <span>React, Next.js, TypeScript, Tailwind CSS</span>
              </li>
              <li>
                <span className="font-bold">Back-end:</span>{" "}
                <span>Node.js, Express.js, Python</span>
              </li>
              <li>
                <span className="font-bold">Databases:</span>{" "}
                <span>MongoDB, MySQL</span>
              </li>
              <li>
                <span className="font-bold">Other:</span>{" "}
                <span>JWT, Socket.io, Redux Toolkit</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://devhub-post.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Devhub - Social Media Platform
                </Link>
              </h3>
              <p className="text-gray-400">Next.js, MongoDB, NextAuth</p>
              <p>
                A secure platform for developers to connect and share posts,
                with robust authentication.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/devhub-post"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://chat-app-0b1m.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Real-time Chat Application
                </Link>
              </h3>
              <p className="text-gray-400">MERN Stack, Socket.io</p>
              <p>
                A live chat system featuring real-time communication and user
                authentication.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://ai-summarizer-wine-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  AI Article Summarizer
                </Link>
              </h3>
              <p className="text-gray-400">React, Redux Toolkit, GPT-4</p>
              <p>
                A web app that summarizes articles using OpenAI GPT-4, built
                with React and TypeScript.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/ai--summarizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://role-based-dashboard.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Role-Based Dashboard
                </Link>
              </h3>
              <p className="text-gray-400">Next.js, JWT, MongoDB</p>
              <p>
                A role-based dashboard for managing users and their roles, with
                secure authentication.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/role-based-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://small-projects-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Small Web Applications
                </Link>
              </h3>
              <p className="text-gray-400">React, API Integration</p>
              <p>
                Collection of small-scale apps, including a currency converter,
                weather app, and more.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/Small-Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                <Link
                  href="https://www.npmjs.com/package/state-city-dropdown-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  State-City Dropdown NPM Package
                </Link>
              </h3>
              <p className="text-gray-400">JavaScript, NPM</p>
              <p>
                A customizable state-city dropdown component for India,
                published as an npm package.
              </p>
              <p>
                <Link
                  href="https://github.com/aditya-krm/state-city-dropdown-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>C++, Java</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Frameworks & Tools
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React & Next.js</li>
                  <li>Node.js & Express</li>
                  <li>Tailwind CSS & Bootstrap</li>
                  <li>Socket.io, JWT</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
