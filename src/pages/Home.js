import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pt-8 pb-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-2"
          variants={titleVariants}
        >
          Home
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <motion.div
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02, 
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Welcome</h3>
              <p className="text-white/70">Your dashboard awaits</p>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed">
            Explore your personalized home experience with beautiful glassmorphism design and smooth animations.
          </p>
        </motion.div>

        <motion.div
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02, 
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
              <p className="text-white/70">Get things done faster</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-white text-sm font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Action 1
            </motion.button>
            <motion.button
              className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-white text-sm font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Action 2
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02, 
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Statistics</h3>
              <p className="text-white/70">Your activity overview</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Today's Activity</span>
              <span className="text-white font-semibold">85%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="fixed bottom-24 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg backdrop-blur-lg border border-white/20 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;