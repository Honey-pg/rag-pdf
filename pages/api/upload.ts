import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { supabase, uploadPdfToStorage, insertDocumentMetadata } from '../../services/supabase';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Simple parsing: expect a single file in the request body as raw binary.
  // In production, use a library like formidable or busboy.
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }
  const fileBuffer = Buffer.concat(chunks);
  const file = new File([fileBuffer], 'upload.pdf', { type: 'application/pdf' });

  // Upload to Supabase storage
  const uploadResult = await uploadPdfToStorage(file, userId);
  const filePath = uploadResult?.path || '';

  // Insert metadata
  await insertDocumentMetadata(userId, filePath, file.name);

  return res.status(200).json({ success: true, message: 'PDF uploaded successfully.', path: filePath });
}
