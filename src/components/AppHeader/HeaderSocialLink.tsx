import { ComponentProps } from "react";
import palette from "@/theme/palette";
import FAIcon from "../FaIcon";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";

interface Props extends ComponentProps<typeof FAIcon> {
    link: string;
}

export default function HeaderSocialLink({ link, ...restProps }: Props) {
    return (
        <ListItem sx={{ p: 0 }}>
            <Link
                component={RouterLink}
                href={link}
                underline="none"
                sx={{
                    color: palette.blueGrey[600],
                    lineHeight: 1,
                    transition: "color .2s",
                    "&:hover": { color: palette.blueGrey[900] },
                }}
            >
                <FAIcon sx={{ fontSize: "1.75rem" }} {...restProps} />
            </Link>
        </ListItem>
    );
}
