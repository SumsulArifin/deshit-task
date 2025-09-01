export const CompanyLogos = () => {
  const logos = [
    { name: "Boltshift", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>) },
    { name: "Lightbox", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.34 7L12 12l8.66-5"/><path d="M12 22V12"/></svg>) },
    { name: "FeatherDev", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5L20.24 12.24ZM12 12H5"/><path d="M9 15L15 9"/></svg>) },
    { name: "Spherule", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>) },
    { name: "GlobalBank", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>) },
    { name: "Nietzsche", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(83,56,158,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>) },
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-white">
      <p className="text-gray-500 text-center mb-10">Join 4,000+ companies already growing</p>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-800 text-2xl font-semibold">
            {logo.icon}
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
