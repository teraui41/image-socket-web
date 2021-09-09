import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import CropDialog from "./components/CropDialog";
import PreViewDialog from './components/PreViewDialog';
import imageCompression from "browser-image-compression";
import socket from '../../managers/socketManager';
import './style.scss';

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
};

const AppScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [pic, setPic] = useState(null);
  const [preview, setPreview] = useState('')

  const onChange = async (picture) => {
    const compressedFile = await imageCompression(picture[0], options);
    const base64String = await imageCompression.getDataUrlFromFile(
      compressedFile
    );
    setPic(base64String);
  };

  const onCropConfirm = () => {
    setOpen(true);
  }

  const onConfirm = () => {
    socket.transmitPublish("pic", preview);
  }

  return (
    <div className="container">
      <PreViewDialog open={open} onClose={() => setOpen(false)} preview={preview} onConfirm={onConfirm} />
      <CropDialog pic={pic} callback={setPreview} onConfirm={onCropConfirm}/>
      <ImageUploader
        singleImage
        withIcon={true}
        buttonText='Choose images'
        onChange={onChange}
        imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
      />
    </div>
  );
};

export default AppScreen;
