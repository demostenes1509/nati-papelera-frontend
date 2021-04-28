import { connect } from 'react-redux';
import Cropper from 'simple-react-cropper';
import { blobToFile } from '../../../../../helpers/FileUtil';
import productPictureActions from './ProductPictureActions';

interface IPathProps {
  post(productId: string, file: File): string;
}

interface IStateProps {
  onRequestClose(): string;
  productId: string;
}

interface IStateX {
  response: { id: string | null };
}

const ProductPicture = ({ onRequestClose, post, productId, response }: IStateProps & IPathProps & IStateX) => {
  console.log(response);

  const uploadToServer = (blob: Blob) => {
    const file = blobToFile(blob);
    post(productId, file);
    console.log(onRequestClose());
  };

  /*
  useEffect(() => {
    console.log('RESPONSE ID:' + response.id);
    // This means server response was successfull
    if (response.id) {
      console.log('ENTRO A CERRAR TODO');
      onRequestClose();
    }
  }, [response.id]);
  */

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

const mapStateToProps = (state): IStateX => {
  return {
    response: state.productPictureSaveReducer.response,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (productId, file) => dispatch(productPictureActions.post(productId, file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPicture);
