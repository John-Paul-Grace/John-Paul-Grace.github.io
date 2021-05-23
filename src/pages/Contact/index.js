import React from "react";

const Contact = () => {
  return (
    // <!-- Grid system for containing the main content of the page -->
    <div className="container">
      <div className="row">
        {/* <!-- This column is here just to make the next column centered --> */}
        <div className="col-lg-1" />
        {/* <!-- This column takes leaves some margins on both sides for most screens, but spans the whole width on very small screens --> */}
        <main className="col-lg-10 col-xs-12 mt-4 content-wrapper">
          {/* <!-- Content subtitle --> */}
          <header>Contact</header>

          {/* <!-- Bootstrap "form" component --> */}
          <form>
            <div className="form-group">
              <label for="nameInput">Name</label>
              <input type="email" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Name" />
            </div>

            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" />
            </div>

            <div class="form-group">
                <label for="messageTextArea">Message</label>
                <textarea className="form-control" id="messageTextArea" rows="3" placeholder="Message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Contact;