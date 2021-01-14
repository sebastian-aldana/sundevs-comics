import React from "react";
import { Typography } from "@material-ui/core";
import VolumeSectionDetail from "_molecules_/VolumeSectionDetail/VolumeSectionDetail";
import useStyles from "./VolumeDetail.styles";

const VolumeDetail = ({ volume }) => {
  const styles = useStyles();
  console.log(volume);
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div>
          <Typography variant="h4">{volume ? volume.name : ""}</Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: volume ? volume.description : "",
            }}
          />
        </div>
        {volume && volume.concepts && <VolumeSectionDetail title="Concepts" />}
        {volume && volume.locations && (
          <VolumeSectionDetail title="Locations" />
        )}
        {volume && volume.characters && (
          <VolumeSectionDetail title="Characters" />
        )}
      </div>
      <div className={styles.imageContainer}>
        <img src={volume ? volume.image.original_url : ""} alt="" />
      </div>
    </div>
  );
};

export default VolumeDetail;
