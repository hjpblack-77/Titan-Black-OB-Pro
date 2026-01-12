
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import Card from '../components/ui/Card';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Academy: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: "Hello! I am the Titan AI assistant. How can I help you learn about trading today?" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (input.trim() === '') return;
        
        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = { sender: 'bot', text: "That's a great question! Let's break down the concept of 'support and resistance'..." };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="h-full flex flex-col max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Titan Academy Chat</h2>
            <Card className="flex-grow flex flex-col">
                <div className="flex-grow overflow-y-auto p-4 space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                            {msg.sender === 'bot' && (
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-blue text-white flex items-center justify-center">
                                    <Bot size={20} />
                                </div>
                            )}
                            <div className={`max-w-md p-3 rounded-xl ${msg.sender === 'user' ? 'bg-brand-blue text-white' : 'bg-gray-100 dark:bg-dark-accent text-gray-800 dark:text-white'}`}>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                             {msg.sender === 'user' && (
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-dark-accent text-white flex items-center justify-center">
                                    <User size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="border-t border-gray-200 dark:border-dark-accent p-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about any trading concept..."
                            className="w-full bg-gray-100 dark:bg-dark-accent rounded-full p-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                        <button onClick={handleSend} className="absolute inset-y-0 right-0 flex items-center justify-center h-10 w-10 m-1 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Academy;
