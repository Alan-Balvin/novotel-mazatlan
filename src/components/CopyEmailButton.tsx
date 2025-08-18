
import { useState } from "react";
import { motion } from "motion/react";


const CopyEmailButton = () => {
    const[copyEmail, setCopyEmail ] =useState(false)
    const email = "copy to email address"
    const copyToClipBoard = ()=>{
        navigator.clipboard.writeText(email)
        setCopyEmail(true);
        setTimeout(()=>{
            setCopyEmail(false)
        }, 2000)

    }

  return (
    <motion.button className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden" onClick={copyToClipBoard}>
        { copyEmail ? (
            <motion.p className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y:-10}}
                        transition={{duration:0.1, ease: "easeInOut"}}
        >
          <img src="assets/copy-done.svg" className="w-5" alt="copy icon" />  
            Email has been copied!</motion.p>
        ) : (
        <motion.p className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration:0.1}}>
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Copy email address</motion.p>)}
    </motion.button>
  )
}

export default CopyEmailButton
