import React from 'react';
import { motion } from 'framer-motion';

export const ProcessingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = React.useState(0);
  const steps = [
    "Analyzing inputs...",
    "Scanning market data...",
    "Correlating growth patterns...",
    "Generating Growth DNA..."
  ];

  React.useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setStep(currentStep);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <div className="relative w-48 h-48 mb-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-4 rounded-full border-2 border-secondary/20" />
        <div className="absolute inset-4 rounded-full border-b-2 border-secondary animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          🧠
        </div>
        
        {/* Radar sweep */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="w-[50%] h-[50%] bg-gradient-to-tr from-transparent via-primary/40 to-primary origin-bottom-right animate-spin" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Building your Growth DNA...
      </h2>

      <div className="space-y-4 text-left w-full max-w-xs">
        {steps.map((s, idx) => (
          <motion.div 
            key={s}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: step >= idx ? 1 : 0.3, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full ${step > idx ? 'bg-secondary' : step === idx ? 'bg-primary animate-pulse' : 'bg-muted'}`} />
            <span className={step >= idx ? 'text-foreground' : 'text-muted-foreground'}>{s}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
