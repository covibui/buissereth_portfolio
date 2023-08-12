import { NavItem } from "@/data/menus";
import palette from "@/theme/palette";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";
import { useRouter } from "next/router";

interface Props {
    item: NavItem;
}

export default function MobileLink({ item }: Props) {
    const router = useRouter();
    const isActive = router.pathname === item.link;
    return (
        <ListItem disablePadding>
            <Link
                component={RouterLink}
                href={item.link}
                target={item.target}
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
                        "&:hover, &:focus-visible": {
                            color: palette.blueGrey[900],
                        },
                        "&:focus-visible": {
                            outline: `2px solid ${palette.orange[500]}`,
                            outlineOffset: -2,
                        },
                    },
                    isActive && {
                        color: palette.blueGrey[900],
                    },
                ]}
            >
                {item.text}
            </Link>
        </ListItem>
    );
}
