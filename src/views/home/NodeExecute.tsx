import { TextField, Box, Typography, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Node, ArgKey, Arg } from "types/saga";
import { makeId } from "utils/saga";

export type NodeExecuteProps = {
  node: Node;
  onArgsUpdate: (node: Node, args: Arg[]) => void;
};

export default function ExecuteNode({ node, onArgsUpdate }: NodeExecuteProps) {
  const [argsNumber, setArgsNumber] = useState<string[]>([]);
  const [args, setArgs] = useState<Arg[]>([]);

  const handleArgsNumber = (number: string) => {
    const numbers: string[] = [];
    for (let i = 0; i < Number(number); i++) {
      const id = makeId();
      numbers.push(id);
    }

    setArgsNumber(numbers);
  };

  const menus = useMemo(() => {
    const keys = [];
    for (let i in ArgKey) {
      keys.push(i);
    }
    return keys;
  }, [ArgKey]);

  const handleArgTypeChange = (type: string, index: number) => {
    const _args = [...args];
    const arg_index = args.findIndex((ele) => ele.index === index);
    const old_org = _args[arg_index];

    let value = old_org?.value ?? "";

    switch (type) {
      case "True":
        value = "true";
        break;
      case "False":
        value = "false";
        break;
      default:
        break;
    }

    _args.splice(arg_index, 1, { name: old_org?.name ?? "", index, type, value } as Arg);
    setArgs(_args);
    onArgsUpdate(node, _args);
  };

  const handleArgNameChange = (name: string, index: number) => {
    const _args = [...args];
    const arg_index = args.findIndex((ele) => ele.index === index);
    const old_org = _args[arg_index];
    _args.splice(arg_index, 1, { name, value: old_org?.value ?? "", index, type: old_org?.type ?? "" } as Arg);
    setArgs(_args);
    onArgsUpdate(node, _args);
  };

  const handleArgValueChange = (value: string, index: number) => {
    const _args = [...args];
    const arg_index = args.findIndex((ele) => ele.index === index);
    const old_org = _args[arg_index];
    _args.splice(arg_index, 1, { value, index, type: old_org?.type ?? "", name: old_org?.name ?? "" } as Arg);
    setArgs(_args);
    onArgsUpdate(node, _args);
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
          <Typography sx={{ width: "360px" }}>{node.name}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Canister ID
          </Typography>
          <Typography sx={{ width: "360px" }}>{node.id}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Func Name
          </Typography>
          <Typography sx={{ width: "360px" }}>{node.func_name}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Compensate Func Name
          </Typography>
          <Typography sx={{ width: "360px" }}>{node.compensate_func_name}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={12} sx={{ margin: "0 20px 0 0", width: "120px" }}>
            Args
          </Typography>
          <TextField
            label="Args length"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleArgsNumber(event.target.value)}
          ></TextField>
        </Box>

        {argsNumber.map((ele, index) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 20px" }} key={ele}>
            <TextField
              label="Arg name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleArgNameChange(event.target.value, index)}
            ></TextField>
            <Select
              placeholder="Arg type"
              onChange={(event: SelectChangeEvent) => handleArgTypeChange(event.target.value, index)}
            >
              {menus.map((ele) => (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              ))}
            </Select>
            {args[index]?.type === "True" || args[index]?.type === "False" ? null : (
              <TextField
                label="Arg value"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleArgValueChange(event.target.value, index)
                }
              ></TextField>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
