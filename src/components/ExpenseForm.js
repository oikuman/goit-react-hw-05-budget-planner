import React, { Component } from "react";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class ExpenseForm extends Component {
  state = {
    name: "",
    amount: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }); // --!!!---operation with store---!!!---
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({
      ...this.state
    }); // --!!!---operation with store---!!!---only expense

    this.setState({ name: "", amount: 0 }); // --!!!---operation with store---!!!---
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name} // --!!!---operation with store---!!!---
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount} // --!!!---operation with store---!!!---
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
