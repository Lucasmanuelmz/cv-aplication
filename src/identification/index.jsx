import Button from "../button";

export default function PersonInformation({ firstName, lastName, email, tel, onInputChange }) {
    function handleChange(e) {
        const {name, value} = e.target;
        onInputChange(name, value)
    }
    return (
        <fieldset className="fieldset">
            <legend className="legend">Personal Data</legend>
            <label className="label" htmlFor="firstName">You Name:</label>
            <input type="text" autoComplete="givenName" name="firstName" value={firstName} id="firstName" onChange={handleChange}
                className="input" placeholder="First name" />

            <label className="label" htmlFor="lastName">Surname:</label>
            <input type="text" name="lastName" value={lastName} onChange={handleChange}
                className="input" id='lastName' placeholder="Surname" />

            <label className="label" htmlFor="email">Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange}
                className="input" id="email" placeholder="Email" />

            <label className="label" htmlFor="tel">Tel:</label>
            <input type="tel" name="tel" value={tel} onChange={handleChange}
                className="input" id="tel" placeholder="Tel:" />

            <Button text='Edit' />

        </fieldset>
    )
}