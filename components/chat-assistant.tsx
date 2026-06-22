'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
}

const FAQ_RESPONSES: Record<string, string> = {
  'hello': 'Hi there! I\'m Namit\'s AI assistant. How can I help you today?',
  'hi': 'Hello! What would you like to know about me?',
  'help': 'I can help you with questions about my skills, projects, and experience. Feel free to ask!',
  'skills': 'I specialize in Full-Stack Development with Next.js, React, TypeScript, Node.js, and databases like PostgreSQL and MongoDB.',
  'projects': 'My main project is WanderLust - a travel app built with Next.js and React. I also work on various web applications.',
  'wanderlust': 'WanderLust is a travel planning application built with modern web technologies. It helps users discover and plan their next adventure.',
  'experience': 'I have experience in full-stack development, working with React, Next.js, TypeScript, and various backend technologies.',
  'contact': 'You can reach me through the contact form below or via email. Feel free to get in touch!',
  'email': 'You can send me an email through the contact form on this page.',
  'hire': 'I\'m available for freelance projects and full-time opportunities. Please reach out through the contact form!',
  'available': 'Yes, I\'m currently available for new projects and opportunities.',
  'tech stack': 'My tech stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB, and Tailwind CSS.',
};

function findBestMatch(input: string): string {
  const normalizedInput = input.toLowerCase().trim();
  
  for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
    if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
      return response;
    }
  }

  // Default response
  return 'I\'m not sure how to answer that. Feel free to reach out through the contact form for more specific questions!';
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m Namit\'s AI assistant. Ask me anything about my skills, projects, or experience!',
      sender: 'assistant',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate response delay
    setTimeout(() => {
      const response = findBestMatch(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
      };
      setMessages(prev => [...prev, assistantMessage]);
      setLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-xl flex flex-col z-50 h-[500px]">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Namit&apos;s Assistant</h3>
            <p className="text-xs opacity-90">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-muted-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-current rounded-full animate-bounce" />
                    <div className="h-2 w-2 bg-current rounded-full animate-bounce delay-100" />
                    <div className="h-2 w-2 bg-current rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
            <Button
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
