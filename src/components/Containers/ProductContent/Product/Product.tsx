import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../../../../helpers/UIUtil';
import mainProductImg from '../../../../images/main-product-img.png';
import productThumbnail from '../../../../images/product-thumbnail.png';
import { IProduct } from '../../../../interfaces/interfaces';
import Packaging from './Packaging';
import productActions from './ProductActions';
interface IPathProps {
  fetch(productUrl): string;
  put(id: string, name: string, description: string): string;
}

interface IStateProps {
  payload: IProduct;
  isAdmin: boolean;
}

const Product = ({ isAdmin, payload, fetch, put }: IStateProps & IPathProps) => {
  const { packaging } = payload;

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
        <button onClick={update} className="form-btn">
          Grabar
        </button>
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

const mapStateToProps = (state): IStateProps => {
  return {
    payload: state.productGetReducer.payload,
    isAdmin: state.sessionReducer.isAdmin,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (productUrl) => dispatch(productActions.fetch(productUrl)),
  put: (id, name, description) => dispatch(productActions.put(id, name, description)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(Product));
