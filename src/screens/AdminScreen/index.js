import React, { useEffect, useState } from 'react';
import socket from '../../managers/socketManager';
import './style.scss';

const init = setter => (async () => {
  let channel = socket.subscribe('pic');
  for await (let data of channel) {
  setter(images => ([ ...images, data ]));
  }
})();

const AdminScreen = props => {
  const [images, setImages] = useState([])
  useEffect(() => {
    socket.transmit('foo', 123);
    init(setImages)
  }, [])

  return (
    <div className="images-box">{images.map((image, index) => {
      return <img alt="1" key={image} src={image} />
    })}</div>
  )
}

export default AdminScreen;
