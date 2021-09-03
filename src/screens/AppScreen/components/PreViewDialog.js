import React from "react";
import "../style.scss";

const PreViewDialog = ({ open, preview, onClose }) => {
  if (!open) return <></>;

  return (
    <div className='dialog' onClick={onClose}>
      <img alt='preview' src={preview} />
    </div>
  );
};

export default PreViewDialog;
