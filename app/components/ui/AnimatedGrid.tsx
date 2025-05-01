'use client'
import { motion } from 'motion/react';

const TechStackAnimation = () => {
  const items = [
    { id: 1, text: "Nexus" },
    { id: 2, text: "Next.Js" },
    { id: 3, text: "Redux Libraries" },
    { id: 4, text: "TypeScript" },
    { id: 5, text: "Motion.dev" },
    { id: 6, text: "TailwindCss" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      {/* Main Nexus title */}
      <motion.div
        className="text-4xl font-bold mb-8"
        animate={{
          opacity: [0, 1, 0],
          y: [-100, 0, 100],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Nexus
      </motion.div>

      {/* Animated tech items */}
      <div className="grid grid-cols-2 gap-8 relative">
        {items.slice(1).map((item, index) => (
          <motion.div
            key={item.id}
            className={`text-2xl font-semibold ${
              index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
            }`}
            animate={{
              opacity: [0, 1, 0],
              y: index % 2 === 0 ? ["100%", "0%", "-100%"] : ["-100%", "0%", "100%"],
            }}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackAnimation;