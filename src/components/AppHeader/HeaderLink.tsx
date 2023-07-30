import { NavItem } from "@/data/menus";
import palette from "@/theme/palette";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";
import { useRouter } from "next/router";

interface Props {
    item: NavItem;
}

export default function HeaderLink({ item }: Props) {
    const router = useRouter();
    const isActive = router.pathname === item.link;
    return (
        <ListItem
            sx={{
                display: "flex",
                mt: 2,
                p: 0,
            }}
        >
            <Link
                component={RouterLink}
                href={item.link}
                target={item.target}
                sx={[
                    {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: 1,
                        width: 100,
                        pb: 2,
                        px: 3,
                        color: palette.blueGrey[600],
                        fontWeight: 600,
                        textAlign: "center",
                        transition: "background .2s",
                        "&::after": {
                            content: '""',
                            display: "inline-block",
                            position: "absolute",
                            bottom: 32,
                            width: 8,
                            height: 4,
                            borderRadius: 1,
                            transition: "all .2s",
                        },
                        "&:hover": {
                            background: palette.blueGrey[200],
                            color: palette.blueGrey[900],
                            "&::after": {
                                background: palette.blueGrey[600],
                                bottom: 24,
                            },
                        },
                    },
                    !!isActive && {
                        background: palette.white,
                        color: palette.blueGrey[900],
                        "&::after": {
                            background: palette.blueGrey[600],
                            bottom: 24,
                        },
                        "&:hover": {
                            background: palette.white,
                        },
                    },
                ]}
            >
                {item.text}
            </Link>
        </ListItem>
    );
}
