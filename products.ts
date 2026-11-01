
export interface Product {
  id: string;
  name: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '101',
    name: 'Wireless Mouse',
    description: `
## Wireless Mouse

A comfortable wireless mouse for everyday use.

### Features
- 2.4GHz wireless connectivity
- Ergonomic design
- Smooth cursor control
- Plug and play support

**Ideal for:** Office work, browsing, and everyday computer use.
`,
  },

  {
    id: '102',
    name: 'Mechanical Keyboard',
    description: `
## Mechanical Keyboard

A durable mechanical keyboard designed for typing and gaming.

### Features
- Mechanical key switches
- RGB backlighting
- Comfortable typing experience
- USB connectivity

**Ideal for:** Programmers, gamers, and professionals.
`,
  },

  {
    id: '103',
    name: 'USB-C Hub',
    description: `
## USB-C Hub

A compact USB-C hub for connecting multiple devices.

### Features
- Multiple USB ports
- Compact and portable design
- High-speed data transfer
- Plug and play support

**Ideal for:** Laptops, office setups, and everyday productivity.
`,
  },
];
