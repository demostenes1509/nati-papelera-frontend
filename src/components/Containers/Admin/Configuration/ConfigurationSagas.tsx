import { fork, take } from 'redux-saga/effects';
import { defaultFetch, defaultPut } from '../../../../helpers/SagasUtil';
import Actions, { ConfigurationGetActions, ConfigurationPutActions } from './ConfigurationActions';
import ConfigurationApi from './ConfigurationApi';

/* --------------------- Watchers ------------------ */

const watchConfigurationGet = function* () {
  while (true) {
    yield take(ConfigurationGetActions.FETCH);
    yield fork(() => defaultFetch(Actions, ConfigurationApi));
  }
};

const watchConfigurationPut = function* () {
  while (true) {
    const { body } = yield take(ConfigurationPutActions.PUT);
    yield fork(() => defaultPut(Actions, ConfigurationApi, body));
  }
};

export default { watchConfigurationGet, watchConfigurationPut };
