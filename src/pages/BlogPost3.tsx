import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPost3 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
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
              src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg"
              alt="Fall lawn preparation"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 12, 2024</span>
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
            The Complete Guide to Fall Lawn Preparation
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Prepare your lawn for winter success with these essential fall maintenance tasks that ensure a healthy spring recovery.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p>
              Fall preparation is crucial for a healthy lawn that bounces back strong in spring. While many homeowners think lawn care ends when summer fades, autumn is actually one of the most important times for lawn maintenance. The work you do now will determine how well your grass survives winter and how quickly it recovers next year.
            </p>

            <h2>Why Fall Lawn Care Matters</h2>
            <p>
              During fall, grass roots continue growing even as the top growth slows down. This makes it the perfect time to strengthen your lawn's root system, repair summer damage, and prepare for winter dormancy. Cool-season grasses especially benefit from fall attention, as they naturally thrive in cooler temperatures.
            </p>

            <h2>Essential Fall Lawn Care Tasks</h2>

            <h3>1. Continue Mowing (But Adjust Your Approach)</h3>
            <p>
              Keep mowing as long as your grass is growing, but gradually lower your cutting height as winter approaches. For the final mow of the season, cut grass slightly shorter than usual (but never more than one-third of the blade length) to prevent snow mold and other winter diseases.
            </p>

            <h3>2. Rake and Remove Leaves Regularly</h3>
            <p>
              While a light layer of leaves can provide some protection, thick leaf cover blocks sunlight and traps moisture, creating perfect conditions for disease. Don't wait until all leaves have fallen – rake regularly throughout the season.
            </p>
            <p>
              <strong>Pro tip:</strong> Shred leaves with your mower and leave them as natural mulch, or add them to your compost pile.
            </p>

            <h3>3. Aerate Compacted Soil</h3>
            <p>
              Fall is the ideal time for core aeration, especially for cool-season grasses. Aeration relieves soil compaction from summer foot traffic and allows air, water, and nutrients to reach grass roots more effectively.
            </p>
            <p>
              Focus on high-traffic areas and anywhere you notice water pooling after rain. The holes created by aeration will also provide perfect spots for overseeding.
            </p>

            <h3>4. Overseed Thin Areas</h3>
            <p>
              Fall's cool temperatures and increased moisture create ideal conditions for grass seed germination. Overseed thin or bare spots to ensure a thick, healthy lawn next spring.
            </p>
            <p>
              Choose grass seed appropriate for your region and existing lawn type. Cool-season grasses like fescue, bluegrass, and ryegrass should be seeded 6-8 weeks before the first hard frost.
            </p>

            <h3>5. Apply Fall Fertilizer</h3>
            <p>
              Fall fertilization is arguably the most important feeding of the year. Use a fertilizer higher in potassium and phosphorus to promote root development and winter hardiness, with moderate nitrogen for continued growth.
            </p>
            <p>
              Apply fertilizer 6-8 weeks before the ground freezes. This timing allows grass to absorb nutrients and build energy reserves for winter survival and spring green-up.
            </p>

            <h3>6. Control Weeds</h3>
            <p>
              Fall is an excellent time for weed control because weeds are storing energy in their roots for winter. Herbicides applied now are more effective at killing the entire plant, including the root system.
            </p>
            <p>
              Target broadleaf weeds like dandelions, clover, and plantain with a selective herbicide. Pre-emergent herbicides can also prevent winter annual weeds from germinating.
            </p>

            <h3>7. Dethatch if Necessary</h3>
            <p>
              If your lawn has more than ½ inch of thatch buildup, fall is a good time to dethatch. This layer of dead grass and organic matter can prevent water and nutrients from reaching the soil.
            </p>
            <p>
              Use a dethatching rake for small areas or rent a power dethatcher for larger lawns. Follow up with overseeding to fill in any thin spots created by dethatching.
            </p>

            <h2>Preparing for Winter</h2>

            <h3>Clean Up Debris</h3>
            <p>
              Remove all lawn furniture, hoses, and equipment that could create dead spots or harbor pests over winter. Clean and store lawn care equipment properly to ensure it's ready for next season.
            </p>

            <h3>Final Watering</h3>
            <p>
              Continue watering until the ground freezes, especially if fall has been dry. Well-hydrated grass enters winter dormancy in better condition and is more likely to survive harsh weather.
            </p>

            <h3>Mark Sensitive Areas</h3>
            <p>
              Use stakes or markers to identify sprinkler heads, garden borders, and other features that might be hidden by snow. This prevents damage during winter snow removal.
            </p>

            <h2>Regional Considerations</h2>

            <h3>Cool-Season Grass Areas</h3>
            <p>
              In northern regions with cool-season grasses, focus on:
            </p>
            <ul>
              <li>Heavy fall fertilization for winter preparation</li>
              <li>Aggressive overseeding programs</li>
              <li>Late-season weed control</li>
              <li>Proper leaf management</li>
            </ul>

            <h3>Warm-Season Grass Areas</h3>
            <p>
              In southern regions with warm-season grasses:
            </p>
            <ul>
              <li>Reduce fertilization as grass enters dormancy</li>
              <li>Focus on light maintenance and cleanup</li>
              <li>Prepare for potential winter overseeding with cool-season grass</li>
            </ul>

            <h2>Common Fall Lawn Care Mistakes</h2>
            <ul>
              <li><strong>Stopping too early:</strong> Continue care until grass stops growing</li>
              <li><strong>Over-fertilizing:</strong> Too much nitrogen late in fall can make grass vulnerable to winter damage</li>
              <li><strong>Ignoring leaves:</strong> Thick leaf cover can smother grass and cause disease</li>
              <li><strong>Cutting too short too early:</strong> Gradually reduce mowing height over time</li>
            </ul>

            <h2>Planning for Next Year</h2>
            <p>
              Use fall as a time to evaluate your lawn's performance and plan improvements for next year. Note problem areas, consider irrigation upgrades, and research new grass varieties that might perform better in your conditions.
            </p>

            <p>
              Proper fall lawn preparation sets the foundation for a beautiful, healthy lawn next spring. While it requires effort now, the payoff in spring green-up and overall lawn health makes it well worth the investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Professional Fall Lawn Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts prepare your lawn for winter success with comprehensive fall services.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Fall Service Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost3;