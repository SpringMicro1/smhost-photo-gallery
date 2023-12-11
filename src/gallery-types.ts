export type viewtype = "picture" | "list";

export type GalleryHome = {
  // TODO: Integrate with the homepage.
  title: string;
  description: string;
  bannerImage: {
    url: string;
    positionY?: string;
  };
  // * All albums are separated from this type.
  // * Recent albums are attached to the user or in local storage.
};

export type permissions =
  | "gallery-admin" // Manages all accounts including managers.
  | "gallery-manager" // Manages all albums.
  | "viewer" // The default permission of users and unauthenticated users. Can view any public album.
  | string; // Any permission that is added by gallery-admin.

export interface Album extends AlbumLink {
  description: string;
  public: boolean; // When set to true, anyone can view the album and Album.viewingPermissions is undefined.
  viewingPermissions?: permissions[]; // A list of permission types that are allowed to view the album. (gallery-admin and gallery-manager are implied)
  editingPermissions: permissions[]; // A list of permission types that are allowed to edit the album. (gallery-admin and gallery-manager are implied)
  images: Image[];
  defaultView: viewtype;
  allowedViews: viewtype[] & { 0: viewtype }; // At least one view required.
}

export interface AlbumLink {
  // The data needed for listing an album on the homepage.
  id: string;
  title: string;
  image: string;
}

export interface Image {
  // An Image in the gallery.
  id: number;
  title: string;
  description: string;
  image: string;
  // * Potential styling things that can be built out in list mode:
  position?: "right" | "left"; // Used in list mode to position the image to the left or to the right side of the list. (Per image)
  size?: "small" | "medium" | "large"; // Used in list mode to size the image. (Per image)
}
