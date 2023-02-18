import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import { Button } from "@mui/material";
import { useSagas, deleteSaga } from "hooks/saga";
import { EventLang } from "types/saga";
import { openTip, MessageTypes } from "hooks/useTips";

export default function Sagas() {
  const { result: sagas } = useSagas();

  const handleDelete = async (saga: EventLang) => {
    const result = await deleteSaga(saga.name);
    if (result) {
      openTip(`Deleted ${saga.name} successfully`, MessageTypes.success);
    } else {
      openTip(`Failed to delete ${saga.name}`, MessageTypes.error);
    }
  };

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
          {sagas?.map((saga, index) => (
            <TableRow key={saga._id}>
              <TableCell>{saga.name}</TableCell>
              <TableCell>{saga.comment}</TableCell>
              <TableCell>{saga.owner.toString()}</TableCell>
              <TableCell>{saga.nodes.length}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleDelete(saga)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
