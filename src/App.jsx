import { useState } from "react";
import PersonInformation from "./identification";
import Header from "./header";
import './App.css'
import ExperienceSchool from "./educationExperience";
import WorkingExperience from "./workExperience";
import Button from "./button";
import DisplayData from "./displayPage";

export default function App() {
  const [isSent, setIsSent] = useState(false);
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    educationLevel: '',
    school: '',
    graduationYear: '',
    company: '',
    position: '',
    description: '',
    start: '',
    finish: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsSent(true);
}

  function handleChangeInput(data, personData) {
    setPerson({
      ...person,
      [data]: personData,
    })
  }

  function handleEditData(data, personData) {
    setPerson({
      ...person,
      [data]: personData,
    })
  }

  return (
    <div>
      <Header />
      <div className="container" >
        {!isSent? (
          <form className="form" onSubmit={handleSubmit} >
            <div className="formContainer">
              <PersonInformation onInputChange={handleChangeInput}
              firstName={person.firstName} lastName={person.lastName}
              email={person.email} tel={person.tel} />
        
              <ExperienceSchool onInputChange={handleChangeInput}
              educationLevel={person.educationLevel} school={person.school}
                graduationYear={person.graduationYear} />
            </div> 
           <div className="companyContainer">
             <WorkingExperience company={person.company} position={person.position} description={person.description}
              start={person.start} finish={person.finish} onInputChange={handleChangeInput} />
      
              <Button text='Submit' />
            </div>
        </form> ):
          < DisplayData firstName={person.firstName} onEditData={handleEditData} onInputChange={handleChangeInput} lastName={person.lastName}
          email={person.email} tel={person.tel} educationLevel={person.educationLevel} school={person.school}
          graduationYear={person.graduationYear} company={person.company} position={person.position} description={person.description}
          start={person.start} finish={person.finish} />
      }
      </div>
    </div>
  )
}