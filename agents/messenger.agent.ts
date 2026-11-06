import { Agent } from '@mastra/core/agent';
import { getProduct } from '../tools/product.tool';
import { messengerPrompt } from '../prompts/messenger.prompt';

export const messengerAgent = new Agent({
  id: 'messenger-bot',
  name: 'MessengerEcomBot',

  instructions: messengerPrompt,

  model: 'openrouter/qwen/qwen3.6-35b-a3b',
  tools: {
    getProduct,
  },
});