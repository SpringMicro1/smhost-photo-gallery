import { Box, Typography } from "@mui/material";
import { Image, GalleryHome } from "../../gallery-types";
import GalleryBanner from "../../components/gallery-banner";

const Image_Sizes = {
  small: 150,
  medium: 250,
  large: 400,
}

const Image_Positions = {
  left: 0,
  right: 1,
}

export default function ListView({images, galleryHome}: {images: Image[], galleryHome: GalleryHome}) {
  return (
    <Box>
      <GalleryBanner galleryHome={galleryHome} />
      {images.map(image =>(
        <Box key={image.id} sx={{display: "flex", flexFlow: "row wrap", p:4}}>
          <img src={image.image} alt={image.title} height={Image_Sizes[image.size??"medium"]} style={{order: Image_Positions[image.position??"left"]}} />
          <Box sx={{flex: 1}}>
            <Typography variant="h6" sx={{p:1}}>{image.title}</Typography>
            <Typography variant="body1" sx={{p:1}}>{image.description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
