
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { products } from '../products';

export const getProduct = createTool({
  id: 'get-product',

  description: `
    Find a product using its ID or name.

    Use this tool when a customer asks about a specific product.
    The customer can provide either a product ID or product name.

    Returns the product ID, name, and Markdown description.
  `,

  inputSchema: z.object({
    id: z.string().optional()
      .describe('Product ID'),

    name: z.string().optional()
      .describe('Product name'),
  }).refine(
    (data) => Boolean(data.id?.trim() || data.name?.trim()),
    {
      message: 'Either product ID or product name is required',
    }
  ),

  execute: async ({ id, name }) => {
    const product = products.find((item) => {
      const matchId =
        id?.trim() && item.id === id.trim();

      const matchName =
        name?.trim() &&
        item.name.toLowerCase() === name.trim().toLowerCase();

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
