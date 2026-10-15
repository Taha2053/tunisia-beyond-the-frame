import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://tunisia-beyond-the-frame.vercel.app/sitemap.xml" };
}
