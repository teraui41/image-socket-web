/**
 * @param {HTMLImageElement} image - Image File Object
 * @param {Object} crop - crop Object
 * @param {String} fileName - Name of the returned file in Promise
 */
export function getCroppedImg(image, crop, callback) {
  const canvas = document.createElement("canvas");
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  // New lines to be added
  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  var imageDom = new Image();
  imageDom.onload = () => {
    ctx.drawImage(
      imageDom,
      0,
      0,
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    callback(base64Image);
  };

  imageDom.src = image;
}
