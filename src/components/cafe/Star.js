import React from 'react';
import { StarContainer, StyledRate } from './Star.style';

const Star = ({ star, small }) => {
  return (
    <StarContainer>
      <StyledRate
        small={small}
        allowHalf
        disabled
        defaultValue={Math.round(star * 100) / 100}
      />
    </StarContainer>
  );
};

export default Star;