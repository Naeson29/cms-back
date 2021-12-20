
import React from 'react';
import { getImage } from '../../utilities/functions';

export default (key) => {
    const { title, content, image } = key;

    return (
        <div className="card-publication">
            <div>
                <p className="title">{title}</p>
                <p className="content">{content}</p>
            </div>
            {
                image && (
                    <div
                        style={{
                            backgroundImage: `url(${getImage(image, 'medium')})`,
                        }}
                        className="image"
                    />
                )
            }
        </div>
    );
};
