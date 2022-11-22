import { NextApiRequest } from 'next';

const alertHandler = (req: NextApiRequest, res: any) => {
  if (req.method === 'POST') {
    // get message
    const options = req.body;
    console.log(options);
    // dispatch to channel "message"
    res?.socket?.server?.io?.emit('alert', options);

    // return message
    res.status(201).json(options);
  }
};

export default alertHandler;
