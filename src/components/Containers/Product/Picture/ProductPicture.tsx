import React from 'react';
import { connect } from 'react-redux';
import Cropper from 'simple-react-cropper';
import { blobToFile } from '../../../../helpers/FileUtil';
import productPictureActions from './ProductPictureActions';
import Modal from 'react-modal';
import watermark from 'watermarkjs';
import logo from './logo.png';

interface IPathProps {
  post(productId: string, logo: File, nologo: File): string;
  closeDialog(): string;
}

interface IStateProps {
  isDialogOpen: boolean;
}

interface IProps {
  productId: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '800px',
    width: '700px',
  },
};

Modal.setAppElement('#root');

const ProductPicture = ({ productId, post, isDialogOpen, closeDialog }: IStateProps & IPathProps & IProps) => {
  const savePicture = async (blob: Blob) => {
    const file = blobToFile(blob);
    const watermarkedBlob = await watermark([file, logo]).blob(watermark.image.lowerRight(0.3));
    post(productId, watermarkedBlob, file);
  };

  const closeModal = () => {
    closeDialog();
  };

  return (
    <Modal contentLabel="Example Modal" isOpen={isDialogOpen} style={customStyles} onRequestClose={closeModal}>
      <Cropper
        aspectRatio={4 / 4}
        width={1200}
        height={1200}
        upload={savePicture}
        containerStyle={{ maxHeight: '80vh', maxWidth: '80vh', borderRadius: '10px' }}
      />
    </Modal>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    isDialogOpen: state.productPictureDialogReducer.isDialogOpen,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (productId: string, logo: File, nologo: File) => dispatch(productPictureActions.post(productId, logo, nologo)),
  closeDialog: () => dispatch(productPictureActions.closeDialog(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPicture);
