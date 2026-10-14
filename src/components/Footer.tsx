import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pb-24 lg:pb-10 pt-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="bg-white px-2.5 py-1.5 rounded-md inline-block self-start">
              <img
                src="/seckay/slide-5.jpg"
                alt="Seçkay Makina Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white tracking-wide">
                SEÇKAY ELEKTRİK BOBİNAJ MAKİNE SAN. ve TİC. LTD. ŞTİ.
              </div>
              <p className="text-slate-400 text-sm mt-0.5">
                1987&apos;den Bugüne Beton Vibratörü &amp; Konvertör İmalatı • Ostim / ANKARA
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="tel:+903123851985"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              0312 385 19 85
            </a>
            <a
              href="https://wa.me/905332138069"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-emerald-300 font-bold bg-emerald-600/20 px-4 py-2.5 rounded-lg border border-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              0533 213 80 69
            </a>
            <a
              href="mailto:seckay@hotmail.com"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              seckay@hotmail.com
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>
              Ostim Mahallesi, 1230. Sokak No:24/C (Çemişgezek İş Merkezi D:26/B) 06374 Yenimahalle / ANKARA
            </span>
          </div>
          <p className="font-medium">
            © {new Date().getFullYear()} Seçkay Elektrik Bobinaj Makine San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
