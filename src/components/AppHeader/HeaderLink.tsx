import palette from "@/theme/palette";
import { Button } from "@mui/material";
import RouterLink from "next/link";

interface Props {
    text: string;
    link: string;
    active?: boolean;
}

export default function HeaderLink({ text, link, active }: Props) {
    return (
        <Button
            component={RouterLink}
            href={link}
            sx={[
                {
                    position: "relative",
                    borderRadius: 0,
                    mb: -3,
                    pb: 3,
                    px: 3,
                    height: 110,
                    color: palette.blueGrey[600],
                    fontWeight: 600,
                    "&::after": {
                        content: '""',
                        display: "inline-block",
                        position: "absolute",
                        top: "calc(50% + 16px)",
                        width: 12,
                        height: 6,
                        transition: "background .2s",
                    },
                    "&:hover": {
                        background: "none",
                        "&::after": {
                            background: palette.blueGrey[600],
                        },
                    },
                },
                !!active && {
                    background: "#fff",
                    "&::after": {
                        background: palette.blueGrey[600],
                    },
                    "&:hover": {
                        background: "#fff",
                    },
                },
            ]}
        >
            {text}
        </Button>
    );
}
