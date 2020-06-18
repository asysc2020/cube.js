import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  CardContent,
  Typography,
} from "@material-ui/core";
import CustomCard from "../../../components/CustomCard";

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 11,
    fontWeight: '500',
  },
  value: {
    fontWeight: '500',
    marginTop: theme.spacing(1)
  }
}));

const InfoCard = props => {
  const {
    text,
    value,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CustomCard
      {...rest}
    >
      <CardContent>
        <Typography color="textSecondary"
                    gutterBottom
                    variant="body2" className={classes.text}>
          {text}
        </Typography>
        <Typography variant={'h3'} className={classes.value}>
          {value}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

InfoCard.propTypes = {
  className: PropTypes.string
};

export default InfoCard;