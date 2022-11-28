// Render Prop
import React, { Component } from "react";
import {
  FormContainer,
  ShortInput,
  Wrapper,
  LabelText,
  LongInput,
  SubmitWrapper,
  BtnSubmit,
  RedStar,
} from "./Form.Styled";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    address: "",
    addressLineTwoo: "",
    city: "",
    province: "",
    zipcode: "",
    phone: "",
    email: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      firstname: "",
      lastname: "",
      address: "",
      addressLineTwoo: "",
      city: "",
      province: "",
      zipcode: "",
      phone: "",
      email: "",
    });
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      username,
      lname,
      address,
      addressLineTwoo,
      city,
      province,
      zipcode,
      phone,
      email,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormContainer>
          <h2>
            Full Name<RedStar>*</RedStar>
          </h2>
          <Wrapper>
            <div>
              <ShortInput
                type="text"
                name="firstname"
                value={username}
                onChange={this.handleChange}
              />
              <LabelText>First Name</LabelText>
            </div>
            <div>
              <ShortInput
                type="text"
                name="lastname"
                value={lname}
                onChange={this.handleChange}
              />
              <LabelText>Last Name</LabelText>
            </div>
          </Wrapper>

          <h2>
            Adress<RedStar>*</RedStar>
          </h2>
          <div>
            <LongInput
              type="text"
              name="address"
              value={address}
              onChange={this.handleChange}
            />
            <LabelText>Street address</LabelText>
          </div>
          <div>
            <LongInput
              type="text"
              name="addressLineTwoo"
              value={addressLineTwoo}
              onChange={this.handleChange}
            />
            <LabelText>Street address line 2</LabelText>
          </div>

          <Wrapper>
            <div>
              <ShortInput
                type="text"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
              <LabelText>City</LabelText>
            </div>
            <div>
              <ShortInput
                type="text"
                name="province"
                value={province}
                onChange={this.handleChange}
              />
              <LabelText>State / Province</LabelText>
            </div>
          </Wrapper>

          <div>
            <LongInput
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={this.handleChange}
            />
            <LabelText>Postal / Zip Code</LabelText>
          </div>

          <h2>
            Phone Namber <RedStar>*</RedStar>
          </h2>
          <ShortInput
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="(000) 000-000"
          />
          <h2>
            E-mail <RedStar>*</RedStar>
          </h2>
          <ShortInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="ex:email@yahoo.com"
          />
          <LabelText>exampl@exampl.com</LabelText>
          <SubmitWrapper>
            <BtnSubmit type="submit">Submit</BtnSubmit>
          </SubmitWrapper>
        </FormContainer>
      </form>
    );
  }
}

export default Form;
