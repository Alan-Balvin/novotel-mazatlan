import { motion } from "motion/react";
import  { RefObject } from "react";

interface CartProps {
    text?:string;
    style?: React.CSSProperties;
    image?:string;
    containerRef?: RefObject<HTMLDivElement | null>;
}

const Cart = ({ style, text, image, containerRef }: CartProps) => {
  return image && !text ? (
  <motion.img 
  className="absolute w-15 cursor-grab" 
  src={image} 
  style={style}
  whileHover={{scale: 1.20}}
  drag
  dragConstraints={containerRef}
  dragElastic={1}/>) : (
    <motion.div 
    className="absolute px-3 py-1 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm cursor-grab"
    style={style}
    whileHover={{scale:1.05}}
    drag
    dragConstraints={containerRef}
    dragElastic={1}
    >
      {text}
    </motion.div>
  )
}

export default Cart
