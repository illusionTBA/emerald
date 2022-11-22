import { NextApiRequest } from 'next';

const messageHandler = (req: NextApiRequest, res: any) => {
  if (req.method === 'POST') {
    // get message
    const options = req.body;
    console.log(options);
    // dispatch to channel "message"
    res?.socket?.server?.io?.emit('message', options);

    // return message
    res.status(201).json(options);
  }
};

export default messageHandler;
