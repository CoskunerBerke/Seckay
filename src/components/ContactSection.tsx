import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, MessageCircle, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [productCategory, setProductCategory] = useState('Elektronik Tip Beton İç Vibratörü (220V - SKE Serisi)');
  const [orderDetails, setOrderDetails] = useState('');

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Seçkay Makina,\n\n*Firma / Şantiye:* ${companyName || 'Belirtilmedi'}\n*İlgilenilen Ürün / Hizmet:* ${productCategory}\n*Talep Notu:* ${orderDetails || 'Güncel fiyat teklifi ve stok bilgisi rica ediyorum.'}`;
    window.open(
      `https://wa.me/905332138069?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
            ANKARA OSTİM MERKEZ FABRİKA &amp; TEKNİK SERVİS
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            İletişim, Sipariş ve Servis Talebi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Telefon, GSM &amp; Faks (Ostim Merkez)
                  </div>
                  <a
                    href="tel:+903123851985"
                    className="block text-xl font-display font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    0312 385 19 85
                  </a>
                  <a
                    href="tel:+905332138069"
                    className="block text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors mt-1"
                  >
                    GSM / WhatsApp: 0533 213 80 69
                  </a>
                  <span className="block text-xs text-slate-500 mt-1">
                    Faks: 0312 385 19 86
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika &amp; Servis Adresimiz
                  </div>
                  <p className="text-slate-900 text-sm font-bold leading-relaxed">
                    Ostim Mahallesi, 1230. Sokak No:24/C (Çemişgezek İş Merkezi D:26/B)
                  </p>
                  <p className="text-slate-600 text-sm mt-0.5">
                    06374 Yenimahalle / ANKARA
                  </p>
                  <span className="inline-block mt-1.5 text-xs text-blue-800 font-bold bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                    Seçkay Elektrik Bobinaj Makine San. ve Tic. Ltd. Şti.
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    E-Posta &amp; Çalışma Saatleri
                  </div>
                  <a
                    href="mailto:seckay@hotmail.com"
                    className="text-slate-900 hover:text-blue-700 text-sm font-bold transition-colors block"
                  >
                    seckay@hotmail.com
                  </a>
                  <a
                    href="mailto:seckaymakina@gmail.com"
                    className="text-slate-700 hover:text-blue-700 text-xs font-semibold transition-colors block mt-0.5"
                  >
                    seckaymakina@gmail.com
                  </a>
                  <p className="text-slate-600 text-xs mt-1.5 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    Pazartesi – Cumartesi: 08:00 – 18:30
                  </p>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Se%C3%A7kay+Makina+Ostim+Mahallesi+1230+Sokak+No+24+Yenimahalle+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  Haritada Yol Tarifi
                </a>
                <a
                  href="https://wa.me/905332138069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Sipariş
                </a>
              </div>
            </div>
          </div>

          {/* Right: Wholesale / Contractor Quote Form + Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Hızlı Fiyat Teklifi &amp; Yedek Parça Talep Formu
              </h3>
              <p className="text-slate-600 text-xs mb-5">
                İhtiyacınız olan vibratör çapını, konvertör modelini veya bobinaj/tamir talebinizi yazın, hemen fiyatlandıralım.
              </p>

              <form onSubmit={handleWhatsAppQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Firma / Şantiye Adınız
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Örn: Başkent İnşaat / Şantiye Adı"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      İlgilenilen Ürün / Hizmet
                    </label>
                    <select
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="Elektronik Tip Beton İç Vibratörü (220V - SKE Serisi)">Elektronik Tip Beton İç Vibratörü (220V - SKE)</option>
                      <option value="Konvertörlü Tip Beton İç Vibratörü (42V - SKV Serisi)">Konvertörlü Tip Beton İç Vibratörü (42V - SKV)</option>
                      <option value="Elektrikli Konvertör (SK2 / SK3 / SK4)">Elektrikli Konvertör (SK2 / SK3 / SK4)</option>
                      <option value="Benzinli Konvertör (Honda GX 160 - SKBK B1)">Benzinli Konvertör (Honda GX 160 - SKBK B1)</option>
                      <option value="Kelle Vibratör & Yedek Şişe (Ø38 - Ø80 mm)">Kelle Vibratör &amp; Yedek Şişe (Ø38 - Ø80 mm)</option>
                      <option value="Motor Bobinaj Sarımı & Vibratör Tamiri">Motor Bobinaj Sarımı &amp; Vibratör Tamiri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    İstenen Çap, Adet veya Mesajınız
                  </label>
                  <input
                    type="text"
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    placeholder="Örn: 3 adet SKE 58 kendinden konvertörlü vibratör ve 1 adet SK4 konvertör fiyatı..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Satış Hattına Gönder
                  </button>
                  <a
                    href="mailto:seckaymakina@gmail.com?subject=Fiyat%20Teklifi%20Talebi"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold px-5 py-3 rounded-lg text-sm transition-colors border border-slate-300"
                  >
                    <Mail className="w-4 h-4 text-blue-700" />
                    E-Posta Gönder
                  </a>
                </div>
              </form>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-[290px] shadow-xs">
              <iframe
                title="Seçkay Makina Ankara Ostim Konumu"
                src="https://maps.google.com/maps?q=Ostim%20Mahallesi%201230.%20Sokak%20No:24%20Yenimahalle%20Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
