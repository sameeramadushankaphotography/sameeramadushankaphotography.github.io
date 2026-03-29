import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
  cursorClassName?: string;
  loop?: boolean;
}

const TypeWriter = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = "",
  cursorClassName = "",
  loop = true,
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(waitTimer);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(deleteTimer);
    }

    if (displayText === currentText) {
      if (loop || textIndex < texts.length - 1) {
        setIsWaiting(true);
      }
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(typeTimer);
  }, [displayText, textIndex, isDeleting, isWaiting, texts, speed, deleteSpeed, delayBetween, loop]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle ${cursorClassName}`}
      />
    </span>
  );
};

export default TypeWriter;
