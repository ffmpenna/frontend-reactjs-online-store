import React from 'react';
import CategoriesList from './CategoriesList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CategoriesList />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
