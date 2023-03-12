import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaWallet } from "react-icons/fa";
import { MdKeyboardArrowUp, MdLockPerson, MdInbox, MdDashboardCustomize, MdSpaceDashboard } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { HiChevronUpDown } from "react-icons/hi2";
import {
  RiListSettingsFill, RiFolderUploadFill,
  RiMenuFoldFill, RiMenuUnfoldFill,
  RiLoader3Fill, RiFileSearchFill
} from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import "../../App.css"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
    icon2: <MdKeyboardArrowUp />,
  },
  {
    path: "/inbox",
    name: "inbox",
    icon: <MdInbox />,
    icon2: 4,
  },
  {
    path: "/drivefiles",
    name: "Drive Files",
    icon: <RiFolderUploadFill />,
    icon2: 435,
  },
  {
    path: "/boards",
    name: "Boards",
    icon: <MdDashboardCustomize />,
    icon2: 5,
  },
  {
    path: "/updates",
    name: "Updates",
    icon: <RiLoader3Fill />,
    icon2: '',
  },
  {
    path: "/analytics",
    name: "Boards",
    icon: <BiAnalyse />,
    icon2: 2,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/crm",
    name: "CRM Dashboard",
    icon: <MdSpaceDashboard />,
    icon2: 2,
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    icon: <BsFillTagFill />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/crypto",
    name: "Cryptocurrency",
    icon: <FaWallet />,
    icon2: "",
  },
  {
    path: "/project",
    name: "Projects",
    icon: <MdLockPerson />,
    icon2: "",
  },
  {
    path: "/nft",
    name: "NFT Marketplace",
    icon: <RiFileSearchFill />,
    icon2: "",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <RiListSettingsFill />,
    icon2: 2,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >

          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Dashboard
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              {
                isOpen ?
                  <RiMenuFoldFill
                    size={25}
                    fontWeight={900}
                    onClick={toggle} /> :
                  <RiMenuUnfoldFill
                    size={30}
                    fontWeight={900}
                    onClick={toggle} />
              }
              {/* <FaBars onClick={toggle} /> */}
            </div>
          </div>


          <div className="menuAvatar">
            <div className="menuAvatar_icon">
              <img className="menuAvatarImg" src="https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75" alt="avatar" />
            </div>
            <div>

              <AnimatePresence>
                {isOpen && (
                  <div className="menuAvatarTagline">
                    <b>Lokesh Kumar</b>
                    <p>Developer</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {isOpen && (
                <HiChevronUpDown fontWeight={900} size={25} />
              )}
            </AnimatePresence>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <Fade cascade duration={1000} delay={500}>

                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  </Fade>
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
