import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Crds({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.2} dragTransition={{bounceStiffness:400, bounceDamping:15}} className='relative leading-tight  w-60 h-72 bg-zinc-900/80 rounded-3xl text-slate-300 p-5 overflow-hidden '>
        <FaRegFileAlt  />
        <p className='mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full '>
            <div className='flex items-center justify-between py-4 px-9'>
                <h5>{data.filesize}</h5>
                {!data.close ? (<IoIosClose/>):
                <FaCloudDownloadAlt/>
                }
            </div>
            {
                data.tag.isOpen ? (<div className='tag w-full bg-green-700 py-4 flex justify-center items-center'>
                <h3 className='text-lg font-semibold'>Downlaod Now</h3>
            </div>): null 
            }
            
        </div>
    </motion.div>
  )
}

export default Crds