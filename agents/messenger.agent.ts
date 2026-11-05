
import { Agent } from '@mastra/core/agent';
import { getProduct } from '../tools/product.tool';

export const messengerAgent = new Agent({
  id: 'messenger-bot',
  name: 'MessengerEcomBot',

  instructions: `
    You are a friendly e-commerce customer support assistant.

    1. Help customers with product information.
    2. Use getProduct whenever a customer asks about a specific product.
    3. Customers can search using product ID or product name.
    4. Never invent product information.
    5. Product descriptions are written in Markdown.
    6. Reply in Bengali or match the customer's language.
  `,

  // model: 'groq/llama-3.3-70b-versatile',
  model: 'openrouter/qwen/qwen3.6-35b-a3b',
  tools: {
    getProduct,
  },
});
