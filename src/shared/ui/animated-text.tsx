import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cities = ["Москва", "New York", "東京都"];

const AnimatedText = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
