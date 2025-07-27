import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPost1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg"
              alt="Spring lawn care"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Yasmine .C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Essential Lawn Care Tips for a Perfect Spring Green-Up
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the secrets to getting your lawn ready for spring with our comprehensive guide to early season lawn care practices.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p>
              Spring is the perfect time to set your lawn up for success throughout the growing season. After months of winter dormancy, your grass is ready to wake up and thrive with the right care and attention. Here's your complete guide to achieving that perfect spring green-up.
            </p>

            <h2>Start with a Spring Cleanup</h2>
            <p>
              Before you can begin any lawn care routine, it's essential to clear away winter debris. Remove fallen branches, leaves, and any other materials that may have accumulated over the winter months. This debris can block sunlight and air circulation, preventing your grass from getting the resources it needs to grow.
            </p>

            <h2>Assess Your Lawn's Condition</h2>
            <p>
              Take a walk around your property and look for signs of winter damage. Common issues include:
            </p>
            <ul>
              <li>Brown or dead patches from snow mold or ice damage</li>
              <li>Compacted soil from heavy snow and foot traffic</li>
              <li>Bare spots where grass didn't survive the winter</li>
              <li>Thatch buildup that needs to be addressed</li>
            </ul>

            <h2>Soil Testing and Preparation</h2>
            <p>
              Spring is an ideal time to test your soil's pH and nutrient levels. Most grasses prefer a slightly acidic to neutral pH (6.0-7.0). If your soil is too acidic or alkaline, your grass won't be able to absorb nutrients effectively, no matter how much fertilizer you apply.
            </p>

            <h2>The Right Time to Start</h2>
            <p>
              Timing is crucial for spring lawn care. Wait until the soil has dried out from winter moisture and the grass has begun to show signs of new growth. Starting too early when the soil is still soggy can cause more harm than good by compacting the soil.
            </p>

            <h2>Essential Spring Lawn Care Tasks</h2>
            
            <h3>1. Rake and Dethatch</h3>
            <p>
              Gently rake your lawn to remove dead grass and debris. If you notice a thick layer of thatch (more than ½ inch), consider dethatching to improve air and water penetration.
            </p>

            <h3>2. Aerate Compacted Areas</h3>
            <p>
              Core aeration helps relieve soil compaction and allows air, water, and nutrients to reach grass roots more effectively. Focus on high-traffic areas that tend to become compacted.
            </p>

            <h3>3. Overseed Bare Spots</h3>
            <p>
              Spring is an excellent time to overseed thin or bare areas. Choose a grass seed that matches your existing lawn and is appropriate for your climate zone.
            </p>

            <h3>4. Apply Pre-Emergent Herbicide</h3>
            <p>
              Prevent crabgrass and other annual weeds by applying a pre-emergent herbicide before soil temperatures reach 55°F consistently.
            </p>

            <h3>5. Start Your Fertilization Program</h3>
            <p>
              Apply a balanced, slow-release fertilizer to give your grass the nutrients it needs for healthy spring growth. Avoid high-nitrogen fertilizers early in the season, as they can promote excessive top growth at the expense of root development.
            </p>

            <h2>Watering Wisdom</h2>
            <p>
              Spring typically provides adequate natural moisture, but if you experience a dry spell, water deeply but infrequently. This encourages deep root growth and makes your lawn more drought-resistant later in the season.
            </p>

            <h2>When to Start Mowing</h2>
            <p>
              Begin mowing when your grass reaches about 3 inches in height. Set your mower to remove no more than one-third of the grass blade length. Sharp mower blades are essential for clean cuts that promote healthy growth.
            </p>

            <h2>Professional Help When You Need It</h2>
            <p>
              While many spring lawn care tasks can be done yourself, some situations call for professional expertise. Consider hiring professionals for soil testing, large-scale aeration, or if you're dealing with significant disease or pest issues.
            </p>

            <p>
              With proper spring care, your lawn will reward you with lush, green growth throughout the growing season. Remember, consistency is key – establish a routine and stick with it for the best results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Professional Spring Lawn Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts handle your spring lawn preparation while you enjoy the results.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Spring Service Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost1;