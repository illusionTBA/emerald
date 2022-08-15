/* eslint-disable */

import React from 'react';
import './styles/Home.css';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal, Button, Text, Popover, Tooltip } from '@nextui-org/react';
import SearchBar from '../components/SearchBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import BareClient from '@tomphttp/bare-client';
import { config } from '../config';

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

function Home() {
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [eMessage, setEMessage] = useState('');
  const [visibleMail, setVisibleMail] = React.useState(false);
  const handlerMail = () => setVisibleMail(true);
  const bare = new BareClient(config.bare);
  const closeHandlerMail = () => {
    setVisibleMail(false);
    console.log('closed');
  };

  const [visiblePhone, setVisiblePhone] = React.useState(false);
  const handlerPhone = () => setVisiblePhone(true);

  const closeHandlerPhone = () => {
    setVisiblePhone(false);
    console.log('closed');
  };
  // useEffect(() => {
  //   const fetchPhone = async () => {
  //     const res = await fetch(`${process.env.API}init`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await res.json();
  //     setPhone(data.num);
  //   };
  //   fetchPhone();
  // }, []);

  const refreshPhone = async () => {
    const url = `${process.env.API}refresh`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        num: phone,
      }),
    });
    const data = await res.json();
    console.log(data);

    setMessages(data);
  };

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await fetch(
          'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1',
        );
        if (res.status === 200) {
          const data = await res.json();
          setEmail(data[0]);
          toast.success('Email successfully Set');
        }
      } catch (error) {
        toast.error(
          'Opps something went wrong when getting email trying again',
        );
        const res = await bare.fetch(
          'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1',
        );
        if (res.status === 200) {
          const data = await res.json();
          setEmail(data[0]);
          toast.success('Email successfully Set');
        } else {
          toast.error(
            'Opps something went wrong try changing your bare server in settings',
          );
        }
      }
    };
    fetchEmail();
  }, []);

  const FetchEmailContent = async (id) => {
    console.log('email: ', email);
    const emailSplit = email.split('@');
    const domain = emailSplit[1];
    const username = emailSplit[0];
    const res = await fetch(
      `https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${id}`,
    );
    const data = await res.json();
    setEMessage(data.textBody);
  };

  const FetchEmails = async () => {
    const emailSplit = email.split('@');
    const domain = emailSplit[1];
    const username = emailSplit[0];
    try {
      const res = await fetch(
        `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`,
      );
      console.log(res.status);

      if (res.status === 200) {
        const data = await res.json();
        console.log('email data', data);
        setEmails(data);
        if (data.length > 0) {
          FetchEmailContent(data[0].id);
        }
      } else {
        toast.error('Failed to fetch emails trying again...');
      }
    } catch (error) {
      const res = await bare.fetch(
        `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`,
      );
      console.log(res.status);
      if (res.status === 200) {
        const data = await res.json();
        console.log('email data', data);
        setEmails(data);
        if (data.length > 0) {
          FetchEmailContent(data[0].id);
        }
      } else {
        toast.error(
          'Failed to fetch emails. try to change your bare server, if this keeps happening contact illusions#3875',
        );
      }
    }
  };

  return (
    <motion.div
      className="flex w-full h-screen bg-primary-500 justify-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <motion.div className="flex flex-col mt-4 items-center">
        <motion.h1 className="text-6xl text-primary-200">emerald</motion.h1>
        <div className="group flex flex-row">
          <SearchBar />
        </div>
        <div className="flex flex-shrink flex-col items-center justify-center mt-[3rem]">
          <div className="flex flex-shrink flex-row items-center justify-center flex-wrap">
            <div className="card" onClick={handlerMail}>
              <div className="card-header">
                <FiMail className="mr-2" />
                Mail
              </div>
              <div className="card-body">
                Get a temporary email address for your online use
              </div>
            </div>
            <div className="card opacity-50">
              <div className="card-header">
                <AiOutlinePhone className="mr-2" />
                Phone
              </div>
              <div className="card-body">Coming soon</div>
            </div>
            <div className="card opacity-50">
              <div className="card-header">
                <BsFillChatLeftDotsFill className="mr-2" />
                Chat
              </div>
              <div className="card-body">Coming soon</div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="fixed bottom-0 justify-center">
        <NavLink
          className="settings-button flex flex-row justify-center items-center hover:-translate-y-1"
          to={'/settings'}
        >
          <FaUserCog className="mr-2 text-2xl" />
          Settings
        </NavLink>
      </div>
      <Modal
        scroll
        closeButton
        aria-labelledby="modal-title"
        open={visibleMail}
        onClose={closeHandlerMail}
        width="800px"
        css={{
          backgroundColor: '#52796f',
        }}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            size={20}
            css={{
              color: '#CAD2C5',
            }}
          >
            Emerald Mail
          </Text>
        </Modal.Header>
        <Modal.Body
          css={{
            display: 'flex',
          }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Text size={16} css={{ color: '#CAD2C5' }}>
                Your temporary email address is
              </Text>
              <Text
                size={16}
                css={{ color: '#84a98c' }}
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  toast.success('Successfully copied Email to clipboard', {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }}
              >
                : {email}
              </Text>
            </div>
            <div className="overflow-x-auto relative rounded-md bg-primary-500">
              <table className="w-full text-sm text-left text-gray-500">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-primary-500 ">
                  <p className="text-primary-100">
                    please note the refresh button is not instant so please give
                    it some time after you recieve the email
                  </p>
                </caption>
                <thead className="text-xs uppercase bg-primary-400">
                  <tr className="text-primary-100">
                    <th scope="col" className="py-3 px-6">
                      From
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Subject
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Content
                    </th>
                  </tr>
                </thead>

                {emails.map((email, index) => {
                  return (
                    <tbody className="bg-primary-400" key={email.id}>
                      <tr key={index} className=" border-b bg-primary-400">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-primary-100 bg-primary-400"
                        >
                          {email.from}
                        </th>
                        <td className="py-4 px-6 text-primary-100 bg-primary-400">
                          {email.subject}
                        </td>
                        <td className="py-4 px-6 text-primary-100 bg-primary-400">
                          {email.date}
                        </td>
                        <td className="py-4 px-6 text-primary-100 bg-primary-400">
                          {eMessage}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            {/* <Text size={16} css={{ color: '#CAD2C5' }}>
                    just got an email from {email.from} with subject:{' '}
                    {email.subject}
                  </Text> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            css={{
              backgroundColor: '#84a98c',
              color: 'black',
            }}
            onClick={closeHandlerMail}
          >
            Close
          </Button>
          <Button auto onClick={FetchEmails}>
            Refresh
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Phone modal bellow */}
      {/* <Modal
        closeButton
        aria-labelledby="modal-title"
        width="800px"
        open={visiblePhone}
        onClose={closeHandlerPhone}
        css={{
          backgroundColor: '#52796f',
        }}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            size={20}
            css={{
              color: '#CAD2C5',
            }}
          >
            Emerald Phone
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Text size={16} css={{ color: '#CAD2C5' }}>
                Your temporary phone number is
              </Text>
              <Text
                size={16}
                css={{ color: '#84a98c' }}
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  toast.success(
                    'Successfully copied phone number to clipboard',
                    {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    },
                  );
                }}
              >
                : {phone}
              </Text>
            </div>

            <div className="overflow-x-auto relative rounded-md bg-primary-500">
              <table className="w-full text-sm text-left text-gray-500">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-primary-500 ">
                  <p className="text-primary-100">
                    NOTICE : This uses an external api for the phone numbers
                    meaning that they may have messages already!.
                  </p>
                </caption>
                <thead className="text-xs uppercase bg-primary-400">
                  <tr className="text-primary-100">
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Message
                    </th>
                  </tr>
                </thead>

                {messages.map((message, index) => {
                  return (
                    <tbody className="bg-primary-400" key={index}>
                      <tr key={index} className=" border-b bg-primary-400">
                        <td className="py-4 px-6 text-primary-100 bg-primary-400">
                          {Date.now()}
                        </td>
                        <td className="py-4 px-6 text-primary-100 bg-primary-400">
                          {message.text}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            onClick={closeHandlerPhone}
            css={{
              backgroundColor: '#84a98c',
              color: 'black',
            }}
          >
            Close
          </Button>
          <Button auto onClick={refreshPhone}>
            Refresh
          </Button>
        </Modal.Footer>
      </Modal> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.div>
  );
}

export default Home;
