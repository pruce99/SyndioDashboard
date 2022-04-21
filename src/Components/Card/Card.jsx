import React from "react";
import "./Card.scss";

export default function Card(props) {
  const { label, data } = props.data;

  const renderSwitch = (label, data) => {
    switch (label) {
      case "Pay Equity Gap":
        return (
          <div>
            <div>
              <b>{data.minority.label}</b> earn <b>{data.minority.value}</b> for
              every <b>{data.majority.value}</b> earned by comparable{" "}
              <b>{data.majority.label}</b> .
            </div>
          </div>
        );
      case "Employees in Comparison":
        return (
          <div>
            <div>
              <b>{data.label}</b> make up <b>{data.value}</b> of employees.
            </div>
          </div>
        );
      case "Budget":
        return (
          <div>
            <div>
              <b>{data.value}</b> minimum recommended budget to reduce pay
              equity gap
            </div>
          </div>
        );
    }
  };

  return (
    <div className="Card-container">
      <div className="Label-container">{label}</div>
      <div>{renderSwitch(label, data)}</div>
    </div>
  );
}
