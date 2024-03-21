

export default function PersonInformation({ firstName, lastName, email, tel, onInputChange }) {
    function handleChange(e) {
        const {name, value} = e.target;
        onInputChange(name, value)
    }
    return (
        <fieldset className="fieldset">
            <legend className="legend">Personal Data</legend>
            <label className="label" htmlFor="firstName">You Name:</label>
            <input type="text"  pattern="^[A-Z][a-z]+$" autoComplete="givenName" name="firstName" value={firstName} id="firstName" onChange={handleChange}
                className="input" placeholder="First name" required />

            <label className="label" htmlFor="lastName">Surname:</label>
            <input type="text"  pattern="^[A-Z][a-z]+$" name="lastName" value={lastName} onChange={handleChange}
                className="input" id='lastName' placeholder="Surname" required />

            <label className="label" htmlFor="email">Email:</label>
            <input type="email" name="email"  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" value={email} onChange={handleChange}
                className="input" id="email" placeholder="Email"required />

            <label className="label" htmlFor="tel">Tel:</label>
            <input type="tel" name="tel" value={tel} onChange={handleChange}
                className="input" id="tel" placeholder="Tel:" minLength={9} maxLength={12}  pattern="^[0-9]+$" required />

        </fieldset>
    )
}