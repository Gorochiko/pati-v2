"use client";
import { useState } from 'react';

const plans = [
  {
    id: '90day',
    name: '90-Day Supply',
    discount: '(Save 30%)',
    discountColor: '#16A34A',
    price: '€91',
    period: '/mo',
    billing: 'Billed €273,00 EUR every 12 weeks',
    pricePerServing: '€3,03 EUR / serving',
    leftBadge: 'NEW YEAR OFFER',
    rightBadge: 'BEST VALUE',
    isQuarterly: true,
    features: [
      '🎓 Exclusive Access to 90 Day IM8 Transformation Program (see below)',
      '💰 Maximum savings - lowest price per serving',
      '👦 Share with family and friends',
      '🎁 Free Daily Ultimate Mixer (US$18)',
      '🚚 Free Shipping to US, UK, CA, and most of EU and APAC',
      '⏸️ Cancel or pause anytime',
      '🎁 Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)',
    ],
  },
  {
    id: '30day',
    name: '30-Day Supply',
    discount: '(Save 20%)',
    price: '€105',
    period: '/mo',
    billing: 'Billed €105,00 EUR every 4 weeks',
    pricePerServing: '€3,50 EUR / serving',
    features: [
      '30-day money back guarantee',
      'Cancel or pause anytime',
      'Free Shipping to US, UK, CA, and most of EU and APAC',
      'Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)',
    ],
  },
];

export const SubscriptionSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState('90day');

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: '16px 0' }}>
      <legend style={{ padding: 0, marginBottom: '12px' }}>
        <div style={{ 
          fontFamily: 'var(--font-body-family)',
          fontSize: '14px',
          fontWeight: 500,
          color: '#50000b'
        }}>
          2. Subscribe &amp; Save:
        </div>
      </legend>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={plan.isQuarterly ? 'quarterly-variant-wrapper product-variant-option-wrapper' : 'product-variant-option-wrapper'}
            style={{ position: 'relative' }}
          >
            <input
              type="radio"
              id={`plan-${plan.id}`}
              name="Plan"
              value={plan.name}
              checked={selectedPlan === plan.id}
              onChange={() => setSelectedPlan(plan.id)}
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            />
            <label
              htmlFor={`plan-${plan.id}`}
              className={plan.isQuarterly ? 'quarterly-variant-label' : ''}
              style={{
                display: 'block',
                border: selectedPlan === plan.id ? '2px solid #50000b' : '1px solid rgba(80, 0, 11, 0.2)',
                padding: '16px',
                paddingTop: (plan.leftBadge || plan.rightBadge) ? '20px' : '16px',
                borderRadius: '40px',
                background: selectedPlan === plan.id ? 'rgba(80, 0, 11, 0.02)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {/* Checkbox */}
              <div 
                className="variant_option_checkbox"
                style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '24px',
                  minWidth: '24px',
                  background: selectedPlan === plan.id 
                    ? 'url(https://im8health.com/cdn/shop/t/121/assets/radio_fill.svg) no-repeat center center' 
                    : 'url(https://im8health.com/cdn/shop/t/121/assets/radio_blank.svg) no-repeat center',
                  backgroundSize: 'contain',
                  marginRight: '4px',
                  marginBottom: 'auto',
                  verticalAlign: 'top',
                  flexShrink: 0,
                  transition: 'background-color .18s cubic-bezier(.22, 1, .36, 1), border-color .12s cubic-bezier(0, 0, .2, 1), box-shadow .25s cubic-bezier(.22, 1, .36, 1), filter .22s cubic-bezier(.22, 1, .36, 1)',
                }}
              >
              </div>
              
              <div className="variant_option_new" style={{ display: 'inline-block', width: 'calc(100% - 36px)', verticalAlign: 'top' }}>
                {/* Left Badge - NEW YEAR OFFER */}
                {plan.leftBadge && (
                  <div
                    className="variant_holiday_deal_badge"
                    style={{
                      fontFamily: 'var(--font-nb-architekt)',
                      position: 'absolute',
                      left: '16px',
                      top: '-9px',
                      background: '#FEC63F',
                      color: '#50000b',
                      textAlign: 'center',
                      fontSize: '10px',
                      fontWeight: 700,
                      lineHeight: '8px',
                      textTransform: 'uppercase',
                      padding: '5px 15px',
                      letterSpacing: '0',
                      borderRadius: '4rem',
                    }}
                  >
                    {plan.leftBadge}
                  </div>
                )}
                
                {/* Right Badge - BEST VALUE */}
                {plan.rightBadge && (
                  <div
                    className="variant_best_value_new"
                    style={{
                      fontFamily: 'var(--font-nb-architekt)',
                      position: 'absolute',
                      right: '16px',
                      top: '-9px',
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
                    }}
                  >
                    {plan.rightBadge}
                  </div>
                )}
                
                {/* Top Row - Name & Price */}
                <div className="variant_option_top_new" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <span className="variant_name_new" style={{ fontFamily: 'var(--font-body-family)', fontSize: '15px', fontWeight: 500, color: '#50000b' }}>
                    {plan.name}{' '}
                    <span style={{ color: plan.discountColor || '#50000b' }}>{plan.discount}</span>
                  </span>
                  
                  <span className="variant_option_price">
                    <span className="formatted-price" style={{ fontFamily: 'var(--font-body-family)', fontSize: '16px', fontWeight: 500, color: '#50000b' }}>
                      {plan.price}
                    </span>
                    <span className="variant_price_suffix" style={{ fontSize: '13px', color: '#50000b', opacity: 0.75 }}>
                      {plan.period}
                    </span>
                  </span>
                </div>
                
                {/* Bottom Row - Billing & Price per Serving */}
                <div className="variant_option_bottom_new" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#50000b', marginBottom: '12px' }}>
                  <span className="variant_servings_new" style={{ opacity: 0.75 }}>
                    {plan.billing}
                  </span>
                  
                  <span className="variant_servings_price_new" style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
                    {plan.pricePerServing}
                  </span>
                </div>
                
                {/* Features List */}
                <ul className="variant_option_description" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ fontFamily: 'var(--font-body-family)', fontSize: '13px', color: '#50000b', lineHeight: '1.6', marginBottom: '4px' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
        ))}
        
        {/* One Time Purchase Link */}
        <div className="one-time-purchase-standalone" style={{ textAlign: 'center', margin: 0, padding: 0 }}>
          <a 
            href="#" 
            className="one-time-purchase-link"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body-family)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#50000b',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onClick={(e) => {
              e.preventDefault();
              // Handle one-time purchase
            }}
          >
            One Time Purchase{' '}
            <span className="otp-price">
              <span className="formatted-price" style={{ fontWeight: 500 }}>€130</span>
            </span>
          </a>
        </div>
      </div>
    </fieldset>
  );
};
