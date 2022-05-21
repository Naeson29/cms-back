import React, {
    useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';
import {
    HiTrash, HiX,
} from 'react-icons/hi';
import { Button } from '..';
import { getImage } from '../../../utilities/functions';


const Upload = (props) => {
    const { attributes, handleUpload, handleChange, value = [] } = props;
    const { multiple = false, maxNumber = 10, maxFileSize = 600000, label = 'Images', upload = 'uploads', removeAll = false } = attributes;
    const [images, setImages] = useState([]);
    const [saveList, setSaveList] = useState([]);
    const [deleteList, setDeleteList] = useState([]);

    const onChange = (imageList) => {
        handleUpload(upload, imageList);
        setImages(imageList);
    };

    const toDelete = (id) => {
        const exist = deleteList.includes(id);

        if (!exist) {
            deleteList.push(id);
            handleChange('medias', deleteList);
            setDeleteList(deleteList);
        }
    };

    useEffect(() => {
        if (!Array.isArray(value) && Object.keys(value).length > 0) {
            setSaveList(value.data);
        }
    }, [value]);

    return (
        <ImageUploading
            multiple={multiple}
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            maxFileSize={maxFileSize}
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
                    <div className="content-upload">
                        <div className="images-list">
                            {
                                saveList.map((image, index) => (
                                    <div key={`data-${index.toString()}`} className="image-item">
                                        <div className="image-bg" style={{ backgroundImage: `url('${getImage(image, 'medium')}')` }}>
                                            <Button
                                                action={() => toDelete(image.id)}
                                                className="button trash-one"
                                                icon={HiX}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                imageList.map((image, index) => (
                                    <div key={`value-${index.toString()}`} className="image-item">
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
                    {
                        errors && (
                            <p className="error-text">
                                {errors.maxNumber && 'Le nombre de photos dépasse celui autorisé'}
                                {errors.maxFileSize && 'La photo est trop volumineuse'}
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
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Upload.defaultProps = {
    attributes: {},
    handleUpload: () => {},
    handleChange: () => {},
    value: [],
};

export default Upload;
