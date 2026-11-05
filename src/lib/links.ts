import type { FeaturedProject } from "@/data/projects";

/** Literal route paths so TanStack's typed `Link` stays type-safe. */
export type ProjectRoute =
  | "/projects/profit-first"
  | "/projects/ads-manager"
  | "/projects/see-before-buy"
  | "/projects/whatsapp-automation";

export function projectRoute(id: FeaturedProject["id"]): ProjectRoute {
  switch (id) {
    case "ads-manager":
      return "/projects/ads-manager";
    case "see-before-buy":
      return "/projects/see-before-buy";
    case "whatsapp-automation":
      return "/projects/whatsapp-automation";
    default:
      return "/projects/profit-first";
  }
}
