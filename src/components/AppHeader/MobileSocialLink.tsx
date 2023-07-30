import { SocialNavItem } from "@/data/menus";
import palette from "@/theme/palette";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";
import FAIcon from "../FAIcon";

interface Props {
    item: SocialNavItem;
}

export default function MobileSocialLink({ item }: Props) {
    return (
        <ListItem
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
                aria-label={item.text}
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
    );
}
