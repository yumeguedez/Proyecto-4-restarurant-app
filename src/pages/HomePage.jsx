const HomePage = () => {
  return (
    <>
      <main className="row">
        <article className="col">
          <h1 className="text-center">Italian's Food</h1>
          <h4 className="text-sm-start">
            El Verdadero Sabor de la Comida Italiana.
          </h4>
        </article>
        <section className="row">
          <article className="col">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://w0.peakpx.com/wallpaper/569/768/HD-wallpaper-italian-food-dinner-meals-lunch-italian-food-rum-breakfast-beer.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://img.freepik.com/foto-gratis/mesa-vista-superior-llena-surtido-comida-deliciosa_23-2149141339.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.pexels.com/photos/2295285/pexels-photo-2295285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <section className="row">
              <article className="col">
                <div>
                  <div id="list-example" className="list-group">
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-1"
                    >
                      Nuestra Historia
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-2"
                    >
                      Nuestras Servicios
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-3"
                    >
                      Ubicación
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-4"
                    >
                      Rating
                    </a>
                  </div>
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-offset={0}
                    className="scrollspy-example"
                    tabIndex={0}
                  >
                    <h4 id="list-item-1">Nuestra Historia</h4>
                    <p>
                      El restaurante nació a principio del año 2010 como un
                      sueño hecho realidad para la Familia Florentinni, su
                      bisabuelo Arthur Florentinni quien arribó a Colombia a
                      finales de la II Guerra Mundial y con solo dos maletas y
                      muchos sueños logró fundar ITALIAN'S FOOD, sin embargo no
                      fue sino hasta el año 2010 que sus bisnietos lograron que
                      las recetas aprendidas de generación en generación
                      hicieran que el Restaurante se convirtiera en uno de los
                      mejores 5 restaurantes de comida italiana de Bogota.
                    </p>
                    <h4 id="list-item-2">Nuestras Servicios</h4>
                    <p>
                      Realizamos una de las mejores comidas italianas de Bogota,
                      contamos con excelente talento humano dispuesto a dejarlo
                      todo en la cocina. Realizamos eventos de cumpleaños, boda,
                      despedidas de solteras, entre otros.
                    </p>
                    <h4 id="list-item-3">Ubicación</h4>
                    <p>...</p>
                    <h4 id="list-item-4">Rating</h4>
                    <p>...</p>
                  </div>
                </div>
              </article>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePage;
