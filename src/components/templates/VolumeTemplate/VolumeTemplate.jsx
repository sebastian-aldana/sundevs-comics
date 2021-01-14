import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Header from "_organisms_/Header/Header";
import VolumeDetail from "_organisms_/VolumeDetail/VolumeDetail";
import { getVolumeById } from "_reducers_/volumes/volumes.selectors";

const VolumeTemplate = () => {
  const router = useRouter();
  const { id } = router.query;

  const volume = useSelector(getVolumeById(id));

  return (
    <>
      <Header />
      <VolumeDetail volume={volume} />
    </>
  );
};

export default VolumeTemplate;
