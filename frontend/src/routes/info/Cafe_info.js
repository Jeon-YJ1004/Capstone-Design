/*global kakao*/
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ClockCircleOutlined} from '@ant-design/icons';
import {Divider} from 'antd';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Star from '../../components/cafe/Star';
import {InfoWrapper} from '../../globalStyles';
import Location from "./Location";
import {cafeService} from '../../service/cafes';
import {Map} from './Location.style';
import Pathfind from './pathfind';
import {
    FlexContainer,
    InfoItem,
    InfoList,
    InfoText,
    Locationpath,
    Name,
    NameContainer,
    TitleContainer
} from './Cafe_info.style';
import {queryAllByAltText} from '@testing-library/dom';


function CafeInfo() {
    // const params = props.match.params;
    const [cafe, setCafe] = useState({});
    useEffect(() => {
        getCafeInfo();
      }, []);
    
    useEffect(() => {
        getCafeInfo();
    }, []);
    let {id} = useParams();
    const cafeId = parseInt(id);
    const {name, score, time, address,link,longitude,latitude} = cafe;

    const getCafeInfo = async () => {
        try {
            const res = await cafeService.getCafeById(cafeId);
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
                title: res.data.name,
                image: markerImage
            });
        } catch (e) {
            console.log(e.message);
        }
    };
    // const onPathClick = (cafId) => {
    //     props.history.push({
    //         pathname: `/pathfind/${cafe.id}`,
    //         state: {cafe},
    //     });
    // };


    return (
        <div>

            <TitleContainer>
                <NameContainer>
                    <Name>{name}</Name>
                </NameContainer>
                <Star score={score}/>
            </TitleContainer>

            <Divider/>

            <InfoList>
                {address && (
                    <InfoItem>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <InfoText>{address}</InfoText>
                    </InfoItem>
                )}
                {time && (
                    <InfoItem>
                        <ClockCircleOutlined/>
                        <InfoText>{time}</InfoText>
                    </InfoItem>
                )}
            </InfoList>
            <FlexContainer>
                <Locationpath>
                    <InfoWrapper>
                        <h1>LOCATION</h1>
                        <Map id="map"/>
                    </InfoWrapper>
                    <Link to={{pathname: "/pathfind", search: `?cafeId=${cafeId}`}}>
                    </Link>
                    {/* <div className="path" onClick={() => onPathClick()}>
                        길찾기
                    </div> */}
                </Locationpath>
            </FlexContainer>

        </div>
    );
};

export default CafeInfo;