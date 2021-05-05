import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IPackaging } from '../../../../../interfaces/interfaces';
import packagingUpdateActions from './PackagingActions';
import Error from '../../../Error/Error';

interface IProps {
  pack: IPackaging;
  isAdmin: boolean;
}

interface IPathProps {
  put(id: string, name: string, price: number): string;
}

interface IStateProps {
  error: string;
}

const Packaging = ({ pack, isAdmin, put, error }: IProps & IPathProps & IStateProps) => {
  const [name, setName] = useState(pack.name);
  const [nameColor, setNameColor] = useState('white');
  const [price, setPrice] = useState(Math.ceil(pack.price));
  const [priceColor, setPriceColor] = useState('white');

  const onChangeProp = (property, setProperty, setPropertyColor, event) => {
    setProperty(event.target.value);
    if (event.target.value.toString() !== pack[property].toString()) {
      setPropertyColor('#ffcccb');
    } else {
      setPropertyColor('white');
    }
  };

  const onClick = () => {
    put(pack.id, name, price);
    setNameColor('white');
    setPriceColor('white');
  };

  if (isAdmin) {
    return (
      <li key={pack.id} className="product-details-packaging">
        <div>
          <input
            value={name}
            onChange={(event) => onChangeProp('name', setName, setNameColor, event)}
            style={{ backgroundColor: nameColor }}
            className="product-details-packaging-name"
          />
          <input
            value={price}
            onChange={(event) => onChangeProp('price', setPrice, setPriceColor, event)}
            style={{ backgroundColor: priceColor }}
            className="product-details-packaging-price"
          />
        </div>
        <button onClick={onClick} className="small-form-btn">
          Grabar
        </button>
        {error ? <Error error={error} /> : null}
      </li>
    );
  } else {
    return (
      <li key={pack.id}>
        {name} <span className="product-price">$ {Math.ceil(price)}.00</span>
      </li>
    );
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    error: state.packagingUpdateReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  put: (id, name, price) => dispatch(packagingUpdateActions.put(id, name, price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packaging);