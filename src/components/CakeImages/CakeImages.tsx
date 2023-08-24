import React from 'react';
import './CakeImages.css'; 

interface CakeImage {
  id: string;
  urls: {
    regular: string;
    alt: string;
  };
}

interface CakeImagesProps {
  images: CakeImage[];
  onSelect: (imageURL: string) => void;
}

const CakeImages: React.FC<CakeImagesProps> = ({ images, onSelect }) => {
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImageURL = event.target.value;
    if (onSelect) {
      onSelect(selectedImageURL);
    }
  };

  return (
    <div className="cake-images-container">
      <h3>Choose a Cake Image</h3>
      <div className="image-list">
        {images.map(image => (
          <label key={image.id} className="image-radio-label">
            <input
              type="radio"
              name="cakeImage"
              value={image.urls.regular}
              onChange={handleImageSelect}
            />
            <img src={image.urls.regular} alt={image.urls.alt} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CakeImages;
