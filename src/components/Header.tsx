import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/se-logo-color.png';

export default function Header({
  title,
}: {
  title: string | undefined;
}): JSX.Element {
  return (
    <div className="row align-items-center">
      <div className="col-md-auto text-center">
        <Link className="col-sm" to="/">
          <img src={logo} className="logo m-4" alt="logo" />
        </Link>
      </div>
      <div className="col align-middle text-center">
        <h3 className="col-sm text-uppercase w-100">{title}</h3>
      </div>
    </div>
  );
}
