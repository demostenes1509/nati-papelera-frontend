import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import providerActions from './ProviderActions';
import { IProvider } from '../../../../interfaces/interfaces';

interface IPathProps {
  post(providerUrl: string, file: File): string;
  fetch(): string;
}

interface IStateProps {
  uploadWaiting: boolean;
  uploadError: string;
  uploadResponse: {
    insertedRecords: number;
    updatedRecords: number;
  };
  getAllLoading: boolean;
  getAllError: string;
  getAllPayload: {
    providers: IProvider[];
  };
}

const ProviderFileUpload = ({
  post,
  fetch,
  uploadWaiting,
  uploadError,
  uploadResponse,
  getAllPayload: { providers },
}: IPathProps & IStateProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [provider, setProvider] = useState<string | null>(null);

  useEffect(() => {
    fetch();
  }, []);

  const onFileChange = (selectorFiles: FileList | null) => {
    if (selectorFiles) {
      setFile(selectorFiles[0]);
    }
  };

  const onProviderChanged = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute('id');
    setProvider(option);
  };

  const onFileUpload = () => {
    if (file && provider) {
      post(provider, file);
    }
  };

  return (
    <section className="main-forms-section">
      <div className="main-forms-forms clear-fix">
        <h2 className="main-title">Actualización Lista de Precios</h2>
        <div className="new-customer">
          <h3 className="form-header">Carga de Nuevo Archivo</h3>
          {uploadWaiting ? <Loader className="loader-upload-provider" /> : null}
          {uploadError ? <Error error={uploadError} /> : null}
          <Resultados response={uploadResponse} />

          {uploadResponse.insertedRecords === 0 && uploadResponse.updatedRecords === 0 && !uploadWaiting ? (
            <form>
              <label className="form-select">
                Proveedores
                <select onChange={(event) => onProviderChanged(event)}>
                  <option>Seleccione proveedor</option>
                  {providers.map((provider) => (
                    <option id={provider.id} key={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                </select>
              </label>
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
    uploadResponse: state.providerUploadReducer.response,
    uploadWaiting: state.providerUploadReducer.waiting,
    uploadError: state.providerUploadReducer.error,
    getAllPayload: state.providerGetAllReducer.payload,
    getAllLoading: state.providerGetAllReducer.loading,
    getAllError: state.providerGetAllReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (providerId: string, file: File) => dispatch(providerActions.post(providerId, file)),
  fetch: () => dispatch(providerActions.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProviderFileUpload);
