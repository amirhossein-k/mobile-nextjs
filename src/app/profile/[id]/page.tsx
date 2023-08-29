import React from "react";

const NestedProfilePage = ({params}: {params: {id: string}}) => {
  return <div>id: {params.id}</div>;
};

export default NestedProfilePage;
