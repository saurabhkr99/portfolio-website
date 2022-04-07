import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong> PERSONAL PROJECTS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2022</strong> - April
                <strong>2022</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Movie Booking App</strong>
                </h6>
                <p>
                  Its makes API call to display movie list.
                  It offers the user to book a movie.
                  Booking form data have been managed
                  with react-hooks and stored in the session storage.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2022</strong> - Mar
                <strong>2022</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Pokemon Card</strong>
                </h6>
                <p>
                  It is a fun React project using API calls.
                  Made different cards for each Pokemon and in
                  each card show their pictures, their names, etc.
                  I have implemented a “read more” button on a Pokemon card,
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
