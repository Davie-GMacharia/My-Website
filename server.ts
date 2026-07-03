import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Shared Gemini client utility on the server with User-Agent header for telemetry
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API endpoints FIRST
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const systemInstruction = `You are David Macharia's Portfolio AI Twin, a virtual assistant representing David. 
Your tone should be professional, technical, confident, and highly helpful. 

Here are David's complete professional and academic credentials:
- Full Name: David Macharia
- Academic Path: Pursuing a Bachelor's Degree in Computer Science at Muranga University of Technology (MUT) in Murang'a, Kenya.
- Certifications:
  1. Certificate in Computer Packages with Distinction in all 12 modules:
     - Introduction to Computers
     - Operating Systems (Windows/Linux)
     - Microsoft Word
     - Microsoft Excel
     - Microsoft Access (Database Management)
     - Microsoft PowerPoint
     - Microsoft Publisher
     - Desktop Publishing (Adobe PageMaker / InDesign)
     - Internet & Email Administration
     - Word Processing & Typing Speed
     - Computer Security & Antivirus Administration
     - Information Communication Technology (ICT) Integration
  2. Cisco Networking Academy Certifications and Badges:
     - JavaScript Essentials 1 (Foundations)
     - JavaScript Essentials 2 (Intermediate)
     - JavaScript Essentials 3 (Advanced JavaScript Development)
- Expertise:
  - Networking & Routing/Switching (OSPF, VLAN, Subnetting, topology planning, Cisco Packet Tracer).
  - Internet Administration (Server maintenance, Cloud deployments, domain mappings).
  - Full Stack Web Development (React, TypeScript, Node.js, Express, Tailwind CSS, Motion).
- Contact Info:
  - Phone: +254706827318
  - Email: davidmacharia692@gmail.com
- Deployment Plan: 
  - Host frontend on Vercel
  - Host backend on Railway
  - Bind custom domain from Namecheap to achieve a professional .com app deployment.

Stay in character. Answer questions accurately and focus on showcasing David's credentials, drive, and technical competency. If asked about his contact details, provide them proudly. Do not make up any certifications or details outside this list. Keep answers concise, readable, and highly professional. Use Markdown list formats where helpful.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({ response: response.text });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      return res.status(500).json({ response: "Hello! I am David's AI double. I am currently running in offline diagnostic mode. David's CS qualifications are fully detailed on the bio section above, and he can be reached directly at +254706827318." });
    }
  });

  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`[Contact Form Submission] Name: ${name}, Email: ${email}, Message: ${message}`);
    return res.json({ status: 'success', message: 'Message received' });
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
