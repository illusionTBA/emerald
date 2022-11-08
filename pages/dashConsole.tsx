import { useEffect, useState, useRef } from 'react';
import { Button, Input } from '@chakra-ui/react';

export default function Dash() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const sendAlert = async () => {
    const resp = await fetch('/api/alert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (resp.ok) {
      console.log('sent');
    }
  };
  return (
    <div className="flex  w-full h-screen items-center justify-center flex-col space-y-5">
      <Input
        placeholder="title"
        width={200}
        onChange={(e) => setTitle(e.target.value as any)}
      />
      <Input
        placeholder="description"
        width={200}
        onChange={(e) => setDescription(e.target.value as any)}
      />
      <Button onClick={sendAlert}>Send</Button>
    </div>
  );
}
