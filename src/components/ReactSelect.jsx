import { Tooltip } from "primereact/tooltip";
import React from "react";
import Select, { components } from "react-select";
const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused} className="truncate">
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};
const ReactSelect = ({
  placeholderName,
  searchable,
  respclass,
  id,
  handleChange,
  value,
  requiredClassName,
  dynamicOptions,
  name,
}) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: 15,
      minHeight: 26,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      borderColor: state.isFocused ? "#ced4da" : "#ced4da",
      boxShadow: "none",
      whiteSpace: "normal",

      // fontWeight: " normal"
    }),
    // placeholder: (defaultStyles, state) => {
    //   return {
    //     ...defaultStyles,
    //     color: "none",
    //     position: "absolute",
    //     top: state.hasValue || state.selectProps.inputValue ? -8 : "",
    //     backgroundColor:
    //       state.hasValue || state.selectProps.inputValue
    //         ? "white"
    //         : "transparent",
    //     transition: "top 0.1s, font-size 0.1s",
    //     fontSize:
    //       state.hasValue || state.selectProps.inputValue ? "13px" : "12px",
    //     lineHeight: "18px",
    //     width: "80%",
    //     fontWeight:
    //       state.hasValue || state.selectProps.isFocused ? " 600" : "500",
    //   };
    // },
    menu: (styles) => ({
      ...styles,
      width: "100%",
      fontSize: 12,
      padding: 0,
    }),
    menuList: (styles) => ({
      ...styles,
      width: "100%",
      fontSize: 12,
      padding: 0,
    }),
    container: (provided, state) => ({
      ...provided,
      // marginTop: 50
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      overflow: "visible",
    }),
  };
  return (
    <>
      <Tooltip
        target={`#${id}`}
        position="top"
        content={placeholderName}
        // event="focus"
      />
      <div className={respclass}>
        <div className="form-group">
          <Select
            options={dynamicOptions ? dynamicOptions : options}
            isSearchable={searchable}
            // components={{
            //   ValueContainer: CustomValueContainer,
            // }}
            id={id}
            value={dynamicOptions?.find((option) => option?.value === value)}
            styles={customStyles}
            placeholder={placeholderName}
            onChange={
              handleChange ? (e) => handleChange(name, e.value) : () => {}
            }
            className={requiredClassName}
          />
        </div>
      </div>
    </>
  );
};

export default ReactSelect;
