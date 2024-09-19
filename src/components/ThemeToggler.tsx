'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

export function SelectTheme({ text }: { text?: boolean }) {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {text === false ? (
        <div
          className={`flex cursor-pointer items-center gap-2 rounded-lg p-3 text-center transition-all duration-300 hover:text-blue-500`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <ThemeIcon className="size-6" />
        </div>
      ) : (
        <div
          className={`flex cursor-pointer items-center gap-2 rounded-lg text-center transition-all duration-300 hover:bg-blue-600/5 hover:text-blue-500`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <ThemeIcon className="size-4" />
          <span className="text-base">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </span>
        </div>
      )}
    </>
  );
}

function ThemeIcon({ className = '' }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <AnimatePresence>
      {theme === 'light' ? (
        <motion.div
          initial={{ opacity: 0, rotate: '0deg' }}
          animate={{ opacity: 1, rotate: '360deg' }}
          exit={{ opacity: 0, rotate: '720deg' }}
          transition={{ duration: 0.2 }}
        >
          <Sun className={`${className}`} />
        </motion.div>
      ) : (
        <motion.div transition={{ duration: 0.2 }}>
          <Moon className={`${className}`} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
