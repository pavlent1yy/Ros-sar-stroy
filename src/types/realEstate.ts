export type RealEstateObject = {
  id: number;

  status: "В продаже" | "Продан" | "Аренда";

  title: string;

  shortDescription: string;
  fullDescription: string;

  price: string;

  mortgage?: {
    enabled: boolean;
    rate?: string;
  };

  characteristics?: {
    area?: string;
    plot?: string;
    floors?: string;
    yearBuilt?: string;
  };

  investment?: {
    resalePrice?: string;
    rentIncome?: string;
    description?: string;
  };

  images: string[];

  contactButtonText?: string;
};