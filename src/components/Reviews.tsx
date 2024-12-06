// src/components/Reviews.tsx
import React from 'react';

// A simple function to render stars
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  return (
    <div className="flex justify-center mb-2">
      {stars.map((isFilled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={isFilled ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.27l4.09 2.13-1.1-4.7 3.81-3.29-4.73-.41-1.54-4.71-1.54 4.71-4.73.41 3.81 3.29-1.1 4.7 4.09-2.13z"
          />
        </svg>
      ))}
    </div>
  );
};

// Review data
const reviews = [
  {
    name: "Monish Jain",
    time: "a week ago",
    review:
      "I had an excellent experience with Master Motor Driving, a top-notch Vehicle Learning Institute. The location was easy to find, and the cars were well-serviced and easily accessible. The environment was clean and hygienic, which made learning to drive a pleasant experience.",
    rating: 5,
  },
  {
    name: "Tanu Singh Chauhan",
    time: "5 months ago",
    review:
      "I had a wonderful experience at the Master Motor driving school. I am thankful for Mr. Snehil. He was very supportive and always encouraging. Each lesson was well-structured, making it easy to follow and understand.",
    rating: 5,
  },
  {
    name: "Darshan Chordia",
    time: "a month ago",
    review:
      "Master motor driving is one of the best driving schools in Udaipur. The learning fees are so reasonable as compared to others. They will address all your doubts and provide excellent instruction.",
    rating: 5,
  },
  {
    name: "Divya Lohar",
    time: "4 months ago",
    review:
      "I had an outstanding experience at master motor driving school. The instructors were incredibly patient, knowledgeable, and professional. They provided clear instructions and helpful tips that made learning to drive both enjoyable and rewarding.",
    rating: 5,
  },
  // More reviews...
];

const Reviews: React.FC = () => {
  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <p className="text-xl font-semibold">{review.name}</p>
              <p className="text-sm text-gray-400 mb-4">{review.time}</p>
              <StarRating rating={review.rating} />
              <p className="text-lg line-clamp-3">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
