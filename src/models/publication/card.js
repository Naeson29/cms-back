
import React from 'react';
import { getImage } from '../../utilities/functions';

export default (key) => {
    const { title, content, images } = key;

    return (
        <div className="card-publication">
            <div>
                <p className="title">{title}</p>
                <p className="content">{content}</p>
            </div>
            {
                images && (
                    <div
                        style={{
                            backgroundImage: `url(${getImage(images.data[0], 'medium')})`,
                        }}
                        className="image"
                    >
                        {
                            images.data.length > 1 && (
                                <div className="numberMore">
                                    +
                                    {' '}
                                    {images.data.length - 1}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};
