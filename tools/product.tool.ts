import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { products } from '../products';

export const getProduct = createTool({
  id: 'get-product',

  description: `
    Fetch product information.
    - If 'id' or 'name' is provided, returns that specific product.
    - If no parameters are provided or 'all' is requested, returns ALL available products.
  `,

  inputSchema: z.object({
    id: z.string().optional().describe('Product ID'),
    name: z.string().optional().describe('Product name'),
    all: z.boolean().optional().describe('Set to true to get all products'),
  }),

  execute: async ({ id, name, all }) => {
    // ১. কাস্টমার যদি সব প্রোডাক্ট চায় অথবা কোনো ফিল্টার না দেয়
    if (all || (!id && !name)) {
      return {
        found: true,
        message: 'Retrieved all products successfully',
        products: products,
      };
    }

    // ২. নির্দিষ্ট প্রোডাক্ট খোঁজা
    const product = products.find((item) => {
      const matchId = id?.trim() && item.id === id.trim();
      const matchName =
        name?.trim() &&
        item.name.toLowerCase().includes(name.trim().toLowerCase());

      return matchId || matchName;
    });

    if (!product) {
      return {
        found: false,
        message: 'Product not found',
        product: null,
      };
    }

    return {
      found: true,
      message: 'Product found successfully',
      product,
    };
  },
});