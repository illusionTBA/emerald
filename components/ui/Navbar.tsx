import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useDisclosure, Text, Button, Spinner } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Tooltip,
  Select,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  AiOutlineReload as Reload,
  AiOutlineTool as Devtools,
} from "react-icons/ai";
import { BsBookmark as Bookmark } from "react-icons/bs";
import { MdExitToApp as Exit } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import { xor } from "../utils";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const DynamicSearchbox = dynamic(() => import("../proxy/Searchbox"), {
  suspense: true,
});
import Router from "next/router";
interface App {
  title: string;
  icon: string | React.ReactNode;
  source: string;
}

const Navbar: NextPage<any> = (props: any) => {
  const isFrame = props.isFrame;
  const iref = props.iref;
  const [apps, setApps] = useState<any[]>([]);
  useEffect(() => {
    const asyncfetch = async () => {
      await fetch("/api/apps/")
        .then((res) => res.json())
        .then((data) => setApps(data));
    };

    asyncfetch();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isAppOpen,
    onOpen: onAppOpen,
    onClose: onAppClose,
  } = useDisclosure();
  const { isOpen: isNavOpen, onToggle: onNavToggle } = useDisclosure();
  const [title, setTitle] = useState();
  if (isFrame) {
    return (
      <>
        <div className="flex relative top-0 bg-primary-400 h-16 w-full rounded-b-lg justify-center items-center md:hidden">
          <div className="flex items-center m-2 w-full h-full justify-between">
            <div className="flex items-center justify-center flex-row space-x-6">
              <Image
                src={"/images/emerald.png"}
                alt="emerald"
                width={50}
                height={50}
                className="m-5"
              />
              <Text fontSize="3xl" className="flex text-primary-100">
                {title ? `${title}` : `Emerald`}
              </Text>
            </div>
            <Suspense fallback={<Spinner />}>
              <DynamicSearchbox />
            </Suspense>
            <div className="space-x-3 flex flex-row mr-5">
              <Tooltip
                hasArrow
                label={"Soon"}
                bg="base.300"
                color={"base.100"}
                placement="bottom"
              >
                <IconButton
                  aria-label="Reload page"
                  colorScheme={"base"}
                  textColor={"base.400"}
                  fontSize={"2xl"}
                  icon={<Bookmark />}
                />
              </Tooltip>
              <Tooltip
                hasArrow
                label={"Soon"}
                bg="base.300"
                color={"base.100"}
                placement="bottom"
              >
                <IconButton
                  aria-label="Open a chrome like devtool menu"
                  colorScheme={"base"}
                  textColor={"base.400"}
                  fontSize={"2xl"}
                  icon={<Devtools />}
                />
              </Tooltip>
              <Tooltip
                hasArrow
                label={"Soon"}
                bg="base.300"
                color={"base.100"}
                placement="bottom"
              >
                <IconButton
                  aria-label="Reload page"
                  colorScheme={"base"}
                  textColor={"base.400"}
                  fontSize={"2xl"}
                  icon={<Reload />}
                />
              </Tooltip>
              <Tooltip
                hasArrow
                label={"Exit"}
                bg="base.300"
                color={"base.100"}
                placement="bottom"
              >
                <IconButton
                  aria-label="Exit"
                  colorScheme={"base"}
                  fontSize={"2xl"}
                  icon={<Exit />}
                  onClick={() => {
                    Router.push("/");
                  }}
                />
              </Tooltip>
              {/* 
                  browser control buttons
                  reload, exit, quick proxy change etc
            */}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <motion.div
        className="flex fixed top-0 bg-primary-400 h-20 w-7/12 rounded-b-lg justify-center items-center md:hidden"
        exit={{
          scale: 1,
        }}
        transition={{ type: "linear" }}
      >
        <div className="flex items-center m-2 w-full h-full justify-between">
          <div className="flex items-center justify-center flex-row space-x-6">
            <Image
              src={"/images/emerald.png"}
              alt="emerald"
              width={50}
              height={50}
              className="m-5"
            />
            <Text fontSize="5xl" className="flex text-primary-100">
              Emerald
            </Text>
          </div>

          <div className="space-x-3 flex flex-row">
            {/* <Button
              colorScheme={"whatsapp"}
              variant="outline"
              leftIcon={<GiConsoleController />}
              onClick={() => Router.push("/games")}
            >
              Games
            </Button> */}
            <Button
              colorScheme={"twitter"}
              variant="outline"
              leftIcon={<IoIosApps />}
              onClick={onAppOpen}
            >
              Apps
            </Button>
            <Tooltip label={"soon"} placement={"bottom"}>
              <Button
                colorScheme={"base"}
                variant="outline"
                leftIcon={<BsFillPeopleFill />}
              >
                Theater
              </Button>
            </Tooltip>
            <Tooltip label={"soon"} placement={"bottom"}>
              <Button
                colorScheme={"base"}
                variant="outline"
                leftIcon={<FaCog />}
              >
                Settings
              </Button>
            </Tooltip>
          </div>
        </div>
      </motion.div>
      {/* App drawer */}
      <Drawer onClose={onAppClose} isOpen={isAppOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#354f52"} textColor={"base.100"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize={"4xl"}>Your Apps</Text>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex space-x-4 flex-wrap">
              {Array.isArray(apps)
                ? apps.map<any>((app: App, i) => {
                    return (
                      <motion.div
                        key={i}
                        whileFocus={{
                          scale: 0.9,
                        }}
                        whileHover={{
                          scale: 0.9,
                        }}
                        className="m-2 drop-shadow-lg"
                      >
                        <Tooltip
                          hasArrow
                          label={app.title}
                          bg="base.300"
                          color={"base.100"}
                          placement="bottom"
                        >
                          <div
                            className="flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all"
                            onClick={() =>
                              Router.push({
                                pathname: "/service",
                                query: { s: xor.encode(app.source) },
                              })
                            }
                          >
                            <span>
                              <Image
                                src={app.icon as any}
                                alt={app.title}
                                width={200}
                                height={200}
                              />
                            </span>
                          </div>
                        </Tooltip>
                      </motion.div>
                    );
                  })
                : null}
              <motion.div
                whileFocus={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 0.9,
                }}
                className="m-2 drop-shadow-lg"
              >
                <Tooltip
                  hasArrow
                  label={"add app"}
                  bg="base.300"
                  color={"base.100"}
                  placement="bottom"
                >
                  <div className="flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all">
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                </Tooltip>
              </motion.div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Drawer for mobile users */}
      <div className="tablet:visible laptop:hidden desktop:hidden">
        <GiHamburgerMenu
          onClick={onOpen}
          className="fixed top-0 right-0 m-5 text-3xl text-primary-100 p-1 rounded-md hover:bg-primary-600 hover:cursor-pointer transition-all"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          colorScheme="green"
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor={"#354f52"} textColor={"base.100"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text fontSize={"3xl"}>Emerald</Text>
            </DrawerHeader>

            <DrawerBody>
              <div className="space-y-3 flex flex-col">
                <Button
                  colorScheme={"twitter"}
                  variant="outline"
                  leftIcon={<IoIosApps />}
                >
                  Apps
                </Button>
                <Button
                  colorScheme={"whiteAlpha"}
                  variant="outline"
                  leftIcon={<BsFillPeopleFill />}
                >
                  Theater
                </Button>
                <Button
                  colorScheme={"green"}
                  variant="outline"
                  leftIcon={<FaCog />}
                >
                  Settings
                </Button>
              </div>
            </DrawerBody>

            <DrawerFooter>
              <Text color={"gray"}>© Emerald 2022-2023</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
