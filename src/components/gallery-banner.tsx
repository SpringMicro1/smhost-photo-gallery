import { Box } from "@mui/material";
import { GalleryHome } from "../gallery-types";

export default function GalleryBanner ({galleryHome}: {galleryHome: GalleryHome}) {
  return (
    <Box sx={{ py: 4, minHeight: 100, background: galleryHome.bannerImage ? `center ${galleryHome.bannerImage.positionY||"center"} / cover url(${galleryHome.bannerImage.url})`:"black" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 6,
          "h1, p": { color: "white", m: 0, gap: 2 },
          textShadow: "1px 1px 4px black",
        }}
      >
        <h1>{galleryHome.title}</h1>
        <p>{galleryHome.description}</p>
      </Box>
    </Box>
  )
}