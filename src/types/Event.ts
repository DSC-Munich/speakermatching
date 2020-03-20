export interface Event {
  title: string;
  date: Date;
  location: string;
  organizer: string;
  image: string;
  topics: string[];
  totalSlots?: number;
  eventDescription?: string;
  speakerDescription?: string;
  budgetDescription?: string;
}
