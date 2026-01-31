"use client";
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "The taste is so delicious and I'm excited to feel the difference. I have tried AG1 but had terrible stomach upset with it and had to discontinue. Fingers crossed this one is better.",
    author: "Trina Fautoux",
    verified: true,
  },
  {
    id: 2,
    rating: 5,
    text: "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling of well-being. I talk about this product with all my golf friends.",
    author: "Jennifer Dunn",
    verified: true,
  },
  {
    id: 3,
    rating: 5,
    text: "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you.",
    author: "Lisa Tradewell",
    verified: true,
  },
  {
    id: 4,
    rating: 5,
    text: "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
    author: "Bernae VeraKruse",
    verified: true,
  },
  {
    id: 5,
    rating: 5,
    text: "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product. Thank you for reaching out!",
    author: "Erika Friesenhahn",
    verified: true,
  },
  {
    id: 6,
    rating: 5,
    text: "I am really feeling full of energy. After about 2 weeks of the IM8, my wife said 'What's got into you, would you slow down and just sit awhile' Thanks for your work!",
    author: "Charlie West",
    verified: true,
  },
];


export const CustomerReviews = () => {
  return (
    <section className="w-full">
      <div 
        className="w-full py-20 lg:py-[80px] lg:pb-[60px] flex flex-col items-center
                   max-[991px]:py-[70px] max-[991px]:pb-[50px]
                   max-[767px]:py-[60px] max-[767px]:pb-10
                   max-[480px]:py-[50px] max-[480px]:pb-[30px]"
      >
        <div 
          className="max-w-[1400px] w-full px-5 mx-auto flex flex-col items-center
                     max-[767px]:px-[15px]
                     max-[480px]:px-3"
        >
          {/* Heading */}
          <h2 
            className="text-[40px] leading-[1.2] my-0 mb-5 text-center font-normal w-full max-w-[800px]
                       max-[991px]:text-4xl
                       max-[767px]:text-[32px] max-[767px]:mb-2.5 max-[767px]:max-w-[600px]
                       max-[480px]:text-[28px] max-[480px]:mb-2 max-[480px]:max-w-[450px]"
            style={{ fontFamily: 'ABC Arizona Flare, serif', color: '#50000b' }}
          >
            What Our Customers Say
          </h2>

          {/* Description */}
          <p 
            className="text-base leading-[1.5] my-0 mb-10 text-center max-w-[600px]
                       max-[991px]:text-sm max-[991px]:mb-[30px]
                       max-[767px]:text-[13px] max-[767px]:mb-[25px]
                       max-[480px]:text-xs max-[480px]:mb-5"
            style={{ color: '#50000b', fontFamily: 'Aeonik, sans-serif' }}
          >
            These are actual IM8 verified customers that have seen successful health outcomes
          </p>

          {/* Customer Stats */}
          <div 
            className="flex flex-col items-center justify-center gap-3 my-0 mb-[30px] p-0
                       sm:flex-row sm:gap-5"
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-2.5">
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#d4a84b' }}
              />
              <span 
                className="text-sm font-semibold tracking-[0.01em]
                           md:text-base"
                style={{ 
                  fontFamily: 'var(--font-body-family), -apple-system, BlinkMacSystemFont, sans-serif',
                  color: '#50000b'
                }}
              >
                <span style={{ color: '#d4a84b' }}>622k+</span> customer purchases
              </span>
            </div>

            {/* Divider */}
            <div 
              className="hidden sm:block w-px h-6"
              style={{ backgroundColor: 'rgba(80, 0, 11, 0.2)' }}
            />

            {/* Stat 2 */}
            <div className="flex items-center gap-2.5">
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#d4a84b' }}
              />
              <span 
                className="text-sm font-semibold tracking-[0.01em]
                           md:text-base"
                style={{ 
                  fontFamily: 'var(--font-body-family), -apple-system, BlinkMacSystemFont, sans-serif',
                  color: '#50000b'
                }}
              >
                <span style={{ color: '#d4a84b' }}>19M+</span> servings
              </span>
            </div>
          </div>

          {/* Subheading */}
          <h3 
            className="text-2xl mb-[50px] mt-0 text-center leading-[1.5] max-w-[800px] font-normal
                       max-[991px]:text-[22px] max-[991px]:mb-10
                       max-[767px]:text-lg max-[767px]:mb-[30px] max-[767px]:max-w-[600px]
                       max-[480px]:text-base max-[480px]:mb-[25px]"
            style={{ color: '#505050', fontFamily: 'Aeonik, sans-serif' }}
          >
            10,000+ 5 Star Reviews
          </h3>

          {/* Reviews Carousel */}
          <div 
            className="w-screen mb-10 overflow-x-clip overflow-y-visible
                       max-[480px]:mb-[30px]"
          >
            <div className="flex gap-4 px-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col h-auto w-[400px] flex-shrink-0 snap-start
                             max-[991px]:w-[350px]
                             max-[767px]:w-[300px]
                             max-[480px]:w-[280px]"
                >
                  <div 
                    className="bg-white rounded-lg p-[30px] flex flex-col border h-full w-full
                               transition-all duration-300 ease-in-out
                               hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                               max-[991px]:p-[25px]
                               max-[767px]:p-[25px_20px]
                               max-[480px]:p-[20px_15px] max-[480px]:rounded-md"
                    style={{ 
                      borderColor: '#E5E5E5',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Stars */}
                    <div 
                      className="text-2xl mb-5 leading-none
                                 max-[991px]:text-[22px] max-[991px]:mb-[15px]
                                 max-[767px]:text-xl max-[767px]:mb-[15px]
                                 max-[480px]:text-lg max-[480px]:mb-3"
                      style={{ color: '#a40011' }}
                    >
                      {'★'.repeat(review.rating)}
                    </div>

                    {/* Quote */}
                    <p 
                      className="text-base leading-[1.5] mb-5 flex-grow
                                 max-[767px]:text-[15px] max-[767px]:mb-[15px]
                                 max-[480px]:text-sm max-[480px]:leading-[1.4] max-[480px]:mb-3"
                      style={{ color: '#50000b', fontFamily: 'Aeonik, sans-serif' }}
                    >
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div 
                      className="text-base font-bold
                                 max-[767px]:text-[15px]
                                 max-[480px]:text-sm"
                      style={{ color: '#50000b', fontFamily: 'Aeonik, sans-serif' }}
                    >
                      — {review.author}
                      {review.verified && (
                        <span className="text-sm font-normal text-green-600 ml-2">Verified</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div 
            className="text-lg text-center mt-5
                       max-[767px]:text-base
                       max-[480px]:text-sm"
            style={{ color: '#50000b', fontFamily: 'Aeonik, sans-serif' }}
          >
            Based on <span className="font-bold">11,825</span> reviews | Average: <span className="font-bold">4.8/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
