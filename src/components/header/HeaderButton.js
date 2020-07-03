import React, { useContext, useEffect, useState } from 'react';

import HeaderContext from './HeaderContext';

const HeaderButton = () => {
  const { isMenuHidden, callback } = useContext(HeaderContext);
  const [buttonRef, setButtonRef] = useState(null);
  const animationDuration = 500;

  useEffect(() => {
    setButtonRef(document.querySelector('.header_button'));
  }, []);

  useEffect(() => {
    const setHamburger = () => {
      const { classList } = buttonRef;
      classList.remove('header_button-active');
      classList.add('header_button_cross');
      setTimeout(() => {
        classList.add('header_button_cross-active');
      }, animationDuration);
    };

    const setCross = () => {
      const { classList } = buttonRef;
      classList.remove('header_button_cross-active');
      classList.remove('header_button_cross');
      setTimeout(() => {
        classList.add('header_button-active');
      }, animationDuration);
    };

    if (buttonRef) {
      if (isMenuHidden) setCross();
      else setHamburger();
    }
  }, [isMenuHidden, buttonRef]);

  return (
    <HeaderContext.Consumer>
      {() => (
        <div className='header_button header_button-active'
          onClick={callback}
        >
          <i className="header_button_line first_line"></i>
          <i className="header_button_line second_line"></i>
          <i className="header_button_line third_line"></i>
        </div>
      )}
    </HeaderContext.Consumer>
  );
};

export default HeaderButton;
