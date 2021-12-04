/* global kakao */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import { withRouter,Link} from 'react-router-dom';
import { useLocation } from "react-router";
import axios from 'axios';
import { Select, Card, Row, Col, Typography, Rate } from 'antd';
import Axios from 'axios';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import CafeInfo from '../routes/info/cafe_info';
import { Component } from 'react';
import Listpage from "./listPage"

const {
  kakao
} = window;

const { Title } = Typography;
const { Option } = Select;


function SearchData(pageNumber, params, setWidth){
  const {place} = params
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

//   const [latitude,setLatitude]=useState('');
//   const [longitude,setLongitude]=useState('');
//   const [cafe_id,setCafe_id]=useState('');
  
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  let cancel;
  
  const setMap = (data) => {
      const container = document.getElementById("map");                       
      const options = {
          center: new kakao.maps.LatLng(data[0].lat, data[0].lon),
          level: 5
      };
      const handleResize = () => {
          setWidth(window.innerWidth);
      }
      const map = new kakao.maps.Map(container, options);
  
      // 오른쪽에 지도 컨트롤 표시
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      var bounds = new kakao.maps.LatLngBounds();    
      var imageSrc = "https://1.bp.blogspot.com/-08ebwsVzqag/YSXWjBOHKPI/AAAAAAAAD9s/lRd5ya_9A2AgPtylT9oyilWIGohCTv9XQCLcBGAsYHQ/s834/dark_marker.png";   
      for (var i = 0; i < data.length; i ++) {
          var latlng = new kakao.maps.LatLng(data[i].lat, data[i].lon)

          var imageSize = new kakao.maps.Size(15, 22); 
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

          var marker = new kakao.maps.Marker({
              map: map,
              position: latlng,
              title : data[i].name,
              image : markerImage
          });

          // 마커 클릭 하면 확대
          kakao.maps.event.addListener(marker, 'click', function(){
              map.setLevel(1, {anchor: this.getPosition()});
          });

          var infowindow = new kakao.maps.InfoWindow({
              content: `<div class="infoWindow">${data[i].name}</div>`
          });

          (function(marker, infowindow) {
              // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
              kakao.maps.event.addListener(marker, 'mouseover', function() {
                  infowindow.open(map, marker);

                  var bgDiv = infowindow.a
                  bgDiv.style.borderColor = "#9ba2bd"
                  bgDiv.style.borderRadius = "10px"
                  bgDiv.children[1].style = "text-align: center; width: 150px;"
              });

              kakao.maps.event.addListener(marker, 'mouseout', function() {
                  infowindow.close();
              });
          })(marker, infowindow);

          // bounds = 모든 마커가 보이도록 지도 범위 설정
          bounds.extend(latlng)
      }
      map.setBounds(bounds);
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      }
  }

  useEffect(() => {
      if (pageNumber === 0){
          setData([])
      }
      setLoading(true);
      setError(false);
      axios({
          method: 'GET',
          url: `/cafes?searching=${place}`,
          params: { page: pageNumber },
          cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
          setData(prevData => {
              
              return [... new Set([...prevData, ...res.data.content])]
          });
          if (pageNumber == 0){
              setMap(res.data.content)
          } else {
              setMap([... new Set([...data, ...res.data.content])])
          }
          setHasMore(res.data.content.length > 0);
          setLoading(false);
      }).catch(e => {
          if (axios.isCancel(e)) return
          setError(true)
      })
      return () => cancel()
  }, [pageNumber, params])
  return {data, loading, hasMore};
}

function Result(props){
  const params = props.match.params
  const [width, setWidth] = useState(window.innerWidth);
  const [pageNumber, setPageNumber] = useState(0);
  const { data, loading, error, hasMore } = SearchData(pageNumber, params, setWidth);

  useEffect(() => {
      setPageNumber(0)
  }, [params])  

  const changeSort = (type) => {
      const {place} = params
      props.history.push({
          pathname: `/search/${place}`
      });
  }

  const observer = useRef()
  const lastDataRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore){
              setPageNumber(prevNum => prevNum + 1)
          }
      })
      if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const onCafeClick = (cafe) => {
      props.history.push({
        pathname: `/info/${cafe.id}`,
        state: { cafe },
      });
  };

  return (
    <Row>
        <Col span={24}>
        <div id="map" style={{
            width: `${width - 200}px`,
            height: '40vh'
        }}>
        </div>
        </Col>
        <Col span={24}>
        </Col>
        <Col span={24} className="list">
        {data.map((d, index) => {
        if (data.length === index + 1){
            return (
                <div className="listItem" key={index} ref={lastDataRef}>
                    <Card>
                        <Row>
                            <Col span={18}>
                                {/* <div className="img-div">
                                    <img src={d.img_path ? `http://${d.img_path}` : "https://1.bp.blogspot.com/-ZO8wGSRzFBA/YSnWa5QV6ZI/AAAAAAAAD-Y/3n5lSJwrx-Yh3McA1GpGCg6POSjrvsPPwCLcBGAsYHQ/s800/noimage.png"} alt={d.name} />
                                </div> */}
                                <div className="info" onClick={() => onCafeClick(d)}>
                                    <Title level={2} style={{margin: 0, color: "#dba56c"}}>{d.name}</Title>
                                    <p>{d.address}</p>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Rate allowHalf disabled defaultValue={d.star} />
                            </Col>
                        </Row>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div className="listItem" key={index}>
                    <Card>
                        <Row>
                            <Col span={18}>
                                {/* <div className="img-div">
                                    <img src={d.img_path ? `http://${d.img_path}` : "https://1.bp.blogspot.com/-ZO8wGSRzFBA/YSnWa5QV6ZI/AAAAAAAAD-Y/3n5lSJwrx-Yh3McA1GpGCg6POSjrvsPPwCLcBGAsYHQ/s800/noimage.png"} alt={d.name} />
                                </div> */}
                                <div className="info" onClick={() => onCafeClick(d)}>
                                    <Title level={2} style={{margin: 0, color: "#dba56c"}}>{d.name}</Title>
                                    <p>{d.address}</p>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Rate allowHalf disabled defaultValue={d.star} />
                            </Col>
                        </Row>
                    </Card>
                </div>
            )
        }
    })}
        </Col>
    </Row>
  )
}

// class Result extends Component{
//   // 제일 common한 state값 초기 셋팅
//   state = {
//     loading: false,
//     ItemList: [] // 처음 Itemlist는 있는 상태로 기획 []
//   };

//   loadItem = async () => {
//     // Json Data 불러오기
//     axios // axios를 이용해
//       .get("../assets/cafe_json.json") // json을 가져온다음
//       .then(({ data }) => {
//         // data라는 이름으로 json 파일에 있는 값에 state값을 바꿔준다.
//         this.setState({
//           loading: true, // load되었으니 true,
//           ItemList: data // 비어있던 Itemlist는 data에 
//         });
//       })
//       .catch(e => {
//         // json이 로드되지않은 시간엔
//         console.error(e); // 에러표시
//         this.setState({
//           loading: false // 이때는 load 가 false 유지
//         });
//       });
//   };

//   componentDidMount() {
//     this.loadItem();
//   }


//   // APP.js 컴포넌트의 최종 보여지는 render값 정의
//   render() {
//     place=this.props
//     const { ItemList } = this.state;
//     return (
//       <div>
//         <div id="map">

//         </div>
//         <Listpage ResultItem={ItemList} />
//       </div>
//     );
//   }
// }


export default withRouter(Result)