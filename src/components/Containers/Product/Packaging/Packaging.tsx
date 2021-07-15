import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IPackaging } from '../../../../interfaces/interfaces';
import packagingActions from './PackagingActions';

interface IProps {
  pack: IPackaging;
  isAdmin: boolean;
}

interface IPathProps {
  put(id: string, name: string, price: number): string;
  publish(id: string): string;
}

const Packaging = ({ pack, isAdmin, put, publish }: IProps & IPathProps) => {
  const [name, setName] = useState(pack.name);
  const [price, setPrice] = useState(Math.ceil(pack.price));
  const [mlPublished, setmlPublished] = useState(pack.mlPublished);
  const [recordUpdated, setRecordUpdated] = useState(false);

  const onChangeProp = (setProperty, event, formatter) => {
    setProperty(formatter(event.target.value));
  };

  const onUpdate = () => {
    put(pack.id, name, price);
    setRecordUpdated(false);
  };
  const onPublish = () => {
    publish(pack.id);
    setmlPublished(true);
  };

  if (isAdmin) {
    return (
      <li key={pack.id} className="product-details-packaging">
        <div>
          <input
            value={name}
            onChange={(event) =>
              onChangeProp(setName, event, (value) => {
                return value;
              })
            }
            className="product-details-packaging-name"
          />
          <input
            value={price}
            onChange={(event) =>
              onChangeProp(setPrice, event, (value) => {
                return parseFloat(value);
              })
            }
            className="product-details-packaging-price"
          />
        </div>
        {recordUpdated ? (
          <button onClick={onUpdate} className="small-form-btn">
            Grabar
          </button>
        ) : null}
        {!recordUpdated ? (
          <button onClick={onPublish} className="small-form-btn">
            {mlPublished ? 'Republicar' : 'Publicar'}
          </button>
        ) : null}
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

const mapDispatchToProps = (dispatch): IPathProps => ({
  put: (id, name, price) => dispatch(packagingActions.put(id, name, price)),
  publish: (id) => dispatch(packagingActions.post(id)),
});

export default connect(null, mapDispatchToProps)(Packaging);
