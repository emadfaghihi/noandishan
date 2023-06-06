import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { FC, forwardRef, memo, Ref } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export interface AppDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const AppDialog: FC<AppDialogProps> = ({
  children,
  handleClose,
  open,
  title,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: "700px",
          maxWidth: "95vw",
          p: 0,
          transform: { xs: "translateY(-50px)", md: "none" },
        },
      }}
    >
      <DialogTitle color="secondary">
        <Grid container justifyContent="space-between" alignItems="center">
          {title && <Grid>{title}</Grid>}
          <IconButton onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>
        </Grid>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default memo(AppDialog);
