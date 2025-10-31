import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Heart, X } from 'lucide-react';
import { useSendMessage } from '../query/chatQueries'; // Điều chỉnh đường dẫn nếu cần
import Avatar from "../assets/chatbox.png";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  books?: Book[];
}

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
}

const DEFAULT_IMG_BOOK = "https://i.pinimg.com/736x/e5/58/77/e5587711a893da40186ba43654504df8.jpg";
const DEFAULT_AVATAR = Avatar; // Thay đổi đường dẫn đến avatar của bạn

const ChatBookChat = ({ onNavigateBack }: { onNavigateBack: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Chào bạn! Tôi là ChatBook AI, trợ lý thông minh giúp bạn tìm kiếm và khám phá những cuốn sách tuyệt vời. Bạn đang tìm kiếm loại sách gì?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [expandedBookSection, setExpandedBookSection] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    'Bạn là ai?',
    'Bạn giúp gì được cho mình?',
    'Gợi ý sách ngẫu nhiên cho mình đi!',
    'Giới thiệu sách của Nguyễn Nhật Ánh',
  ];

  // Khởi tạo hook mutation để gửi tin nhắn đến Rasa
  const sendMessageMutation = useSendMessage(
    (data) => {
      // Xử lý phản hồi từ Rasa
      const botResponses: Message[] = data.map((rasaRes, index) => {
        let books: Book[] | undefined;

        // Phân tích dữ liệu sách từ custom.results
        if (rasaRes.custom?.results && Array.isArray(rasaRes.custom.results)) {
          books = rasaRes.custom.results.map((result: any, i: number) => ({
            id: result.book_id || Date.now() + i,
            title: result.title || 'Tên sách không rõ',
            author: result.author || 'Tác giả không rõ',
            image: result.cover_url || DEFAULT_IMG_BOOK,
            description: result.description || 'Không có mô tả.',
          }));
        }

        // Định dạng tin nhắn dưới dạng danh sách có đánh số nếu có sách
        const text = books && books.length > 0
          ? `Dựa trên yêu cầu của bạn, tôi gợi ý các sách sau:\n${books.map((b, i) => `${i + 1}. **${b.title}** - ${b.author}`).join('\n')}\nNhấn "Xem gợi ý chi tiết" để biết thêm thông tin!`
          : rasaRes.text || 'Không tìm thấy sách phù hợp.';

        return {
          id: Date.now() + index,
          text,
          isBot: true,
          timestamp: new Date(),
          books,
        };
      });

      setMessages((prev) => [...prev, ...botResponses]);
      setIsTyping(false);
    },
    (error) => {
      console.error('Lỗi khi gửi tin nhắn đến Rasa:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: 'Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại!',
          isBot: true,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, expandedBookSection]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Gửi tin nhắn đến Rasa
    sendMessageMutation.mutate({
      sender: 'user', // Điều chỉnh nếu cần (ví dụ: ID người dùng cụ thể)
      message: inputValue,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestClick = (question: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Gửi câu hỏi gợi ý đến Rasa
    sendMessageMutation.mutate({
      sender: 'user',
      message: question,
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-200/20 rounded-full blur-3xl -top-10 -right-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/15 to-blue-400/15 rounded-full blur-3xl bottom-20 -left-10 animate-bounce" style={{ animationDuration: '7s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Avatar của bot - đã sửa đổi */}
                <img
                  src={DEFAULT_AVATAR}
                  alt="ChatBook AI Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">ChatBook AI</h1>
                <p className="text-xs text-green-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Đang hoạt động
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="relative z-10 max-w-3xl mx-auto px-4 py-6 h-[calc(100vh-144px)] overflow-y-auto scrollbar-hidden"
        style={{ paddingBottom: '100px' }}
      >
        <style>
          {`
            .scrollbar-hidden::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hidden {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
          `}
        </style>
        <div className="relative space-y-4">
          {/* Suggestion buttons */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="mt-6"
              >
                <div className="flex flex-wrap gap-2 justify-start">
                  {suggestedQuestions.map((q, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => handleSuggestClick(q)}
                      className="px-4 py-2 text-sm bg-white text-gray-700 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {messages.map((message) => (
              <div key={message.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex max-w-xs sm:max-w-md ${message.isBot ? 'flex-row' : 'flex-row-reverse'} items-end space-x-2 sm:space-x-3`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${message.isBot ? 'bg-gradient-to-br from-white-400 to-white-500' : 'bg-gradient-to-br from-gray-400 to-gray-600'}`}>
                        {/* Sử dụng hình ảnh cho avatar bot */}
                        {message.isBot ? (
                          <img src={DEFAULT_AVATAR} alt="Bot Avatar" className="w-full h-full object-cover rounded-full" />
                        ) : (
                          <span className="text-white text-xs font-semibold">B</span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}>
                      <div className={`px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-sm ${message.isBot ? 'bg-white border border-gray-100 text-gray-800' : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white'} ${message.isBot ? 'rounded-bl-none' : 'rounded-br-none'}`}>
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      </div>
                      <span className={`text-xs text-gray-400 mt-1 ${message.isBot ? 'ml-2' : 'mr-2'}`}>
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Book Recommendations */}
                {message.books && message.books.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    <button
                      onClick={() =>
                        setExpandedBookSection(
                          expandedBookSection === message.id ? null : message.id
                        )
                      }
                      className="flex items-center text-sm text-blue-500 hover:text-blue-600 font-medium"
                    >
                      {expandedBookSection === message.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Ẩn gợi ý chi tiết
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Xem gợi ý chi tiết
                        </>
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedBookSection === message.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 grid gap-3 sm:grid-cols-2"
                        >
                          {message.books.map((book) => (
                            <div
                              key={book.id}
                              className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <img
                                src={book.image || DEFAULT_IMG_BOOK}
                                alt={book.title}
                                className="w-full h-48 object-contain rounded-lg mb-2"
                                onError={(e) => { e.currentTarget.src = DEFAULT_IMG_BOOK; }}
                              />
                              <h3 className="text-sm font-semibold text-gray-800">{book.title}</h3>
                              <p className="text-xs text-gray-600">{book.author}</p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{book.description}</p>
                              <div className="flex justify-between mt-2">
                                <button
                                  onClick={() => setSelectedBook(book)}
                                  className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                                >
                                  Xem chi tiết
                                </button>
                                <button className="p-1 hover:bg-gray-200 rounded-full">
                                  <Heart className="w-4 h-4 text-gray-500" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="flex flex-row items-end space-x-3">
                <div className="flex-shrink-0">
                  {/* Avatar của bot - đã sửa đổi */}
                  <img
                    src={DEFAULT_AVATAR}
                    alt="Typing Indicator Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="bg-white border border-gray-100 px-4 py-2 rounded-xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1.5">
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Modal for Book Details - Đã chỉnh sửa toàn bộ */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto scrollbar-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Custom Scrollbar Styling */}
              <style>
                {`
                  .scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hidden {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}
              </style>

              {/* Nút đóng được cố định */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Phần hình ảnh */}
              <div className="w-full flex justify-center mb-6">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  src={selectedBook.image || DEFAULT_IMG_BOOK}
                  alt={selectedBook.title}
                  className="max-h-80 object-contain rounded-lg shadow-lg"
                  onError={(e) => { e.currentTarget.src = DEFAULT_IMG_BOOK; }}
                />
              </div>

              {/* Căn giữa toàn bộ nội dung văn bản */}
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl font-bold text-gray-800 leading-tight"
                >
                  {selectedBook.title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg text-gray-600 italic"
                >
                  Tác giả: {selectedBook.author}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base text-gray-700 leading-relaxed whitespace-pre-line text-justify mx-auto max-w-sm"
                >
                  {selectedBook.description}
                </motion.p>
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  onClick={() => setSelectedBook(null)}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-md"
                >
                  Đóng
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 z-20">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-3">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all duration-200 max-h-24 text-sm"
              rows={1}
              style={{
                minHeight: '40px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className={`p-2.5 rounded-lg transition-all duration-200 ${inputValue.trim() ? 'bg-blue-400 hover:bg-blue-500 text-white shadow-sm hover:shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBookChat;