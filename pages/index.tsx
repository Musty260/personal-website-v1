import Head from 'next/head';

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import IconRow from '../components/social-icon-row/iconrow';

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Function "createWebring()" below modified from https://webring.hackclub.com/public/embed.min.js - Original file on GitHub: https://github.com/hackclub/webring/blob/master/public/embed.js
  // All credit and rights for this code snippet belong to Hack Club and their contributors
  // Specifically, Googol (https://github.com/googol88) and Steven Conaway (https://github.com/SConaway) were the two contributors listed for this file (embed.js/embed.min.js)
  function createWebring() {
    var h=document.getElementById("webring-wrapper"),g=document.createElement("style");
    g.innerHTML=".webring-anchor{font-size:24px;color:rgba(132,146,166,.8);text-decoration:none;transition:color .5s}.webring-anchor:hover{color:#8492a6;text-decoration:none}.webring-logo{background-repeat:no-repeat;background-position:top left;background-size:contain;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:inline-block;width:36px;height:36px;margin:0 4px;vertical-align:middle}";
    if (h === null) {} else {h.appendChild(g)};
    var k=document.location.href.toLowerCase(),f=0,c=0,d=0,l=document.getElementsByTagName("a").namedItem("previousBtn"),m=document.getElementsByTagName("a").namedItem("nextBtn"),b=new XMLHttpRequest;b.open("GET","https://webring.hackclub.com/public/members.json");
    b.responseType="json";
    b.send();
    b.onload=function() {
      for(var a=b.response,e=0;e<a.length;e++)
          if(k==a[e].url.toLowerCase())
              {f=e;break}c=f-1;-1==c&&(c=a.length-1);
      if (l === null) {} else {l.href=a[c].url};
      d=f+1;
      d==a.length&&(d=0);
      if (m === null) {} else {m.href=a[d].url};
    }
  }
  // :)

  useEffect(() => createWebring())

  return (
    <div className={(theme == "light" ? "bg-white" : "bg-main-dark-gray") + " " + "h-screen w-screen overflow-x-hidden relative"}>

      <Head>
        <title>Mustafa Chaudhry</title>

        <meta name="description" content="Computers yes mmmm"/>
        <meta name="keywords" content="mustafa, chaudhry, mustafa chaudhry, musty, musty260, british, england, english, derby, derbyshire, uk, united kingdom, designer, figma, photoshop, graphic design, graphic designer, graphic, illustrator, adobe, developer, design, coder, code, awooga, programmer, programming, html, css, js, javascript, ts, typescript, react, next, nexjs, vercel"/>
        <meta name="author" content="Mustafa Chaudhry"/>

        <meta property="og:url" content="https://www.musty.tech/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Mustafa Chaudhry"/>
        <meta property="og:description" content="Computers yes mmmm"/>
        <meta property="og:image" content="/og-image.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@musty260"/>
        <meta name="twitter:creator" content="@musty260"/>
      </Head>

      <div 
        style={{ width:"97px", height:"226px", WebkitTapHighlightColor: "transparent" }}
        className={(theme == "light" ? "animate-gif md:hover:animate-pause-on-hover bg-light-bulb" : "animate-gif-dark md:hover:animate-pause-on-hover-dark bg-light-bulb-dark") + " " + "fixed right-1/2 md:right-64 transform md:transform-none translate-x-1/2 md:translate-x-0 cursor-pointer bg-no-repeat bg-center bg-cover scale-60 -top-45px md:top-0"}
        onClick={() => setTheme( theme == "dark" ? "light" : "dark" )}
      />

      <div className="h-72 hidden md:block"/>

      <div className={(theme == "light" ? "bg-title animate-title" : "bg-title-dark animate-title-dark") + " " + "h-title md:h-title-desktop w-5/6 mx-auto bg-no-repeat bg-center bg-contain fixed md:static left-1/2 top-1/3 transform md:transform-none -translate-x-1/2 -translate-y-1/2"}/>

      <div className="h-36 hidden md:block"/>

      <div className="flex justify-evenly px-96 fixed md:static top-57% left-1/2 transform md:transform-none -translate-x-1/2 -translate-y-1/2 scale-50">
        <IconRow theme={theme}/>
      </div>
      
      <div className="h-10 hidden md:block"/>

      <div className={(theme == "light" ? "text-main-dark-gray" : "text-white") + " " + "font-body mx-auto fixed md:static table text-center top-3/4 px-4"}>
        Site under construction, please check back later :)
      </div>

      <div id="webring-wrapper" className="fixed bottom-3 md:bottom-7 left-4 md:left-6 transform scale-110 md:scale-125">
        <a href="https://webring.hackclub.com/" id="previousBtn" className="webring-anchor" title="Previous">‹</a>
        <a href="https://webring.hackclub.com/" className={(theme == "light" ? "bg-webring" : "bg-webring-dark")+ " " + "webring-logo"} title="Hack Club Webring"></a>
        <a href="https://webring.hackclub.com/" id="nextBtn" className="webring-anchor" title="Next">›</a>
      </div>

      <footer className={(theme == "light" ? "text-main-dark-gray opacity-100" : "text-white opacity-60") + " " + "fixed right-2 bottom-1 w-full font-body text-xxs md:text-xs text-right"}>
        Icons graciously provided by <a href="https://fontawesome.com/license" target="_blank" rel="noreferrer" className="underline">FontAwesome</a>
      </footer>
      
    </div>
  )
}
