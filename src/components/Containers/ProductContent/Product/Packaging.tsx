import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IPackaging } from '../../../../interfaces/interfaces';
import packagingSaveActions from './PackagingSaveActions';

interface IStateProps {
  savedPack: IPackaging | null;
}

interface IStateInitialProps {
  initialPack: IPackaging;
  isAdmin: boolean;
}

interface IPathProps {
  post(id: string, name: string, price: number): string;
}

const Packaging = ({ savedPack, initialPack, isAdmin, post }: IStateProps & IStateInitialProps & IPathProps) => {
  // console.log('===============');
  // console.log(`saved: ${JSON.stringify(savedPack)}`);
  // console.log(`initialPack: ${JSON.stringify(initialPack)}`);
  // console.log('===============');

  const pack = savedPack && savedPack.id === initialPack.id ? savedPack : initialPack;

  // console.log('***************');
  // console.log(`selected: ${JSON.stringify(pack)}`);
  // console.log('***************');

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
    post(pack.id, name, price);
    setNameColor('white');
    setPriceColor('white');
  };

  useEffect(() => {
    setName(initialPack.name);
    setPrice(Math.ceil(initialPack.price));
    setNameColor('white');
    setPriceColor('white');
  }, [initialPack]);

  if (isAdmin) {
    return (
      <li key={initialPack.id} className="product-details-packaging">
        <input
          value={name}
          onChange={(event) => onChangeProp('name', setName, setNameColor, event)}
          style={{ backgroundColor: nameColor }}
        />
        <input
          value={price}
          onChange={(event) => onChangeProp('price', setPrice, setPriceColor, event)}
          style={{ backgroundColor: priceColor }}
        />
        <button onClick={onClick}>Grabar</button>
      </li>
    );
  } else {
    return (
      <li key={initialPack.id}>
        {name} <span className="product-price">$ {Math.ceil(price)}.00</span>
      </li>
    );
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    savedPack: state.packagingSaveReducer.response,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  post: (id, name, price) => dispatch(packagingSaveActions.post(id, name, price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packaging);
