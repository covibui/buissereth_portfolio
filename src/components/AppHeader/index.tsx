import { NAME } from "@/lib/constants";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import AppContainer from "../AppContainer";
import Logo from "../../../public/images/logo.svg";
import palette from "@/theme/palette";
import RouterLink from "next/link";
import HeaderLink from "./HeaderLink";
import { useRouter } from "next/router";
import HeaderSocialLink from "./HeaderSocialLink";
import FAIcon from "../FAIcon";
import { navItems, socialNavItems } from "@/data/menus";
import MobileLink from "./MobileLink";
import MobileSocialLink from "./MobileSocialLink";

const DRAWER_WIDTH = 300;

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
                    <MobileLink key={idx} item={item} />
                ))}
            </List>
            <List
                disablePadding
                sx={{ display: "flex", justifyContent: "flex-start" }}
            >
                {socialNavItems.map((item, idx) => (
                    <MobileSocialLink key={idx} item={item} />
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
                <AppContainer>
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
                                        {NAME}
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
                                    <HeaderLink key={idx} item={item} />
                                ))}
                            </List>
                            <List disablePadding sx={{ display: "flex" }}>
                                {socialNavItems.map((item, idx) => (
                                    <HeaderSocialLink key={idx} item={item} />
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
