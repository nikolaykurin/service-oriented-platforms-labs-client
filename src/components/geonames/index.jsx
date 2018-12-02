import React, { Component } from 'react';
import Geonames from 'geonames.js';
import { Button, Form, FormGroup, Label, CustomInput } from 'reactstrap';
import { GeoNamesUser } from '../../config/api';

class GeoNames extends Component {

  constructor(props) {
    super(props);

    this.geoNames = new Geonames({
      username: GeoNamesUser,
      lan: 'en',
      encoding: 'JSON'
    });

    this.state = {
      countries: [],
      states: [],
      regions: [],
      cities: [],

      selectedCountry: undefined,
      selectedState: undefined,
      selectedRegion: undefined,
      selectedCity: undefined,

      cityInfo: {}
    };

    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeRegion = this.changeRegion.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  async componentWillMount() {
    try {
      const countries = await this.geoNames.countryInfo({});

      this.setState({
        countries: countries.geonames
      })
    } catch (error) {
      console.error(error);
    }
  }

  async changeCountry(event) {
    const selectedCountry = event.target.value;
    const states = await this.geoNames.children({ geonameId: selectedCountry });

    this.setState({
      selectedCountry,
      states: states.geonames
    });
  }

  async changeState(event) {
    const selectedState = event.target.value;
    const regions = await this.geoNames.children({ geonameId: selectedState });

    this.setState({
      selectedState,
      regions: regions.geonames
    });
  }

  async changeRegion(event) {
    const selectedRegion = event.target.value;
    const cities = await this.geoNames.children({ geonameId: selectedRegion });

    this.setState({
      selectedRegion,
      cities: cities.geonames
    });
  }

  async changeCity(event) {
    const selectedCity = event.target.value;
    const cityInfo = this.state.cities.find( city => city.geonameId === Number(selectedCity) );

    this.setState({
      selectedCity,
      cityInfo
    });
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="country">Country</Label>
            <CustomInput type="select" name="country" id="country" value={this.state.selectedCountry} onChange={this.changeCountry}>
              {
                this.state.countries.map((country) => (
                  <option value={ country.geonameId } key={ country.geonameId }>{ country.countryName }</option>
                ))
              }
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <CustomInput type="select" name="state" id="state" value={this.state.selectedState} onChange={this.changeState}>
              {
                this.state.states.map((state) => (
                  <option value={ state.geonameId } key={ state.geonameId }>{ state.toponymName }</option>
                ))
              }
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="region">Region</Label>
            <CustomInput type="select" name="region" id="region" value={this.state.selectedRegion} onChange={this.changeRegion}>
              {
                this.state.regions.map((region) => (
                  <option value={ region.geonameId } key={ region.geonameId }>{ region.toponymName }</option>
                ))
              }
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <CustomInput type="select" name="city" id="city" value={this.state.selectedCity} onChange={this.changeCity}>
              {
                this.state.cities.map((city) => (
                  <option value={ city.geonameId } key={ city.geonameId }>{ city.toponymName }</option>
                ))
              }
            </CustomInput>
          </FormGroup>
        </Form>
        {
          this.state.cityInfo.toponymName ?
            <div>
              Info
              <p>
                <span>Name:&nbsp;</span>
                { this.state.cityInfo.toponymName }
              </p>
              <p>
                <span>Code:&nbsp;</span>
                { this.state.cityInfo.adminCode1 }
              </p>
              <p>
                <span>Lat:&nbsp;</span>
                { this.state.cityInfo.lat }
              </p>
              <p>
                <span>Lng:&nbsp;</span>
                { this.state.cityInfo.lng }
              </p>
              <p>
                <span>Population:&nbsp;</span>
                { this.state.cityInfo.population }
              </p>
            </div> : null
        }
      </div>

    );
  }

}

export default GeoNames;
