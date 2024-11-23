import './intro.css';
import ribbon from './ribbon.png';
import { motion } from "framer-motion";

function Introduction(){

    return(
        <div className="flex flex-col intro h-svh border font-itim">
            <div className='flex flex-col my-auto'>
                <div className='flex w-[800px] mx-auto my-10'>
                    <motion.img className='h-48 -rotate-12' 
                                src={ribbon}
                                initial={{ opacity: 0, y: 50 }} 
                                animate={{ opacity: 1, y: 0 }}  
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                    <motion.h1 className='mx-auto  text-[60px] font-bold text-center'
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 50 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                >Welcome to our website</motion.h1>
                    <motion.img className='h-48 -rotate-12' 
                                src={ribbon}
                                initial={{ opacity: 0, y: 50 }} 
                                animate={{ opacity: 1, y: 0 }}  
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                </div>
                <p className='text-center'> We offer you good items.</p>
                <button className='bg-[#fc7461] w-38 text-xl py-2 my-10 px-6 font-bold text-[#fdf0e5] mx-auto rounded'>View Products</button>
            </div>
            

        </div>
    )
}

export default Introduction