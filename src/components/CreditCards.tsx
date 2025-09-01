import React from 'react';

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  className?: string;
  style?: React.CSSProperties;
}

const CreditCard: React.FC<CreditCardProps> = ({ number, name, expiry, className = '', style }) => {
  return (
    <div className={`border-[1.5px] border-white/40 absolute bg-white/25 backdrop-blur-sm  rounded-xl shadow-lg p-6 w-64 h-40 flex flex-col justify-between transform ${className}`} style={style}>
      <div className="text-white font-mono text-xl tracking-wider">{number}</div>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase">{name}</div>
        <div className="text-white text-sm">{expiry}</div>
      </div>
    </div>
  );
};

export const CreditCards = () => {
  const cards = [
    { number: '1234 1234 1234 1234', name: 'Olivia Rhye', expiry: '09/24' },
    { number: '1234 1234 1234 1234', name: 'Lana Steiner', expiry: '06/24' },
    { number: '1234 1234 1234 1234', name: 'Candice Wu', expiry: '07/24' },
    { number: '1234 1234 1234 1234', name: 'Demi Wilkinson', expiry: '08/24' },
    { number: '1234 1234 1234 1234', name: 'Demi Wilkinson', expiry: '08/24' },
  ];

  return (
    <div className="mt-20 w-full h-fit">

      <div className="relative w-1/2 h-[50px] mx-auto mb-16">
        {cards.map((card, index) => (
          <div className={`absolute left-[50%] w-[300px] pr-[20px] h-fit sm:w-[320px] sm:h-[200px] origin-right  translate-x-[-100%] translate-y-full flex justify-start items-center`} style={{
            transform: `rotate(${(20 + index * 35)}deg)`,
          }}>

            <CreditCard
              key={index}
              {...card}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;
