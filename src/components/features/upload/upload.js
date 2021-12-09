import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';


const Upload = (props) => {
    const { attributes, handleUpload } = props;
    const { multiple = false, maxNumber = 10, label = 'Images', name = 'image' } = attributes;
    const [images, setImages] = useState([]);

    const onChange = (imageList) => {
        handleUpload(name, imageList);
        setImages(imageList);
    };

    return (
        <ImageUploading
            multiple={multiple}
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
            }) => (
                <div className="upload-image">
                    <p className="label">{label}</p>
                    <button type="button" className={`button-upload ${isDragging ? 'isDragging' : ''}`} onClick={onImageUpload} {...dragProps}>
                        <div className="icon" />
                    </button>
                    {
                        imageList.length > 0 && (
                            <div>
                                <button type="button" onClick={onImageRemoveAll}>Remove all images</button>
                                {
                                    imageList.map((image, index) => (
                                        <div key={index.toString()} className="image-item">
                                            <img src={image.data_url} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                                                <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            )}
        </ImageUploading>
    );
};

Upload.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleUpload: PropTypes.func,
};

Upload.defaultProps = {
    attributes: {},
    handleUpload: () => {},
};

export default Upload;
