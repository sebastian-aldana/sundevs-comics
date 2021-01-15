import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Typography } from "@material-ui/core";
import useStyles from "./VolumeSectionDetail.styles";
import { asyncGetConcepts } from "_reducers_/concepts/concepts.async-actions";
import { asyncGetCharacters } from "_reducers_/characters/characters.async-actions";
import { asyncGetLocations } from "_reducers_/locations/locations.async-actions";
import { getCharacterById } from "_reducers_/characters/characters.selectors";
import { getConceptById } from "_reducers_/concepts/concepts.selectors";
import { getLocationsById } from "_reducers_/locations/locations.selectors";

const VolumeSectionImage = ({ option, type }) => {
  const styles = useStyles();

  let information;

  switch (type) {
    case "concept":
      information = useSelector(getConceptById(option.id));
      break;
    case "location":
      information = useSelector(getLocationsById(option.id));
      break;
    case "character":
      information = useSelector(getCharacterById(option.id));
      break;
    default:
      break;
  }

  if (information) {
    return <img className={styles.image} src={information.image.icon_url} />;
  }
  return <></>;
};

const VolumeSectionDetail = ({ title, name, description, options, type }) => {
  const dispatch = useDispatch();
  const getAsyncActionBytype = () => {
    const apis_list_url = options.map((option) => option.api_detail_url);
    switch (type) {
      case "concept":
        dispatch(asyncGetConcepts(apis_list_url));
        break;
      case "location":
        dispatch(asyncGetLocations(apis_list_url));
        break;
      case "character":
        dispatch(asyncGetCharacters(apis_list_url));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getAsyncActionBytype();
  }, []);
  const styles = useStyles();
  return (
    <>
      <p>{name}</p>
      <p>{description}</p>
      <div>
        <Typography variant="h4">{title || ""}</Typography>
        <Divider />
      </div>
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <div className={styles.option}>
            <VolumeSectionImage option={option} type={type} />
            <Typography>{option.name}</Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default VolumeSectionDetail;
