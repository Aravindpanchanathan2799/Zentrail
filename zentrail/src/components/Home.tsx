import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDarkMode ? 'bg-[#001F3F] text-[#EAD8B1]' : 'bg-[#FAF6E3] text-[#2A3663]'
    }`}>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Main content */}
      <div className="relative z-20 h-screen flex flex-col justify-center items-start p-12 lg:p-24">
        <div className="max-w-4xl animate-float">
          <h1 className="text-7xl lg:text-9xl font-extrabold mb-8 font-['Playfair Display'] text-white tracking-tight leading-none">
            Zentrail
          </h1>
          <p className="text-3xl lg:text-5xl mb-16 font-['Poppins'] text-white/90 max-w-3xl leading-tight tracking-wide">
            Let nature lead, we'll guide the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className={`p-8 rounded-xl backdrop-blur-md bg-white/10 transform transition-all duration-300 hover:scale-105`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-['Playfair Display'] text-white tracking-wide">
                Plan Your Trip
              </h2>
              <p className="text-xl lg:text-2xl font-['Poppins'] text-white/90 leading-relaxed">
                Discover and plan your next adventure in national parks across the United States.
              </p>
            </div>
            <div className={`p-8 rounded-xl backdrop-blur-md bg-white/10 transform transition-all duration-300 hover:scale-105`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-['Playfair Display'] text-white tracking-wide">
                Track Your Progress
              </h2>
              <p className="text-xl lg:text-2xl font-['Poppins'] text-white/90 leading-relaxed">
                Keep track of the trails you've explored and the ones you want to visit next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add floating animation
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// Add styles to head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Home; 