import axios from 'axios';
// import history from '../history';
import ioc from '../inversify.config';
import DependencyType from '../inversify.types';
import ILocalStorageRepository from '../domain/models/interfaces/ILocalStorageRepository';

export const setInterceptors = () => {
  const localStorage = ioc.container.get<ILocalStorageRepository>(DependencyType.LocalStorageRepository);

  if (localStorage.getJWT()) {
    axios.defaults.headers.common.Authorization = localStorage.getJWT;

    axios.interceptors.response.use((response) => response, (err) => new Promise(() => {
      if (err.response.status === 401) {
        localStorage.removeAllData();
      }
      return Promise.reject(err);
    }));
  }
};
