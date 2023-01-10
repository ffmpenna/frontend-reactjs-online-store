import React, { Component } from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import CartIcon from './CartIcon';
import CategoriesList from './CategoriesList';

export default class Header extends Component {
  render() {
    const {
      onCategoryChange, searchProductByQuerry,
      categorySelected, onInputChange, showSearch } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Container fluid="lg">
          <Navbar.Brand href="/">TrybeShop</Navbar.Brand>
          {showSearch
            && <Form className="d-flex">
              <Form.Control
                name="querryInput"
                onChange={ onInputChange }
                type="search"
                placeholder="O que você procura?"
                data-testid="query-input"
                className="me-2"
              />
              <CategoriesList
                categorySelected={ categorySelected }
                onInputChange={ onCategoryChange }
              />
              <Button
                type="button"
                onClick={ searchProductByQuerry }
                data-testid="query-button"
                variant="outline-secondary"
              >
                Pesquisar
              </Button>
               </Form>}
          <Navbar.Text>
            <CartIcon />
          </Navbar.Text>
        </Container>
      </Navbar>
    );
  }
}
