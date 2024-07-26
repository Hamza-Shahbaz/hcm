import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
//   width: 400,
  bgcolor: "background.paper",
  borderRadius:3,
//   border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

export default function GeneralModal({ open, onClose, children }) {
  return (
    <div>
      <Modal 
      
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box overflow={"hidden"} sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
