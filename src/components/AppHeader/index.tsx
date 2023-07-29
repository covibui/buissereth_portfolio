import { name } from "@/lib/constants";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppContainer from "../AppContainer";
import Logo from "../../../public/images/logo.svg";
import palette from "@/theme/palette";
import RouterLink from "next/link";
import HeaderLink from "./HeaderLink";
import { useRouter } from "next/router";
import HeaderSocialLink from "./HeaderSocialLink";

const drawerWidth = 240;
interface NavItem {
    text: string;
    link: string;
}

const navItems: NavItem[] = [
    { text: "Work", link: "/" },
    { text: "About", link: "/about" },
];

interface SocialNavItem extends NavItem {
    icon: string;
}

const socialNavItems: SocialNavItem[] = [
    {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/brianna-buissereth-5a79a613a/",
        icon: "linkedin",
    },
];

export default function AppHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down("md"));
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {name}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                component="nav"
                sx={{
                    background: palette.blueGrey[100],
                    boxShadow: "none",
                }}
            >
                <AppContainer
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Toolbar>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: 1,
                                flexGrow: 1,
                            }}
                        >
                            <Link
                                component={RouterLink}
                                href="/"
                                underline="none"
                                sx={{
                                    display: "inline",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            "& svg": {
                                                fill: palette.orange[600],
                                            },
                                        }}
                                    >
                                        <Logo />
                                    </Box>
                                    <Typography
                                        component="div"
                                        sx={[
                                            useMediaQuery(
                                                "(max-width: 420px)"
                                            ) && {
                                                display: "none",
                                            },
                                            {
                                                color: palette.black,
                                                fontSize: "1.25rem",
                                                fontWeight: 600,
                                                lineHeight: "1.75rem",
                                            },
                                        ]}
                                    >
                                        {name}
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 2,
                                height: 1,
                            }}
                        >
                            <List sx={{ display: "flex", p: 0 }}>
                                {navItems.map((item, idx) => (
                                    <HeaderLink
                                        key={idx}
                                        text={item.text}
                                        link={item.link}
                                        active={router.pathname === item.link}
                                    />
                                ))}
                            </List>
                            <List sx={{ display: "flex", p: 0 }}>
                                {socialNavItems.map((item, idx) => (
                                    <HeaderSocialLink
                                        key={idx}
                                        variant="brands"
                                        icon={item.icon}
                                        link={item.link}
                                    />
                                ))}
                            </List>
                        </Box>
                        <IconButton
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{
                                ml: 2,
                                display: { md: "none" },
                                color: palette.black,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppContainer>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen && isMobile}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}
