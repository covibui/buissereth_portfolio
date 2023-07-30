import { Box, Link, List, ListItem, Typography } from "@mui/material";
import AppContainer from "./AppContainer";
import { NAME } from "@/lib/constants";
import { navItems, socialNavItems } from "@/data/menus";
import RouterLink from "next/link";
import FAIcon from "./FAIcon";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import palette from "@/theme/palette";

interface FooterLinkProps {
    link: string;
    text?: string;
    target?: HTMLAttributeAnchorTarget;
    children: ReactNode;
}

const FooterLink = ({ text, link, target, children }: FooterLinkProps) => (
    <ListItem disablePadding>
        <Link
            component={RouterLink}
            href={link}
            aria-label={text}
            target={target}
            sx={{
                color: palette.blueGrey[500],
                lineHeight: 1,
                "&:hover": {
                    color: palette.blueGrey[600],
                },
            }}
        >
            {children}
        </Link>
    </ListItem>
);

export default function AppFooter() {
    return (
        <Box
            component="footer"
            sx={{ py: 4, background: palette.blueGrey[100] }}
        >
            <AppContainer>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: `&copy; ${new Date()
                                .getFullYear()
                                .toString()} ${NAME}`,
                        }}
                    />
                    <Box component="nav">
                        <List disablePadding sx={{ display: "flex", gap: 2 }}>
                            {navItems.map((item, idx) => (
                                <FooterLink key={idx} link={item.link}>
                                    {item.text}
                                </FooterLink>
                            ))}
                            {socialNavItems.map((item, idx) => (
                                <FooterLink
                                    key={idx}
                                    link={item.link}
                                    text={item.text}
                                    target={item.target}
                                >
                                    <FAIcon variant="brands" icon={item.icon} />
                                </FooterLink>
                            ))}
                        </List>
                    </Box>
                </Box>
            </AppContainer>
        </Box>
    );
}
