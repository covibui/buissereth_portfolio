import palette from "@/theme/palette";
import FAIcon from "../FAIcon";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";
import { SocialNavItem } from "@/data/menus";

interface Props {
    item: SocialNavItem;
}

export default function HeaderSocialLink({ item }: Props) {
    return (
        <ListItem sx={{ p: 0 }}>
            <Link
                component={RouterLink}
                href={item.link}
                aria-label={item.text}
                target={item.target}
                sx={{
                    display: "flex",
                    color: palette.blueGrey[600],
                    lineHeight: 1,
                    transition: "color .2s",
                    "&:hover, &:focus-visible": {
                        color: palette.blueGrey[900],
                    },
                    "&:focus-visible": {
                        outline: `2px solid ${palette.orange[500]}`,
                    },
                }}
            >
                <FAIcon
                    variant="brands"
                    icon={item.icon}
                    sx={{ fontSize: "1.75rem" }}
                />
            </Link>
        </ListItem>
    );
}
