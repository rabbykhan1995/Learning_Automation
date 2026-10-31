import { Router } from 'express';
// আপনার তৈরি করা এজেন্ট বা চ্যাট সার্ভিস এখানে ইমপোর্ট করবেন

const router = Router();

router.post('/chat-test', async (req, res) => {
  try {
    const { message, userId } = req.body; // পোস্টম্যানের বডি থেকে মেসেজ আসবে

    console.log(`Received message from User (${userId}): ${message}`);

    // আপাতত টেস্ট রেসপন্স
    res.status(200).json({
      success: true,
      receivedMessage: message,
      reply: "এটি আপনার এআই এজেন্টের একটি ডামি রেসপন্স। এজেন্ট এবং টুলস ইন্টিগ্রেশন এখানে কাজ করবে!"
    });
  } catch (error:any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;