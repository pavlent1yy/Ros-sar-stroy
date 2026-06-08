export type Project = {
  id: number;
  category: string;
  title: string;
  location?: string;
  preview: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
};