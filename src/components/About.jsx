/* eslint-disable react/no-unescaped-entities */
import myImage from "../assets/newhome.jpeg";
const About = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-32" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 animate-bounce">About Me</h2>
        <div className="flex flex-col  md:flex-row items-center md:space-x-12">
          <img
            src={myImage}
            alt=""
            className="w-72 h-80 rounded object-contain mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm Amna Khalid, a passionate front-end developer with skills in
              HTML, CSS, JavaScript, and React. I love building responsive,
              interactive websites and continuously expanding my knowledge in
              web and mobile development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-orange-300 to-red-400 h-2.5 rounded-full
    transformed transition-transform duration-300 hover:scale-105 w-10/12 "
                  ></div>
                </div>
              </div>

              {/* second */}
              <div className="flex items-center">
                <label htmlFor="js" className="w-2/12">
                  Twailwind
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-orange-300 to-red-400 h-2.5 rounded-full
    transformed transition-transform duration-300 hover:scale-105 w-9/12 "
                  ></div>
                </div>
              </div>
              {/* third */}
              <div className="flex items-center">
                <label htmlFor="js" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-orange-300 to-red-400 h-2.5 rounded-full
    transformed transition-transform duration-300 hover:scale-105 w-8/12 "
                  ></div>
                </div>
              </div>
              {/* forth */}
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-orange-300 to-red-400 h-2.5 rounded-full
    transformed transition-transform duration-300 hover:scale-105 w-7/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="firebase" className="w-2/12">
                  Firebase(Continuous)
                </label>
                {/* fifth */}
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-orange-300 to-red-400 h-2.5 rounded-full
    transformed transition-transform duration-300 hover:scale-105 w-4/12 "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
