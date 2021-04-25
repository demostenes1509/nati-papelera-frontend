import Cropper from 'simple-react-cropper';

const ProductUploadImage = ({ onRequestClose }) => {
  const uploadToServer = (blob) => {
    console.log(blob);
    onRequestClose();
  };

  const afterCrop = () => {
    console.log('close cropper');
  };

  return (
    <Cropper
      aspectRatio={4 / 3}
      width={500}
      height={500}
      upload={uploadToServer}
      afterCrop={afterCrop}
      containerStyle={{ maxHeight: '80vh', borderRadius: '10px' }}
    />
  );
};

export default ProductUploadImage;
