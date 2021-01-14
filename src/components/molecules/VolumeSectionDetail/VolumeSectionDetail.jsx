import React from "react";
import { Divider, Typography } from "@material-ui/core";

const VolumeSectionDetail = ({ title, name, description }) => {
  return (
    <>
      <p>{name}</p>
      <p>{description}</p>
      <div>
        <Typography variant="h4">{title || ""}</Typography>
        <Divider />
      </div>
      <div>
        <p>List of contents</p>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: { name: "sebastia", title: "test", description: "hola" }, // will be passed to the page component as props
  };
}

export default VolumeSectionDetail;
