import { ComponentProps } from "react";
import MuiIcon from "@mui/material/Icon";

interface Props extends ComponentProps<typeof MuiIcon> {
  icon: string;
  variant?: "regular" | "solid" | "brands";
}

export default function FAIcon({
  icon,
  variant = "solid",
  ...restProps
}: Props) {
  return (
    <MuiIcon
      baseClassName={`fa-${variant} fa-${icon}`}
      {...restProps}
      sx={{
        // Make compatible with FontAwesome
        // Match 24px = 3 * 2 + 1.125 * 16
        boxSizing: "content-box",
        padding: 1 / 4,
        fontSize: "1.125rem",
        ...restProps.sx,
      }}
    />
  );
}
