"use client";
import { useState } from 'react';

const formats = [
  {
    id: 'forever-jar',
    name: 'Forever Jar',
    image: 'https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853',
    weight: '(354g)',
    servingPrice: '€3,03 EUR',
    badge: 'MOST POPULAR',
  },
  {
    id: 'sachets',
    name: 'Single-Serve Sachets',
    image: 'https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834',
    weight: '(354g)',
    servingPrice: '€3,39 EUR',
  },
];

export const FormatSelector = () => {
  const [selectedFormat, setSelectedFormat] = useState('forever-jar');

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: '16px 0' }}>
      <legend style={{ padding: 0, marginBottom: '12px' }}>
        <div style={{ 
          fontFamily: 'var(--font-body-family)',
          fontSize: '14px',
          fontWeight: 500,
          color: '#50000b'
        }}>
          1. Select Format:
        </div>
      </legend>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {formats.map((format) => (
          <div 
            key={format.id} 
            className="product-variant-option-wrapper"
            style={{ 
              position: 'relative',
              flexBasis: 'calc(50% - 4px)',
              height: 'auto'
            }}
          >
            <input
              type="radio"
              id={format.id}
              name="Format"
              value={format.id}
              checked={selectedFormat === format.id}
              onChange={(e) => setSelectedFormat(e.target.value)}
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            />
            <label
              htmlFor={format.id}
              style={{
                display: 'block',
                padding: '16px',
                border: selectedFormat === format.id ? '2px solid #50000b' : '1px solid rgba(80, 0, 11, 0.2)',
                borderRadius: '40px',
                background: selectedFormat === format.id ? 'rgba(80, 0, 11, 0.02)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {/* Product Image */}
              <img
                src={format.image}
                className="product-variant-option-image"
                width="60"
                height="100%"
                alt={format.name}
                style={{ display: 'block', margin: '0 auto 12px' }}
              />
              
              {/* Variant Details */}
              <div className="variant_option_new">
                {/* Badge */}da
                {format.badge && (
                  <div 
                    className="variant_best_value_new"
                    style={{ 
                      fontFamily: 'var(--font-nb-architekt)',
                      background: '#a40011',
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: '10px',
                      fontWeight: 700,
                      lineHeight: '8px',
                      textTransform: 'uppercase',
                      padding: '5px 15px',
                      letterSpacing: '0',
                      borderRadius: '4rem',
                      marginBottom: '8px'
                    }}
                  >
                    {format.badge}
                  </div>
                )}
                
                {/* Name */}
                <div className="variant_option_top_new" style={{ marginBottom: '4px' }}>
                  <span className="variant_name_new" style={{ 
                    fontFamily: 'var(--font-body-family)', 
                    fontSize: '15px', 
                    fontWeight: 500, 
                    color: '#50000b',
                    display: 'block',
                    textAlign: 'center'
                  }}>
                    {format.name}
                  </span>
                </div>
                
                {/* Weight & Price */}
                <div className="variant_option_bottom_new" style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ 
                    fontFamily: 'var(--font-body-family)', 
                    fontSize: '13px', 
                    color: '#50000b'
                  }}>
                    {format.weight}
                  </span>
                  
                  <span className="variant_servings_price_new" style={{ 
                    fontFamily: 'var(--font-body-family)', 
                    fontSize: '13px', 
                    fontWeight: 500, 
                    color: '#50000b'
                  }}>
                    {format.servingPrice} / serving
                  </span>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

