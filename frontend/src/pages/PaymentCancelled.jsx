import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/buy");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Error Icon with Animation */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-red-200 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't process your payment. Please check your payment details
            and try again.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onBack}
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-6 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium mb-1">
              Need Any Help?
            </p>
            <p className="text-xs text-blue-600">
              Contact support: m.tayyab.92.work@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
