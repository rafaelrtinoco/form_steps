import { BiSmile, BiShocked, BiSad, BiMeh } from "react-icons/bi";

/* eslint-disable react/prop-types */
import "./Thanks.css"

 const emojiData = {
  insatisfeito: <BiSad />,
  neutro: <BiMeh />,
  satisfeito: <BiSmile />,
  muitosatisfeito: <BiShocked />,
 }

const Thanks = ( {data}) => {
  {console.log(data)}
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você recebá um cupom de 10% de desconto para sua próxima compra. </p>
      <p>Para concluir a avaliação clique no botão abaixo</p>
      <h3>Aqui está o resumo de sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>   
        {emojiData[data.review]}       
      </p>
      { <p className="review-data">
        <span>Comentário: </span>    
        {data.comment}          
      </p>}
    </div>
  )
}

export default Thanks;