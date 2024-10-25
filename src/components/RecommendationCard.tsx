import React from 'react';
import { Recommendation } from '../types';
import { Star, AlertCircle } from 'lucide-react';

export default function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-102">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={recommendation.supplement.imageUrl}
            alt={recommendation.supplement.name}
          />
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">{recommendation.supplement.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[recommendation.priority]}`}>
              {recommendation.priority} priority
            </span>
          </div>
          
          <p className="mt-4 text-gray-600">{recommendation.supplement.description}</p>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-700 flex items-center">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              Benefits
            </h4>
            <ul className="mt-2 space-y-1">
              {recommendation.supplement.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 text-sm">• {benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-700">Recommended Dosage</h4>
            <p className="text-sm text-gray-600">{recommendation.supplement.dosage}</p>
          </div>
          
          {recommendation.supplement.warning && (
            <div className="mt-4 flex items-start space-x-2 text-amber-600">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">{recommendation.supplement.warning}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}