import getEnv from 'getenv';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../../../../helpers/UIUtil';
import { IPicture, IProduct } from '../../../../interfaces/interfaces';
import Error from '../../Error/Error';
import Packaging from './Packaging/Packaging';
import ProductPicture from './Picture/ProductPicture';
import productPictureActions from './Picture/ProductPictureActions';
import productActions from './ProductActions';

const API_URL = getEnv('REACT_APP_API_URL');

interface IPathProps {
  fetch(productUrl: string): string;
  openDialog(productId: string, productUrl: string): string;
  put(id: string, name: string, description: string): string;
  selectPicture(pictureId: string);
}

interface IStateProps {
  payload: IProduct;
  isAdmin: boolean;
  refreshPage: boolean;
  selectedPicture: IPicture;
  errorFetch: string;
  errorPut: string;
}

const Product = ({
  isAdmin,
  payload,
  errorFetch,
  errorPut,
  fetch,
  selectPicture,
  put,
  openDialog,
  refreshPage,
  selectedPicture,
}: IStateProps & IPathProps) => {
  const { packaging, pictures } = payload;

  const [name, setName] = useState(payload.name);
  const [nameColor, setNameColor] = useState('white');
  const [description, setDescription] = useState(payload.description);
  const [descriptionColor, setDescriptionColor] = useState('white');

  const onChangeProp = (property, setProperty, setPropertyColor, event) => {
    setProperty(event.target.value);
    if (event.target.value.toString() !== payload[property].toString()) {
      setPropertyColor('#ffcccb');
    } else {
      setPropertyColor('white');
    }
  };

  const update = () => {
    put(payload.id, name, description);
    setNameColor('white');
    setDescriptionColor('white');
  };

  useEffect(() => {
    fetch(location.pathname);
  }, [location.pathname, refreshPage]);

  useEffect(() => {
    setName(payload.name);
    setDescription(payload.description);
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
        <H2OrInput
          isAdmin={isAdmin}
          name={name}
          onChangeName={(event) => onChangeProp('name', setName, setNameColor, event)}
          style={{ backgroundColor: nameColor }}
        ></H2OrInput>
        <POrInput
          isAdmin={isAdmin}
          description={description}
          onChangeDescription={(event) => onChangeProp('description', setDescription, setDescriptionColor, event)}
          style={{ backgroundColor: descriptionColor }}
        ></POrInput>
        <div className="product-content-details">
          <ul>
            {packaging.map((pack) => (
              <Packaging key={pack.id} isAdmin={isAdmin} pack={pack} />
            ))}
          </ul>
        </div>
        {isAdmin ? (
          <button onClick={update} className="form-btn">
            Grabar
          </button>
        ) : null}
        {errorPut ? <Error error={errorPut} /> : null}
      </section>
    </section>
  );
};

const H2OrInput = ({ isAdmin, onChangeName, name, style }) => {
  if (isAdmin) {
    return <input value={name} onChange={onChangeName} className="product-details-col-name" style={style}></input>;
  } else {
    return <h2>{name}</h2>;
  }
};

const POrInput = ({ isAdmin, onChangeDescription, description, style }) => {
  if (isAdmin) {
    return (
      <textarea
        rows={3}
        cols={38}
        value={description}
        onChange={onChangeDescription}
        className="product-details-col-description"
        style={style}
      ></textarea>
    );
  } else {
    return <p>{description}</p>;
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
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (productUrl: string) => dispatch(productActions.fetch(productUrl)),
  put: (id: string, name: string, description: string) => dispatch(productActions.put(id, name, description)),
  openDialog: (productId: string) => dispatch(productPictureActions.openDialog(productId)),
  selectPicture: (pictureId: string) => dispatch(productActions.selectPicture({ id: pictureId })),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(Product));
