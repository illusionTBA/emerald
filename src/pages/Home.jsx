/* eslint-disable */

import React from 'react';
import './styles/Home.css';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Button, Text, Popover, Tooltip } from '@nextui-org/react';
import SearchBar from '../components/SearchBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const input = useRef(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [eMessage, setEMessage] = useState('');
  const [visibleMail, setVisibleMail] = React.useState(false);
  const handlerMail = () => setVisibleMail(true);

  const closeHandler = () => {
    setVisibleMail(false);
    console.log('closed');
  };
  useEffect(() => {
    const fetchPhone = async () => {
      const res = await fetch('https://emeraldbackend.herokuapp.com/init', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setPhone(data.num);
    };
    fetchPhone();
  }, []);
  console.log(phone);
  useEffect(() => {
    const fetchEmail = async () => {
      const res = await fetch(
        'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10',
      );
      const data = await res.json();
      setEmail(data[0]);
    };
    fetchEmail();
  }, []);

  const FetchEmailContent = async (id) => {
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
    const res = await fetch(
      `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`,
    );
    const data = await res.json();
    setEmails(data);
    FetchEmailContent(data[0].id);
  };

  return (
    <motion.div className="flex w-full h-screen bg-primary-500 justify-center">
      <motion.div className="flex flex-col mt-4 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-6xl text-primary-200"
        >
          emerald
        </motion.h1>
        <div className="group flex flex-row">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <SearchBar input={input} />
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
            <div className="card">
              <div className="card-header">
                <AiOutlinePhone className="mr-2" />
                Phone
              </div>
              <div className="card-body">
                Get a temporary phone number for your online use
              </div>
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
        <button
          className="settings-button flex flex-row justify-center items-center hover:-translate-y-1"
          onClick={() => {
            window.location.href = '/settings';
          }}
        >
          <FaUserCog className="mr-2 text-2xl" />
          Settings
        </button>
      </div>
      <Modal
        scroll
        closeButton
        aria-labelledby="modal-title"
        open={visibleMail}
        onClose={closeHandler}
        width="600px"
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
                    position: toast.POSITION.BOTTOM_RIGHT,
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
                          {eMessage || 'loading...'}
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
            onClick={closeHandler}
          >
            Close
          </Button>
          <Button auto onPress={FetchEmails}>
            Refresh
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={8000} />
    </motion.div>
  );
}

export default Home;
