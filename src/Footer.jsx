import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 mt-35">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="https://pagedone.io/" className="flex justify-center">
            <svg
              className="w-40 h-8"
              viewBox="0 0 164 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z"
                fill="white"
              />
              {/* Include all other <path> elements here */}
            </svg>
          </a>
          <div className="text-white">
            <p className="text-center lg:text-left">
              © 2023 Pagedone. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/pagedone"
              className="text-white hover:text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/pagedone"
              className="text-white hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/pagedone"
              className="text-white hover:text-gray-400"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
