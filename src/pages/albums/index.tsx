import { Box, Button, SxProps, Typography } from "@mui/material";
import React from "react";
import { Album, AlbumLink, GalleryHome, viewtype } from "../../gallery-types";
import { PageContainer } from "../../components/layout";
import ListView from "./list-view";
import PictureView from "./picture-view";
import { useParams } from "react-router";

export default function AlbumViewer({ permissions, data, id: propsId }: { permissions?: any, data: any, id?: string }) {
  const recentAlbums: AlbumLink[] = data.albums.slice(0, 5);

  const [loading, setLoading] = React.useState(false);
  const [view, setView] = React.useState<viewtype>("list"); // TODO Set to the default view
  const viewOptions: viewtype[] & { 0: viewtype } = ["list", "picture"];

  const albumId = propsId || useParams().id;
  const album = data.albums.find(a => a.id === albumId);

  return (
    // <PageContainer
    //   permissions={permissions}
    //   viewConfig={{
    //     view: [view, setView],
    //     viewOptions,
    //   }}
    // >
    <>
      {/* VIEWS */}
      {album ? (
        album.images.length>=1 ? (
            <>
              {view === "list" && <ListView galleryHome={data.galleryHome} images={album.images} />}
              {view === "picture" && <PictureView />}
            </>
          ) : (
            <Typography variant="body1">This album is empty.</Typography>
          )
      ) : (
        <Typography variant="body1">This album does not exist.</Typography>
      )}
    {/* </PageContainer> */}
    </>
  );
}
