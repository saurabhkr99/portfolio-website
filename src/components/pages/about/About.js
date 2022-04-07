import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I am a dedicated and energetic Front-End developer 
            having the zest to solve complex problems by applying
             interpersonal skills and knowledge of program skills. 
             I'm fluent in classics like Html, CSS and JavaScript 
             and I love to code using modern libraries like React JS.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> New Delhi
              </p>
              <p>
                <strong>Email:</strong> saurabhkr3938@gmail.com
              </p>
              <p>
                <strong>Mobile No:</strong> 8553989902
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - HINDI
              </p>
              <p>
                <strong>Second Language</strong> - ENGLISH
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
