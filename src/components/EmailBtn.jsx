import React, { useState } from 'react'
import { motion } from 'motion/react'
const EmailBtn = () => {
  const [copied , setCopied] = useState(false);
  const email = "githarshikesh@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

    return (
    <motion.button 
    onClick={copyToClipboard}
    whileTap={{ scale: 1.35 }}
    whileHove={{y:-5}}
    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
        {
        copied ?(<motion.p 
            className="flex items-center justify-center gap-2"
            initial={{opacity:0, y:-10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:10}}
            transition={{duration:0.1, ease:"easeInOut"}}
            whileHover={{scale:1.05}}
            >
            <img src="assets/copy-done.svg" className='w-5' alt="copyIcon" 
            />
            Email Copied!
        </motion.p>
        ):(<motion.p 
            className="flex items-center justify-center gap-2">
            <img src="assets/copy.svg" className="w-5" alt="copyicon" />
            Copy Email Address
        </motion.p>)}
    </motion.button>
  )
}

export default EmailBtn