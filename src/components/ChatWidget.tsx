
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage } from '../../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welkom bij YIKANG TCM PRAKTIJK. Hoe kan ik u vandaag helpen met uw gezondheid?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Initial placeholder for AI response
      const modelMessagePlaceholder: ChatMessage = {
        role: 'model',
        text: '',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMessagePlaceholder]);

      const responseStream = await sendMessageToGemini(userText);
      
      let fullResponse = '';
      
      for await (const chunk of responseStream) {
        fullResponse += chunk;
        // Update the last message (the model's) with the accumulating text
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          lastMsg.text = fullResponse;
          return newHistory;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "Ik heb wat moeite om verbinding te maken. Probeer het later opnieuw.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-gold-500 text-white rounded-full shadow-2xl shadow-gold-500/20 flex items-center justify-center hover:bg-gold-400 transition-colors z-50 group"
            aria-label="Open Chat"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full animate-pulse border-2 border-primary-900"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-primary-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-primary-700"
          >
            {/* Header */}
            <div className="bg-gold-500 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">YIKANG Assistent</h3>
                  <p className="text-xs text-gold-100">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-primary-900">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-gold-500 text-white rounded-br-none' 
                        : 'bg-primary-800 text-primary-100 rounded-bl-none border border-primary-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1].role === 'user' && (
                 <div className="flex justify-start">
                   <div className="bg-primary-800 text-primary-100 p-3 rounded-2xl rounded-bl-none border border-primary-700 flex items-center gap-2">
                     <Loader2 size={16} className="animate-spin text-gold-500" />
                     <span className="text-xs text-primary-400">Aan het denken...</span>
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-primary-800 border-t border-primary-700">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Stel uw vraag..."
                  className="w-full pl-4 pr-12 py-3 bg-primary-900 border border-primary-700 text-primary-100 rounded-full focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm placeholder-primary-500"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 p-2 bg-gold-500 text-white rounded-full hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-center text-primary-500 mt-2">
                AI kan fouten maken. Geen medisch advies.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
