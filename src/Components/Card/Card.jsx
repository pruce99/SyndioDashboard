import React from "react";
import "./Card.scss";

export default function Card(props) {
  const { label, data } = props.data;

  const renderSwitch = (label, data) => {
    switch (label) {
      case "Pay Equity Gap":
        return (
            <div className="Data-container">
              <b>{data.minority.label}</b> earn <b>{data.minority.value}</b> for
              every <b>{data.majority.value}</b> earned by comparable{" "}
              <b>{data.majority.label}</b>
            </div>
        );
      case "Employees in Comparison":
        return (
            <div className="Data-container">
              <b>{data.label}</b> make up <b>{data.value}</b> of employees.
            </div>
        );
      case "Budget":
        return (
            <div className="Data-container">
              <b>{data.value}</b> minimum recommended budget to reduce pay
              equity gap
          </div>
        );
    }
  };

  return (
    <div className="Card-container">
      <div className="Label-container">{label}</div>
      {renderSwitch(label, data)}
    </div>
  );
}
