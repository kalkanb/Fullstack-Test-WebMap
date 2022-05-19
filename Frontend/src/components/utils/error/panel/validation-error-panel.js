import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

export const ValidationErrorPanel = (props) => {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    if (!!props.detail && !!props.detail.fields) {
      let groupedItems = props.detail.fields.map((item) => {
        let splittedItem = item.message.split("@");
        let message;
        let group;
        if (splittedItem.length > 1) {
          let newLine = splittedItem[1].indexOf("\n") > -1;
          if (newLine) {
            message = splittedItem[1].split("\n");
          } else {
            message = splittedItem[1];
          }
          group = splittedItem[0];
        } else {
          message = splittedItem[0];
          group = "General";
        }
        return {
          field: item.field,
          message,
          group,
        };
      });
      setItems(
        groupedItems.reduce((r, a) => {
          r[a.group] = [...(r[a.group] || []), a];
          return r;
        }, {})
      );
    }
  }, []);

  let fields = Object.keys(items).map((field, index) => {
    return (
      <div key={index} className="p-col-12">
        <label className="big-bold">{field}</label>
        {items[field].map((item, index) => {
          if (Array.isArray(item.message)) {
            return item.message.map((innerMessage, innerIndex) => {
              if (innerMessage !== "") {
                return (
                  <div
                    className="p-col-12"
                    key={innerIndex}
                    style={{ marginLeft: "5px" }}
                  >
                    {innerMessage}
                  </div>
                );
              }
            });
          } else {
            return (
              <div
                className="p-col-12"
                key={index}
                style={{ marginLeft: "5px" }}
              >
                {item.message}
              </div>
            );
          }
        })}
      </div>
    );
  });

  return (
    <div className="p-grid" style={{ overflowX: "auto", maxHeight: "500px" }}>
      <div className="p-col-12">
        <label className="big-bold">Trace Id: </label>
        <span>{props.detail.traceId}</span>
      </div>
      <div className="p-col-12">
        <label className="big-bold">Error Time: </label>
        {props.detail.timestamp}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Http Status: </label>
        {props.detail.status}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Error Type: </label>
        {props.detail.errorType}
      </div>
      <div className="p-col-12">
        <label className="big-bold">URL: </label>
        {props.detail.path}
      </div>
      {!props.detail.fields && (
        <div className="p-col-12">
          <label className="big-bold">Message: </label>
          {props.detail.message}
        </div>
      )}
      {!!props.detail.fields && (
        <div className="p-col-12">
          <label className="big-bold">Fill the required fields</label>
          {fields}
        </div>
      )}
    </div>
  );
};

ValidationErrorPanel.displayName = "ValidationErrorPanel";

ValidationErrorPanel.propTypes = {
  detail: PropTypes.object,
};
