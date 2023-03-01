import { TextField, Box, Typography, Button } from "@mui/material";
import React from "react";
import { Node } from "types/saga";

export type NodeProps = {
  node: Node;
  onNodeDelete: (node: Node) => void;
  onNodeUpdate: (node: Node) => void;
};

export default function NodeComponent({ node, onNodeDelete, onNodeUpdate }: NodeProps) {
  const handleDelete = (node: Node) => {
    onNodeDelete(node);
  };

  const handleNodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string,
    field: "name" | "id" | "func_name" | "compensate_func_name"
  ) => {
    const _node = { ...node, [field]: event.target.value } as Node;
    onNodeUpdate(_node);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #333",
        gap: "0 10px",
      }}
      key={node._id}
    >
      <Box
        sx={{
          flex: "auto",
          display: "flex",
          gap: "10px 0",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Name
          </Typography>
          <TextField
            sx={{ width: "360px" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNodeChange(event, node._id, "name")}
            value={node.name}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Canister ID
          </Typography>
          <TextField
            sx={{ width: "360px" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNodeChange(event, node._id, "id")}
            value={node.id}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Func Name
          </Typography>
          <TextField
            sx={{ width: "360px" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNodeChange(event, node._id, "func_name")}
            value={node.func_name}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Compensate Func Name
          </Typography>
          <TextField
            sx={{ width: "360px" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleNodeChange(event, node._id, "compensate_func_name")
            }
            value={node.compensate_func_name}
          />
        </Box>
      </Box>

      <Button variant="contained" onClick={() => handleDelete(node)}>
        Delete
      </Button>
    </Box>
  );
}
