export interface SlideImage {
  id: string;
  url: string;
  alt: string;
}

export interface UnitInfo {
  name: string;
  address: string;
  neighborhood: string;
  phone: string;
  whatsapp: string;
  mapUrl?: string;
}

export interface ScheduleInfo {
  title: string;
  schedule: string;
  observation?: string;
}
