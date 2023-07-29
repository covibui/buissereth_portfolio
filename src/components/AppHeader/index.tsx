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
import FAIcon from "../FaIcon";

const DRAWER_WIDTH = 300;
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
    const isMobile = useMediaQuery(breakpoints.down("sm"));
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: "center" }}>
            <Toolbar />
            <List disablePadding>
                {navItems.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                        <Link
                            component={RouterLink}
                            href={item.link}
                            sx={[
                                {
                                    width: 1,
                                    my: 1,
                                    px: 2,
                                    py: 1,
                                    fontSize: 24,
                                    fontWeight: 600,
                                    color: palette.blueGrey[600],
                                    transition: "color .2s",
                                    "&:hover": {
                                        color: palette.blueGrey[900],
                                    },
                                },
                                router.pathname === item.link && {
                                    color: palette.blueGrey[900],
                                },
                            ]}
                        >
                            {item.text}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <List
                disablePadding
                sx={{ display: "flex", justifyContent: "flex-start" }}
            >
                {socialNavItems.map((item, idx) => (
                    <ListItem
                        key={idx}
                        disablePadding
                        sx={{
                            display: "inline-flex",
                            width: "unset",
                            px: 1,
                        }}
                    >
                        <Link
                            component={RouterLink}
                            href={item.link}
                            sx={{
                                display: "inline-flex",
                                p: 1,
                                color: palette.blueGrey[600],
                                lineHeight: 1,
                                transition: "color .2s",
                                "&:hover": {
                                    color: palette.blueGrey[900],
                                },
                            }}
                        >
                            <FAIcon
                                variant="brands"
                                icon={item.icon}
                                sx={{ fontSize: "2.25rem" }}
                            />
                        </Link>
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
                    zIndex: (theme) => theme.zIndex.drawer + 1,
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
                                                "(max-width: 360px)"
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
                                display: { xs: "none", sm: "flex" },
                                gap: 2,
                                height: 1,
                            }}
                        >
                            <List disablePadding sx={{ display: "flex" }}>
                                {navItems.map((item, idx) => (
                                    <HeaderLink
                                        key={idx}
                                        text={item.text}
                                        link={item.link}
                                        active={router.pathname === item.link}
                                    />
                                ))}
                            </List>
                            <List disablePadding sx={{ display: "flex" }}>
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
                                display: { sm: "none" },
                                borderRadius: 0,
                                color: palette.black,
                                "&:hover": {
                                    background: palette.blueGrey[200],
                                },
                            }}
                        >
                            <FAIcon
                                icon={mobileOpen ? "xmark" : "bars"}
                                sx={{ fontSize: "2rem" }}
                            />
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
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 1,
                            maxWidth: DRAWER_WIDTH,
                            background: palette.blueGrey[100],
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}
