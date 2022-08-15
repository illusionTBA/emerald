import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Dropdown } from '@nextui-org/react';
import { useState } from 'react';
import './styles/Settings.css';
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, x: '100vh' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100vh' },
};

function Settings() {
  const [cloaktype, setCloaktype] = useState(
    JSON.parse(localStorage.getItem('settings')).cloaktype,
  );
  const [proxytype, setProxytype] = useState(
    JSON.parse(localStorage.getItem('settings')).proxy,
  );
  const settings = JSON.parse(localStorage.getItem('settings'));
  const inFrame = () => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  };
  function saveCloak(type) {
    setCloaktype(type.anchorKey);
    localStorage.setItem(
      'settings',
      JSON.stringify({ ...settings, cloaktype: type.anchorKey }),
    );
    if (inFrame()) {
      window.open(window.location.href, '_blank');
      alert('you may now close this window');
    } else {
      window.location.reload();
    }
  }

  function saveProxy(type) {
    setProxytype(type.anchorKey);
    localStorage.setItem(
      'settings',
      JSON.stringify({ ...settings, proxy: type.anchorKey }),
    );
    window.location.reload();
  }

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen bg-primary-500"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-0 left-0 m-5 select-none"
      >
        <NavLink to={'/'}>
          <img width={50} height={50} src="/emerald.png" alt="emerald" />
        </NavLink>
      </motion.div>

      <div className="flex relative h-5/6 w-2/5 bg-primary-400 rounded-md">
        <div className="flex flex-col mt-5 space-y-4 w-full h-full items-center justify-center divide-y">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <h2 className=" text-primary-100 text-3xl">Proxy Type:</h2>
            <Dropdown
              css={{
                backgroundColor: '#52796F',
              }}
            >
              <Dropdown.Button
                flat
                css={{
                  tt: 'capitalize',
                  backgroundColor: '#52796F',
                  color: '#CAD2C5',
                }}
              >
                {proxytype}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={proxytype}
                onSelectionChange={saveProxy}
                css={{
                  backgroundColor: '#52796F',
                }}
                className="border-primary-300"
              >
                <Dropdown.Item key="dip">dip</Dropdown.Item>
                <Dropdown.Item key="uv">uv</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="flex flex-row space-x-4 justify-center items-center pt-2">
            <h2 className=" text-primary-100 text-3xl">Cloak Type:</h2>
            <Dropdown
              css={{
                backgroundColor: '#52796F',
              }}
            >
              <Dropdown.Button
                flat
                css={{
                  tt: 'capitalize',
                  backgroundColor: '#52796F',
                  color: '#CAD2C5',
                }}
              >
                {cloaktype}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={cloaktype}
                onSelectionChange={saveCloak}
                css={{
                  backgroundColor: '#52796F',
                }}
                className="border-primary-300"
              >
                <Dropdown.Item key="none" className="hover:">
                  none
                </Dropdown.Item>
                <Dropdown.Item key="about:blank">about:blank</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* <label className="switch">
            <input type="checkbox" onChange={change} />
            <span className="slider"></span>
          </label> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;
