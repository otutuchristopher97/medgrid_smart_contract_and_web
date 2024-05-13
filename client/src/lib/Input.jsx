import React from "react";

const Input = ({ ...props }) => {
  return (
    <div className="buy_crypto__formarea-group mb-5 mb-md-6">
      <label className="mb-2">{props.label}</label>
      <div className="d-flex align-items-center br2 p-1 rounded-4 bg1-color">
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          required={true}
        />
      </div>
    </div>
  );
};

export default Input;
