import { Mastra } from '@mastra/core';
import { messengerAgent } from '../agents/messenger.agent';
/**
 * Mastra Global Configuration Setup
 */
export const mastra = new Mastra({
  agents: {
    messengerAgent,
  },
  // প্রয়োজন অনুযায়ী অন্যান্য গ্লোবাল কনফিগ যেমন storage বা vectors যোগ করা যাবে
});