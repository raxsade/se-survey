import React, { useEffect, useState } from 'react';
import logo from '../images/se-logo-color.png';
import { Link, useParams } from 'react-router-dom';
import * as db from '../firebase';
import { RouteParamTypes } from '../DataTypes';

export function getArrayFromPropKey(
  t: { [key: string]: string },
  key = 'instruction',
  arr: Array<string> = [],
  i = 1
): Array<string> {
  if (t[`${key}${i}`]) {
    return getArrayFromPropKey(t, key, [...arr, t[`${key}${i}`]], i + 1);
  }
  return arr;
}

export default function AboutPage({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  const { lang } = useParams<RouteParamTypes>();
  const [t, setTranslations] = useState<{ [key: string]: string }>({});

  useEffect(() => db.getOnOff(`/translations/${lang}`, setTranslations), [
    lang,
  ]);

  return (
    <div className="container fluid">
      <div className="jumbotron">
        <div className="container">
          <div className="col-md-auto text-center">
            <Link to={`/${lang}`}>
              <img src={logo} className="logo m-4 col-sm" alt="logo" />
            </Link>
          </div>
          <div className="col align-middle text-center">
            <h1 className="display-4 difference">{t.title}</h1>
          </div>
        </div>
      </div>
      <div className="container pb-4">{children}</div>
    </div>
  );
}
