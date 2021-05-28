import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ICategory } from '../../../../interfaces/interfaces';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import categoryActions from './CategoryActions';

interface IPathProps {
  fetch(): string;
}

interface IStateProps {
  getAll: {
    loading: boolean;
    error: string;
    categories: ICategory[];
  };
}

const Categories = ({ getAll, fetch }: IStateProps & IPathProps) => {
  const { categories, loading, error } = getAll;

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className="main-forms-section">
      <div className="main-forms-forms clear-fix">
        <h2 className="main-title">Gestión de Categorías</h2>
        <div className="new-customer">
          <h3 className="form-header">Lista de Categorías</h3>
          {loading ? <Loader className="loader-upload-provider" /> : null}
          {error ? <Error error={error} /> : null}
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    getAll: {
      categories: state.categoryGetAllReducer.payload.categories,
      loading: state.categoryGetAllReducer.loading,
      error: state.categoryGetAllReducer.error,
    },
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: () => dispatch(categoryActions.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
