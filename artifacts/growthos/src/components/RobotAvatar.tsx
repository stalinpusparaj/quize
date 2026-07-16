import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RobotAvatar = ({ message }: { message?: string }) => {
  return (
    <div className="fixed top-6 right-6 md:top-12 md:right-12 flex flex-col md:flex-row items-end md:items-start gap-4 z-50">
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            key={message}
            className="bg-card/80 border border-primary/30 p-4 rounded-2xl rounded-tr-none md:rounded-tr-2xl md:rounded-tl-none max-w-[240px] text-sm shadow-[0_0_20px_rgba(124,58,237,0.2)] text-primary-foreground backdrop-blur-xl order-1 md:order-2"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative order-2 md:order-1 self-end md:self-auto">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <div className="relative bg-card border border-primary/50 w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(124,58,237,0.4)]">
          🤖
        </div>
      </div>
    </div>
  );
};
