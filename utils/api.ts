export async function askQuestion(question: string): Promise<string> {
  const response = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Server error: ${err}`);
  }
  const data = await response.json();
  return data.answer as string;
}
