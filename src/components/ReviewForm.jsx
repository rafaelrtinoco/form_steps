/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import { BiSmile, BiShocked, BiSad, BiMeh } from "react-icons/bi";

import "./ReviewForm.css";

// eslint-disable-next-line no-unused-vars
const radios = [
  { label: "Insatisfeiro", value: "insatisfeito", icon: <BiSad /> },
  { label: "Neutro", value: "neutro", icon: <BiMeh />},
  { label: "Satisfeito", value: "satisfeito", icon: <BiSmile /> },
  { label: "Muito Satisfeito", value: "muitosatisfeito", icon: <BiShocked /> },
];

const ReviewForm = ({ data, updateFielHandler }) => {
  // console.log("--", data);
  return (
    <div className="review-form">
      <div className="form-control score-container">
        {radios.map((d, i) => (
          <label key={i} className="radio-container">
          <input type="radio" value={d.value} name="review" required 
          checked={data.review === d.value}
          onChange={() => updateFielHandler("review", d.value)}/>
          {d.icon}
          <p>{d.label}</p>
        </label>
        ))}
        
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          rows={10}
          cols={30}
          placeholder="Conte como foi sua experiencia com o produto...."
          required
          value={data.comment || ""}
          onChange={(e) => updateFielHandler("comment", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReviewForm;
