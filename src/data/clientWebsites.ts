export type ClientWebsiteCategory = "Custom-coded" | "Shopify e-commerce";

export interface ClientWebsite {
  name: string;
  url: string;
  category: ClientWebsiteCategory;
  preview: string;
  previewAlt: string;
}

export const clientWebsites: ClientWebsite[] = [
  {
    name: "KANS Advisory",
    url: "https://kansadvisory.com/",
    category: "Custom-coded",
    preview: "/sites/kans-advisory.jpg",
    previewAlt: "Homepage preview of the KANS Advisory website",
  },
  {
    name: "MBC Industries Pharma",
    url: "https://mbcindustriespharma.com/",
    category: "Custom-coded",
    preview: "/sites/mbc-industries.jpg",
    previewAlt: "Homepage preview of the MBC Industries Pharma website",
  },
  {
    name: "7 Seas Jaggery",
    url: "https://jaggery.7seasenterprise.com/",
    category: "Custom-coded",
    preview: "/sites/seven-seas-jaggery.jpg",
    previewAlt: "Homepage preview of the 7 Seas Jaggery website",
  },
  {
    name: "Evident Healthcare",
    url: "https://evidenthealthcare.in/",
    category: "Custom-coded",
    preview: "/sites/evident-healthcare.jpg",
    previewAlt: "Homepage preview of the Evident Healthcare website",
  },
  {
    name: "BMB Factory Kuwait",
    url: "https://bmbfactorykw.com/",
    category: "Custom-coded",
    preview: "/sites/bmb-factory.jpg",
    previewAlt: "Homepage preview of the BMB Factory Kuwait website",
  },
  {
    name: "Walkout Wear",
    url: "https://walkoutwear.in/",
    category: "Shopify e-commerce",
    preview: "/sites/walkout-wear.png",
    previewAlt: "Homepage preview of the Walkout Wear online store",
  },
  {
    name: "Clovellea",
    url: "https://clovellea.com/",
    category: "Shopify e-commerce",
    preview: "/sites/clovellea.png",
    previewAlt: "Homepage preview of the Clovellea online store",
  },
  {
    name: "Panemorfos",
    url: "https://panemorfos.shop/",
    category: "Shopify e-commerce",
    preview: "/sites/panemorfos.png",
    previewAlt: "Homepage preview of the Panemorfos online store",
  },
  {
    name: "VMP Collections",
    url: "https://vmpcollections.com/",
    category: "Shopify e-commerce",
    preview: "/sites/vmp-collections.png",
    previewAlt: "Homepage preview of the VMP Collections online store",
  },
  {
    name: "Biesca",
    url: "https://www.biesca.in/",
    category: "Shopify e-commerce",
    preview: "/sites/biesca.jpg",
    previewAlt: "Homepage preview of the Biesca online store",
  },
  {
    name: "Vaaki",
    url: "https://www.vaaki.com/",
    category: "Shopify e-commerce",
    preview: "/sites/vaaki.png",
    previewAlt: "Homepage preview of the Vaaki online store",
  },
  {
    name: "Clay Store",
    url: "https://claystore.co.in/",
    category: "Shopify e-commerce",
    preview: "/sites/claystore.png",
    previewAlt: "Homepage preview of the Clay Store online store",
  },
  {
    name: "Parts Pick",
    url: "https://www.partspick.in/",
    category: "Shopify e-commerce",
    preview: "/sites/partspick.png",
    previewAlt: "Homepage preview of the Parts Pick online store",
  },
  {
    name: "Kosei Moissanites",
    url: "https://koseimoissanites.com/",
    category: "Shopify e-commerce",
    preview: "/sites/kosei-moissanites.png",
    previewAlt: "Homepage preview of the Kosei Moissanites online store",
  },
];
