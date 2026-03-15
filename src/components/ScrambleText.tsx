"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  trigger: boolean;
  duration?: number;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?";

export default function ScrambleText({ text, trigger, duration = 600, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    const startTime = Date.now();
    
    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            // Scramble characters based on progress
            if (i / text.length < progress) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        
        setDisplayText(scrambled);
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        isScrambling.current = false;
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [text, duration]);

  useEffect(() => {
    if (trigger) {
      scramble();
    } else {
      // Small delay to prevent immediate flick when unhovering multiple times
      setDisplayText(text);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      isScrambling.current = false;
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, scramble, text]);

  return <span className={className}>{displayText}</span>;
}
