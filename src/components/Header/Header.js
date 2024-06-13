import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

// import { HashLink } from "react-router-hash-link";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import Button from "../UI/Button";

import logo from "../../assets/logo.svg";

const DropdownMenu = ({ title, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef();

  const openMenu = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const closeMenuDelayed = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton
        onMouseEnter={openMenu}
        onClick={openMenu}
        onMouseLeave={closeMenuDelayed}
      >
        {title} <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
      </MenuButton>
      <MenuList onMouseEnter={openMenu} onMouseLeave={closeMenuDelayed}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem>
              <Link to={item.path}>{item.label}</Link>
            </MenuItem>
            {index < menuItems.length - 1 && <MenuDivider />}
          </React.Fragment>
        ))}
      </MenuList>
    </Menu>
  );
};

const DropdownMenu2 = ({ title, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef();

  const openMenu = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const closeMenuDelayed = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton onMouseEnter={openMenu} onMouseLeave={closeMenuDelayed}>
        {title} <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
      </MenuButton>
      <MenuList onMouseEnter={openMenu} onMouseLeave={closeMenuDelayed}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Accordion allowToggle className="w-[20rem]">
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.label}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel className="w-full flex flex-col p-0 m-0">
                  {item.data.map((i, index) => (
                    <Link
                      key={`${i.label}_${index}`}
                      className="py-2 my-1 hover:bg-gray-100"
                      to={i.path}
                    >
                      {i.label}
                    </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </React.Fragment>
        ))}
      </MenuList>
    </Menu>
  );
};

// Maybe Useful

// const DropdownMenu = ({ title, menuItems }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const closeTimeoutRef = useRef();

//   const openMenu = () => {
//     clearTimeout(closeTimeoutRef.current);
//     setIsOpen(true);
//   };

//   const closeMenuDelayed = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setIsOpen(false);
//     }, 300);
//   };

//   const renderMenuItem = (item, index) => {
//     if (item.data) {
//       return (
//         <React.Fragment key={index}>
//           <MenuItem>
//             <DropdownMenu title={item.label} menuItems={item.data} />
//           </MenuItem>
//           {index < menuItems.length - 1 && <MenuDivider />}
//         </React.Fragment>
//       );
//     } else {
//       return (
//         <React.Fragment key={index}>
//           <MenuItem>
//             <Link to={item.path}>{item.label}</Link>
//           </MenuItem>
//           {index < menuItems.length - 1 && <MenuDivider />}
//         </React.Fragment>
//       );
//     }
//   };

//   return (
//     <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
//       <MenuButton onMouseEnter={openMenu} onMouseLeave={closeMenuDelayed}>
//         {title} <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
//       </MenuButton>
//       <MenuList onMouseEnter={openMenu} onMouseLeave={closeMenuDelayed}>
//         {menuItems.map(renderMenuItem)}
//       </MenuList>
//     </Menu>
//   );
// };

const servicesMenuItems = [
  { label: "System Administrator Services", path: "/services/system-admin" },
  { label: "Website & App Development", path: "/services/web-app" },
  { label: "Email Services", path: "/services/email" },
  { label: "IT Help Desk Management", path: "/services/it-helpdesk" },
  { label: "Network & Security Services", path: "/services/network" },
  // { label: "Windows Server Management", path: "/services/windows-server" },
  { label: "Server Management", path: "/services/server" },
  { label: "Desktop & Laptop Management", path: "/services/desktop" },
  {
    label: "Managed AMC of IT Services",
    path: "/services/contract",
  },
];

