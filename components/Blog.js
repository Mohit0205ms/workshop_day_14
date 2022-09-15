import React from "react";
import Link from "next/link";

function Blog() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.squarespace-cdn.com/content/v1/613a8dcd9007ea7bba02093d/1646930548731-0RJNY1USMEVZD5RE99XJ/AB_Catalyzer_Social_1024x512_Post2.png"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link
                    href="blog/the-catalyzer"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://flixable.b-cdn.net/hbo-max/large/us/the-400-blows.jpg"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <Link
                    href="blog/the_400_Blows"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://imageio.forbes.com/specials-images/imageserve/590133304/0x0.jpg?format=jpg&crop=1992,1120,x243,y2256,safe&width=1200"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link
                    href="blog/shooting_stars"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;