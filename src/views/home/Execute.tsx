import { Box, Typography, Button, CircularProgress, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { Arg, Node, Value, Log } from "types/saga";
import { makeId, argTypeFormat } from "utils/saga";
import ExecuteNode from "./NodeExecute";
import { EventLang, EventRequest, EventNodeRequest } from "types/saga";
import { useSagaExecute } from "hooks/saga";

const DefaultValue = { name: "", comment: "" };

export interface ExecuteProps {
  open: boolean;
  saga: EventLang;
  onClose: () => void;
}

export type NodeArgs = {
  [key: string]: Arg[];
};

export default function Execute({ open, saga, onClose }: ExecuteProps) {
  const [values, setValues] = useState<Value>(DefaultValue);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [loading, setLoading] = useState(false);
  const [args, setArgs] = useState<NodeArgs>({});
  const [log, setLog] = useState<Log | undefined>(undefined);

  useEffect(() => {
    if (saga) {
      const defaultValue = { name: saga.name, comment: saga.comment } as Value;
      const nodes = saga.nodes.map((node) => ({
        name: node.name,
        id: node.cid.toString(),
        func_name: node.func_name,
        compensate_func_name: node.compensate_func_name,
        next_node: node.next_node,
        _id: makeId(),
      }));

      setValues(defaultValue);
      setNodes(nodes);
    }
  }, [saga]);

  const execute = useSagaExecute();

  const handleExecute = async () => {
    setLoading(true);

    const nodeRequests: EventNodeRequest[] = [];

    nodes.forEach((node) => {
      const _args = args[node.name]?.map((ele) => [ele.name, argTypeFormat(ele.type, ele.value)]);

      const nodeRequest = {
        name: node.name,
        args: _args ?? [],
      } as EventNodeRequest;

      nodeRequests.push(nodeRequest);
    });

    const result = await execute({
      name: saga.name,
      nodes: nodeRequests,
    } as EventRequest);

    if (!!result) {
      setLog(result);
    }

    setLoading(false);
  };

  const handleArgsUpdate = (node: Node, _args: Arg[]) => {
    setArgs({
      ...args,
      [node.name]: _args,
    });
  };

  let error = "";
  if (!nodes.length) error = "Add a node";
  if (!values.comment) error = "Enter the description";
  if (!values.name) error = "Enter the name";

  return (
    <Dialog open={open} title="Execute Saga" onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px 0", padding: "24px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Name
          </Typography>
          <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            {values.name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Description
          </Typography>

          <Typography fontSize={14} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            {values.comment}
          </Typography>
        </Box>

        {nodes.length > 0 ? (
          <Box sx={{ display: "flex", gap: "10px 0", flexDirection: "column" }}>
            {nodes.map((node) => (
              <ExecuteNode key={node._id} node={node} onArgsUpdate={handleArgsUpdate}></ExecuteNode>
            ))}
          </Box>
        ) : null}

        <Box>
          <Button variant="contained" disabled={loading || !!error} onClick={handleExecute}>
            {loading ? (
              <CircularProgress size={18} sx={{ color: "#fff", margin: "0 10px 0 0" }}></CircularProgress>
            ) : null}
            {!!error ? error : "Execute"}
          </Button>
        </Box>

        {!!log ? (
          <Box>
            <Typography>Log Time: {new Date(Number(log.time)).toLocaleString()}</Typography>
            <Box
              mt="10px"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px 0",
                border: "1px solid #000",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: "120px 150px 1fr" }}>
                <Typography>Node Name</Typography>
                <Typography>Execute Status</Typography>
                <Typography>Compensate Execute Status</Typography>
              </Box>
              <Box sx={{ height: "1px", width: "100%", background: "#000" }}></Box>
              {log.logs.map((ele, index) => (
                <>
                  <Box sx={{ display: "grid", gridTemplateColumns: "120px 150px 1fr" }}>
                    <Typography>{ele.name}</Typography>
                    <Typography>{String(ele.execute_status)}</Typography>
                    <Typography>{String(ele.compensate_execute_status)}</Typography>
                  </Box>
                  {index !== log.logs.length - 1 ? (
                    <Box sx={{ height: "1px", width: "100%", background: "#000" }}></Box>
                  ) : null}
                </>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Dialog>
  );
}
