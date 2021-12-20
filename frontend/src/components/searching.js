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
                            <select required id="option" data-trigger="" name="choices-single-defaul"
                                    onChange={OpChange} value={gu}>
                                <option placeholder="">Category</option>
                                <option value="마포구">마포구</option>
                                <option value="서대문구">서대문구</option>
                                <option value="은평구">은평구</option>
                                <option value="종로구">종로구</option>
                                <option value="중구">중구</option>
                                <option value="용산구">용산구</option>
                                <option value="성동구">성동구</option>
                                <option value="광진구">광진구</option>
                                <option value="동대문구">동대문구</option>
                                <option value="성북구">성북구</option>
                                <option value="강북구">강북구</option>
                                <option value="강서구">강서구</option>
                                <option value="도봉구">도봉구</option>
                                <option value="중랑구">중랑구</option>
                                <option value="강동구">강동구</option>
                                <option value="송파구">송파구</option>
                                <option value="관악구">관악구</option>
                                <option value="동작구">동작구</option>
                                <option value="영등포구">영등포구</option>
                                <option value="금천구">금천구</option>
                                <option value="구로구">구로구</option>
                                <option value="강남구">강남구</option>
                                <option value="서초구">서초구</option>
                                <option value="노원구">노원구</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-field second-wrap">
                        <input required id="search" type="text" placeholder="Enter Cafe Keywords" name="input"
                               class="input" onChange={onChange} value={inputText}/>
                    </div>
                    <div class="input-field third-wrap">
                        <button class="btn-search" type="submit"
                                onClick={() => props.history.push(`/search/${gu}/${place}`)}>Search
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};
export default withRouter(Searching);

 