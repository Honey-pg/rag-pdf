import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { question } = req.body;
  // Placeholder: in real setup, forward to backend service.
  // Here we just echo the question.
  const answer = `You asked: "${question}". (This is a placeholder response.)`;
  return res.status(200).json({ answer });
}
