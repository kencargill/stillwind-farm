export default function ContactPage () {
    return (
        <div className="container height">
            <h3>Contact Us:</h3>
            <p>Hello! Please feel free to contact us with general questions 
                here. Upon receiving your form, we will reach out via email :)</p>

                <form>
                    <div className="mb-3">
                        <label htmlFor="contactEmail" className="form-label">your email address:</label>
                        <input type="email" className="form-control" id="contactEmail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">your name:</label>
                        <input type="text" className="form-control" id="contactName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">your message:</label>
                        <input type="text" className="form-control" id="contactName" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="newsCheck" />
                        <label className="form-check-label" htmlFor="newsCheck">I would like to receive the stillwind newsletter</label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>

        </div>
    )
}