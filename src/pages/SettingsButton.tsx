import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component cho modal settings
const SettingsModal = ({ isOpen, onClose, onSave }: { isOpen: boolean; onClose: () => void; onSave: (url: string) => void; }) => {
  const [url, setUrl] = useState('');
  if (!isOpen) return null;

  const handleSubmit = () => {
    onSave(url);
    setUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Cài đặt</h3>
        <p className="text-sm text-gray-600 mb-4">
          Vui lòng nhập URL của API hoặc server.
        </p>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Nhập vào URL"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Xác nhận
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Component Nút Cài đặt độc lập
const SettingsButton = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleSaveSettings = (url: string) => {
    console.log("URL đã lưu:", url);
    if (url) {
      localStorage.setItem("RASA_API", url);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-20">
        <div className="relative group">
          <button
            onClick={() => setIsSettingsModalOpen(true)}
            className="p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.25 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
            Cài đặt
            <div className="absolute bottom-full right-4 border-4 border-transparent border-b-gray-800"></div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSettingsModalOpen && (
          <SettingsModal
            isOpen={isSettingsModalOpen}
            onClose={() => setIsSettingsModalOpen(false)}
            onSave={handleSaveSettings}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsButton;