import React, { useState } from 'react';
import { connect } from 'react-redux';
import Error from '../../Error/Error';
import Loader from '../../Loader/Loader';
import mercadoLibreActions from './MercadoLibreCategoryActions';

interface IPathProps {
  post(file: File): string;
}

interface IStateProps {
  uploadWaiting: boolean;
  uploadError: string;
  uploadResponse: {
    insertedRecords: number;
    updatedRecords: number;
  };
}

const ProviderFileUpload = ({ post, uploadWaiting, uploadError, uploadResponse }: IPathProps & IStateProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (selectorFiles: FileList | null) => {
    if (selectorFiles) {
      setFile(selectorFiles[0]);
    }
  };

  const onFileUpload = () => {
    console.log('MEC>1');
    if (file) {
      console.log('MEC>2');
      post(file);
    }
  };

  return (
    <section className="main-forms-section">
      <div className="main-forms-forms clear-fix">
        <h2 className="main-title">Actualización Categorías Mercado Libre</h2>
        <div className="new-customer">
          <h3 className="form-header">Carga de Nuevo Archivo</h3>
          {uploadWaiting ? <Loader className="loader-upload-provider" /> : null}
          {uploadError ? <Error error={uploadError} /> : null}
          <Resultados response={uploadResponse} />

          {uploadResponse.insertedRecords === 0 && uploadResponse.updatedRecords === 0 && !uploadWaiting ? (
            <form>
              <input type="file" onChange={(event) => onFileChange(event.target.files)} />
              <button type="button" className="form-btn" onClick={() => onFileUpload()}>
                Procesar Archivo
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  );
};

const Resultados = ({ response }) => {
  if (response.insertedRecords > 0 || response.updatedRecords > 0) {
    return (
      <div>
        <p>Registros Insertados: {response.insertedRecords}</p>
        <p>Registros Actualizados: {response.updatedRecords}</p>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    uploadResponse: state.mercadoLibreCategoryUploadReducer.response,
    uploadWaiting: state.mercadoLibreCategoryUploadReducer.waiting,
    uploadError: state.mercadoLibreCategoryUploadReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (file: File) => dispatch(mercadoLibreActions.post(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProviderFileUpload);
