import React from "react";
import { Button, Box } from "@mui/material";
import { useIdentity } from "hooks/useIdentity";
import { shortenAddress } from "utils/index";
import { useToggleKey } from "hooks/useKey";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const identity = useIdentity();

  const toggle = useToggleKey();

  const handleToggleAccount = () => {
    toggle();
  };

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={handleToggleAccount}>
          {shortenAddress(identity?.getPrincipal().toString())}
        </Button>
      </Box>

      <main>{children}</main>
    </Box>
  );
}
