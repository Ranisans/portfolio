import React, { useState, createRef } from 'react';

const HeaderButton = ({ callback }) => {
  const [isClicked, setIsClicked] = useState(false);
  const animationDuration = 500;
  const ref = createRef();

  const onClick = () => {
    const { classList } = ref.current;
    if (isClicked) {
      classList.remove('header_button_cross-active');
      classList.remove('header_button_cross');
      setTimeout(() => {
        classList.add('header_button-active');
      }, animationDuration);
    } else {
      classList.remove('header_button-active');
      classList.add('header_button_cross');
      setTimeout(() => {
        classList.add('header_button_cross-active');
      }, animationDuration);
    }
    setIsClicked(!isClicked);
    callback();
  };

  return (
    <div className="header_button header_button-active" onClick={onClick} ref={ref}>
      <i className="header_button_line first_line"></i>
      <i className="header_button_line second_line"></i>
      <i className="header_button_line third_line"></i>
    </div>
  );
};

export default HeaderButton;
