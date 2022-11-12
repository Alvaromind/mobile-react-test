import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { useGetMobileByIdQuery } from "utils/mobilesApi";
import ROUTES from "utils/routes";

import "./Breadcrumbs.css";

// Configure dynamic breadcrumb to display mobile brand and model instead of id
const DynamicBreadcrumb = ({ match }) => {
  const { data } = useGetMobileByIdQuery(match.params.id);
  return data ? `${data.brand} ${data.model}` : match.params.id;
};

const routes = [
  { path: ROUTES.root, breadcrumb: "Dispositivos móviles" },
  { path: ROUTES.details(":id"), breadcrumb: DynamicBreadcrumb },
  { path: ROUTES.any, breadcrumb: null },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        if (index === breadcrumbs.length - 1) {
          return (
            <span key={`breadcrumb-${index}`} style={{ fontWeight: 700 }}>
              {breadcrumb}
            </span>
          );
        }

        return (
          <Fragment key={`breadcrumb-${index}`}>
            <Link to={match} className="breadcrumbs__link">{breadcrumb}</Link>
            <span style={{ fontWeight: 700 }}> &gt; </span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;