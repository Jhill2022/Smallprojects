import React from 'react';

export const Progressbar = ({bgColor, completed}) => {

    const containerStyles ={
        height: 25,
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
        with:"100%"


    }
    const fillerStyles = {
        backgroundColor:bgColor,
        height: "100%",
        width: ` ${completed}%`,
        borderRadius: "inherit",
        textAlign: "right",
        transition:"width 1s ease-in-out"
    }
    const labelStyles = {
        padding: 15,
        margin: 10,
        color: "#fff",
        fontWeight:"bold",
    }
  return (
    <div className="container" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
