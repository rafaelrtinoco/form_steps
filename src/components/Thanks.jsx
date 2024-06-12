/* eslint-disable react/prop-types */
import "./Thanks.css"

// const emojiData = {
//   insatisfeito: <BiSad />,
//   neutro: <BiMeh />,
//   satisfeito: <BiSmile />,
//   muitosatisfeito: <BiShocked />,
// }

const Thanks = ( {data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você recebá um cupom para sua próxima compra. </p>
      <p>Para concluir a avaliação clique no botão abaixo</p>
      <h3>Obrigado por nos ajudar com sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Agradecemos a preferência!!</span>
        {/* {emojiData[data.review]} */}
      </p>
      {/* <p className="review-data">
        <span>Comentário:</span>
       
      </p> */}
    </div>
  )
}

export default Thanks;