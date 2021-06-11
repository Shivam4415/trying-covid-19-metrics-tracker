import React, {Fragment} from 'react';

export const If = props => {
  <Fragment>{props.show ? props.children : null}</Fragment>;
};

If.defaultProps = {
  show: true,
};
