import Head from 'next/head';
import Image from "next/image";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import Email from "../components/social-icons/email";
import GitHub from "../components/social-icons/github";
import LinkedIn from "../components/social-icons/linkedin";
import Twitter from "../components/social-icons/twitter";
import Discord from "../components/social-icons/discord";

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="w-full h-full">

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet"/>
      </Head>

      <div 
        style={{ width:"97px", height:"226px" }}
        className="animate-gif hover:animate-pause-on-hover bg-light-bulb dark:animate-gif-dark dark:hover:animate-pause-on-hover-dark dark:bg-light-bulb-dark fixed right-64 cursor-pointer bg-no-repeat bg-center bg-cover"
        onClick={() => setTheme( theme == "dark" ? "light" : "dark" )}
      />

      <div className="h-72"/>

      <div className="font-title dark:text-white text-main-dark-gray text-9xl tracking-widest table mx-auto">
        Musty
      </div>

      <div className="h-36"/>

      <div className="flex justify-evenly px-96">
        <a href="mailto:mustyco260@gmail.com" target="_blank" rel="noreferrer">
          <Email theme={theme}/>
        </a>
        <a href="https://github.com/musty260/" target="_blank" rel="noreferrer">
          <GitHub theme={theme}/>
        </a>
        <a href="https://www.linkedin.com/in/mustafa-chaudhry/" target="_blank" rel="noreferrer">
          <LinkedIn theme={theme}/>
        </a>
        <a href="https://twitter.com/Musty260" target="_blank" rel="noreferrer">
          <Twitter theme={theme}/>
        </a>
      </div>

      <div className="h-10"/>

      <div className="font-body text-main-dark-gray dark:text-white mx-auto table">
        Site under construction, please check back later :)
      </div>

      <footer className="fixed right-2 bottom-1 w-full font-body text-main-dark-gray dark:text-white opacity-100 dark:opacity-60 text-xs text-right">
        Icons graciously provided by <a href="https://fontawesome.com/license" target="_blank" rel="noreferrer" className="underline">FontAwesome</a>
      </footer>
    </div>
  )
}
