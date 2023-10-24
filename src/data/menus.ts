import { HTMLAttributeAnchorTarget } from "react";

export interface NavItem {
  text: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

export const navItems: NavItem[] = [
  { text: "Work", link: "/#projects" },
  { text: "Resume", link: "/resume/" },
];

export interface SocialNavItem extends NavItem {
  // text prop is used for aria-label value
  icon: string; // select from FontAwesome Brands
}

export const socialNavItems: SocialNavItem[] = [
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/brianna-buissereth-5a79a613a/",
    icon: "linkedin",
    target: "_blank",
  },
];
