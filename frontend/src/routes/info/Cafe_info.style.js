import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  margin-top: 10vh;
  margin-bottom: -1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left:50px;
  height:40px;
  width:auto;
`;
export const Name = styled.h1`
  display: inline-block;
  font-weight: 700;
  font-size: 1.8rem;
  margin-left: 0.8rem;
  
  
`;
export const StarContainer = styled.div`
  margin-top: -0.6rem;
  display: inline-block;
`;
export const StarIcon = styled(FontAwesomeIcon)`
  color: yellow;
`;
export const InfoList = styled.ul`
  margin-top:50px;
  list-style: none;
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const InfoItem = styled.li`
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 0.3rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const InfoText = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

// export const Locationpath = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 70vw;
//   @media (max-width: 768px) {
//     order: 1;
//     width: 100%;
//   }
// `;