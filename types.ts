export type Language = 'en' | 'ru' | 'geo';

export type LocalizedString = {
  [key in Language]: string;
};

export interface Project {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  status: 'Completed' | 'Ongoing';
  year: string;
  location: LocalizedString;
  description: LocalizedString;
  image: string;
  gallery: string[];
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: 'Hammer' | 'Ruler' | 'HardHat' | 'Truck' | 'ClipboardCheck';
  image: string;
}

export interface TeamMember {
  id: string;
  name: LocalizedString;
  position: LocalizedString;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}