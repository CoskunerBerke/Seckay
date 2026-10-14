import React from 'react';
import { Wrench, Cpu, Zap, ShieldCheck, Settings, Truck, Phone } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceGroups = [
    {
      num: '01',
      icon: Zap,
      title: '220V Kendinden Konvertörlü Vibratör İmalatı',
      description:
        'Harici konvertör gerektirmeden doğrudan 220V şebeke elektriği ile çalışan, 12.000 d/dk yüksek frekanslı omuz tipi SKE serisi elektronik beton iç vibratörleri.',
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Elektrikli & Benzinli Konvertör Üretimi',
      description:
        '380V girişli 2, 3 ve 4 çıkışlı elektrikli frekans konvertörleri (SK2, SK3, SK4) ile elektriksiz şantiyeler için Honda GX 160 motorlu benzinli konvertörler.',
    },
    {
      num: '03',
      icon: Settings,
      title: 'Takmatik Kelle Vibratörler (Ø38 – Ø80 mm)',
      description:
        '38’lik, 40’lık, 50’lik, 58’lik, 60’lık, 65’lik, 75’lik ve 80’lik tüm çaplarda yüksek vuruş güçlü yedek kelle vibratörler ve takmatik hızlı bağlantı sistemleri.',
    },
    {
      num: '04',
      icon: Wrench,
      title: 'Elektrik Motoru & Vibratör Bobinaj Sarımı',
      description:
        '1987’den gelen bobinaj uzmanlığımızla yüksek ısıya dayanıklı emaye bakır tel kullanarak her marka beton vibratörü statör ve konvertör motor sarımı.',
    },
    {
      num: '05',
      icon: ShieldCheck,
      title: 'Her Marka Beton Vibratörü Tamir & Bakım Servisi',
      description:
        'Yerli ve ithal tüm beton iç vibratörleri, elektronik kartlar, konvertörler, rulman, keçe ve esnek hortum gruplarının garantili tamir ve revizyonu.',
    },
    {
      num: '06',
      icon: Truck,
      title: '81 İle Aynı Gün Yedek Parça & Kargo Sevkiyatı',
      description:
        'Şantiyenizde işin durmaması için Ankara Ostim merkez depomuzdan Türkiye’nin her noktasına aynı gün kargo ve ambar ile makina ve yedek parça gönderimi.',
    },
  ];

  return (
    <section id="uretim" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              İMALAT, BOBİNAJ &amp; TEKNİK SERVİS HİZMETLERİMİZ
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Üretimden Bakıma Tam Kapsamlı Çözüm Merkezi
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Sadece satışta değil, satış sonrasında da kendi bobinaj atölyemiz ve zengin yedek parça stoğumuzla şantiyenizin yanındayız.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {serviceGroups.map((grp) => {
            const Icon = grp.icon;
            return (
              <div
                key={grp.num}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {grp.num}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {grp.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {grp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Field & Workshop Videos Showcase */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="mb-6">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              SAHA ÇALIŞMALARIMIZ &amp; ATÖLYE VİDEOLARIMIZ
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Seçkay Beton Vibratörleri Şantiyede ve Atölyede
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="aspect-video bg-slate-900">
                <video
                  controls
                  playsInline
                  poster="/seckay/video1-poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/seckay/seckay-hero-bg.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold text-slate-900 text-base">
                  Saha Çalışmalarımızdan — Şantiye Beton Dökümü
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Seçkay yüksek frekanslı beton iç vibratörlerinin şantiye tabliye ve perde beton dökümündeki performansı.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="aspect-video bg-slate-900">
                <video
                  controls
                  playsInline
                  poster="/seckay/video2-poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/seckay/saha-2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold text-slate-900 text-base">
                  Seçkay Takmatik Beton Vibratörü Uygulaması
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Pratik takmatik bağlantı sistemi ile hızlı kelle vibratör değişimi ve sızdırmaz gövde yapısı.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Arızalı Vibratör ve Konvertörleriniz İçin Garantili Bobinaj &amp; Tamir Servisi
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Türkiye’nin her yerinden kargo ile göndereceğiniz beton vibratörü ve konvertörler Ostim servisimizde garantili olarak onarılır.
            </p>
          </div>

          <a
            href="tel:+903123851985"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>0312 385 19 85</span>
          </a>
        </div>
      </div>
    </section>
  );
};
