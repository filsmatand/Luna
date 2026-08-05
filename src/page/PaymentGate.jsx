import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CreditCardForm from './CreditCardForm'; // Assuming CreditCardForm.jsx is in the same directory

export default function PaymentGate() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: '/' };

  const prices = [
    { id: 'basic', name: 'Accès 1 mois', amount: 5, currency: 'USD', description: 'Accès complet aux questionnaires pendant 1 mois.' },
    { id: 'standard', name: 'Accès 3 mois', amount: 10, currency: 'USD', description: 'Profitez de 3 mois d\'accès illimité à nos ressources.' },
    { id: 'premium', name: 'Accès 1 an', amount: 20, currency: 'USD', description: 'Un an d\'accès premium pour une préparation optimale.' },
  ];

  const paymentMethods = [
    { id: 'mobile_money', name: 'Mobile Money', icon: '📱' },
    { id: 'mpesa', name: 'M-PESA', icon: '🇰🇪' },
    { id: 'orange_money', name: 'Orange Money', icon: '🍊' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'credit_card', name: 'Carte Bancaire', icon: '💳' },
  ];

  const handlePriceSelection = (price) => {
    setSelectedPrice(price);
    setSelectedPaymentMethod(null); // Reset payment method when price changes
  };

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = () => {
    if (!selectedPrice) {
      alert('Veuillez sélectionner un forfait.');
      return;
    }
    if (!selectedPaymentMethod) {
      alert('Veuillez sélectionner un mode de paiement.');
      return;
    }

    if (selectedPaymentMethod.id === 'credit_card') {
      // Credit card payment will be handled by CreditCardForm component
      console.log('Redirecting to credit card form submission logic...');
      // The CreditCardForm will handle its own submission and then call a callback
      return;
    }

    console.log(`Simulating payment for ${selectedPrice.name} via ${selectedPaymentMethod.name}...`);
    // In a real application, this would involve integrating with a payment gateway
    // and handling the payment response based on the selected method.
    setTimeout(() => {
      setPaymentSuccessful(true);
      alert('Paiement réussi ! Vous pouvez maintenant accéder au contenu.');
      navigate(from, { replace: true });
    }, 2000);
  };

  const handleCreditCardPaymentSuccess = () => {
    setPaymentSuccessful(true);
    alert('Paiement par carte bancaire réussi ! Vous pouvez maintenant accéder au contenu.');
    navigate(from, { replace: true });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 to-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Background gradient circles for visual appeal */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/5 backdrop-filter backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl text-white transform transition-all duration-500 hover:scale-[1.01]">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Débloquez Votre Potentiel
        </h2>
        <p className="text-center text-gray-300 mb-10 text-lg">
          Choisissez le forfait qui vous convient et accédez instantanément à nos questionnaires d'entretien d'embauche exclusifs.
        </p>

        {!paymentSuccessful ? (
          <div className="space-y-10">
            {/* Price Selection */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">1. Sélectionnez votre Forfait :</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prices.map((price) => (
                  <div
                    key={price.id}
                    onClick={() => handlePriceSelection(price)}
                    className={`relative p-6 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                      bg-white/5 hover:bg-white/10 border-white/10
                      ${selectedPrice && selectedPrice.id === price.id ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-900/20' : ''}
                      transform hover:-translate-y-1 hover:shadow-xl group`}
                  >
                    <h4 className="font-extrabold text-xl mb-2 text-blue-200 group-hover:text-blue-100">{price.name}</h4>
                    <p className="text-3xl font-bold text-white mb-3">{price.amount} {price.currency}</p>
                    <p className="text-gray-400 text-sm">{price.description}</p>
                    {selectedPrice && selectedPrice.id === price.id && (
                      <span className="absolute top-3 right-3 text-blue-400 text-2xl">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method Selection (conditionally rendered) */}
            {selectedPrice && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">2. Choisissez votre Mode de Paiement :</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => handlePaymentMethodSelection(method)}
                      className={`relative p-6 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                        bg-white/5 hover:bg-white/10 border-white/10
                        ${selectedPaymentMethod && selectedPaymentMethod.id === method.id ? 'border-purple-500 ring-2 ring-purple-500 bg-purple-900/20' : ''}
                        transform hover:-translate-y-1 hover:shadow-xl group`}
                    >
                      <span className="text-4xl mb-3 block text-center">{method.icon}</span>
                      <h4 className="font-bold text-lg text-center text-gray-200 group-hover:text-white">{method.name}</h4>
                      {selectedPaymentMethod && selectedPaymentMethod.id === method.id && (
                        <span className="absolute top-3 right-3 text-purple-400 text-2xl">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Credit Card Form or General Payment Button */}
            {selectedPrice && selectedPaymentMethod && selectedPaymentMethod.id === 'credit_card' ? (
              <CreditCardForm
                amount={selectedPrice.amount}
                currency={selectedPrice.currency}
                onPaymentSuccess={handleCreditCardPaymentSuccess}
              />
            ) : selectedPrice && selectedPaymentMethod && (
              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Payer {selectedPrice.amount} {selectedPrice.currency} via {selectedPaymentMethod.name}
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-green-400 text-3xl font-bold mb-4">🎉 Paiement Réussi !</p>
            <p className="text-gray-300 text-xl">Redirection vers votre contenu...</p>
            <div className="mt-6 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </div>
      {/* Tailwind CSS keyframes for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
