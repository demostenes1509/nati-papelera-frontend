import React from 'react';
import { connect } from 'react-redux';
import Cropper from 'simple-react-cropper';
import { blobToFile } from '../../../../../helpers/FileUtil';
import productPictureActions from './ProductPictureActions';
import Modal from 'react-modal';
import watermark from 'watermarkjs';
import logo from './logo.png';

interface IPathProps {
  post(productId: string, file: File): string;
  closeDialog(): string;
}

interface IStateProps {
  isDialogOpen: boolean;
}

interface IProps {
  productId: string;
}

Modal.setAppElement('#root');

const ProductPicture = ({ productId, post, isDialogOpen, closeDialog }: IStateProps & IPathProps & IProps) => {
  const savePicture = async (blob: Blob) => {
    const file = blobToFile(blob);

    const watermarkedBlob = await watermark([file, logo]).blob(watermark.image.lowerRight(0.3));

    post(productId, watermarkedBlob);
  };

  const closeModal = () => {
    closeDialog();
  };

  return (
    <Modal contentLabel="Example Modal" isOpen={isDialogOpen} onRequestClose={closeModal}>
      <Cropper
        aspectRatio={4 / 3}
        width={500}
        height={500}
        upload={savePicture}
        containerStyle={{ maxHeight: '80vh', borderRadius: '10px' }}
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
  post: (productId: string, file: File) => dispatch(productPictureActions.post(productId, file)),
  closeDialog: () => dispatch(productPictureActions.closeDialog(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPicture);
