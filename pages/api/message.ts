import { NextApiRequest } from 'next';

export default (req: NextApiRequest, res: any) => {
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
