import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';
import {
    HiTrash, HiX,
} from 'react-icons/hi';
import { Button } from '..';


const Upload = (props) => {
    const { attributes, handleUpload } = props;
    const { multiple = false, maxNumber = 10, label = 'Images', name = 'image', removeAll = false } = attributes;
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
                onImageRemove,
                isDragging,
                dragProps,
                errors,
            }) => (
                <div className="upload-image">
                    <p className="label">{label}</p>
                    <button type="button" className={`button-upload ${isDragging ? 'isDragging' : ''}`} onClick={onImageUpload} {...dragProps}>
                        <div className="icon" />
                    </button>
                    {
                        imageList.length > 0 && (
                            <div className="content-upload">
                                <div className="images-list">
                                    {
                                        imageList.map((image, index) => (
                                            <div key={index.toString()} className="image-item">
                                                <div className="image-bg" style={{ backgroundImage: `url('${image.data_url}')` }}>
                                                    <Button
                                                        action={() => onImageRemove(index)}
                                                        className="button trash-one"
                                                        icon={HiX}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    (imageList.length > 1 && removeAll) && (
                                        <div className="remove-all">
                                            <Button
                                                action={onImageRemoveAll}
                                                className="button trash"
                                                icon={HiTrash}
                                                text="Tout supprimer"
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        errors && (
                            <p className="error-text">
                                {errors.maxNumber && 'Le nombre de photos dépasse celui autorisé'}
                            </p>
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
