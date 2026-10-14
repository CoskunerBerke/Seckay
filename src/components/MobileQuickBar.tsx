import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:+905332138069"
          className="flex items-center justify-center gap-1.5 bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Hemen Ara</span>
        </a>

        <a
          href="https://wa.me/905332138069?text=Merhaba%20Se%C3%A7kay%20Makina%2C%20beton%20vibrat%C3%B6r%C3%BC%20ve%20konvert%C3%B6r%20fiyat%20teklifi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Se%C3%A7kay+Makina+Ostim+Mahallesi+1230+Sokak+No+24+Yenimahalle+Ankara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-slate-100 active:bg-slate-200 text-slate-900 font-bold py-2.5 px-3 rounded-lg text-xs border border-slate-300"
        >
          <Navigation className="w-3.5 h-3.5 shrink-0 text-blue-700" />
          <span>Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
};
