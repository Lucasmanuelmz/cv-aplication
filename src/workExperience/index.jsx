export default function WorkingExperience({ company, position, description, start, finish,  onInputChange }) {
    function handleChange(e) {
        const { name, value } = e.target;
        onInputChange(name, value)
    }
    return (
        <fieldset className="fieldset">
            <legend className="legend">Professional Experience</legend>
            <label className="label" htmlFor="company">Company:</label>
            <input type="text" pattern="^[A-Z][a-z]+$" autoComplete="givenName" name="company" value={company}
                id="company" onChange={handleChange} className="input" placeholder="Witch company" required/>

            <label className="label" htmlFor="position">Business position:</label>
            <input type="text"  pattern="^[A-Z][a-z]+$" name="position" value={position} onChange={handleChange}
                className="input" id='position' placeholder="Business position" required />
            
            <label className="label" htmlFor="description">Describe you responsability:</label>
            <textarea pattern="^[A-Z.,a-z]+$" name="description" className="input" onChange={handleChange}
                placeholder="Describe your responsibilities in this position" value={description}
                id="description" cols="20" rows="8" required></textarea>

            <label className="label" htmlFor="start">Start of work:</label>
            <input type="date" name="start" value={start} onChange={handleChange}
                className="input" id="start" placeholder="Start of work" required/>

            <label className="label" htmlFor="finish">Finish of work:</label>
            <input type="date" name="finish" value={finish} onChange={handleChange}
                className="input" id="finish" placeholder="Finish of work" required/>
        </fieldset>
    )
}