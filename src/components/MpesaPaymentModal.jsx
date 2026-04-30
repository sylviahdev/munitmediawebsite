import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader } from "lucide-react";

export default function MpesaPaymentModal({ isOpen, onClose, packageName = "Gold Package", amount = 1000 }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Validate Kenyan phone number
  const validatePhone = (phoneNumber) => {
    // Remove spaces and dashes
    const cleaned = phoneNumber.replace(/[\s-]/g, "");

    // Check format: 07XXXXXXXX or 254XXXXXXXXX
    const kenyaPhoneRegex = /^(07\d{8}|254\d{9})$/;
    return kenyaPhoneRegex.test(cleaned);
  };

  // Format phone for backend (convert 07... to 254...)
  const formatPhone = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/[\s-]/g, "");
    if (cleaned.startsWith("0")) {
      return "254" + cleaned.slice(1);
    }
    return cleaned;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate phone
    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Invalid Kenyan phone number. Use 07XXXXXXXX or 254XXXXXXXXX");
      return;
    }

    setLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:5000";
      const formattedPhone = formatPhone(phone);

      const res = await fetch(`${backendUrl}/mpesa/stkpush`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedPhone,
          amount,
          package: packageName,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.errorMessage || `Server error: ${res.status}`);
      }

      if (data.ResponseCode === "0") {
        setSuccess(true);
      } else {
        throw new Error(data.errorMessage || "Payment initiation failed");
      }
    } catch (err) {
      console.error("M-Pesa Error:", err);
      setError(err.message || "Failed to process payment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setPhone("");
      setError("");
      setSuccess(false);
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !loading) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700 overflow-hidden">

              {/* HEADER */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">M-Pesa Payment</h2>
                  <p className="text-green-100 text-sm mt-1">{packageName}</p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="text-white hover:bg-green-600 p-2 rounded-lg transition disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                      <svg
                        className="h-8 w-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Payment Initiated</h3>
                    <p className="text-gray-300 mb-6">📲 Check your phone to complete payment</p>
                    <p className="text-sm text-gray-400 mb-6">You'll receive an M-Pesa prompt shortly</p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* AMOUNT DISPLAY */}
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                      <p className="text-gray-400 text-sm">Amount to Pay</p>
                      <p className="text-3xl font-bold text-white mt-1">
                        KES {amount.toLocaleString()}
                      </p>
                    </div>

                    {/* PHONE INPUT */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setError("");
                        }}
                        placeholder="07XXXXXXXX or 254XXXXXXXXX"
                        disabled={loading}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition disabled:opacity-50"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Enter your Kenyan M-Pesa phone number
                      </p>
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 flex items-start gap-3"
                      >
                        <svg
                          className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-red-200">{error}</p>
                      </motion.div>
                    )}

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={loading || !phone.trim()}
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader size={18} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Proceed to Payment"
                      )}
                    </button>

                    {/* CANCEL BUTTON */}
                    <button
                      type="button"
                      onClick={handleClose}
                      disabled={loading}
                      className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 rounded-lg transition disabled:opacity-50"
                    >
                      Cancel
                    </button>

                    {/* SECURITY INFO */}
                    <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-700">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Your payment info is secure & encrypted</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
