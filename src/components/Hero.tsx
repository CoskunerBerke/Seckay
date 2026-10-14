import React from 'react';
import { Phone, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Full-Screen Continuous Background Video from Seçkay's Real Construction Site */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/seckay/video1-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none"
      >
        <source src="/seckay/seckay-hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Scientific High-Contrast Dark Gradient Overlay (ARMA style) */}
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Türkiye&apos;nin dört bir yanındaki şantiyelere{' '}
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              beton vibratörü ve konvertör imalatı
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            1987&apos;den bugüne <strong className="text-white">Seçkay Elektrik Bobinaj Makine</strong> güvencesiyle Ankara Ostim&apos;de; 220V kendinden konvertörlü elektronik vibratörler, elektrikli/benzinli konvertörler, Ø38–Ø80mm kelle vibratör üretimi, motor sarımı ve garantili teknik servis.
          </p>

          {/* Clean Action Buttons (Matching Screenshot 3 style) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="https://wa.me/905332138069?text=Merhaba%20Se%C3%A7kay%20Makina%2C%20beton%20vibrat%C3%B6r%C3%BC%20ve%20konvert%C3%B6r%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 bg-slate-900/75 hover:bg-slate-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <span>Ürünleri &amp; Teknik Tabloları İncele</span>
            </a>

            <a
              href="tel:+905332138069"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>0533 213 80 69</span>
            </a>
          </div>

          {/* Trust Footnote Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              1987&apos;den Beri Yerli İmalatçı • 38&apos;likten 80&apos;liğe Tüm Çaplar Stokta • 81 İle Aynı Gün Kargo &amp; Yedek Parça
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
