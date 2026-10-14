import React, { useState } from 'react';
import { PRODUCTS_LIST, ProductItem } from '../data/productsData';
import { X, Phone, MessageCircle, Table } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Tüm Ürünler (10 Model)' },
  { id: 'elektronik-vibrator', label: 'Elektronik Vibratörler (220V)' },
  { id: 'konvertorlu-vibrator', label: 'Konvertörlü Vibratörler (42V)' },
  { id: 'elektrikli-konvertor', label: 'Elektrikli Konvertörler' },
  { id: 'benzinli-konvertor', label: 'Benzinli Konvertörler (Honda)' },
  { id: 'kelle-vibrator', label: 'Kelle Vibratörler (Ø38–Ø80)' },
];

const SPEC_TABLES = [
  {
    title: 'Elektronik Tip Beton İç Vibratörleri (SKE 40 – SKE 80)',
    subtitle: '50/200 Hz • 12.000 d/dk • 3x220V • 5m Hortum / 10m Kablo',
    img: '/seckay/elektronik-1.png',
  },
  {
    title: 'Konvertörlü Tip Beton İç Vibratörleri (SKV 40 – SKV 80)',
    subtitle: '200 Hz • 12.000 d/dk • 42-55V • 5m Hortum / 13m Kablo',
    img: '/seckay/konvertorlu-1.png',
  },
  {
    title: 'Elektrikli Yüksek Frekans Konvertörleri (SK2 / SK3 / SK4)',
    subtitle: '380V 50Hz Giriş • 42-55V 200Hz Çıkış • 2,2 kW / 3,2 kW / 4,0 kW',
    img: '/seckay/elektrikli-1.png',
  },
  {
    title: 'Benzinli Konvertör SKBK B1 (Honda GX 160 Motorlu)',
    subtitle: '5,5 HP Honda GX 160 • 3.000 RPM • 42/55V 200Hz 27A • 2 Priz',
    img: '/seckay/benzinli-2.png',
  },
];

export const WorkshopGallery: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeCat === 'all'
      ? PRODUCTS_LIST
      : PRODUCTS_LIST.filter((p) => p.category === activeCat);

  return (
    <section id="urunler" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              FABRİKA İMALAT KATALOĞU &amp; TEKNİK VERİLER
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Beton Vibratörleri, Konvertörler ve Kelle Şişeler
            </h2>
          </div>

          <a
            href="https://wa.me/905332138069?text=Merhaba%20Se%C3%A7kay%20Makina%2C%20g%C3%BCncel%20fiyat%20listesi%20ve%20stok%20bilgisi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Toptan &amp; Perakende Fiyat Listesi İste</span>
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeCat === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="relative h-60 bg-white p-4 flex items-center justify-center border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-200">
                    {product.sizes}
                  </span>
                </div>

                <div className="p-5">
                  <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1">
                    Kod: {product.code}
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.specs}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-800">
                <span className="flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5" />
                  Teknik Tablo &amp; Fiyat Sor
                </span>
                <span>İncele →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Technical Specification Tables */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              FABRİKA TEKNİK VERİ TABLOLARI
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Seçkay Makina Resmi Teknik Özellik Cetvelleri
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SPEC_TABLES.map((t) => (
              <div
                key={t.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
              >
                <div className="mb-3">
                  <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    {t.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.subtitle}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-2 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail & Technical Spec Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-50 p-6 flex items-center justify-center h-64 border-b border-slate-200">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-xs font-extrabold">
                    {selectedProduct.brand}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                    Model: {selectedProduct.code}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                    {selectedProduct.sizes}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-1.5">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProduct.specs}
                </p>
              </div>

              {selectedProduct.specTableImage && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="text-xs font-bold text-slate-700 mb-2">
                    Teknik Özellik Tablosu:
                  </div>
                  <img
                    src={selectedProduct.specTableImage}
                    alt={`${selectedProduct.name} Teknik Tablo`}
                    className="w-full h-auto object-contain rounded bg-white p-1 border border-slate-200"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/905332138069?text=${encodeURIComponent(
                    `Merhaba Seçkay Makina, "${selectedProduct.name}" (${selectedProduct.code}) modeli için güncel fiyat teklifi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ile Fiyat Teklifi Al</span>
                </a>
                <a
                  href="tel:+905332138069"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm text-center transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hemen Ara: 0533 213 80 69</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
