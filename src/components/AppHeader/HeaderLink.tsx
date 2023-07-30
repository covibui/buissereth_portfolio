import palette from "@/theme/palette";
import { Link, ListItem } from "@mui/material";
import RouterLink from "next/link";

interface Props {
    text: string;
    link: string;
    active?: boolean;
}

export default function HeaderLink({ text, link, active }: Props) {
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
                href={link}
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
                    !!active && {
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
                {text}
            </Link>
        </ListItem>
    );
}
