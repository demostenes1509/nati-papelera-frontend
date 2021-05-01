import React, { useState } from 'react';
import { connect } from 'react-redux';
import Error from '../,,/../../Error/Error';
import Loader from '../,,/../../Loader/Loader';
import providerActions from '../ProviderActions';

interface IPathProps {
  post(providerUrl: string, file: File): string;
}

interface IStateProps {
  waiting: boolean;
  error: string;
  response: {
    insertedRecords: number;
    updatedRecords: number;
  };
}

const ProviderFileUpload = ({ post, waiting, error, response }: IPathProps & IStateProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (selectorFiles: FileList | null) => {
    if (selectorFiles) {
      setFile(selectorFiles[0]);
    }
  };

  const onFileUpload = () => {
    if (file) {
      post(location.pathname, file);
    }
  };

  return (
    <section className="main-forms-section">
      <div className="main-forms-forms clear-fix">
        <h2 className="main-title">Actualización Lista de Precios</h2>
        <div className="new-customer">
          <h3 className="form-header">Carga de Nuevo Archivo</h3>
          {waiting ? <Loader className="loader-upload-provider" /> : ''}
          {error ? <Error error={error} /> : ''}
          <Resultados response={response} />
          <form>
            <input type="file" onChange={(event) => onFileChange(event.target.files)} />
            <button type="button" className="form-btn" onClick={() => onFileUpload()}>
              Procesar Archivo
            </button>
          </form>
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
  console.log(state.providerUploadReducer);
  return {
    response: state.providerUploadReducer.response,
    waiting: state.providerUploadReducer.waiting,
    error: state.providerUploadReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (providerUrl: string, file: File) => dispatch(providerActions.post(providerUrl, file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProviderFileUpload);
