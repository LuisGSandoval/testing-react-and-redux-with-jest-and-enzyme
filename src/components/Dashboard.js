export default function Dashboard({ valor }) {
  return (
    <div className="column is-half">
      <div className="box">
        <p>Total</p>
        <strong data-test="total">{valor}</strong>
      </div>
    </div>
  )
}
