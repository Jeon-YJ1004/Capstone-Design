import React, {
    useState
} from 'react';
import {withRouter} from 'react-router-dom';
import Content from './content';
import Result from './result';
import '../styles/searchbar.css'

function Searching(props) {
    const [inputText, setInputText] = useState("");
    const [gu, setGu] = useState("");
    const [place, setPlace] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    };
    const OpChange = (e) => {
        setGu(e.target.value);
        console.log(gu)
    };

    return (

        <div class="s132">
            <form className="inputForm" id="content" onSubmit={handleSubmit}>
                <div class="inner-form">
                    <div class="input-field first-wrap">
                        <div class="input-select">
                            <select id="option" required data-trigger="" name="choices-single-defaul" onChange={OpChange} value={gu}>
                            <option placeholder="">Category</option>
                            <option value="강남구">강남구</option>
                            <option value="서초구">서초구</option>
                            <option value="노원구">노원구</option>
                            <option value="마포구">마포구</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-field second-wrap">
                    <input id="search" type="text" placeholder="Enter Cafe Keywords" name="input" class="input" onChange={onChange} value={inputText} />
                    </div>
                    <div class="input-field third-wrap">
                    <button class="btn-search" type="submit" onClick={() => props.history.push(`/search/${gu}/${place}`)}>Search</button>
                    </div>
                </div>
            </form>
      
         </div>
    );
};
export default withRouter(Searching);

 