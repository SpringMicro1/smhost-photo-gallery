import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { UseStateType } from "../types";

export function PageContainer({
  children,
  permissions,
  viewConfig,
}: {
  children?: React.ReactNode;
  permissions: any;
  viewConfig?: {
    view: UseStateType<string>;
    viewOptions: string[];
  };
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav permissions={permissions} viewConfig={viewConfig} />
      {children}
    </Box>
  );
}

export function Nav({
  permissions,
  viewConfig,
}: {
  permissions?: any;
  viewConfig?: {
    view: UseStateType<string>;
    viewOptions: string[];
  };
}) {
  const navigate = useNavigate(),
    viewOptions = viewConfig?.viewOptions,
    view = viewConfig?.view[0],
    setView = viewConfig?.view[1];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "blue",
        px: 4,
        div: {
          display: "flex",
          flexDirection: "row",
          gap: 2,
          div: {
            p: 1.5,
            cursor: "pointer",
            transition: "all 0.2s",
            ":hover": {
              backgroundColor: "#00000030",
            },
            color: "white",
          },
        },
      }}
    >
      <Box>
        {/* Left buttons */}
        <Box
          onClick={() => {
            navigate("/");
          }}
        >
          Home/Gallery
        </Box>
        <Box
          onClick={() => {
            navigate("/albums/ID-GOES-HERE");
          }}
        >
          Albums
        </Box>
        {view && viewOptions.length > 1 && (
          <Box
            onClick={() => {
              for (let i = 0; i < viewOptions.length; i++)
                if (viewOptions[i] === view) {
                  setView(viewOptions[i + 1 < viewOptions.length ? i + 1 : 0]);
                  return;
                }
            }}
          >
            Change View
          </Box>
        )}
      </Box>
      <Box>
        <Box
          onClick={() => {
            navigate("/posts");
          }}
        >
          Posts
        </Box>
      </Box>
    </Box>
  );
}
