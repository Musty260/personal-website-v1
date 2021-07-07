import { useEffect, useState } from "react";

import Email from "../social-icons/email";
import GitHub from "../social-icons/github";
import LinkedIn from "../social-icons/linkedin";
import Twitter from "../social-icons/twitter";

type IconProps = {
    theme: string | undefined
}

export default function IconRow({theme}: IconProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null
    
    return (
        <>
            <a href="mailto:mustyco260@gmail.com" target="_blank" rel="noreferrer" style={{ WebkitTapHighlightColor: "transparent" }} className="odd:mt-24 md:odd:mt-0">
                <Email theme={theme}/>
            </a>
            <a href="https://github.com/musty260/" target="_blank" rel="noreferrer" style={{ WebkitTapHighlightColor: "transparent" }} className="odd:mt-24 md:odd:mt-0">
                <GitHub theme={theme}/>
            </a>
            <a href="https://www.linkedin.com/in/mustafa-chaudhry/" target="_blank" rel="noreferrer" style={{ WebkitTapHighlightColor: "transparent" }} className="odd:mt-24 md:odd:mt-0">
                <LinkedIn theme={theme}/>
            </a>
            {/**
            <a href="https://twitter.com/Musty260" target="_blank" rel="noreferrer" style={{ WebkitTapHighlightColor: "transparent" }} className="even:mt-24 md:even:mt-0">
                <Twitter theme={theme}/>
            </a>
            */}
        </>
    )
}