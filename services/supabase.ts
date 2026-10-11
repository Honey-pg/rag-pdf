import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadPdfToStorage(file: File, userId: string) {
  const filePath = `${userId}/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage.from('pdfs').upload(filePath, file);
  if (error) throw error;
  return data;
}

export async function insertDocumentMetadata(userId: string, filePath: string, fileName: string) {
  const { data, error } = await supabase.from('documents').insert({
    user_id: userId,
    path: filePath,
    name: fileName,
    created_at: new Date().toISOString(),
  });
  if (error) throw error;
  return data;
}

export async function getUserDocuments(userId: string) {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function getChatMessages(userId: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function deleteChatMessages(userId: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .delete()
    .eq('user_id', userId);
  if (error) throw error;
  return data;
}

export async function insertChatMessage(userId: string, role: 'user'|'assistant', content: string) {
  const { data, error } = await supabase.from('chat_messages').insert({
    user_id: userId,
    role,
    content,
    created_at: new Date().toISOString(),
  });
  if (error) throw error;
  return data;
}
