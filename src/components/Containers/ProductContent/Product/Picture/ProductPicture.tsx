import { useEffect } from 'react';
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
  response: { id: string };
}

const ProductPicture = ({ onRequestClose, post, productId, response }: IStateProps & IPathProps & IStateX) => {
  // const [savedId, setSavedId] = useState(response.id);

  const uploadToServer = (blob: Blob) => {
    const file = blobToFile(blob);
    post(productId, file);
    console.log(onRequestClose);
    // onRequestClose();
  };

  useEffect(() => {
    console.log('==================');
    console.log(response);
    console.log('==================');
    // setSavedId(response.id);
  }, [response.id]);

  // console.log('#################');
  // console.log(savedId);
  // console.log('#################');

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
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  console.log(state.productPictureSaveReducer);
  console.log(state.productPictureSaveReducer.response);
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  return {
    response: state.productPictureSaveReducer.response,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (productId, file) => dispatch(productPictureActions.post(productId, file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPicture);
