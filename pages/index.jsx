import React from "react";

const Index = () => <></>;

Index.getInitialProps = async (ctx) => {
  const { res } = ctx;
  if (res) res.writeHead(303, { Location: "/issues" }).end();
  else window.location.href = "/issues";
};

export default Index;
