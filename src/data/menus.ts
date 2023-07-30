export interface NavItem {
    text: string;
    link: string;
}

export const navItems: NavItem[] = [
    { text: "Work", link: "/" },
    { text: "About", link: "/about" },
];

export interface SocialNavItem extends NavItem {
    icon: string;
}

export const socialNavItems: SocialNavItem[] = [
    {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/brianna-buissereth-5a79a613a/",
        icon: "linkedin",
    },
];
