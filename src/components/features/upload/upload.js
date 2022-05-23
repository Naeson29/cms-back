import React, {
    useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';
import {
    HiTrash, HiX,
} from 'react-icons/hi';
import { Button } from '..';
import {
    getImage, isArray,
} from '../../../utilities/functions';


const Upload = (props) => {
    const { attributes, handleUpload, handleChange, isUpdate, value } = props;
    const {
        name = 'image',
        label = 'Images',
        options = {},
    } = attributes;

    const {
        multiple = false,
        maxNumber = 5,
        maxNumberError = '',
        maxFileSize = 2000000,
        complement = [],
        removeAll = false,
    } = options;

    const [images, setImages] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [deleteList, setDeleteList] = useState([]);
    const [max, setMax] = useState(maxNumber);

    const onChange = (imageList) => {
        handleUpload(name, imageList);
        setImages(imageList);
    };

    const deleteOne = (id) => {
        const exist = deleteList.includes(id);
        const newDataList = dataList.filter(key => key.id !== id);

        if (!exist) {
            deleteList.push(id);
            handleChange('unlinks', deleteList);
            setDeleteList(deleteList);
            setDataList(newDataList);
            setMax(max + 1);
        }
    };

    const removeImages = (imageList, remove) => {
        if (imageList.length > 0) {
            remove();
        }
        if (dataList.length > 0) {
            const newDeleteList = dataList.map(key => key.id);
            handleChange('unlinks', newDeleteList);
            setDeleteList(newDeleteList);
            setDataList([]);
            setMax(max + dataList.length);
        }
    };

    const render = (image, index, remove) => (
        <div key={`${index.toString()}`} className="image-item">
            <div
                className="image-bg"
                style={{ backgroundImage: `url('${image.data_url ? image.data_url : getImage(image, 'medium')}')` }}
            >
                <Button
                    action={() => (image.data_url ? remove(index) : deleteOne(image.id))}
                    className="button trash-one"
                    icon={HiX}
                />
            </div>
        </div>
    );

    const loadData = () => {
        if (value && value.data) {
            const data = isArray(value.data) ? value.data : [value.data];
            handleUpload(name, []);
            setDataList(data);
            setMax(max - data.length);
        }
    };

    useEffect(() => {
        if (isUpdate) {
            loadData();
        }
    }, [value]);

    return (
        <ImageUploading
            multiple={multiple}
            value={images}
            onChange={onChange}
            maxNumber={max}
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
                        <div className="info">
                            {
                                complement.map((text, index) => (
                                    <p key={`${index.toString()}`}>{text}</p>
                                ))
                            }
                        </div>
                    </button>
                    {
                        errors && (
                            <p className="error-text">
                                {errors.maxNumber && maxNumberError}
                                {errors.maxFileSize && 'La photo est trop volumineuse (Maximum 2Mo)'}
                            </p>
                        )
                    }
                    {
                        (dataList.length > 0 || imageList.length > 0) && (
                            <div className="content-upload">
                                <div className="images-list">
                                    { dataList.map((image, index) => render(image, index, onImageRemove)) }
                                    { imageList.map((image, index) => render(image, index, onImageRemove))}
                                </div>
                                {
                                    ((imageList.length + dataList.length) > 1 && removeAll) && (
                                        <div className="remove-all">
                                            <Button
                                                action={() => removeImages(imageList, onImageRemoveAll)}
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
                </div>
            )}
        </ImageUploading>
    );
};

Upload.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleUpload: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
    isUpdate: PropTypes.bool,
};

Upload.defaultProps = {
    attributes: {},
    handleUpload: () => {},
    handleChange: () => {},
    value: [],
    isUpdate: false,
};

export default Upload;
