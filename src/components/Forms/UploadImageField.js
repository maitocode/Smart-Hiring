import React from "react";
import PropTypes from "prop-types";
import UploadImage from "components/UploadImage/UploadImage";

function UploadImageField(props) {
  const { field, form } = props;
  const { name, value, onBlur } = field;

  const handleImgUrlChange = (newImgUrl) => {
    form.setFieldValue(name, newImgUrl);
  };
  return (
    <UploadImage
      name={name}
      imgUrl={value}
      onImgUrlChange={handleImgUrlChange}
      onSelectBlur={onBlur}
    />
  );
}

UploadImageField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default UploadImageField;
