import OpenAI from 'openai';

export function getIlmu() {
  const apiKey = process.env.ILMU_API_KEY;

  if (!apiKey) {
    throw new Error('ILMU_API_KEY is not configured');
  }

  return new OpenAI({
    apiKey,
    baseURL: process.env.ILMU_BASE_URL,
  });
}
