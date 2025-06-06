import React, { useEffect, useState } from "react";

const Accordian = ({
  title,
  id,
  info,
  openAccordianId,
  setIdOfOpenAccordian,
}) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
    setIdOfOpenAccordian(id);
  };
  useEffect(() => {
    if (openAccordianId) {
      setShow(openAccordianId === id);
    }
  }, [id, openAccordianId]);

  return (
    <div className="accordian">
      <div className="accordian-title">
        <h3 >{title}</h3>
        <button 
        className="accordian-icon"
        onClick={toggle}>{show ? "-" : "+"}</button>
      </div>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Accordian;
