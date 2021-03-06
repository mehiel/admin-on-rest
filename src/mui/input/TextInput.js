import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import title from '../../util/title';

const TextInput = ({ input, label, meta: { touched, error }, options, type, source, elStyle }) => (
    <TextField
        value={input.value}
        onChange={input.onChange}
        type={type}
        floatingLabelText={title(label, source)}
        errorText={touched && error}
        style={elStyle}
        {...options}
    />
);

TextInput.propTypes = {
    elStyle: PropTypes.object,
    includesLabel: PropTypes.bool.isRequired,
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.object,
    source: PropTypes.string.isRequired,
    type: PropTypes.string,
    validation: PropTypes.object,
};

TextInput.defaultProps = {
    includesLabel: true,
    options: {},
    type: 'text',
};

export default TextInput;
