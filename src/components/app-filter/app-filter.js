import { useContext } from "react";
import { Context } from "../../context";
import "./app-filter.css";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div className="btn-broup">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch({type: 'ON_FILTER', payload:btn.name })}
          type="button"
        >
          {btn.label}
        </button>
      ))}
      {/* <button className='btn btn-dark' type='button'>Barcha kinolar</button>    
    <button className='btn btn-outline-dark' type='button'>Ko'p ko'rigan kinolar</button>    
    <button className='btn btn-outline-dark' type='button'>Mashhur kinolar</button>     */}
    </div>
  );
};
const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewer", label: "Ko'p ko'rilgan kinolar" },
];
export default AppFilter;
