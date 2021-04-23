import React, { useEffect, useState } from 'react';

import mainProductImg from '../../../../images/main-product-img.png';
import productThumbnail from '../../../../images/product-thumbnail.png';
import { connect } from 'react-redux';
import { IProduct } from '../../../../interfaces/interfaces';
import productGetActions from './ProductGetActions';
import { withRouterWrapper } from '../../../../helpers/UIUtil';
import Packaging from './Packaging';

interface IPathProps {
  fetch(productUrl): string;
}

interface IStateProps {
  payload: IProduct;
  isAdmin: boolean;
}

const Product = ({ isAdmin, payload, fetch }: IStateProps & IPathProps) => {
  const { packaging } = payload;

  const [name, setName] = useState(payload.name);
  const [description, setDescription] = useState(payload.description);

  const onChangeProp = (setProperty, event) => {
    setProperty(event.target.value);
  };

  const save = () => {
    console.log(name);
    console.log(description);
  };

  useEffect(() => {
    fetch(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setName(payload.name);
    setDescription(payload.description);
  }, [payload]);

  return (
    <section className="main-content clear-fix">
      <section className="product-image-col">
        <div className="product-image-container">
          <a href="">
            <img src={mainProductImg} />
          </a>
          <a href="" className="enlarge-product-btn">
            Ver más grande
          </a>
        </div>
        <div className="product-thumbnail-container">
          <a href="" className="active-thumbnail">
            <img src={productThumbnail} />
          </a>
        </div>
      </section>
      <section className="product-details-col">
        <H2OrInput isAdmin={isAdmin} name={name} onChangeName={(event) => onChangeProp(setName, event)}></H2OrInput>
        <POrInput
          isAdmin={isAdmin}
          description={description}
          onChangeDescription={(event) => onChangeProp(setDescription, event)}
        ></POrInput>
        <div className="product-content-details">
          <ul>
            {packaging.map((pack) => (
              <Packaging isAdmin={isAdmin} initialPack={pack} />
            ))}
          </ul>
        </div>
        <button onClick={save}></button>
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

const POrInput = ({ isAdmin, onChangeDescription, description }) => {
  if (isAdmin) {
    return (
      <input value={description} onChange={onChangeDescription} className="product-details-col-description"></input>
    );
  } else {
    return <p>{description}</p>;
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    payload: state.productGetReducer.payload,
    isAdmin: state.sessionReducer.isAdmin,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (productUrl) => dispatch(productGetActions.fetch(productUrl)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(Product));
