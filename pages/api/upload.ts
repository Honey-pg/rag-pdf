import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  // Placeholder: In a real implementation, parse the multipart form data using formidable
  // and send the PDF to the python backend for ingestion.
  return res.status(200).json({ success: true, message: 'PDF uploaded successfully.' });
}
