import { Project, Service, TeamMember, Partner } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { en: 'Skyline Tower', ru: 'Башня Скайлайн', geo: 'სკაილაინ თაუერი' },
    category: { en: 'Commercial', ru: 'Коммерческий', geo: 'კომერციული' },
    status: 'Ongoing',
    year: '2023',
    location: { en: 'Downtown Metropolis', ru: 'Центр Мегаполиса', geo: 'ქალაქის ცენტრი' },
    description: { 
      en: 'A 45-story mixed-use skyscraper redefining the city skyline with sustainable engineering and modern aesthetics.',
      ru: '45-этажный многофункциональный небоскреб, меняющий горизонт города благодаря устойчивой инженерии и современной эстетике.',
      geo: '45-სართულიანი მრავალფუნქციური ცათამბჯენი, რომელიც ცვლის ქალაქის იერსახეს მდგრადი ინჟინერიითა და თანამედროვე ესთეტიკით.'
    },
    image: 'https://picsum.photos/id/122/800/600',
    gallery: ['https://picsum.photos/id/122/1200/800', 'https://picsum.photos/id/142/1200/800', 'https://picsum.photos/id/192/1200/800']
  },
  {
    id: '2',
    title: { en: 'Ocean View Residency', ru: 'Резиденция Оушен Вью', geo: 'ოკეანის ხედი' },
    category: { en: 'Residential', ru: 'Жилой', geo: 'საცხოვრებელი' },
    status: 'Completed',
    year: '2022',
    location: { en: 'Coastal Bay', ru: 'Прибрежная Бухта', geo: 'სანაპირო ზოლი' },
    description: {
      en: 'Luxury waterfront apartments offering panoramic views and state-of-the-art amenities for exclusive living.',
      ru: 'Роскошные апартаменты на набережной с панорамным видом и современными удобствами для эксклюзивной жизни.',
      geo: 'ლუქს კლასის აპარტამენტები პანორამული ხედებითა და უმაღლესი სტანდარტების კეთილმოწყობით.'
    },
    image: 'https://picsum.photos/id/164/800/600',
    gallery: ['https://picsum.photos/id/164/1200/800', 'https://picsum.photos/id/188/1200/800', 'https://picsum.photos/id/234/1200/800']
  },
  {
    id: '3',
    title: { en: 'Tech Valley Hub', ru: 'Технопарк Вэлли', geo: 'ტექნოლოგიური ჰაბი' },
    category: { en: 'Industrial', ru: 'Промышленный', geo: 'ინდუსტრიული' },
    status: 'Completed',
    year: '2021',
    location: { en: 'Silicon Park', ru: 'Силикон Парк', geo: 'სილიკონ პარკი' },
    description: {
      en: 'A massive logistics and manufacturing facility designed for high-tech production lines.',
      ru: 'Масштабный логистический и производственный комплекс, спроектированный для высокотехнологичных линий.',
      geo: 'მასშტაბური ლოგისტიკური და საწარმოო ობიექტი, შექმნილი მაღალტექნოლოგიური წარმოებისთვის.'
    },
    image: 'https://picsum.photos/id/175/800/600',
    gallery: ['https://picsum.photos/id/175/1200/800', 'https://picsum.photos/id/201/1200/800']
  },
  {
    id: '4',
    title: { en: 'Central Bridge', ru: 'Центральный Мост', geo: 'ცენტრალური ხიდი' },
    category: { en: 'Infrastructure', ru: 'Инфраструктура', geo: 'ინფრასტრუქტურა' },
    status: 'Ongoing',
    year: '2024',
    location: { en: 'River City', ru: 'Ривер Сити', geo: 'მდინარის ქალაქი' },
    description: {
      en: 'A key infrastructure project connecting two major districts, featuring advanced suspension design.',
      ru: 'Ключевой инфраструктурный проект, соединяющий два основных района, с передовой подвесной конструкцией.',
      geo: 'მნიშვნელოვანი ინფრასტრუქტურული პროექტი, რომელიც აკავშირებს ორ მთავარ რაიონს.'
    },
    image: 'https://picsum.photos/id/227/800/600',
    gallery: ['https://picsum.photos/id/227/1200/800', 'https://picsum.photos/id/248/1200/800']
  },
  {
    id: '5',
    title: { en: 'Greenwood Estate', ru: 'Усадьба Гринвуд', geo: 'მწვანე უბანი' },
    category: { en: 'Residential', ru: 'Жилой', geo: 'საცხოვრებელი' },
    status: 'Completed',
    year: '2020',
    location: { en: 'Suburban Hills', ru: 'Пригородные Холмы', geo: 'გარეუბანი' },
    description: {
      en: 'An eco-friendly gated community focusing on renewable energy and sustainable materials.',
      ru: 'Экологичный закрытый поселок, ориентированный на возобновляемую энергию и устойчивые материалы.',
      geo: 'ეკო-მეგობრული დახურული დასახლება, რომელიც ორიენტირებულია განახლებად ენერგიაზე.'
    },
    image: 'https://picsum.photos/id/238/800/600',
    gallery: ['https://picsum.photos/id/238/1200/800', 'https://picsum.photos/id/256/1200/800']
  },
  {
    id: '6',
    title: { en: 'Apex Corporate Center', ru: 'Корпоративный Центр Апекс', geo: 'აპექს ცენტრი' },
    category: { en: 'Commercial', ru: 'Коммерческий', geo: 'კომერციული' },
    status: 'Ongoing',
    year: '2023',
    location: { en: 'Business District', ru: 'Деловой Район', geo: 'ბიზნეს უბანი' },
    description: {
      en: 'Modern office spaces designed for the future of work, incorporating smart building technology.',
      ru: 'Современные офисные помещения, разработанные для будущего работы, с технологиями умного дома.',
      geo: 'თანამედროვე საოფისე სივრცეები, შექმნილი მომავლის სამუშაო გარემოსთვის.'
    },
    image: 'https://picsum.photos/id/296/800/600',
    gallery: ['https://picsum.photos/id/296/1200/800', 'https://picsum.photos/id/364/1200/800']
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: { en: 'General Construction', ru: 'Общее Строительство', geo: 'ზოგადი მშენებლობა' },
    description: {
      en: 'End-to-end construction services for residential, commercial, and industrial projects.',
      ru: 'Полный цикл строительных услуг для жилых, коммерческих и промышленных проектов.',
      geo: 'სრული სამშენებლო მომსახურება საცხოვრებელი, კომერციული და ინდუსტრიული პროექტებისთვის.'
    },
    iconName: 'Hammer',
    image: 'https://picsum.photos/id/366/600/400'
  },
  {
    id: '2',
    title: { en: 'Project Engineering', ru: 'Проектная Инженерия', geo: 'საინჟინრო პროექტირება' },
    description: {
      en: 'Advanced structural engineering and architectural planning ensuring safety and durability.',
      ru: 'Передовая структурная инженерия и архитектурное планирование, обеспечивающие безопасность.',
      geo: 'მოწინავე სტრუქტურული ინჟინერია და არქიტექტურული დაგეგმარება.'
    },
    iconName: 'Ruler',
    image: 'https://picsum.photos/id/385/600/400'
  },
  {
    id: '3',
    title: { en: 'Project Design', ru: 'Дизайн Проектов', geo: 'პროექტის დიზაინი' },
    description: {
      en: 'Innovative architectural designs that blend aesthetics with functionality.',
      ru: 'Инновационные архитектурные проекты, сочетающие эстетику с функциональностью.',
      geo: 'ინოვაციური არქიტექტურული დიზაინი, რომელიც აერთიანებს ესთეტიკასა და ფუნქციონალურობას.'
    },
    iconName: 'ClipboardCheck',
    image: 'https://picsum.photos/id/401/600/400'
  },
  {
    id: '4',
    title: { en: 'Supervision', ru: 'Технический Надзор', geo: 'ზედამხედველობა' },
    description: {
      en: 'Rigorous on-site supervision to ensure quality standards and timeline adherence.',
      ru: 'Строгий надзор на объекте для обеспечения стандартов качества и соблюдения сроков.',
      geo: 'მკაცრი ზედამხედველობა ობიექტზე ხარისხის სტანდარტების უზრუნველსაყოფად.'
    },
    iconName: 'HardHat',
    image: 'https://picsum.photos/id/442/600/400'
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: { en: 'Alexander Smith', ru: 'Александр Смит', geo: 'ალექსანდრე სმიტი' }, position: { en: 'CEO & Founder', ru: 'CEO & Основатель', geo: 'დირექტორი & დამფუძნებელი' }, image: 'https://picsum.photos/id/1005/300/400' },
  { id: '2', name: { en: 'Sarah Johnson', ru: 'Сара Джонсон', geo: 'სარა ჯონსონი' }, position: { en: 'Chief Architect', ru: 'Главный Архитектор', geo: 'მთავარი არქიტექტორი' }, image: 'https://picsum.photos/id/1011/300/400' },
  { id: '3', name: { en: 'Michael Brown', ru: 'Майкл Браун', geo: 'მაიკლ ბრაუნი' }, position: { en: 'Head Engineer', ru: 'Главный Инженер', geo: 'მთავარი ინჟინერი' }, image: 'https://picsum.photos/id/1012/300/400' },
  { id: '4', name: { en: 'Emily Davis', ru: 'Эмили Дэвис', geo: 'ემილი დევისი' }, position: { en: 'Project Manager', ru: 'Менеджер Проекта', geo: 'პროექტის მენეჯერი' }, image: 'https://picsum.photos/id/1027/300/400' },
];

export const PARTNERS: Partner[] = [
  { id: 1, name: 'ConstructCo', logo: 'https://picsum.photos/200/100?random=1' },
  { id: 2, name: 'BuildSafe', logo: 'https://picsum.photos/200/100?random=2' },
  { id: 3, name: 'ArchGroup', logo: 'https://picsum.photos/200/100?random=3' },
  { id: 4, name: 'SteelWorks', logo: 'https://picsum.photos/200/100?random=4' },
  { id: 5, name: 'GlassTech', logo: 'https://picsum.photos/200/100?random=5' },
];