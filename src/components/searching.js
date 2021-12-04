import React, {
  useState
} from 'react';
import { withRouter } from 'react-router-dom';
import Content from './content';
import Result from './result';

function Searching(props) {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  return(
    <div>
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
      placeholder="Search for place" 
      onChange={onChange}
      value={inputText}
      />
      <button type="submit" onClick={() => props.history.push(`/search/${place}`)}>Search</button>
  
    </form>
    
    </div>
  );
};
export default withRouter(Searching);

 