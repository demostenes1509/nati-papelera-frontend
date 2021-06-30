import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../../helpers/SagasUtil';
import Actions, { ConfigurationGetActions } from './ConfigurationActions';
import ConfigurationApi from './ConfigurationApi';

/* --------------------- Watchers ------------------ */

const watchConfigurationGet = function* () {
  while (true) {
    yield take(ConfigurationGetActions.FETCH);
    yield fork(() => defaultFetch(Actions, ConfigurationApi));
  }
};

export default { watchConfigurationGet };
