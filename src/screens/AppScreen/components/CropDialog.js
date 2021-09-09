import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../../utils/imageUtils";

const CropDialog = ({ pic, callback, onConfirm }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCropSize(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    onConfirm();
    try {
      await getCroppedImg(pic, { ...crop, ...cropSize}, callback);
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crop]);

  return (
    <div>
      <Cropper
        image={pic}
        crop={crop}
        zoom={zoom}
        aspect={3 / 4}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        style={{
          containerStyle: {
            position: "relative",
            width: 400,
            height: 400,
            margin: 'auto'
          },
        }}
      />
      { pic &&
        <div className="button-box">
          <button className="crop-button" onClick={showCroppedImage}>裁切</button>
        </div>
      }
    </div>
  );
};

export default CropDialog;
