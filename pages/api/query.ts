import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { query, documentId } = req.body || {};

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  // Placeholder: Real integration calls the Python FastAPI backend
  // e.g. http://localhost:8000/api/v1/query
  return res.status(200).json({
    answer: `This is a retrieved context answer for: "${query}".`,
    sources: [
      { page: 1, text: 'Sample retrieved source excerpt from PDF.' }
    ],
    documentId: documentId || 'demo-doc-123'
  });
}
