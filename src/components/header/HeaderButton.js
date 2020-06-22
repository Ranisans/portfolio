import React, { useState, createRef } from 'react';

const HeaderButton = ({ callback }) => {
  const [isClicked, setIsClicked] = useState(false);

  const ref = createRef();

  const onClick = () => {
    if (isClicked) {
      ref.current.classList.remove('header_button_cross');
    } else {
      ref.current.classList.add('header_button_cross');
    }
    setIsClicked(!isClicked);
    callback();
  };

  return (
    <div className="header_button" onClick={onClick} ref={ref}>
      <i className="header_button_line first_line"></i>
      <i className="header_button_line second_line"></i>
      <i className="header_button_line third_line"></i>
    </div>
  );
};

export default HeaderButton;
