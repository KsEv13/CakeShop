import React, { useState } from 'react';
import axios from 'axios';
import CakeImages from '../../components/CakeImages/CakeImages';
import './CakeForm.css';

const UNSPLASH_ACCESS_KEY = 'AglJz516NojRJzPY_TwJ0CoEg5CwyjsFo9pedQ1zw68';
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const TELEGRAM_API_BASE_URL = 'https://api.telegram.org/bot6176494391:AAHuLd56eMO14KMJ-bah90_6jmTpDIwvxqw/';

function CakeForm() {
    const [cakeImages, setCakeImages] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [dough, setDough] = useState('');
    const [filling, setFilling] = useState('');
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(UNSPLASH_API_URL, {
          params: {
            client_id: UNSPLASH_ACCESS_KEY,
            query: query,
          },
        });
        setCakeImages(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleImageSelect = (imageURL: string) => {
      setSelectedImage(imageURL);
    };
  
    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                `${TELEGRAM_API_BASE_URL}sendMessage`,
                {
                  chat_id: '-982958541',
                  text: `New Cake Order:\nDough: ${dough}\nFilling: ${filling}\nImage URL: ${selectedImage}`,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
            );
      
          if (response.status === 200) {
            alert('Cake order submitted successfully!');
          } else {
            alert('Failed to submit cake order.');
          }
        } catch (error) {
          console.error('Error sending message:', error);
          alert('Failed to submit cake order.');
        }
    };
      
    return (
      <div className="cake-form-container">
        <h2>Cake Order Form</h2>
        <div className="select-inputs">
            <select value={dough} onChange={e => setDough(e.target.value)}>
                <option value="chocolate">Chocolate</option>
                <option value="vanilla">Vanilla</option>
            </select>
            <select value={filling} onChange={e => setFilling(e.target.value)}>
                <option value="chocolate">Chocolate</option>
                <option value="cream">Cream</option>
                <option value="cream">Cherry</option>
            </select>
        </div>

        <div className="image-inputs">
          <input type="text" placeholder="Cake Image Search" value={query} onChange={e => setQuery(e.target.value)} />
          <button onClick={handleSearch}>Search Images</button>
          {cakeImages.length > 0 && <CakeImages images={cakeImages} onSelect={handleImageSelect} />}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  
  export default CakeForm;