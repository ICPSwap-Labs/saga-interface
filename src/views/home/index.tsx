import MainLayout from "layout/MainLayout";
import { TextField, Box, Typography, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { create } from "hooks/saga";
import { useTips, MessageTypes } from "hooks/useTips";
import { Node, Value } from "types/saga";
import { makeId } from "utils/saga";
import Sagas from "./sagas";
import SagaContext from "./context";

const DefaultValue = { name: "", comment: "" };

export default function Home() {
  const [values, setValues] = useState<Value>(DefaultValue);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const openTip = useTips();

  const handleAdd = () => {
    const _nodes = [
      ...nodes,
      { _id: makeId(), id: "", func_name: "", next_node: "", name: "", compensate_func_name: "" } as Node,
    ];

    setNodes(_nodes);
  };

  const handleDelete = (node: Node) => {
    const _nodes = nodes.filter((ele) => ele._id !== node._id);
    setNodes(_nodes);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>, field: "name" | "comment") => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };

  const handleNodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string,
    field: "name" | "id" | "func_name" | "compensate_func_name"
  ) => {
    const _node = nodes.filter((node) => node._id === _id)[0];
    const index = nodes.findIndex((node) => node._id === _id);

    const _nodes = [...nodes];

    const node = { ..._node, [field]: event.target.value } as Node;

    _nodes.splice(index, 1, node);

    setNodes(_nodes);
  };

  const handleSave = async () => {
    setLoading(true);

    const result = await create({
      name: values.name,
      comment: values.comment,
      nodes: nodes.map((node, index) => ({
        cid: node.id,
        compensate_func_name: node.compensate_func_name,
        name: node.name,
        func_name: node.func_name,
        pre_node: index === 0 ? "root" : nodes[index - 1].name,
        next_node: index === nodes.length - 1 ? "end" : nodes[index + 1].name,
      })),
    });

    if (result) {
      openTip("Created successfully", MessageTypes.success);
      setValues(DefaultValue);
      setNodes([]);
      setReload(!reload);
    } else {
      openTip("Failed to create", MessageTypes.error);
    }

    setLoading(false);
  };

  const checkNode = () => {
    let error = "";

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node || !node.compensate_func_name || !node.id || !node.func_name || !node.name) {
        error = "invalid node";
        break;
      }
    }

    return error;
  };

  let error = "";
  if (nodes.length) error = checkNode();
  if (!nodes.length) error = "Add a node";
  if (!values.comment) error = "Enter the description";
  if (!values.name) error = "Enter the name";

  return (
    <SagaContext.Provider value={{ reload, setReload: () => setReload(!reload) }}>
      <MainLayout>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
              Name
            </Typography>
            <TextField
              sx={{ width: "360px" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleValueChange(event, "name")}
              value={values.name}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
              Description
            </Typography>
            <TextField
              sx={{ width: "360px" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleValueChange(event, "comment")}
              value={values.comment}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
              Node
            </Typography>
            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
          </Box>

          {nodes.length > 0 ? (
            <Box sx={{ padding: "0 0 0 120px", display: "flex", gap: "10px 0", flexDirection: "column" }}>
              {nodes.map((node) => (
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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleNodeChange(event, node._id, "name")
                        }
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
                        Canister ID
                      </Typography>
                      <TextField
                        sx={{ width: "360px" }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleNodeChange(event, node._id, "id")
                        }
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
                        Func Name
                      </Typography>
                      <TextField
                        sx={{ width: "360px" }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleNodeChange(event, node._id, "func_name")
                        }
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
                      />
                    </Box>
                  </Box>

                  <Button variant="contained" onClick={() => handleDelete(node)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
          ) : null}

          <Box>
            <Button variant="contained" disabled={loading || !!error} onClick={handleSave}>
              {loading ? (
                <CircularProgress size={18} sx={{ color: "#fff", margin: "0 10px 0 0" }}></CircularProgress>
              ) : null}
              {!!error ? error : "Save"}
            </Button>
          </Box>
        </Box>

        <Box mt="40px">
          <Sagas></Sagas>
        </Box>
      </MainLayout>
    </SagaContext.Provider>
  );
}
