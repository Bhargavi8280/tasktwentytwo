// PhotoGallery.
import React from 'react';
import useFetch from './useFetch';

const PhotoGallery = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="gallery">
            {data && data.map(photo => (
                <div key={photo.id} className="photo">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;
