import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    sx?: SxProps;
}

export default function AppContainer({ children, ...restProps }: Props) {
    return (
        <Container maxWidth="lg" sx={{ px: { md: 2.5 }, ...restProps.sx }}>
            {children}
        </Container>
    );
}
