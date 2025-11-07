import { X, Banknote, QrCode } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

export const DonationModal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <Banknote className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-3 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Make a Donation</h2>
          <p className="text-lg text-gray-600 mt-2">
            Your contribution directly funds our planting and restoration projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* UPI QR Code Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Scan to Pay with UPI</h3>
            <div className="w-full max-w-[250px] mx-auto p-4 bg-gray-50 rounded-lg border">
              {/* --- IMPORTANT: Replace this with your actual QR code image --- */}
              <img
                src="https://placehold.co/300x300/ffffff/000000?text=Your+UPI+QR+Code"
                alt="UPI QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Use any UPI app (GPay, PhonePe, Paytm)</p>
          </div>

          {/* Bank Account Details Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Direct Bank Transfer (NEFT/IMPS)</h3>
            <div className="space-y-3 text-left">
              <div>
                <strong className="text-gray-700">Account Name:</strong>
                {/* --- IMPORTANT: Replace with your details --- */}
                <p className="text-gray-600">[Grey to Green Foundation]</p>
              </div>
              <div>
                <strong className="text-gray-700">Account Number:</strong>
                <p className="text-gray-600">[YOUR_ACCOUNT_NUMBER]</p>
              </div>
              <div>
                <strong className="text-gray-700">Bank Name:</strong>
                <p className="text-gray-600">[YOUR_BANK_NAME]</p>
              </div>
              <div>
                <strong className="text-gray-700">IFSC Code:</strong>
                <p className="text-gray-600">[YOUR_IFSC_CODE]</p>
              </div>
              <div>
                <strong className="text-gray-700">Account Type:</strong>
                <p className="text-gray-600">[Current / Savings]</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-8">
          Donations are eligible for tax benefits under Section 80G (if applicable). Please email us your transaction details for a receipt.
        </p>
      </div>
    </div>
  );
};