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

const drawerWidth = 240;
interface NavItem {
    text: string;
    link: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { text: "Home", link: "/" },
    {
        text: "Projects",
        link: "/projects",
        children: [
            { text: "Work Projects", link: "/projects#work" },
            { text: "School Projects", link: "/projects#school" },
            { text: "Other Projects", link: "/projects#other" },
        ],
    },
    { text: "Resume", link: "/resume" },
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
                        <Link
                            component={RouterLink}
                            href="/"
                            underline="none"
                            sx={{ flexGrow: 1 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: 48, md: 70 },
                                        height: { xs: 48, md: 70 },
                                        "& svg": {
                                            fill: palette.orange[600],
                                        },
                                        mr: { xs: 2, md: 4 },
                                    }}
                                >
                                    <Logo />
                                </Box>
                                <Typography
                                    component="div"
                                    sx={[
                                        useMediaQuery("(max-width: 420px)") && {
                                            display: "none",
                                        },
                                        {
                                            color: palette.black,
                                            fontSize: "1.5rem",
                                            fontWeight: 600,
                                            lineHeight: "normal",
                                            letterSpacing: "0.0975rem",
                                        },
                                    ]}
                                >
                                    {name}
                                </Typography>
                            </Box>
                        </Link>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex", gap: 2 },
                            }}
                        >
                            {navItems.map((item, idx) => (
                                <HeaderLink
                                    key={idx}
                                    text={item.text}
                                    link={item.link}
                                    active={router.pathname === item.link}
                                />
                            ))}
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
