import React from "react";

const LocationInfo = ({location}) => {
    // console.log(location);
  return (
    <article className="planet">
        <h2>{location?.name}</h2>
        <div className="box--info">
            <ul>
                <li>
                    <span>
                        <i>Type:</i>
                        <b className="inf--colors">{location?.type}</b>
                    </span>
                </li>
                <li>
                    <span>
                        <i>Dimension:</i>{" "}
                        <b className="inf--colors">{location?.dimension}</b>
                    </span>
                </li>
                <li>
                    <span>
                        <i>Poblations:</i>{" "}
                        <b className="inf--colors">{location?.residents.length}</b>
                    </span>
                </li>
            </ul>
            <h3 className="residents">Residents</h3>
        </div>
    </article>
  );
};

export default LocationInfo;
