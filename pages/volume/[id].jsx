import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { asyncGetVolume } from "_reducers_/volumes/volumes.async-actions";
import VolumeTemplate from "_templates_/VolumeTemplate/VolumeTemplate";

const Issue = () => {
  const router = useRouter();

  const { id } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetVolume(id));
  }, [id]);
  return (
    <>
      <VolumeTemplate />
    </>
  );
};

export default Issue;
