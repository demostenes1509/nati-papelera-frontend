import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IConfiguration } from '../../../../interfaces/interfaces';
import configurationActions from './ConfigurationActions';

interface IStateProps {
  configuration: IConfiguration;
  loading: boolean;
  error: string;
  errorPut: false;
}

interface IPathProps {
  fetch(): string;
  put(id: string, mlCommissionPercentage: number, mlGainPercentage: number): string;
}

const Configuration = ({ configuration, fetch, put }: IStateProps & IPathProps) => {
  const [id, SetId] = useState(configuration.id);
  const [mlGainPercentage, setGainPercentage] = useState(configuration.mlGainPercentage);
  const [mlCommissionPercentage, setCommisionPercentage] = useState(configuration.mlCommissionPercentage);

  const onChangeProp = (property, setProperty, event) => {
    setProperty(parseFloat(event.target.value));
  };

  const onUpdate = (event) => {
    event.preventDefault();
    put(id, mlCommissionPercentage, mlGainPercentage);
  };

  useEffect(() => {
    fetch();
  }, [location.pathname]);

  useEffect(() => {
    setCommisionPercentage(configuration.mlCommissionPercentage);
    setGainPercentage(configuration.mlGainPercentage);
    SetId(configuration.id);
  }, [configuration]);

  // null object not render
  if (!mlCommissionPercentage) return <></>;

  return (
    <section>
      <div className="main-forms-forms clear-fix">
        <h2 className="main-title">Gestión de Configuración</h2>
        <div className="main-form-configuration">
          <h3 className="form-header">Valores</h3>
          <form>
            <li>
              Comisión %:{' '}
              <input
                value={mlCommissionPercentage}
                onChange={(event) => onChangeProp('mlCommissionPercentage', setCommisionPercentage, event)}
              />
            </li>
            <li>
              Ganancia %:{' '}
              <input
                value={mlGainPercentage}
                onChange={(event) => onChangeProp('mlGainPercentage', setGainPercentage, event)}
              />
            </li>
            <li>
              <button onClick={(event) => onUpdate(event)} className="small-form-btn">
                Grabar
              </button>
            </li>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    configuration: state.configurationGetReducer.payload.configuration,
    loading: state.configurationGetReducer.loading,
    error: state.configurationGetReducer.error,
    errorPut: state.configurationPutReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: () => dispatch(configurationActions.fetch()),
  put: (id, mlCommissionPercentage, mlGainPercentage) =>
    dispatch(configurationActions.put(id, mlCommissionPercentage, mlGainPercentage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
