import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Column - Image and Tagline */}
      <div className="relative w-1/2 bg-dark-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-3000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&q=80')`,
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 1s ease-out forwards;
            }
            .animate-fade-in-delay {
              animation: fadeIn 1s ease-out 0.3s forwards;
              opacity: 0;
            }
          `}
        </style>
        <div className="relative z-10 flex flex-col justify-center h-full bg-gradient-to-r from-black/50 to-transparent p-16">
          <h1 className="text-6xl lg:text-7xl font-['Playfair Display'] font-bold text-white mb-6 tracking-wide leading-tight animate-fade-in">
            Zentrail
          </h1>
          <p className="text-2xl lg:text-3xl font-['Poppins'] text-white/95 max-w-xl leading-relaxed tracking-wide animate-fade-in-delay">
            Let nature lead, we'll guide the way.
          </p>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="w-1/2 flex items-center justify-center bg-light-primary p-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 