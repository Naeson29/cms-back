import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';


const Upload = (props) => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <ImageUploading
            multiple
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
                // write your building UI
                <div className="upload__image-wrapper">
                    <button type="button" style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
                        <img src="./fonts/upload.44b80a1fd7d26bc989065ff1edb24576.svg" alt="" />
                    </button>

                    <button type="button" onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                        <div key={index.toString()} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                                <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                                <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>
    );
};

Upload.propTypes = {

};

Upload.defaultProps = {

};

export default Upload;
