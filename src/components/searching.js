// import React, {
//   useState
// } from 'react';

// import Content from './content';


// const Searching = (props) => {
//   const [inputText, setInputText] = useState("");
//   const [place, setPlace] = useState("");
//   const onChange = (e) => {
//     setInputText(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPlace(inputText);
//     setInputText("");
//   };
//   return(
//     <>
//     <form className="inputForm" onSubmit={handleSubmit}>
//       <input
//       placeholder="Search for place whatever you want" 
//       onChange={onChange}
//       value={inputText}
//       />
//       <button type="submit">Search box</button>
//     </form>
//     <Content />
//     </>
//   );
// };
// export default Searching;

