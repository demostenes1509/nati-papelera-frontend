import { AxiosRequestConfig } from 'axios';
import getEnv from 'getenv';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import request from '../../../helpers/Api';
import { withRouterWrapper } from '../../../helpers/UIUtil';
import { IPicture, IProduct } from '../../../interfaces/interfaces';
import Error from '../Error/Error';
import Packaging from './Packaging/Packaging';
import ProductPicture from './Picture/ProductPicture';
import productPictureActions from './Picture/ProductPictureActions';
import productActions from './ProductActions';

const API_URL = getEnv('REACT_APP_API_URL');

interface IPathProps {
  fetch(productUrl: string): string;
  openDialog(productId: string, productUrl: string): string;
  put(id: string, name: string, description: string, mlCategoryId: string): string;
  selectPicture(pictureId: string);
}

interface IStateProps {
  payload: IProduct;
  isAdmin: boolean;
  refreshPage: boolean;
  selectedPicture: IPicture;
  errorFetch: string;
  errorPut: string;
  errorPackagingPut: string;
  errorPackagingPublish: string;
}

const Product = ({
  isAdmin,
  payload,
  errorFetch,
  errorPut,
  errorPackagingPut,
  errorPackagingPublish,
  fetch,
  selectPicture,
  put,
  openDialog,
  refreshPage,
  selectedPicture,
}: IStateProps & IPathProps) => {
  const { packaging, pictures } = payload;

  const [name, setName] = useState(payload.name);
  const [description, setDescription] = useState(payload.description);
  const [mlCategoryId, setMLCategoryId] = useState(payload.mlCategoryId);
  const [mlCategoryName, setMLCategoryName] = useState(payload.mlCategoryName);
  const [recordUpdated, setRecordUpdated] = useState(false);

  const onChangeProp = (setProperty, event) => {
    setProperty(event.target.value);
    setRecordUpdated(true);
  };

  const onChangeMlCategoryId = (value) => {
    setMLCategoryId(value);
    setRecordUpdated(true);
  };

  const update = () => {
    put(payload.id, name, description, mlCategoryId);
    setRecordUpdated(false);
  };

  useEffect(() => {
    fetch(location.pathname);
  }, [location.pathname, refreshPage]);

  useEffect(() => {
    setName(payload.name);
    setDescription(payload.description);
    setMLCategoryId(payload.mlCategoryId);
    setMLCategoryName(payload.mlCategoryName);
    setRecordUpdated(false);
  }, [payload]);

  const onClick = (event, pictureId: string) => {
    event.preventDefault();
    selectPicture(pictureId);
  };

  if (errorFetch) return <Error error={errorFetch} />;

  return (
    <section className="main-content clear-fix">
      <ProductPicture productId={payload.id} />

      <section className="product-image-col">
        <div className="product-image-container">
          {selectedPicture.id ? (
            <a href="">
              <img src={`${API_URL}/products-pictures/${selectedPicture.id}`} />
            </a>
          ) : null}
          <OneButtonOrTwo
            isAdmin={isAdmin}
            openDialog={() => openDialog(payload.id, payload.url)}
            selectedPicture={selectedPicture}
          />
        </div>
        <div className="product-thumbnail-container">
          {pictures.map((pic) => (
            <a href="" key={pic.id}>
              <img src={`${API_URL}/products-pictures/${pic.id}`} onClick={() => onClick(event, pic.id)} />
            </a>
          ))}
        </div>
      </section>
      <section className="product-details-col">
        <H2OrInput isAdmin={isAdmin} name={name} onChangeName={(event) => onChangeProp(setName, event)}></H2OrInput>
        <ParOrInput
          isAdmin={isAdmin}
          description={description}
          onChangeDescription={(event) => onChangeProp(setDescription, event)}
        ></ParOrInput>
        <SelOrInput
          isAdmin={isAdmin}
          mlCategoryId={mlCategoryId}
          mlCategoryName={mlCategoryName}
          onChangeMLCategoryId={(value) => onChangeMlCategoryId(value)}
        ></SelOrInput>
        {isAdmin && recordUpdated ? (
          <button onClick={update} className="form-btn">
            Grabar
          </button>
        ) : null}
        {errorPut ? <Error error={errorPut} /> : null}
        <div className="product-content-details">
          <p>Packaging</p>
          <ul>
            {packaging.map((pack) => (
              <Packaging key={pack.id} isAdmin={isAdmin} pack={pack} />
            ))}
          </ul>
          {errorPackagingPut ? <Error error={errorPackagingPut} /> : null}
          {errorPackagingPublish ? <Error error={errorPackagingPublish} /> : null}
        </div>
      </section>
    </section>
  );
};

