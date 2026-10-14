export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  avatarText: string;
  rating: number;
  timeAgo: string;
  productGroup: string;
  content: string;
  highlight: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Mustafa Karahan',
    role: 'Şantiye Şefi • Ankara',
    avatarText: 'MK',
    rating: 5,
    timeAgo: '2 hafta önce',
    productGroup: 'SKE 58 Kendinden Konvertörlü Vibratör',
    content:
      'Şantiyelerimizde yıllardır Seçkay’ın 220V kendinden konvertörlü SKE 58 vibratörlerini kullanıyoruz. İthal makinelerin yarı fiyatına çok daha dayanıklı ve güçlü. Arıza yaptığında Ostim’de aynı gün yedek parça ve servis desteği veriyorlar.',
    highlight: 'Yerli Üretim & Aynı Gün Servis',
  },
  {
    id: 2,
    author: 'Cengiz Özdemir',
    role: 'İnşaat Taahhüt Firması • İstanbul',
    avatarText: 'CÖ',
    rating: 5,
    timeAgo: '1 ay önce',
    productGroup: 'SK 4 Dört Çıkışlı Elektrikli Konvertör',
    content:
      'Toplu konut projemiz için 4 adet SK4 elektrikli konvertör ve 60’lık SKV iç vibratör aldık. Beton dökümü sırasında saatlerce kesintisiz çalışmasına rağmen ısınma veya devir düşmesi yapmıyor. Gerçekten sağlam sanayi işi.',
    highlight: 'Yüksek Devir & Sıfır Isınma',
  },
  {
    id: 3,
    author: 'İbrahim Yalçın',
    role: 'Altyapı & Köprü Müteahhidi • Samsun',
    avatarText: 'İY',
    rating: 5,
    timeAgo: '1 ay önce',
    productGroup: 'SKBK B1 Honda GX160 Benzinli Konvertör',
    content:
      'Elektrik hattı olmayan viyadük ve menfez şantiyelerimiz için Honda GX160 motorlu benzinli konvertörlerinden aldık. Tek çekişte çalışıyor, aynı anda iki vibratörü tam güçte besliyor. Kargoyla ertesi gün şantiyemize ulaştı.',
    highlight: 'Elektriksiz Sahada Tam Güç',
  },
  {
    id: 4,
    author: 'Ahmet Başaran',
    role: 'Yapı Denetim & Kalıp Ustası • Konya',
    avatarText: 'AB',
    rating: 5,
    timeAgo: '2 ay önce',
    productGroup: 'Takmatik Kelle Vibratör (50’lik & 60’lık)',
    content:
      'Takmatik kelle vibratör sistemi şantiyede büyük kolaylık sağladı. Hortumu komple değiştirmeden sadece şişe kısmını dakikalar içinde değiştirebiliyoruz. Seçkay ustalarının bobinaj ve sarım işçiliği birinci sınıf.',
    highlight: 'Takmatik Hızlı Değişim',
  },
  {
    id: 5,
    author: 'Hüseyin Polat',
    role: 'İnşaat Malzemeleri & Makina Bayii • Gaziantep',
    avatarText: 'HP',
    rating: 5,
    timeAgo: '3 ay önce',
    productGroup: 'Toptan Beton Vibratörü & Yedek Parça',
    content:
      'Bölgemizdeki müteahhitlere yıllardır Seçkay Makina ürünlerini satıyoruz. Hem 38’likten 80’liğe kadar tüm çapların stokta olması hem de arkasında duran yerli bir üretici olması müşterilerimize güven veriyor.',
    highlight: '81 İle Hızlı Sevkiyat',
  },
  {
    id: 6,
    author: 'Erdal Koçak',
    role: 'Baraj & HES Proje Müdürü • Artvin',
    avatarText: 'EK',
    rating: 5,
    timeAgo: '3 ay önce',
    productGroup: 'SKV 75 & SKV 80 Ağır Hizmet Vibratörü',
    content:
      'Kütle beton dökümlerinde 75’lik ve 80’lik yüksek frekanslı vibratörlerini kullanıyoruz. 12.000 devir vuruş gücü sayesinde betonda hiç boşluk bırakmıyor. Ağır şantiye şartlarına en iyi dayanan yerli marka.',
    highlight: 'Baraj & Kütle Betona Uygun',
  },
  {
    id: 7,
    author: 'Serdar Çetin',
    role: 'Teknik Satınalma Müdürü • İzmir',
    avatarText: 'SÇ',
    rating: 5,
    timeAgo: '4 ay önce',
    productGroup: 'Motor Sarımı & Vibratör Revizyonu',
    content:
      'Elimizdeki farklı markalara ait arızalı beton vibratörlerini ve konvertörleri Ostim’deki Seçkay servisine gönderdik. Bobinaj sarımlarını ve rulman bakımlarını yapıp sıfır ayarında teslim ettiler. Çok dürüst ve işinin ehli esnaflar.',
    highlight: 'Garantili Bobinaj & Tamir',
  },
  {
    id: 8,
    author: 'Kemalettin Doğan',
    role: 'Betonarme & Kalıp Taahhüt • Kayseri',
    avatarText: 'KD',
    rating: 5,
    timeAgo: '5 ay önce',
    productGroup: 'SKE 50 Elektronik Vibratör',
    content:
      'Perde ve kolon dökümlerinde SKE 50 omuz tipi elektronik vibratör kullanıyoruz. Kablo ve hortum boyu çok ideal, dar kalıplarda rahatça çalışılıyor. Fiyat/performans olarak Türkiye’de tek geçerim.',
    highlight: 'Kolon & Perde Betonda İdeal',
  },
];
