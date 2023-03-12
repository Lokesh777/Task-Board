import "./Popup.css";
import { useState } from "react";
import { motion } from "framer-motion";
import AvatarStatus from "../Avatar/Avatar";
import { Fade } from "react-awesome-reveal";

const avatarNotifications = [
  {
    imageSrc: "https://bit.ly/ryan-florence",
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    notificationCount: 2,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/kent-c-dodds",
    // notificationCount: 12,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/prosper-baba",
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    notificationCount: 7,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/code-beast",
    isOnline: false,
  }, {
    imageSrc: "https://bit.ly/kent-c-dodds",
    // notificationCount: 12,
    isOnline: false,
  },
  
  {
    imageSrc: "https://bit.ly/code-beast",
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    notificationCount: 1,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/ryan-florence",
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    notificationCount: 20,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/kent-c-dodds",
    // notificationCount: 12,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/prosper-baba",
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/code-beast",
    isOnline: false,
  },

  {
    imageSrc: "https://bit.ly/code-beast",
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/ryan-florence",
    notificationCount: 8,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    // notificationCount: 2,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/kent-c-dodds",
    notificationCount: 5,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/prosper-baba",
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/code-beast",
    notificationCount: 12,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/kent-c-dodds",
    // notificationCount: 12,
    isOnline: false,
  },
  {
    imageSrc: "https://bit.ly/prosper-baba",
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/sage-adebayo",
    notificationCount: 7,
    isOnline: true,
  },
  {
    imageSrc: "https://bit.ly/code-beast",
    isOnline: false,
  },
]

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        className="menuBtn"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Alert
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >{
          avatarNotifications?.map((ele) =>
            <motion.li variants={itemVariants}>
              <Fade duration={1000} damping={100} delay={500}>

                <AvatarStatus
                  imageSrc={ele.imageSrc}
                  notificationCount={ele.notificationCount}
                  isOnline={ele.isOnline}
                />
              </Fade>
            </motion.li>
          )
        }
      </motion.ul>
    </motion.nav>
  );
}
