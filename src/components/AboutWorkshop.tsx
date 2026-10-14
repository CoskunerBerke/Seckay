import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const partnerSectors = [
    {
      title: 'Toplu Konut & Kentsel Dönüşüm Şantiyeleri',
      desc: 'Türkiye genelindeki konut, rezidans ve kentsel dönüşüm projelerinde kolon, perde ve tabliye beton dökümü için yüksek frekanslı vibratör tedariği.',
    },
    {
      title: 'Baraj, HES, Köprü & Viyadük Projeleri',
      desc: 'Ağır inşaat ve kütle beton dökümleri için Ø65, Ø75 ve Ø80 mm yüksek vuruş güçlü SKV ve SKE serisi profesyonel iç vibratörler.',
    },
    {
      title: 'Altyapı, Tünel & Yol Müteahhitleri',
      desc: 'Şebeke elektriğinin bulunmadığı saha ve güzergahlarda Honda GX 160 motorlu SKBK B1 benzinli konvertörlerimizle kesintisiz çalışma.',
    },
    {
      title: 'Prekast & Beton Santrali Tesisleri',
      desc: 'Prefabrik yapı elemanları, beton boru ve prekast üretim tesisleri için 24 saat ağır mesaiye dayanıklı elektrikli konvertörler (SK2 / SK3 / SK4).',
    },
    {
      title: '81 İl İnşaat Makinaları & Hırdavat Bayileri',
      desc: 'Ankara Ostim merkez fabrikamızdan Türkiye’nin 81 ilindeki yapı marketlere, makina bayilerine ve teknik servislere toptan ürün ve yedek parça sevkiyatı.',
    },
    {
      title: 'Yurt Dışı İnşaat & İhracat Projeleri',
      desc: 'Türk müteahhitlik firmalarının yurt dışı şantiyelerine ve uluslararası distribütörlere doğrudan imalatçı garantisiyle ihracat.',
    },
  ];

  const productSeries = [
    { name: 'SKE SERİSİ (220V)', type: 'Kendinden Konvertörlü Vibratör' },
    { name: 'SKV SERİSİ (42V)', type: 'Konvertörlü İç Vibratörler' },
    { name: 'SK 2 / SK 3 / SK 4', type: 'Elektrikli Frekans Konvertörleri' },
    { name: 'SKBK B1 (HONDA)', type: 'Benzinli Şantiye Konvertörü' },
    { name: 'Ø38 – Ø80 KELLE', type: 'Takmatik Yedek Vibratör Şişeleri' },
    { name: 'SEÇKAY BOBİNAJ', type: 'Motor Sarımı & Revizyon Servisi' },
  ];

  return (
    <section id="kurumsal" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Part 1: Product Series & Manufacturing Capability */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
                YERLİ İMALAT SERİLERİMİZ &amp; KURUMSAL REFERANS ALANLARIMIZ
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                1987&apos;den Bugüne İnşaat Sektörünün Çözüm Ortağı
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg">
              Ankara Ostim İmalat Merkezi • 81 İl Sevkiyat
            </span>
          </div>

          {/* Series Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-8">
            {productSeries.map((s) => (
              <div
                key={s.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors"
              >
                <div className="font-display text-sm font-bold text-slate-900">{s.name}</div>
                <div className="text-xs font-medium text-slate-600 mt-1">{s.type}</div>
              </div>
            ))}
          </div>

          {/* Highlight Banner with Corporate Service Vans */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
                <CheckCircle2 className="w-4 h-4" />
                1987&apos;den Beri Tecrübe • 2002&apos;den Bugüne Seçkay Makina
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                İmalatçı Güvencesi, Yedek Parça Garantisi ve Hızlı Servis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                1987 yılında elektrik bobinaj ve motor sarımıyla başladığımız yolculuğumuzu, 2002 yılından itibaren <strong className="text-slate-900">Seçkay Elektrik Bobinaj Makine San. ve Tic. Ltd. Şti.</strong> olarak yerli beton vibratörü ve konvertör imalatıyla taçlandırdık. 38&apos;lik, 40&apos;lık, 50&apos;lik, 58&apos;lik, 60&apos;lık, 65&apos;lik, 75&apos;lik ve 80&apos;lik tüm vibratör çaplarında üretim, tamir ve yedek parça desteği sunuyoruz.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <img
                src="/seckay/iletisim-1.png"
                alt="Seçkay Makina Kurumsal Servis Aracı"
                className="w-full h-32 sm:h-36 object-contain bg-white rounded-xl border border-slate-200 p-2"
              />
              <img
                src="/seckay/iletisim-2.jpg"
                alt="Seçkay Makina Mobil Teknik Servis"
                className="w-full h-32 sm:h-36 object-contain bg-white rounded-xl border border-slate-200 p-2"
              />
            </div>
          </div>
        </div>

        {/* Part 2: Partner Companies & Supplied Construction Sectors */}
        <div className="pt-10 border-t border-slate-200">
          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              ÇALIŞILAN FİRMALAR &amp; REFERANS SEKTÖRLERİMİZ
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Türkiye Geneli Hizmet Verdiğimiz İnşaat ve Sanayi Kuruluşları
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerSectors.map((sector) => (
              <div
                key={sector.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs"
              >
                <h4 className="font-display text-base font-bold text-slate-900 mb-2">
                  {sector.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
