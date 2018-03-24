import React from "react";
import PropTypes from "prop-types";

const UserTemplate = props => {
    console.log(props);

    return <div>Template</div>;
};

UserTemplate.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.array,
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    mother: function(props, propName, componentName) {
        console.log(props);
        console.log(propName);
        console.log(componentName);
    }
};

export default UserTemplate;
