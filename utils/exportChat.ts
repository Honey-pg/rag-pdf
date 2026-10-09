export interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

export function exportChatToMarkdown(messages: Message[], fileName: string = 'chat-export') {
  let content = `# Chat Export - RAG PDF\n\n`;
  messages.forEach((msg) => {
    const role = msg.sender === 'user' ? '**User**' : '**AI Assistant**';
    content += `${role}:\n${msg.text}\n\n---\n\n`;
  });

  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.md`;
  link.click();
  URL.revokeObjectURL(url);
}

export function exportChatToJson(messages: Message[], fileName: string = 'chat-export') {
  const content = JSON.stringify(messages, null, 2);
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.json`;
  link.click();
  URL.revokeObjectURL(url);
}
