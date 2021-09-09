import React from "react";
import "../style.scss";

const PreViewDialog = ({ open, preview, onClose, onConfirm }) => {
  if (!open) return <></>;

  return (
    <div className='dialog' onClick={onClose}>
      <img alt='preview' src={preview} />
      <div className="button-box" style={{ display: 'flex', justifyContent:'space-between'}}>
        <button className="crop-button" onClick={onClose} style={{ backgroundColor: '#ddd' }}>取消</button>
        <button className="crop-button" onClick={onConfirm}>送出</button>
      </div>
    </div>
  );
};

export default PreViewDialog;
