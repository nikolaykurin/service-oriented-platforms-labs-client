import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'reactstrap';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    this.changeSearchString = this.changeSearchString.bind(this);
  };

  changeSearchString(e) {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    return (
      <Row>
        <Col md={10}>
          <Input
            type="text"
            name="search"
            id="search"
            value={ this.state.searchString }
            onChange={ this.changeSearchString }
          />
        </Col>
        <Col md={2}>
          <Button
            color="info"
            onClick={ () => this.props.search(this.state.searchString) }
          >
            Search
          </Button>
        </Col>
      </Row>
    );
  };
}

export default Search;