const productsMenuItems = [
  {
    label: "Education Solutions",
    data: [
      {
        label: "Moodle LMS",
        path: "/product/LMS",
      },
      {
        label: "On-screen marking software",
        path: "/product/screen-marking",
      },
      {
        label: " Typing Software",
        path: "/product/typing",
      },
      {
        label: "Roombr",
        path: "/product/room",
      },
      {
        label: "Cyber Lab",
        path: "/product/cyber",
      },
    ],
  },
  {
    label: "Business Solutions",
    data: [
      {
        label: "Artificial Intelligence",
        path: "/product/AI",
      },
      {
        label: "Contact Center",
        path: "/product/contact",
      },
      {
        label: "Event Management Software",
        path: "/product/event",
      },
      {
        label: "Recruitment Software",
        path: "/product/recruitment",
      },
      {
        label: "Video Conferencing System",
        path: "/product/video",
      },
    ],
  },
];
const solutionsMenuItems = [
  {
    label: "Information Security Solutions",
    data: [
      {
        label: "Next Generation Firewall",
        path: "/solutions/next-gen-firewall",
      },
      { label: "Endpoint Security", path: "/solutions/endpoint" },
      {
        label: "Data backup Disaster Recovery",
        path: "/solutions/data-backup",
      },
    ],
  },
  {
    label: "Networking Solutions",
    data: [
      {
        label: "Structured Cabling",
        path: "/solutions/structured-cabeling",
      },
      { label: "LAN/WAN Design", path: "/solutions/wan-design" },
      { label: "SD - WAN", path: "/solutions/sd-wan" },
    ],
  },
  {
    label: "Audio Video (AV) Solutions",
    data: [
      {
        label: "Digital classrooms",
        path: "/solutions/digital-classroom",
      },
      { label: "AV Designs", path: "/solutions/av-design" },
      { label: "Live Streaming Solutions", path: "/solutions/livestream" },
    ],
  },
];

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [hamBurgerAnimation, setHumBurgerAnimation] = useState({
    upper:
      "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
    middle:
      "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
    lower:
      "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
  });
  const [showMenuData, setShowMenuData] = useState(
    "w-[100vw] h-0 absolute z-20 bg-neutral-700 opacity-90 top-0 left-0 transition-all ease-in-out duration-300"
  );
  const [hideNavLinks, setHideNavLinks] = useState("hidden");

  const clickHandler = () => {
    if (!hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-quaternary rotate-[45deg] translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-transparent rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-quaternary rotate-[-45deg] -translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-[100vw] h-auto absolute py-2  flex flex-col items-center z-20 bg-white top-0 left-0 right-0 transition-all ease-in-out duration-300"
      );
      setHideNavLinks("block");
      setHamOpen(true);
    } else if (hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-quaternary rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-[100vw] h-0 absolute z-20 bg-neutral-700 opacity-90 top-0 left-0 transition-all ease-in-out duration-300"
      );
      setHideNavLinks("hidden");
      setHamOpen(false);
    }
  };

  return (
    <>
      <section
        className={`z-20 font-primary font-semibold text-quaternary sticky top-0 bg-white shadow hover:shadow-lg`}
      >
        <div className="container flex w-full justify-between py-2 lg:flex-row">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" draggable={false} />
          </Link>
          <div className="hidden lg:flex lg:items-center">
            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <Link to="/">Home</Link>
            </div>
            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <Link to="/about">About Us</Link>
            </div>

            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <DropdownMenu title="Services" menuItems={servicesMenuItems} />
            </div>

            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <DropdownMenu2 title="Solutions" menuItems={solutionsMenuItems} />
            </div>

            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <DropdownMenu2 title="Products" menuItems={productsMenuItems} />
            </div>

            <div className="mx-2 cursor-pointer px-2 font-syne text-quaternary transition-all duration-300 ease-in-out hover:underline">
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
          <div
            onClick={clickHandler}
            className="relative z-30 flex cursor-pointer flex-col p-4 lg:hidden"
          >
            <div className={hamBurgerAnimation.upper}></div>
            <div className={hamBurgerAnimation.middle}></div>
            <div className={hamBurgerAnimation.lower}></div>
          </div>
        </div>

        <nav className={showMenuData}>
          <ul className={hideNavLinks}>
            <li className="my-4 text-center">
              <Link to="/">Home</Link>
            </li>
            <li className="my-2 text-center">
              <Link to="/about">About Us</Link>
            </li>
            <li className="my-2 text-center">
              <Menu>
                <MenuButton
                  p="10px"
                  transition="all 0.2s"
                  borderRadius="md"
                  color={"#015AAA"}
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "gray.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  Services <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/services/system-admin">
                      System Administrator Services
                    </Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/web-app">
                      Website & App Development
                    </Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/email">Email Services</Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/it-helpdesk">
                      IT Help Desk Management
                    </Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/network">
                      Network and Security Services
                    </Link>
                  </MenuItem>
                  <MenuDivider />

                  {/* <MenuItem>
                    <Link to="/services/windows-server">
                      Windows Server Management
                    </Link>
                  </MenuItem>
                  <MenuDivider /> */}

                  <MenuItem>
                    <Link to="/services/desktop">
                      Desktop & Laptop Management
                    </Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/server">Server Management</Link>
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/services/contract">
                      Managed AMC of IT Services
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>

            {/* <li className="my-2 text-center">
              <Menu>
                <MenuButton
                  p="10px"
                  transition="all 0.2s"
                  borderRadius="md"
                  color={"#015AAA"}
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "gray.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  Products <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
                </MenuButton>
                <MenuList>
                  {productsMenuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <MenuItem>
                        <Link to={item.path}>{item.label}</Link>
                      </MenuItem>
                      <MenuDivider />
                    </React.Fragment>
                  ))}
                </MenuList>
              </Menu>
            </li> */}

            <li className="my-2 text-center">
              <Menu>
                <MenuButton
                  p="10px"
                  transition="all 0.2s"
                  borderRadius="md"
                  color={"#015AAA"}
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "gray.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  Products <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
                </MenuButton>
                <MenuList>
                  {productsMenuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <Accordion allowToggle className="w-[20rem]">
                        <AccordionItem>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              {item.label}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>

                          <AccordionPanel className="w-full flex flex-col p-0 m-0">
                            {item.data.map((i, index) => (
                              <Link
                                key={`${i.label}_${index}`}
                                className="py-2 my-1 hover:bg-gray-100"
                                to={i.path}
                              >
                                {i.label}
                              </Link>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </React.Fragment>
                  ))}
                </MenuList>
              </Menu>
            </li>

            <li className="my-2 text-center">
              <Menu>
                <MenuButton
                  p="10px"
                  transition="all 0.2s"
                  borderRadius="md"
                  color={"#015AAA"}
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "gray.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  Solutions <ChevronDownIcon color={"#015AAA"} w={4} h={4} />
                </MenuButton>
                <MenuList>
                  {solutionsMenuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <Accordion allowToggle className="w-[20rem]">
                        <AccordionItem>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              {item.label}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>

                          <AccordionPanel className="w-full flex flex-col p-0 m-0">
                            {item.data.map((i, index) => (
                              <Link
                                key={`${i.label}_${index}`}
                                className="py-2 my-1 hover:bg-gray-100"
                                to={i.path}
                              >
                                {i.label}
                              </Link>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </React.Fragment>
                  ))}
                </MenuList>
              </Menu>
            </li>

            <li className="my-2 text-center">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="my-2 text-center">
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
