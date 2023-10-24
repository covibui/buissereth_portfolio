import { VideoSection } from "@/types";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import AppContainer from "../AppContainer";
import palette from "@/theme/palette";
import convertToKebabCase from "@/utils/convertToKebabCase";

interface Props {
  section: VideoSection;
}

export default function ProjectVideoSection({ section }: Props) {
  const { subtitle, videoId } = section;

  const [isClient, setIsClient] = useState(false);
  // prevent visible resizing on player mount
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Loader = () => (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        display: "grid",
        placeContent: "center",
        background: palette.blueGrey[950],
      }}
    >
      <CircularProgress size={60} sx={{ color: palette.blueGrey[300] }} />
    </Box>
  );
  return (
    <Box component="section" id={convertToKebabCase(subtitle)}>
      <Box sx={{ position: "relative", minHeight: 1, pb: 4 }}>
        <AppContainer sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              position: "relative",
              paddingTop: `${(9 / 16) * 100}%`,
            }}
          >
            {isClient ? (
              <>
                <ReactPlayer
                  url={`https://player.vimeo.com/video/${videoId}`}
                  className="react-player"
                  controls
                  width="100%"
                  height="100%"
                  style={{
                    visibility: isReady ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  onReady={() => setIsReady(true)}
                  config={{
                    playerOptions: {
                      color: "FFFFFF",
                    },
                  }}
                />
                {!isReady && <Loader />}
              </>
            ) : (
              <Loader />
            )}
          </Box>
        </AppContainer>
        <Box
          sx={{
            position: "absolute",
            height: "calc(50% + 32px)",
            width: 1,
            left: 0,
            bottom: 0,
            background: palette.blueGrey[100],
          }}
        >
          <Box />
        </Box>
      </Box>
    </Box>
  );
}
