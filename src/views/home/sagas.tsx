import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import { Button, CircularProgress, Box } from "@mui/material";
import { useSagas, deleteSaga } from "hooks/saga";
import { EventLang } from "types/saga";
import { useTips, MessageTypes } from "hooks/useTips";
import SagaContext from "./context";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import Execute from "./Execute";

function SagaItem({ saga }: { saga: EventLang }) {
  const [loading, setLoading] = useState(false);
  const [executeOpen, setExecuteOpen] = useState(false);
  const { setReload } = useContext(SagaContext);

  const openTip = useTips();

  const history = useHistory();

  const handleDelete = async (saga: EventLang) => {
    if (loading) return;
    setLoading(true);
    const result = await deleteSaga(saga.name);
    if (result) {
      openTip(`Deleted ${saga.name} successfully`, MessageTypes.success);
      setReload();
    } else {
      openTip(`Failed to delete ${saga.name}`, MessageTypes.error);
    }
    setLoading(false);
  };

  const handleEdit = (saga: EventLang) => {
    history.push(`/edit/${saga.name}`);
  };

  const handleLog = (saga: EventLang) => {
    history.push(`/log/${saga.name}`);
  };

  const handleExecute = () => {
    setExecuteOpen(true);
  };

  return (
    <>
      <TableRow>
        <TableCell>{saga.name}</TableCell>
        <TableCell>{saga.comment}</TableCell>
        <TableCell>{saga.owner.toString()}</TableCell>
        <TableCell>{saga.nodes.length}</TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: "0 10px" }}>
            <Button variant="contained" onClick={() => handleEdit(saga)} disabled={loading}>
              Edit
            </Button>
            <Button variant="contained" onClick={handleExecute} disabled={loading}>
              Execute
            </Button>
            <Button variant="contained" onClick={() => handleLog(saga)} disabled={loading}>
              Logs
            </Button>
            <Button variant="contained" onClick={() => handleDelete(saga)} disabled={loading}>
              {loading ? (
                <CircularProgress size={18} sx={{ color: "#fff", margin: "0 10px 0 0" }}></CircularProgress>
              ) : null}
              Delete
            </Button>
          </Box>
        </TableCell>
      </TableRow>

      <Execute open={executeOpen} saga={saga} onClose={() => setExecuteOpen(false)}></Execute>
    </>
  );
}

export default function Sagas() {
  const { reload } = useContext(SagaContext);
  const { result: sagas } = useSagas(reload);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Node Count</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sagas?.map((saga) => (
            <SagaItem key={saga._id} saga={saga}></SagaItem>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
