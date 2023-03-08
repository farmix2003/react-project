import "./search-panel.css";
import { useContext, useState } from "react";
import { Context } from "../../context";
const SearchPanel = () => {
  const {state, dispatch} = useContext(Context)
  const [term, setTerm] = useState("");
  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    dispatch({type: 'ON_TERM', payload: term})
  }
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinoni qidirish"
      onChange={updateTermHandler}
      value={term}
    />
  )
}
export default SearchPanel;
