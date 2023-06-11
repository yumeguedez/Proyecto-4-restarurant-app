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
                    src="https://us.123rf.com/450wm/xelastia/xelastia2005/xelastia200500011/148014046-espaguetis-y-fettuccine-con-ingredientes-para-cocinar-pasta-en-una-mesa-de-hormig%C3%B3n-con-tablero-de.jpg?ver=6"
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
                    <p>Calle 64 D # 73-75 Bogota D.C., Colombia</p>
                    <h4 id="list-item-4">Rating</h4>
                    <p>
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUVGBUaGBgXGBUYFxcXFxYWFxUVHRoYHyggHRslHRcXIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICYuLS0uLS0vLS0tMC0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABFEAACAAMFBQYDBAcHAwUAAAABAgADEQQSITFBBVFhcZEGEyJSgaEyQrEUwdHwI2JygpKishYzU5PS4fE0Q8IHRFRjs//EABoBAAMBAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA0EQABAwIDBQcDBAIDAAAAAAABAAIDESEEEjFBUXGR8BNhgaGxwdEFIuEjMkLxFFKistL/2gAMAwEAAhEDEQA/AOxWeTexIw00rxzO7Hf6RPghGXL6QIS4IIIEIggggQiK82us0p8oA9ScT7Uic7UigWddQTSD45gPIO1RXhdC9YmxMpjDePkLlMjZmV5LSHYITlyilLSoIIIEIggggQvCYr7RaK60AxyOO+uIw4f8GwJiMtlUNUdNx/OW7pQQk2eRkSKHQbs9xyxwGNKmJkEJBgQlQQQQIRBBBAheExBm25K0rUjRRXrpFP2p2yUPcocSPGRoDkvMwz2bmA13iM/E44RktbsVDIKtzFXv20D5HrwC/jEM7dJmGUso3hT4iBmAdAdDFoEBxiptUsJapb+fwnnQ4nj8AhLp8QG1JAuNBv8AjchgjJpTZ5qVZZs6YLzUQaBRVjxqcPaCJpNMIIW+ctNHONdtyPSgXJvoAn4III2klIy5fSI1ut6SgpfBSaXqeFTpU6DjEyGZkoEFWAKkYg5U3co5cCRY0K9FK3Xkq0o3wsDQ0PPdDt6MrbbE1ma/LY91vzKDRXHzS9xzXiKhiTaJvyzaNgaOFZaHIgrQlToanqCBmPx8kTssrR4V/KeIA67Sr3azESio+JyEHNjT6ViLtZAJQAwF4D0KlB7UiH9stAILSUmUyKOKg5VCvQDrErbD1s94qVxQ0NCRiMDQkV5EwuScYhryLfau2NMbmjvU/Zk6/KRuFDzGETIyuwtuSkQq7qviNA5un+bSLuVtWU2TA8iD9DFcGMiLBmdQ0vXqiXLC5rjQWU3LlCoi/bZerAV34fWHiwAqSKbzFjHtf+0g8EkgjVOR4TCA4NaEEjjlCwI6Xipdozj3yAHCWL54k4Y/uhjF3GZmAuk+aDS/fAOoX+7U9C0Xtgm3paNvUV50xiHCy55H99xwFk+RtGjut7qTBBBFyQk5QqCE1pnAhKis2ltZJfgBDTDQBdxOV7cIR2i2gZMhnU+IkKDuJ16Vjmlptl03i9McWriWrXXrEOLxRi+1uvoqYIO0udEu2W4s5vE3ySTUa1x/4iZse3FZlQcSAefD6jmBEO3uloXvgACcJg8rnC/+y+u5q+YRGs4IoRgRj+P0r1jGcK6rQFwuq2K0BqMMnH8wH3j+mIu31Pds4zllJg/dbxe30is7P2uqFdwvqOWNOoZY0TqJikaOpHowhrH52Bh1rTyy+4J3mqie3s35tnR9E5eqAd+XGCI+yGvSJVc7i15gU+6PYqdAJaP3gKcnKaKwgggjYS0Qk7o9JgAgQmwmdaUjObT2aZNXQEysSVHxSq5un6u9co1EQtqTbkpqZkXV/abwj6xPiYWSxkP2X4Jkbi11lUWWUzjfgCrjAMDkcfppxzhVvJSXcmkNeIKgfEQhDMcdKD3EWBdJEqrGiooHE0FAOZMZSy2ovaDMmnxOKKvlXG6KaDPHUkmMR8TYGVBJcR4d9lXGXSG+g9diXbNvNiFRQozLioG6K+z2edaWoqgDfcVfXLDmekStoqUdVqe7YnDSvHfG3scpFQBAAtK4a114x1g8OJyb2HNMll7EAtGqgbI2GkkCviYamppyrC9u7N79KK1yYuKNjgajA00NItCYAI3BBGGZALLPMji7NW6w2ztqTpLOkw1cHI0FDWgBwOB0bkDiQWs5naQhSJiNLvAgNS8Ad9UJHWkTO0GxBPAdaLOSt1tGBzltvU5RnrJaCGZPECjXSDW8pJ8Nd4Oh9Djnj4gz4Z1nHL1bcroxFKNL7VdS5kprI/dOrKqEVBBoVFTWmRxJ9YX2ct692UZgCjECppUHGvWo9IiTGdZM5Ji0RpbreyoWBVcM6kkCg4Rjm2nZl8EkWgtrdcotQKFiHJA53Y5inLMr2DYR5/he9mHBzTvr5LrCODkQeULjl+w3tk5yshvDkzm6UTheVVvn0joey7GZSBTMeYdWc1JPAaDhGrh8Q6UVLaDfX8Dyqo5ohHatVNhLiuEekwARUkqj7W2W9ZJu9QGH7pqfascseXXPxD3XfTh+cY7ZNSoIIBBBFDka6RxiYtCRkQThyOIjK+oNo9rt49P7V+DcaEddWTez5ndsMirEKQT8StUMCBkKUHOh0izNk7t8yQCDiM1IpjxIMVtL2B+774uJb31U10oeYzPrn6xm6qwqz2HN7t1/Va6fXEf0t1jV7NnZL5SV/hJA+kZGUmdPKp9VIr9G6xdWW0gTK3gA104kZ0AYdR7xwKggjYQeSTK3OOut60NjlXVu7i39RpBHi22WRg6nkQfpBG4JYmNAJGiziHEk0UyPCYad68oVLrSLktLAj2CCBCIrLeb0yWnlq55/CnuSfSLOKASnnPMKmilipbGoVRdoOdW6xJjHHIGtFST+SmRi5JVVtW2NaJglSASqGgbMXhgStcCR5jgPo83Z6ZLS+pDtm6asODZ3xnWNJYrEkpbqCnHUxJyhLMA1wJluTu0HDhy7t7TiCKBlgPNYO1zO8l0BqQbyE4ElfiQjRqVFONRhgNR2etfeSFIxIqvSKnb+z+8JmShn8Sg07zytlg1a0OuIO4+djrRi6H4j4qUu4igbDRsqjQ7wQTPh4XYXEBrtHW9x/SbI8SxVGy61YEQrFbe8eYtMEag40wJ61h+1TbiM5+VSegii2XN7t5KtnNDD1Chz61Yj0i+aYskY0bdeGnqVMxlWk9b/AEWkilsqB7RNegzCc7g8R6kRY22d3ctn8oJ9dB1jONf7oSZYrMmA3jWl0HFiSMcSSMMfCfROOkoWs768tOZt5rqJtQeXuqvam2O/tKKp/QS2IU6TZgDC8N6rjQ5YE7orWsCG0pIdQst5qsSBQuHwAJzpeNOFIu5/ZebLlmYjd5MpQyyAFaWCCUWnwnAUpu1imnze8VJi1vIcKijUBFQR5la7UeuREZkwkZIHyjX5qtCLIWlrDp6710qzWdJahEUKoyAwEOmIyTr6qwyYAj1FREhK6x9HwWQvQI9gggQiOf8Aa/s4wdp0tSyObzAZq2poMaHOoyxjoEEJnhbK3KUyOQsNQuISwcQcwYsrASKjf7H/AI+6N32x2cjyGmXQHShDa0qARXXCMPLACnSgJ9x9xJ9Ixp4DE+hNVoxyiRtVPuk5sfTAe0XWxZa1wA6CM+7GpGIplTeD+fzjF9sRjrnE77Be1qCtZKGEEErKCNOGnZhZp1Spa74dghOXKNRLSoIIIEIggggQiK20WgNh8voK641HD843bEmI0yxoxNRUGtRoa0x54DoN0CEmzya+JuY9jU4Z1+g1httmr3qzlJVhUMBk4IIAYbxga54RndqyZtlYOCWkakk+CpwDkY03PpqMiHJO1nPw9DMKkdFIPOtN1RjGZLjQ12SWPS+tfEWVTICRmYbdWVzt1qosv/EdVP7INWPQRU9oZoltZ33F25eJD7AmHPtjllZpLsRWhDS2ArmRVx9Ii9uVJWRRSbxdaDPxIKD29olllE+Z7bUApzBTIm5XtadDWvIj0Wg2xZ3mIqLkWF4nRRj9aQ/Y7EssYYsc2OZimsW2JlxQyNeuitZU0Y0x0jx+0tDQ3a1pS7OBJ3Uu1ioYzDF/aGteGnCiX2EuXLsWkjI9otlFWa0SFzoZqD5qA0mAeYAmu9SRGlssx2FWUKd0PhBWsXPY2ZlD+Uhriw1Cp+ydpWbZpbDSq/wk09qRdRHstlSWCEUKCSxAFBU5mHsuUdRgtaAV48guJCVBBBHa5RBBBAhVnaNa2WdwRj/Dj90cyktUjPOnUU3cfzr1e3LelzF3qw6qY5XYboYE5AgnkDU0jL+oUDge5WYW4IVhLl0J3gkdCR+ecXGyfijLz9sy1JvHHOgqTU55Q5Zu2Fw+CTe/aIH0qYzCHOGispSy6lJygjF7O7YT5hosmVyrN+5DHkWMxUUbQ0m6iOGkrs5reQQQRtqRJy5QqCEEgAnSBCXHhMNJPVsAQTSsOgQIQBHsEQpNsvTXl0+ADHicSOhEcucG0rtsvQCdFLZQRQ4gxjts7FMisyUC0kVLIMWlalk8yalNMxGziDtmdckuRmRdHNvCPrCcTEySM59l+CZC9zHfaszYpM1/grkCGHwkHI4/ke8J27tB5CorBZkxDfoK0QMCgJ355DcTF1aLUtls4NLxFElqM3cCgUeoJJ0AJ0jG7PDd5NM5w8yZS/d+FDjSWDrQE5RhFrY4wa1JGncrmOMrqnQJqZbLVNKh2aszFJMrw1ByLEYgcCY13Z7s2JVJk2jTdAPgl8ANTxjMdmf0FtVTkSVB/VceE9bo6x0sCNDAQMcM51B5JWKkc37BYIAj2G3mAUBIFTQcTnSHI1VCiCCCBCTlyhUENu4UYnCBCcjwmG0mhvhMOwISbuFI429id2KklVBINPiNDSg3c46f2j2l3EkkfG3hXmcz6D7owtnQULMww44k6k8M4yvqMgq0bq+dPhW4QEAlQ02NJFPB7tjzxxizsmzkGSKOQECpXKLrZVlNQTGc40VRKLLs2sEaeTLFIIazCve3NVSnEkGwUmCCCPoVEiG5y3gV3giFkwAQIUaz2a58xIpl0x9vrEqCE5coEIZqAk5CMzY590rNY072b/8ApfNP4VWLbbk0iSwGb0Rebmn0rFH2nQJJlAYDvQB+6jXf6BGZj30c2n8au+FVh21sdtlropdtvWZKljQlyOWCfzGLOyTbyK28CvPX3inNjebOmMaqgIWupCjG76nOKMWXPiys/l6f0lRAB1XbFX26XNtUzu5Juy08Jm50GF4LxNM+Ahy19l1loDZq31HiVmN2bzPyvuYfSNLJkqihEAAG7SHQI8jwUYBzXJ19qcOrWXRxDqjLYDq65faGLFWUETJbUowowINSrDRlIrTIipHDpdmnB0Vxkygj1FYpe0XZ8TwZkshJwGejgYhWpu0bMe0O9lTMFnCTVKsjMpBFMjUU0IoRiMIXhYnwylhuDoeHvTmmTyNkYHDUbOPso23ZpM5aY9yt71+Kn8K1jRK1QCMjGUnzC0u0zR8wmEH9UDu19i/SLvs9aL9nlN+rdPNfCfpHWFlD5HnfccBZcSsoxvdb3VlBBBFynRDFolXxStIdJj0CBCYs0m4KVqPp+axIghOXKBCw3bq01nomiJX1Y4+wEUigXa1oSQKbxSrEHfiB6gxK7aIxtrKPmEulSAPhpmcMwYqrYoRgGa8EqTcIIHCpwNQAa8RHz2JcTK7j6W9lqwtGQcFay5+poK6DIcOQjQ7ItNSIxcqdXWLbZ9pKmJX6WTMtRRdDlnCCKrZ9uqKVgi+HHMDAHarOfEQaK7hNd0V0+feORug5ZE01/wBt1DxWTY0YLiTwB0Gn5/4jcU6kgRC2ha2lioS8upB+HiQBWnEROgjlwJFAad69BAN1TWfbN/4UBp+sK8DQitDv1h9dpE/Kv8R+5YgbZ2Ff8cmgbElTgGrnQ/KfQqdRqKKXa3S8GBa6fErqpZK6EHTcQSDTA5CMaebFwn7nW2GjaelvFVxxRyD7eS0s+sx0JFAhLACpq1KA5ClKxV9u/DZ5R0WalTwuOPviGu1pQa5NkS8gQyoKEHgRgfWJu27RJnWdQWCosyWSdAoqcN+ApQQhmIL82c1JFvhdiJzHNNLA9aJXZzaTizioBFWoSSPmOET22u2gT+NfxjNTe0CksLLJUUFTNmgKgHmIGJwxxIrxxo5YLNOthxdhJGb0ul+Cr8q++87+45cTZjHeFreS9MbCS54oOu9Xti2vMmtdlqjDVgSQPUGhPCsTNrWubKQOkvvAPjAreA8wX5uIz3ViXYrGkpAktQqjQRIjXjjkDKPeSd9rcLKNzm5rCyzth7SrMFfCBxYDA5HHTjDG0O1aAMqhSSCAQ4NKjPKE7f7PGpnWceLEvLFBeJzZNA+8ZNrjjGbMwOMeIrTGozBBxBG45RlzzYqF2VztdtG38lbDFDJ9wHgtMstTYnuGqmUwrrgCT7kxV9nO0iyZRRkZsSQVpkcKY8QT6x5s2a8uVOW4e7ZJlSBQBypAPrgOkUxQUqFAAwLEYsfxxyhDJjGGuZrcenumCEEua64qCtce2sof9qZ/L+MW+yNo9+l8S3RTlfpiN4ocoyOxdgXz3k5TdI8CDA63WPA/ceR3chCFAJ+g9MI2MMZnDNIfCihm7IGjB4pwCPYIIrSEQQQQIWE/9SLBjKnAYYo39S/+Uc7tU4sQuGFeeZFD0r6x3LadgWfKaU+TDPUHMEcjHIdobGeVOKtQOupAKkaOK/WMjGRZZM+w+q0cLJVuU7PRQ9nSyXUKcsSeGoMaKWpGsQrBKWXUkjHNjgCMrvCn5/WfaZET1RVW0i3XdYIrJYghGQFe1XTLNI1YbqDdTLppuxyrQTIISRH1axUqCCCBCIpe0ljRpTTD4ZktSUcYMDoOKk0qDhF1FPtxqmVL0LX2/Zl+KnqaQjEua2JxdpRdxVziiZsGyJa+JlFQASPlDUq2GWo6RmLbtT7TPrdrZlDImBAavxTAcqmmG4DiaX/aW1Iki5McqrYOF+N64mUvE6nQc6jPTrDayizzKCylHgkrj3abytKmupz1oBGPlowsjbel6a7+KsjNXZnnruVfLvAtJdr0tGVqGnjBODDfQY8CNKR1KzqoUBAAtBSmVI5spSZiMfDQjMhSQwPEAgEHnvjcdnrTfkIfL4T6f7Uh30yWr3A60HkusbHQAhW0EEEbKzkRmZdjlzLXOe7qincWQVJPHTpGgtM4IjOclBPQVjKJbu5kGY1bzmgp8TO/iIUeal3rGd9QeKNad9eXzoO+iogabluuiR2kt5LKq4SkahIp4pmSqBqFNPWu6KmxTFZ1OJVXBu1qM7p8OVQSfzWlzZ+z010E1yqzlxSWfFKVaEd0w4gmpGR30pFJOmqjMt0q4vC43xrVSGSvzY3WDahQd8Z0rZYssjx+KXp18qyLI4GNvXeuiSpNMTSuOO7/AHp9IkRGsM6/LR/MoPrTGHsuX0j6EGtwsulLJcEEEeoRBBBAheExUbY2SlpFGwYfCwzHDiOEW9Y8CiPHNDhQ6L0Eg1C5PtzY02TVJim4cAy/CdxB0PA4xm5qTUFCzlRqDpyGIjvM6UrAqwBBzBFQfSMH2z7NpKltOlFlXC+BjdBNLy1+n0jKnwjmAuZcbto+VfDiQ77XarKbA2xZVU9/ILgjOtTT9kmnvBEnYfYpp0tmWZQCgAIoaUNa58IIgcI61T3ObW586LscEEEfSrISSIVGb7UbfazsktFBZgSSdBWgoNTnGUn7enTCQZzrlgvhz9oklxjI3FtCSE9kDnCuxdMdwMyBzjLbR2mizpk1jVZYCinzU8RA4lqD0MYe0TZp09XmOa+i0Ee2iY7UCkKo0IDHnjhEGJxRlblpS9d+ngFTFhw01JWq2WZLTPtNrnSzM+SXeqsoZ+rfndTRf2ks2k1TyqfoI5YBN/xWH7NF+ke3G1mzT++YI8U6NtGgefyF66AONSStVt6VZ3Jm2YuszMqJb3WOpGFFY9DrvhXZTtAsszEmKwJoaKjVB+YXQKjOsZA2YHNnPNjCfsi8ep/GE9qRJ2goDw9kzIMmQ6LqX9pJI0m/5b/hB/aeT5Zv+W0cu+yJu9z+MJayoMx7mH/50vdySv8AGYuh7Z7Qy5koogcFiK3lK4A1IFdTgKcYibNt0hXE2aswzBUIO7YrKBzp+sdTyGmOGWyyzkD1aPfsKbj1MLM7jIHu1HcuxC0NyjRdTHaiz/8A2DnLf8Ipe0c6xWpa96EmqPA5Vh+62GK+4zEYcWJdCw5MYULMRlMmD96O3YxzhldSnA/K5bh2tNQSt/2S21KWQJcyaqujMuJzFagg6jHP6ZRo5dvlNlMQ/vCOOSmZq3Z7NQ0NaMK7sY9Et98s80A91pHceNcxobQWXj8M1xJrqu0Iw0NR9Icjjsu1tLF68ykeVmNeVY0mwtvWgTZaM15GYAhsWAOFQc92cUR49pNHNp14JLsKQKg+y30JzgBrCovUqIIIIEIir7SKDZZwOIKERaRS9rJt2zMNWZFH8QJ9gYXM7LG49x9F3GKvA7wofZBKWduJ+6CHuyI/Qev3QRkRxZo2+PqU6Y/qFaCCCCNtTKs2tsWTaABMU1GTA0Yev4xn53Yxgf0U+tNHX7x+EbImACEyYeOQ1cLpjJXtFAVgZ/Zi1D5Zb8iB9aREfYM8Z2dv3TX6GOlQkiJ3YCMmtT5fCaMU4bAuaHZLD4pM4eh/CAbNl/N3q8wPwjpsJZaihxBhZ+mjY88l0MWf9VziXsuzH/vsOYX8Ykp2fs5/91/KPxi12l2PViWksFr8jCq+hzA6xRWns5PTOReG9KH2GPtEL8LNHqK+fpQqhsrHfypy91LHZiR/8sdF/wBUev2Vs5wNqHRfxioW4hpMk+jAqfeLSzbbsqgD7MuHL7xCO0INMo/5f+qrpzDSxJ5IPZSzA1+2EcrmMOnYNjGdqPoU/CLSydpbORgpXkB90SJ23JBU4kimIp7w8ltK1bXg/wByk1kBuD5fCzz2DZy52hj+8n+mHRsSzTE8EqfMVhgQWAI4MtPaMyy2eZaO7RPiNPNgT8QOQz9o1Gzu82e4VyWssxsDmZTHL0P548syueBISK7gE14LRY1PefhNSuzV0XZVkoP1nP8A5NDq9lp5+WSnPE/QxtUcEAg1ByMLjTb9PiGpJ8VIcU/ZRZKV2MSlHfOt66KEgihAIOVOEW2y+z8iR/dqb3mYlm5AnL0i1zhUUR4aJl2t9/VLdM92pSFFIXBES321JCGZMYKg/IAhxIAqUpSWamJwEUdv7SykwQGYeGC/xfhGR2n2sWeSCxVPlWhpwrqekNWdg+MuYrHWhGAw0oetIy58edIx49dcFazC0FXq+n9pp5+EIvoWPvh7RkNv7fnF7rEkgjxNliMgMhzizm1rXOmGJqKZYrkecSbJYkc3WVW5ivSsROne/wDea9clS1jW6BQNg9rZ8qVMBSV4aXQcC1a1+bQDQQRsNm7AlJistcd4vdK5QR6yWUD7a07kh7oa3bVaQmPK7oadqw4i0j6FQJQEewQQIRBBBAhJIhUENu4UVOAgQvXcAVOAEKMVk2YWIqMMrvOmGeJ/ORqJtlllVAJP1pwgQlzJSsKMARuIqPeIEzYVmOclPQU+kWcEclodqKr0OI0VL/Zayf4X88z/AFQluy1lPyMP33+8xeQQv/Hi/wBRyC77V+881j9rdme7rNswNaC8uJJpqCca8Ie2PtRJ6GTOANRTHIxqoy/aLYePfycGzZRrvYU13jXnnFisJT9SIX2jZy9RyunRy5hkf4FOSGextcaryGPhbMoTofx1556BHDAEGoOojM7H2uJg7uZQmlMdYl0eymoq0k5jVeX5/GOcPiQwUP7f+vyO9eSRkmh19VfwQ1Z56uoZTUGCdNCqWYgKBUk5ADWNStRVTJNqtCy0Z3YKqipJ0Ajlu1bdN2lPAWolKfAuir/iN+sdBDu39sTNozhIkV7hTn5iPmPAaD74u3SVYZFPm92b8YxsdjKnIzrr8rRw8OT7na+ipbXYJchQMK6k0qT+dIqZ0hXJFCrDFTSjED5h5gNd1NM413Z7s609habUMM0l8N5i47Y7IWdZqKLsyX4pV3AhhoOf4RzFg5DHnrf1XTsS0Pyrl8u1zZTq0zvGQml6t5TT4lzqGpiAdOdY32yFDEEEEYUIyIORHCMHL/SpVq1aquASBeShDUy1rXeDyOt7IDu6IWvCpppQHT6xLJQNTXV2LeyVoIIUmUEakTQGADcspKRYXBCSI0lwlQR4DHsCEQQQQIRFXMnFmyOGFMcDhxFT/tTQmzJhNwVrTHKsCEzZ5V0VOZ9hurrr1OUSYISRAhKggggQiCCCBCIjk1MP1gpAhZftBsAn9NJ+MYso14jjw155s7D28D+incqn6GNfGe2/2eWdWZLosz2bnx4xnYnCEntItd2/28OVCqY5QRkfpv3Ju0WZ7N+ls/il/NK4b10w3Hroclt3bU/aMwWeQjpKr4gcGYjO9uAi52ZtqZZ27qepoNDmOI3iJ9s2zZZClpSgu+ijEndSM/tnNjLQaDdfy38DptVAYQ6pFTsPyo9lsknZ0jS9TE7zDewdkPaZn2q0A3B/dof6jD2y9hTLQ4n2vADFJW7cW48I1wFMBFODwN+0k5ddHhqqWalmm+0/C8dqA0FaDIfSK0OztxOXxYaYYjd7cwtoDCVlgEkDE5xsKNcm7RWA2e1so+CYQ3DENdPp4l9BEvY06jiL7/1EslUlTaYqxU8jiPcHrGWsLUYR8/i48sjm9X65LWgfmYCuo2WZVRHkRtlvVBBHWGxH6YB2KB7KOIVj36+Zeog79fMvUR8kbI2KbRM7qWJYahNXqFoM8VUn2i0HYedVQTZlLANRmNQhRnvmiHwi6QaVoaVFCDG8kL6hM5fMvUR6J6eZeoj5fl9hJzUumzGoU4NMya7jjLp4Q6k8DheOEQNrdnGs6I8zuSswsEKG9eulgzCqjAUFa/4iakgCF9Yd+vmXqI8M9fMvUR8edwvlXoIO4Xyr0ECF9h9+nmXqI979fMvUR8d9wvlXoIO4Xyr0ECF9id+vmXqIO/XzL1EfHfcL5V6CDuF8q9BAhfYRnL5l6iPe/TzL1EfHncL5V6CDuF8q9BAhfYnfr5l6iEmevmXqI+Pe4Xyr0EHcL5V6CBC+w+/TzL1Ee9+vmXqI+O+4Xyr0EHcL5V6CBC+xO/XzL1EHfr5l6iPjvuF8q9BB3C+VeggQvre3WeRNFJgRhzFRxBGIhiw7Is0pr63S2jM14jlWPk/uF8q9BB3C+VegjgxsJzECu9dBzgKA2X2J36+ZeohPfqfmWnMR8e9wvlXoIO4Xyr0EdrlfYnfr5l6iDv18y9RHx13K+Vegizl7ADVuzbLgKmsxQaDM0I0gQvpftjdeyTPEtVusMRowr7VjnlkmioxHURypdjy6oO+s4vE1N5aJQMak7jdpxLLStYnHs3Lr/wBbYv8ANXfTXr+SYjxGDEzs1aeFfcKiLEGMUpVfRGxbStweIdRBHy/a7IiuVBRwKeJQKGqgnoTT0jyJm/TMopn8vyuXy5nVorHs5tg2SeJwUsQrLQOZZ8QpUMFNOkXiduiO7rZl/R93S7NKgCXLdFui4bprMJrjh4aaxj4I1Ulaux9tmlgAWdcAgFHKgBbgYUunMIAPL+tlFZtrbYnypMoSElLIv93datFmMzOpFADU3MaDFSaeKgp4IEIggggQiCCCBCIIIIEIggggQiCCCBCIIIIEIggggQiCCCBCIIIIEIhSGhBoDQg0ORppCYIEK1bacqn/AEsuuvib2GkNjaEqtfsyUoBS81MCTXfXGmeSjWpNdBAhOWiYGYkKFBp4RkMANevrBDcECF//2Q=="
                        alt="5-estrellar"
                      />
                    </p>
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
