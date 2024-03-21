import { useState } from "react";
export default function DisplayData({
    firstName,
    lastName,
    email,
    tel,
    educationLevel,
    school,
    graduationYear,
    company,
    position,
    description,
    start,
    finish,
    onInputChange,
    onEditData
   }) {
    
    const [isEditing, setIsEditing] = useState(false);

     function handleChange(e) {
        const { name, value } = e.target;
        onInputChange(name, value)
    }

    function handleChangeToEdit() {
        if (isEditing) {
            onEditData()
            setIsEditing(false)
        } else {
            
            setIsEditing(true)
        }
    }
  
    return (
        <div className="display">
            {isEditing ? (
                <div className="content">
            <legend className="legend">Personal Data</legend>
            <label className="label" htmlFor="firstName">You Name:</label>
            <input type="text" pattern="^[A-Z][a-zA-Z]+$" autoComplete="givenName" name="firstName" value={firstName} id="firstName" onChange={handleChange}
                className="input" placeholder="First name" required/>

            <label className="label" htmlFor="lastName">Surname:</label>
            <input  pattern="^[A-Z][a-zA-Z]+$" type="text" name="lastName" value={lastName} onChange={handleChange}
                className="input" id='lastName' placeholder="Surname" required/>

            <label className="label" htmlFor="email">Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange}
                className="input" id="email" placeholder="Email" required/>

            <label className="label" htmlFor="tel">Tel:</label>
            <input pattern="^[0-9]+$" type="tel" minLength={9} maxLength={12} name="tel" value={tel} onChange={handleChange}
            className="input" id="tel" placeholder="Tel:" required/>
                
            <legend className="legend">Professional Experience</legend>
            <label className="label" htmlFor="company">Company:</label>
            <input type="text"  pattern="^[A-Z][a-zA-Z]+$" autoComplete="givenName" name="company" value={company}
                id="company" onChange={handleChange} className="input" placeholder="Witch company" required />

            <label className="label" htmlFor="position">Business position:</label>
            <input type="text" name="position"  pattern="^[A-Z][a-zA-Z]+$" required value={position} onChange={handleChange}
                className="input" id='position' placeholder="Business position" />
            
            <label className="label" htmlFor="description">Describe you responsability:</label>
            <textarea name="description" className="input" onChange={handleChange}
                placeholder="Describe your responsibilities in this position" required value={description}
                id="description" cols="20" rows="8"></textarea>

            <label className="label" htmlFor="start">Start of work:</label>
            <input type="date" name="start" value={start} onChange={handleChange}
                className="input" id="start" placeholder="Start of work" required />

            <label className="label" htmlFor="finish">Finish of work:</label>
            <input type="date" name="finish" value={finish} onChange={handleChange}
                className="input" id="finish" placeholder="Finish of work" required/>
            
            <legend className="legend">Education</legend>
            <label className="label" htmlFor="educationLevel">Educational level:</label>
            <select className="select" onChange={handleChange} name="educationLevel"
                id="educationLevel" value={educationLevel} required>
                <option>Select level</option>
                <option value='Elementary School'>Elementary School</option>
                <option value='High School'>High School</option>
                <option value='Higher Education'>Higher Education or College/University</option>
                <option value='Graduate Studies'>Graduate Studies (Masters, Doctorate)</option>
                <option value='Technical Education'>Vocational or Technical Education</option>
             </select>

            <label className="label" htmlFor="school">School:</label>
            <input type="text" name="school" value={school}
                onChange={handleChange} className="input" id='school'
                placeholder="School"  pattern="^[A-Z][a-zA-Z]+$" required/>

            <label className="label" htmlFor="graduationYear">Graduation year:</label>
            <input type="date" name="graduationYear" value={graduationYear}
                onChange={handleChange} className="input" id="graduationYear"
                placeholder="Graduation year" required/>
            </div>): (
                <div className="content">
                    <div className="container-name">
                        <h1>{firstName} {lastName}</h1>
                        <p>Front-end Developer</p>
                    </div>
                    <div className="professional">
                        <h2>Professional Journey</h2>
                        <h3>Business position</h3>
                        <p>{position}</p>
                        <h3>Responsibility</h3>
                        <p>{description}</p>
                        <h3>Start Date</h3>
                        <p>{start}</p>
                        <h3>Termination date</h3>
                        <p>{finish}</p>
                        <h3>Company</h3>
                        <p>{company}</p>
                        <h2>Academic Journey</h2>
                        <h3>{school}</h3>
                        <p>{educationLevel}</p>
                        <h3>Graduation year</h3>
                        <p>{graduationYear}</p>
                        <h2>Contact</h2>
                        <p>Email: {email}</p>
                        <p>Tel: {tel}</p>
                    </div>
                    
                </div>)}
            <button onClick={() => handleChangeToEdit()}>{isEditing? 'Save': 'Edit'}</button>

        </div>
    )
}