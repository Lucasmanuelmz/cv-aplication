
export default function ExperienceSchool({educationLevel, school, graduationYear,  onInputChange }) {
    function handleChange(e) {
        const { name, value } = e.target;
        onInputChange(name, value)
    }
    return (
        <fieldset className="fieldset">
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
                onChange={handleChange}  pattern="^[A-Za-z]+$" className="input" id='school'
                placeholder="School" required />

            <label className="label" htmlFor="graduationYear">Graduation year:</label>
            <input type="date" name="graduationYear" value={graduationYear}
                onChange={handleChange} className="input" id="graduationYear"
                placeholder="Graduation year" required />

        </fieldset>
    )
}