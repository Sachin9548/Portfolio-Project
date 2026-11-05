import kansAdvisory from "@/assets/sites/kans-advisory.jpg";
import mbcIndustries from "@/assets/sites/mbc-industries.jpg";
import sevenSeasJaggery from "@/assets/sites/seven-seas-jaggery.jpg";
import evidentHealthcare from "@/assets/sites/evident-healthcare.jpg";
import bmbFactory from "@/assets/sites/bmb-factory.jpg";
import walkoutWear from "@/assets/sites/walkout-wear.jpg";
import clovellea from "@/assets/sites/clovellea.jpg";
import panemorfos from "@/assets/sites/panemorfos.jpg";
import vmpCollections from "@/assets/sites/vmp-collections.jpg";
import biesca from "@/assets/sites/biesca.jpg";

export type ClientWebsiteCategory = "Custom-coded" | "Shopify e-commerce";

export interface ClientWebsite {
  name: string;
  url: string;
  category: ClientWebsiteCategory;
  preview: string;
  previewAlt: string;
}

// Real delivered websites only — names and links as supplied, nothing invented.
export const clientWebsites: ClientWebsite[] = [
  {
    name: "KANS Advisory",
    url: "https://kansadvisory.com/",
    category: "Custom-coded",
    preview: kansAdvisory,
    previewAlt: "Homepage preview of the KANS Advisory website",
  },
  {
    name: "MBC Industries Pharma",
    url: "https://mbcindustriespharma.com/",
    category: "Custom-coded",
    preview: mbcIndustries,
    previewAlt: "Homepage preview of the MBC Industries Pharma website",
  },
  {
    name: "7 Seas Jaggery",
    url: "https://jaggery.7seasenterprise.com/",
    category: "Custom-coded",
    preview: sevenSeasJaggery,
    previewAlt: "Homepage preview of the 7 Seas Jaggery website",
  },
  {
    name: "Evident Healthcare",
    url: "https://evidenthealthcare.in/",
    category: "Custom-coded",
    preview: evidentHealthcare,
    previewAlt: "Homepage preview of the Evident Healthcare website",
  },
  {
    name: "BMB Factory Kuwait",
    url: "https://bmbfactorykw.com/",
    category: "Custom-coded",
    preview: bmbFactory,
    previewAlt: "Homepage preview of the BMB Factory Kuwait website",
  },
  {
    name: "Walkout Wear",
    url: "https://walkoutwear.in/",
    category: "Shopify e-commerce",
    preview: walkoutWear,
    previewAlt: "Homepage preview of the Walkout Wear online store",
  },
  {
    name: "Clovellea",
    url: "https://clovellea.com/",
    category: "Shopify e-commerce",
    preview: clovellea,
    previewAlt: "Homepage preview of the Clovellea online store",
  },
  {
    name: "Panemorfos",
    url: "https://panemorfos.shop/",
    category: "Shopify e-commerce",
    preview: panemorfos,
    previewAlt: "Homepage preview of the Panemorfos online store",
  },
  {
    name: "VMP Collections",
    url: "https://vmpcollections.com/",
    category: "Shopify e-commerce",
    preview: vmpCollections,
    previewAlt: "Homepage preview of the VMP Collections online store",
  },
  {
    name: "Biesca",
    url: "https://www.biesca.in/",
    category: "Shopify e-commerce",
    preview: biesca,
    previewAlt: "Homepage preview of the Biesca online store",
  },
];
