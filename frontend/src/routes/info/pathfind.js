import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';


function Pathfind(props) {
    const param = props.match.params;
    const onLinkClick = (cafe) => {
        props.history.push({
            pathname: '/pathfind/${cafe.id}',
            state: {cafe},
        });
    }


    useEffect(() => {
        axios.get('')

    });
    return (
        <div>
            <div className="path_link" onClick={() => onLinkClick()}>
                길찾기
            </div>
        </div>
    )

}

export default Pathfind;
