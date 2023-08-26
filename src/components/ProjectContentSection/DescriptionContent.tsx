import { Typography } from "@mui/material";

interface Props {
  description: string;
}

export default function DescriptionContent({ description }: Props) {
  return (
    <>
      {description.split("\\n").map((paragraph, idx) => (
        <Typography key={idx}>{paragraph}</Typography>
      ))}
    </>
  );
}
