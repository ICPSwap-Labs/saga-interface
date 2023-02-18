import { ReactNode } from "react";
import { SnackbarProvider, Slide } from "ui-component/notistack";

export default function _SnackbarProvider({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <SnackbarProvider maxSnack={100} TransitionComponent={Slide}>
      {children}
    </SnackbarProvider>
  );
}
