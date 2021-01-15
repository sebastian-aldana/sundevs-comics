import React from "react";
import { Typography } from "@material-ui/core";
import VolumeSectionDetail from "_molecules_/VolumeSectionDetail/VolumeSectionDetail";
import useStyles from "./VolumeDetail.styles";

const VolumeDetail = ({ volume }) => {
  const styles = useStyles({
    image: volume ? volume.image.original_url : "",
  })();
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
        {volume && volume.concepts && (
          <VolumeSectionDetail
            title="Concepts"
            options={volume.concepts}
            type="concept"
          />
        )}
        {volume && volume.locations && (
          <VolumeSectionDetail
            title="Locations"
            options={volume.locations}
            type="location"
          />
        )}
        {volume && volume.characters && (
          <VolumeSectionDetail
            title="Characters"
            options={volume.characters}
            type="character"
          />
        )}
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={volume ? volume.image.original_url : ""}
        />
      </div>
    </div>
  );
};

export default VolumeDetail;
