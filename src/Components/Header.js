import React from 'react';
import TransformersSection from '../Containers/TransformersSection'

function Header(props) {

  return (
    <header>
      <img
        src = {props.image}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
