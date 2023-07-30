import palette from "@/theme/palette";
import FAIcon from "../FaIcon";
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
                    color: palette.blueGrey[600],
                    lineHeight: 1,
                    transition: "color .2s",
                    "&:hover": { color: palette.blueGrey[900] },
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
