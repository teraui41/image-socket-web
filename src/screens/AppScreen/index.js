import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
import CropDialog from './components/CropDialog';
import imageCompression from 'browser-image-compression';

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
};

const AppScreen = props => {  
  const [pic, setPic] = useState(null);

  const onChange = async (picture) => {
   const compressedFile = await imageCompression(picture[0], options);
   const base64String = await imageCompression.getDataUrlFromFile(
       compressedFile
   );
   setPic(base64String);
  }

  return (
    <>
      <CropDialog pic={pic} />
      <ImageUploader
      singleImage
                withIcon={true}
                buttonText='Choose images'
                onChange={onChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
            />
    </>
  )
}

export default AppScreen;
