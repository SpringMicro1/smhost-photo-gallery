/* eslint react/jsx-key: off */
import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin"; // eslint-disable-line import/no-unresolved
import { render } from "react-dom";
import { Route } from "react-router-dom";

import authProvider from "./authProvider";
import comments from "./comments";
import CustomRouteLayout from "./customRouteLayout";
import CustomRouteNoLayout from "./customRouteNoLayout";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./Layout";
import posts from "./posts";
import users from "./users";
import tags from "./tags";
import Home from "./pages/home";
import AlbumViewer from "./pages/albums";
import data from "./data";

// render(
//   <React.StrictMode>
//     <Admin
//       authProvider={authProvider}
//       dataProvider={dataProvider}
//       i18nProvider={i18nProvider}
//       title="Example Admin"
//       layout={Layout}
//     >
//       {(permissions) => (
//         <>
//           <CustomRoutes noLayout>
//             <Route path="/" element={<Home permissions={permissions} data={data} />} />
//             <Route
//               path="/albums"
//               element={<Home permissions={permissions} data={data} />}
//             />
//             <Route
//               path="/albums/:id"
//               element={<AlbumViewer permissions={permissions} data={data} />}
//             />
//           </CustomRoutes>
//           {permissions ? <Resource name="users" {...users} /> : null}
//           <CustomRoutes noLayout>
//             <Route
//               path="/custom1"
//               element={<CustomRouteNoLayout title="Posts from /custom1" />}
//             />
//           </CustomRoutes>
//           <CustomRoutes>
//             <Route
//               path="/custom2"
//               element={<CustomRouteLayout title="Posts from /custom2" />}
//             />
//           </CustomRoutes>
//         </>
//       )}
//       <Resource name="posts" {...posts} />
//       <Resource name="comments" {...comments} />
//       <Resource name="tags" {...tags} />
//       <CustomRoutes>
//         <Route
//           path="/custom3"
//           element={<CustomRouteLayout title="Posts from /custom3" />}
//         />
//       </CustomRoutes>
//     </Admin>
//   </React.StrictMode>,
//   document.getElementById("root")
// );





type MyProps = {
  // using `interface` is also ok
  albumParameter: string|undefined;
  data: any;
  permissions: any;
};
type MyState = {
};
// The following code is for the npm component
class PhotoGallery extends React.Component<MyProps, MyState> {
  render(): React.ReactNode {
    const {albumParameter, data, permissions} = this.props;
    // (
    //   albumParameter: string|undefined,
    //   data: any,
    //   permissions: any,
    // )
    if (albumParameter === undefined) {
      return (
        <Home permissions={permissions} data={data} />
      )
    } else {
      return (
        <AlbumViewer permissions={permissions} data={data} id={albumParameter} />
      )
    }
  }
}

// begin testing code
import { useParams } from "react-router";

render (
  <PhotoGallery albumParameter={undefined} data={data} permissions={{}} />,
  document.getElementById("root")
)
// end testing code


export default PhotoGallery;