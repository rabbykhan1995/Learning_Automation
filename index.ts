import 'dotenv/config';
import express, { Request, Response } from 'express';
import { mastra } from './configs/mastra.config';


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// হেলথ চেক রাউট
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'SUCCESS',
    message: 'Express server is running smoothly with Bun & Mastra!',
    mastraInitialized: !!mastra,
  });
});

// মেসেঞ্জার বা এআই চ্যাট টেস্টিং এন্ডপয়েন্ট
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    // Mastra থেকে আমাদের তৈরি করা messengerAgent কল করার উদাহরণ
    const agent = mastra.getAgent('messengerAgent');
    
    if (!agent) {
      return res.status(404).json({ success: false, error: 'Messenger agent not found in Mastra config' });
    }

    // এজেন্টকে মেসেজ পাঠানো
    const response = await agent.generate(message);

    res.status(200).json({
      success: true,
      userMessage: message,
      reply: response.text,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// সার্ভার স্টার্ট
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});