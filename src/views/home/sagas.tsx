import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import { Button, CircularProgress, Box } from "@mui/material";
import { useSagas, deleteSaga } from "hooks/saga";
import { EventLang } from "types/saga";
import { openTip, MessageTypes } from "hooks/useTips";
import SagaContext from "./context";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

function SagaItem({ saga }: { saga: EventLang }) {
  const [loading, setLoading] = useState(false);
  const { setReload } = useContext(SagaContext);

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
            <Button variant="contained" onClick={() => handleDelete(saga)} disabled={loading}>
              {loading ? (
                <CircularProgress size={18} sx={{ color: "#fff", margin: "0 10px 0 0" }}></CircularProgress>
              ) : null}
              Delete
            </Button>
          </Box>
        </TableCell>
      </TableRow>
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
