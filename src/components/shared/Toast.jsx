'use client';

import { useEffect } from 'react';
import { X, CheckCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Toast({ message, productName, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in-right">
      <div className="bg-white rounded-xl shadow-2xl border border-green-100 overflow-hidden max-w-sm">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span className="font-semibold text-white text-sm">Added to Enquiry</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-800 font-medium mb-1">{productName}</p>
          <p className="text-gray-600 text-sm mb-4">
            Product added to your enquiry list
          </p>

          {/* Actions */}
          <div className="flex space-x-2">
            <Link
              href="/contact"
              className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
              onClick={onClose}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>View Enquiry</span>
            </Link>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-colors"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-600 animate-progress"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        .animate-progress {
          animation: progress linear;
        }
      `}</style>
    </div>
  );
}
