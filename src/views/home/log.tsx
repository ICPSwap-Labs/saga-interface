import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import { Button, Box } from "@mui/material";
import { useSagaLogs } from "hooks/saga";
import { useHistory, useParams } from "react-router";
import { useMemo } from "react";

type CusLog = {
  time: bigint | undefined;
  name: string;
  execute_status: boolean;
  compensate_execute_status: boolean;
};

function LogItem({ log }: { log: CusLog }) {
  return (
    <>
      <TableRow>
        <TableCell>{log.time ? new Date(Number(log.time)).toLocaleString() : ""}</TableCell>
        <TableCell>{log.name}</TableCell>
        <TableCell>{String(log.execute_status)}</TableCell>
        <TableCell>{String(log.compensate_execute_status)}</TableCell>
      </TableRow>
    </>
  );
}

export default function SagaLogo() {
  const { id } = useParams<{ id: string }>();

  const { result: _logs } = useSagaLogs(id);

  const logs = useMemo(() => {
    let logs: CusLog[] = [];

    _logs?.reverse().forEach((ele) => {
      ele.logs.forEach((_ele, index) => {
        logs.push({
          time: index === 0 ? ele.time : undefined,
          name: _ele.name,
          execute_status: _ele.execute_status,
          compensate_execute_status: _ele.compensate_execute_status,
        } as CusLog);
      });
    });

    return logs;
  }, [_logs]);

  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Box sx={{ padding: "10px" }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Execute Status</TableCell>
              <TableCell>Compensate Execute Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {logs.map((log, index) => (
              <LogItem key={index} log={log}></LogItem>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
