import React, { useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <button onClick={toggle} >
      {open ? 'ON':'OFF'}
    </button>
  );
};

export default ToggleButton;
