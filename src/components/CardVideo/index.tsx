import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../app/config/theme";
import StatusSelect from "@/components/StatusSelect";
import ReactMarkdown from "react-markdown";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" sx={{ color: theme.palette.textColor?.light }} {...props} />
  ),
};
interface CardVideoProps{
  text : string;
  title: string;
  linkVideo: string;
  references?: string;
}
export const CardVideo: React.FC<CardVideoProps>=({ text, title, linkVideo, references }) => {

  function getYouTubeEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <Box sx={theme.customStyles.cardVideo}>
      <Box sx={theme.customStyles.cardVideoLink}>
        <iframe
          width="100%"
          height="332"
          src={getYouTubeEmbedUrl(linkVideo)}
        />
        <Box sx={theme.customStyles.cardVideoNumber}>
          <ReactMarkdown components={components}>
            {title}
          </ReactMarkdown>
          <ReactMarkdown components={components}>
            {references}
          </ReactMarkdown>
        </Box>
        <Box sx={theme.customStyles.cardVideoDescription}>
          <ReactMarkdown components={components}>
            {text}
          </ReactMarkdown>
        </Box>
        <Box sx={theme.customStyles.cardVideoSelect}>
          <StatusSelect />
        </Box>
      </Box>
    </Box>
  );
}