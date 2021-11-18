/*global kakao*/
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect,useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Searching from '../../components/searching';
import Map_container from "../../components/result";
import Location from "./Location";
import { cafeService } from 'service/cafes';

const CafeInfo=({cafeinfo})=>{
  const [cafe, setCafe] = useState({});
  let { id } = useParams();
  const cafe_id = parseInt(id);
  useEffect(() => {
    getCafeDetail();
  }, []);
  const { name,star,time,address} = cafe;

  const getCafeDetail = async () => {
    try {
      const res = await cafeService.getCafeById(cafe_id);
      setCafe(res.data);
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(res.data.latitude, res.data.longitude),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      var imageSrc = "https://1.bp.blogspot.com/-08ebwsVzqag/YSXWjBOHKPI/AAAAAAAAD9s/lRd5ya_9A2AgPtylT9oyilWIGohCTv9XQCLcBGAsYHQ/s834/dark_marker.png";   
      var imageSize = new kakao.maps.Size(28, 40); 
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(res.data.latitude, res.data.longitude),
        title : res.data.name,
        image : markerImage
    });
    } catch (e) {
      console.log(e.message);
    }
  };


  return(
    <Fragment>
      {cafe}
      {name}
      <InfoWrapper>
          <h1>LOCATION</h1>
          <Map id="map" />
      </InfoWrapper>
      <InfoList>
        {address && (
          <InfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <InfoText>{address}</InfoText>
          </InfoItem>
        )}
        {time && (
          <InfoItem>
            <ClockCircleOutlined />
            <InfoText>{time}</InfoText>
          </InfoItem>
        )}
      </InfoList>
    </Fragment>    
  )
}
export default CafeInfo;