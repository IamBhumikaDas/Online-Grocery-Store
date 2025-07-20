import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/NewsLetter'
import { motion } from 'framer-motion';

const Home = () => {
  return (
        <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 25 },
        },
        exit: { opacity: 0, y: -30 },
      }}
    >
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <Newsletter/>
      
    </div>
    </motion.div>
  )
}

export default Home
