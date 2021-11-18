
/* global kakao */
import React, { useEffect } from 'react';
import { InfoWrapper } from 'globalStyles';

import { Skeleton } from 'antd';
import styled from 'styled-components';

const Location = ({ cafe, loading }) => {
  const { longitude, latitude } = cafe;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);
  const Map = styled.div`
  width: 100%;
  height: 20vw;
  @media (max-width: 768px) {
    height: 40vw;
  }`;

  return (
    <InfoWrapper>
      <h1>LOCATION</h1>
      {loading ? (
        <Skeleton active={true} paragraph={{ rows: 4 }} />
      ) : (
        <Map id="map" />
      )}
    </InfoWrapper>
  );
};

export default Location;
