import Head from 'next/head';
import Image from "next/image";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import IconRow from '../components/social-icon-row/iconrow';

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>

      <Head>
        <title>Mustafa Chaudhry</title>

        <meta name="description" content="Computers yes mmmm"/>
        <meta name="keywords" content="mustafa, chaudhry, mustafa chaudhry, musty, musty260, british, england, english, derby, derbyshire, uk, united kingdom, designer, figma, photoshop, graphic design, graphic designer, graphic, illustrator, adobe, developer, design, coder, code, programmer, programming, html, css, js, javascript, ts, typescript, react, next, nexjs, vercel"/>
        <meta name="author" content="Mustafa Chaudhry"/>

        <meta property="og:url" content="https://musty.tech"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Mustafa Chaudhry"/>
        <meta property="og:description" content="Computers yes mmmm"/>
        <meta property="og:image" content="/og-image.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@musty260"/>
        <meta name="twitter:creator" content="@musty260"/>

        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet"/>
      </Head>

      <div 
        style={{ width:"97px", height:"226px", WebkitTapHighlightColor: "transparent" }}
        className="animate-gif md:hover:animate-pause-on-hover bg-light-bulb dark:animate-gif-dark md:dark:hover:animate-pause-on-hover-dark dark:bg-light-bulb-dark fixed right-1/2 md:right-64 transform md:transform-none translate-x-1/2 md:translate-x-0 cursor-pointer bg-no-repeat bg-center bg-cover scale-60 -top-45px md:top-0"
        onClick={() => setTheme( theme == "dark" ? "light" : "dark" )}
      />

      <div className="h-72 hidden md:block"/>

      <div className="font-title dark:text-white text-main-dark-gray text-9xl tracking-widest mx-auto hidden md:table">
        Musty
      </div>
      <div className="font-title dark:text-white text-main-dark-gray text-9xl tracking-widest fixed top-35% left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden scale-50">
        Musty
      </div>

      <div className="h-36 hidden md:block"/>

      <div className="md:flex justify-evenly px-96 hidden">
        <IconRow theme={theme}/>
      </div>
      <div className="flex justify-evenly px-96 md:hidden fixed top-57% left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-50">
        <IconRow theme={theme}/>
      </div>
      

      <div className="h-10 hidden md:block"/>

      <div className="font-body text-main-dark-gray dark:text-white mx-auto hidden md:table">
        Site under construction, please check back later :)
      </div>
      <div className="font-body text-main-dark-gray dark:text-white mx-auto fixed md:hidden text-center top-3/4 px-4">
        Site under construction, please check back later :)
      </div>

      <footer className="fixed right-2 bottom-1 w-full font-body text-main-dark-gray dark:text-white opacity-100 dark:opacity-60 text-xs text-right">
        Icons graciously provided by <a href="https://fontawesome.com/license" target="_blank" rel="noreferrer" className="underline">FontAwesome</a>
      </footer>
    </div>
  )
}
