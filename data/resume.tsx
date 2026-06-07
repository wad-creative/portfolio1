import { HomeIcon } from "lucide-react";
import { MessageCircle, Facebook, Instagram } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";

export const DATA = {
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/message/NTKZEVR7O32NH1",
        icon: MessageCircle,
        navbar: true,
      },

      Facebook: {
        name: "Facebook",
        url: "https://web.facebook.com/profile.php?id=61581396564346",
        icon: Facebook,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/wad_creatives/",
        icon: Instagram,
        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@wad_creative?is_from_webapp=1&sender_device=pc",
        icon: TbBrandTiktok,

        navbar: true,
      },
    },
  },
} as const;
