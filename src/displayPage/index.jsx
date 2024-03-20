export default function DisplayData({ firstName, lastName, email, tel,
    educationLevel, school, graduationYear, company, position, description, start, finish}) {
    return (
        <div className="display">
          <div className="content">
            <div className="container-name">
                    <h1>{firstName} {lastName}</h1>
              <p>Front-end developer</p>
            </div>
            <div className="professional">
              <h2>Percurso Profissional</h2>
              <h3>Business position</h3>
                    <p>{ position }</p>
              <h3>Responsibility</h3>
                    <p>{ description }</p>
              <h3>Data Inicio</h3>
                    <p>{ start }</p>
              <h3>Data de demissao</h3>
                    <p>{ finish }</p>
              <h3>Empresa</h3>
                    <p>{ company }</p>
              <h2>Percurso Académico</h2>
                    <h3>{ school }</h3>
                    <p>{ educationLevel }</p>
              <h3>Ano de graduacao</h3>
                    <p>{ graduationYear }</p>
                    <h2>Contact</h2>
                    <p>Email: { email }</p>
                    <p>Tel: { tel }</p>
            </div>
          </div>
        </div>
    )
}