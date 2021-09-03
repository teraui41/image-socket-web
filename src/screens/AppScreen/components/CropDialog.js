import React, {useState, useCallback} from 'react';
import Cropper from 'react-easy-crop'

const CropDialog = ({ pic }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, []);

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
          position: 'relative',
          width: 400,
          height: 400
        }
      }}
    />
    </div>
  )
}

export default CropDialog;
