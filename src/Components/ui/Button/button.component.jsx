import React from 'react'
import { BaseButton, GhostButton, CategoryButton, JobButton } from './button.styles'
import { BUTTON_TYPE_CLASSES } from './button.types'

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.ghost]: GhostButton,
        [BUTTON_TYPE_CLASSES.category]: CategoryButton,
        [BUTTON_TYPE_CLASSES.job]: JobButton,
    }[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;

