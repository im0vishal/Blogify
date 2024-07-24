
// import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useRoutes } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
    return (
    <div className="bg-white">
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              aria-hidden="true"
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div>
              <div className="mt-10 sm:mt-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Discover the latest</span>{" "}
                  <span className="block text-indigo-600 xl:inline">blog posts</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                      onClick={() => navigate("/signup")}
                    >
                      Get started
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                      to="#"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img alt="" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="/placeholder.svg" />
        </div>
      </header>
      <main>
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Posts</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Explore our latest blog posts and stay up-to-date with the latest trends and insights.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:mt-0">
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Boost your conversion rate</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium
                          eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Roel Aufderehar</div>
                        <div className="text-sm text-gray-500">Creator, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">
                          How to use search engine optimization to drive sales
                        </h3>
                        <p className="mt-3 text-base text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro
                          quaerat doloribus, eveniet dolore. Adipisci tempora aut neque voluptas accusamus eos quod.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Brenna Goyette</div>
                        <div className="text-sm text-gray-500">Co-Founder, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Improve your customer experience</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo
                          recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Daniela Metz</div>
                        <div className="text-sm text-gray-500">Designer, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Writing effective landing page copy</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum
                          molestiae dolore nisi facilis libero? Iste porro magni dolorem modi aperiam? Totam.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Sage Adebayo</div>
                        <div className="text-sm text-gray-500">Writer, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Posts</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Stay updated with our recent blog posts, covering various topics and insights.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:mt-0">
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Maximizing your marketing strategies</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Explore the best practices for marketing in the digital age.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Jordan Thompson</div>
                        <div className="text-sm text-gray-500">Marketer, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Trends in e-commerce for 2024</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Stay ahead with the latest trends and insights in e-commerce.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Ashley Rodriguez</div>
                        <div className="text-sm text-gray-500">E-commerce Specialist, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Understanding your audience</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Tips and techniques for gaining deeper insights into your audience.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Chris Johnson</div>
                        <div className="text-sm text-gray-500">Data Analyst, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <Link className="block" to="#">
                        <h3 className="text-xl font-bold text-gray-900">Building brand loyalty</h3>
                        <p className="mt-3 text-base text-gray-500">
                          Learn how to create and maintain a loyal customer base.
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <img alt="" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Taylor Brown</div>
                        <div className="text-sm text-gray-500">Brand Strategist, Blogger</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
