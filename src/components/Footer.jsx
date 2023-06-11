const Footer = () => {
  return (
    <>
      <footer className="row">
        <article className="col">
          <table className="table-footer gap-0 row-gap-3 text-center">
            <caption style={{ color: "gray" }}>
              Para mas información acerca de nuestras redes sociales
            </caption>
            <thead className="thead" style={{ color: "gray" }}>
              <tr>
                <td className="fw-semibold">Dirección</td>
                <td className="fst-italic">
                  Calle 64 D # 73-75 Bogota D.C., Colombia
                </td>
              </tr>
              <tr>
                <td className="fw-semibold">Correo</td>
                <td className="fst-italic">yumerlis.guedez@gmail.com</td>
              </tr>
            </thead>
            <tbody className="tbody" style={{ color: "gray" }}>
              <tr>
                <td className="fw-semibold">Teléfonos</td>
                <td className="fst-italic">3154685754 - 601 7022433</td>
              </tr>
              <tr>
                <td className="fw-semibold">Marca Registrada</td>
                <td className="fst-italic">ITALIAN'S FOOD ©2010</td>
              </tr>
            </tbody>
          </table>
        </article>
      </footer>
    </>
  );
};

export default Footer;
