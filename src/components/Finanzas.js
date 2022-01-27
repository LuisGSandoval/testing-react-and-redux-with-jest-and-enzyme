export default function Finanzas({ finanzas, eliminarFinanza }) {
  return (
    <div className="column is-half">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {finanzas.map((x, i) => (
            <tr data-test={`tr-${x.desc}`} key={i}>
              <td data-test={`td-desc`}>{x.desc}</td>
              <td data-test={`td-cant`}>{x.cant}</td>
              <td>
                <button
                  data-test={`removeButton-${x.desc}`}
                  className="button is-warning"
                  onClick={() => eliminarFinanza(i)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
