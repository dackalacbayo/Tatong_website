import React, { Component } from "react";
import {Header,Icon,Segment,Label,Dropdown,Grid,Input,TextArea,Divider,Button,Select} from "semantic-ui-react";

const InputField = props => (
  <div className="form-row">
    <div className="col-md-12">
      <div>
        <label className="col-form-label">
          {props.name}
          <span className="text-danger"> *</span>
        </label>{" "}
      </div>
      <Input
        fluid
        type={props.type}
        placeholder={props.name}
        name={props.fieldKey}
        required
      />
    </div>
  </div>
);

const items = [
  { name: "Email address", fieldKey: "email", type: "email" },
  { name: "Subject", fieldKey: "subject", type: "text" }
];
const ContactForm = props => {
    var { col } = props
  return (
      <div className={col}>
        <FormSection items={items} />
        <label className="col-form-label">
          Message<span className="text-danger"> *</span>
        </label>
        <TextArea
          className="form-control"
          name="message"
          id="message-text"
          rows="5"
          required
        />
        <br />
        <button className="btn mr-2 btn-md" ><Icon name='send' />Send</button>
      </div>

  );
};

const FormSection = props => {
  const { onChange, items } = props;
  return (
    <div>
      {items.map(row => (
        <InputField key={row.fieldKey} {...row} onChange={onChange} />
      ))}
    </div>
  );
};

export default ContactForm;
