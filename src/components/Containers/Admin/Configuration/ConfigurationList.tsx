import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IConfiguration } from '../../../../interfaces/interfaces';
import ConfigurationGetActions from './ConfigurationActions';

interface IPathProps {
  fetch(): string;
}

interface IStateProps {
  get: {
    loading: boolean;
    error: string;
    configuration: IConfiguration;
  };
}

const Configuration = ({ get, fetch }: IStateProps & IPathProps) => {
  const { configuration, loading, error } = get;
  //const [ mlGainPercentage, setGainPercentage ] = useState(configuration.mlGainPercentage);
  const [mlCommissionPercentage, setCommisionPercentage] = useState(configuration.mlCommissionPercentage);
  const [cpColor, setPropertyColor] = useState('white');

  const onChangeProp = (property, setProperty, setPropertyColor, event) => {
    setProperty(event.target.value);
    if (event.target.value.toString() !== configuration[property].toString()) {
      setPropertyColor('#ffcccb');
    } else {
      setPropertyColor('white');
    }
  };

  console.log('loading ' + loading);
  console.log('error ' + error);
  console.log('setCommissionPErcentage ' + setCommisionPercentage);
  console.log('setPropertyColor ' + setPropertyColor);
  console.log('onChangeProp ' + onChangeProp);
  console.log(configuration);
  console.log('======');
  console.log(mlCommissionPercentage);

  useEffect(() => {
    fetch();
  }, [location.pathname]);

  useEffect(() => {
    setCommisionPercentage(configuration.mlCommissionPercentage);
  }, [configuration]);

  // null object not render
  if (!mlCommissionPercentage) return <></>;

  return (
    <div className="main-forms-forms clear-fix">
      <h2 className="main-title">Gestión de Configuración</h2>
      <li>
        Comisión %:{' '}
        <input
          value={mlCommissionPercentage}
          style={{ backgroundColor: cpColor }}
          onChange={(event) => onChangeProp('mlCommissionPercentage', setCommisionPercentage, setPropertyColor, event)}
        />
      </li>
    </div>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    get: {
      configuration: state.configurationGetReducer.payload.configuration,
      loading: state.configurationGetReducer.loading,
      error: state.configurationGetReducer.error,
    },
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: () => dispatch(ConfigurationGetActions.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
