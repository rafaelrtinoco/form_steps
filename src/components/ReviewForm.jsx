/* eslint-disable react/jsx-no-duplicate-props */
import { BiSmile, BiShocked, BiSad, BiMeh } from "react-icons/bi";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="insatisfeito" name="review" required />
          <BiSad />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutro" name="review" required />
          <BiMeh />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfeito" name="review" required />
          <BiSmile />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="muitosatisfeito" name="review" required />
          <BiShocked />
          <p>Muito Satisfeito</p>
        </label>
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
        />
      </div>
    </div>
  );
};

export default ReviewForm;
