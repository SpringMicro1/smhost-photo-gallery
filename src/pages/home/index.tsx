import { Box, Button, SxProps, Link } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import { AlbumLink } from "../../gallery-types";
import { PageContainer } from "../../components/layout";
import GalleryBanner from "../../components/gallery-banner";

export default function Home({ permissions, data }: { permissions?: any, data: any }) {
  const recentAlbums: AlbumLink[] = data.albums.slice(0, 5);

  const [loading, setLoading] = React.useState(false);
  const [allAlbums, setAllAlbums] = React.useState<undefined | AlbumLink[]>(
    undefined
  );

  return (
    // <PageContainer permissions={permissions}>
    <>
      <GalleryBanner galleryHome={data.galleryHome} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 6,
          mt: 4,
          "h1, p": { color: "black", m: 0 },
          gap: 1,
        }}
      >
        <h1 style={{ borderBottom: "1px solid black" }}>
          Recently viewed albums:
        </h1>
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 2 }}>
          {recentAlbums.map((albumLink) => (
            <AlbumItem key={albumLink.id} link={albumLink} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 6,
          mt: 4,
          "h1, p": { color: "black", m: 0 },
          gap: 1,
        }}
      >
        <h1 style={{ borderBottom: "1px solid black" }}>All albums:</h1>
        {allAlbums === undefined && (
          <Button
            variant="contained"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setAllAlbums(data.albums);
              }, Math.random() * 700 + 300);
            }}
            disabled={loading}
          >
            Load Albums
          </Button>
        )}
        {allAlbums !== undefined && (
          <Box
            sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            {allAlbums.map((albumLink) => (
              <AlbumItem key={albumLink.id} link={albumLink} />
            ))}
            {[1, 2, 3, 4, 5].map(num => (
              <EmptyAlbumItem key={num} />
            ))}
          </Box>
        )}
      </Box>
      </>
    // </PageContainer>
  );
}

const albumItemStyle: SxProps = {
  flexGrow: 1,
  minWidth: {
    xs: "100%",
    sm: "calc(50% - 1.6rem)",
    md: "calc(33% - 1.6rem)",
    lg: "calc(20% - 1.6rem)",
  },
  height: { xs: 150, sm: 250, lg: 300 },
  overflow: "hidden",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function AlbumItem({ link: { title, image, id } }: { link: AlbumLink }) {
  return (
    <Box
      component={Link}
      href={`./albums/${id}`}
      sx={{
        ...albumItemStyle,
        position: "relative",
        boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)",
        cursor: "pointer",
        transition: "all 0.3s -.1s",
        ":hover": {
          boxShadow: "2px 4px 10px -3px rgba(0,0,0,0.75)",
        },
        backgroundImage: `url(${image})`,
      }}
    >
      <Box
        sx={{ backgroundColor: "#00000080", position: "absolute", bottom: 20 }}
      >
        <Box sx={{ p: 1, color: "white", display: "inline-block" }}>
          {title}
        </Box>
      </Box>
    </Box>
  );
}

function EmptyAlbumItem() {
  return <Box sx={{ ...albumItemStyle, height: 0 }}></Box>;
}