const H2OrInput = ({ isAdmin, onChangeName, name }) => {
  if (isAdmin) {
    return <input value={name} onChange={onChangeName} className="product-details-col-name"></input>;
  } else {
    return <h2>{name}</h2>;
  }
};

const ParOrInput = ({ isAdmin, onChangeDescription, description }) => {
  if (isAdmin) {
    return (
      <textarea
        rows={3}
        cols={38}
        value={description}
        onChange={onChangeDescription}
        className="product-details-col-description"
      ></textarea>
    );
  } else {
    return <p>{description}</p>;
  }
};

const SelOrInput = ({ isAdmin, onChangeMLCategoryId, mlCategoryId, mlCategoryName }) => {
  const fuzzySearch = (options: SelectSearchOption[]): ((query: string) => SelectSearchOption[]) => {
    return () => {
      return options;
    };
  };

  const options: SelectSearchOption[] = [];
  const getOptions = (query): Promise<SelectSearchOption[]> => {
    interface Category {
      id: string;
      name: string;
    }

    interface Response {
      categories: Category[];
    }

    return new Promise((resolve, reject) => {
      if (query.length < 3) {
        return [];
      }
      const config: AxiosRequestConfig = {
        url: '/mercado-libre/categories',
        method: 'GET',
        params: {
          pattern: query,
        },
      };
      request<Response>(config)
        .then((response) => {
          const {
            data: { categories },
          } = response;
          const res: SelectSearchOption[] = categories.map((c) => ({ value: c.id, name: c.name }));
          resolve(res);
        })
        .catch(reject);
    });
  };

  if (isAdmin) {
    return (
      <SelectSearch
        value={mlCategoryId}
        options={options}
        getOptions={getOptions}
        onChange={onChangeMLCategoryId}
        search={true}
        placeholder={mlCategoryName}
        filterOptions={fuzzySearch}
      />
    );
  } else {
    return <p>{mlCategoryName}</p>;
  }
};

const OneButtonOrTwo = ({ isAdmin, openDialog, selectedPicture }) => {
  const onClick = (event) => {
    event.preventDefault();
    openDialog();
  };

  if (isAdmin) {
    return (
      <div>
        {selectedPicture.id ? (
          <a href="" className="enlarge-product-btn-admin">
            Ver más grande
          </a>
        ) : null}
        <a href="" className="enlarge-product-btn-admin" onClick={(event) => onClick(event)}>
          Agregar imagen
        </a>
      </div>
    );
  } else {
    return (
      <a href="" className="enlarge-product-btn">
        Ver más grande
      </a>
    );
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    payload: state.productGetReducer.payload,
    errorFetch: state.productGetReducer.error,
    errorPut: state.productUpdateReducer.error,
    isAdmin: state.sessionReducer.isAdmin,
    refreshPage: state.productPictureDialogReducer.refreshPage,
    selectedPicture: state.productSelectPictureReducer.selectedPicture,
    errorPackagingPut: state.packagingUpdateReducer.error,
    errorPackagingPublish: state.packagingPublishReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (productUrl: string) => dispatch(productActions.fetch(productUrl)),
  put: (id: string, name: string, description: string, mlCategoryId: string) =>
    dispatch(productActions.put(id, name, description, mlCategoryId)),
  openDialog: (productId: string) => dispatch(productPictureActions.openDialog(productId)),
  selectPicture: (pictureId: string) => dispatch(productActions.selectPicture({ id: pictureId })),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(Product));
