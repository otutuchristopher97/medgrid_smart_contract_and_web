import React from "react";

const Select = ({ ...props }) => {
  //   console.log;
  return (
    <div className="buy_crypto__formarea-group mb-5 mb-md-6">
      <label className="mb-2">{props.label}</label>

      <div className="form-control d-flex flex-column align-items-center br2 p-3 rounded-4 bg1-color">
        <select
          required={true}
          id="select3"
          name={props.name}
          className="w-100"
          value={props.value}
          onChange={props.onChange}
          style={{ background: "rgb(0 0 0 / 0%)" }}
        >
          {!props.options.length ? (
            <option>Select</option>
          ) : (
            props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default Select;
