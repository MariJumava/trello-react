import React from "react";
import PropTypes from 'prop-types';
import {User} from '../../types/User';
import { Label } from "../../types/Label";


const Card = (props) => {
    return props.header;
}

Card.PropTypes = {
    header: PropTypes.string,
    assignedUser: PropTypes.instanceOf(User),
    labels: PropTypes.arrayOf(Label)
};

export default Card;