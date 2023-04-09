import React from "react";
import bgImage from "../assets/Images/group-cover-1.jpg";

const About = () => {
  return (
    <div class="main_content">
      <div
        class="w-full lg:h-80 h-52 pb-10 bg-cover flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div class="text-center max-w-xl mx-auto z-10 relative">
          <div class="lg:text-4xl text-2xl text text-white font-semibold mb-3">
            {" "}
            About Socialite
          </div>
          <div class="text-white text-lg font-medium text-opacity-90">
            {" "}
            Socialite Is a template for developers who want to start their next
            social web application UI
          </div>
        </div>
        <div class="absolute w-full h-full inset-0 bg-gray-600 bg-opacity-20">
          {" "}
        </div>
      </div>
      <div class="mcontainer">
        <div class="-mt-16 bg-white max-w-3xl mx-auto p-10 relative rounded-md shadow">
          <div class="md:space-y-6 space-y-5 text-gray-400 md:text-base">
            <div class="font-semibold md:text-2xl text-lg text-gray-700">
              Socialite platform
            </div>
            <div class="md:leading-8">
              Socialite is a vibrant and engaging social media platform designed
              to connect people from all over the world. Our platform is
              designed to be user-friendly and intuitive, making it easy for you
              to create your profile, connect with others, and share your
              thoughts and ideas. At Socialite, we believe that everyone
              deserves a space where they can express themselves freely and
              connect with like-minded individuals. Whether you're looking to
              make new friends, network with professionals, or find new business
              opportunities, Socialite is the perfect place for you.
            </div>

            <div class="font-semibold md:text-xl text-lg text-gray-700">
              {" "}
              Your best choice is here{" "}
            </div>
            <div class="md:leading-8">
              Our platform is packed with exciting features that allow you to
              connect with others in meaningful ways. From our intuitive
              newsfeed that keeps you up-to-date on the latest updates from your
              connections, to our powerful search functionality that lets you
              find people based on their interests and location, we have
              everything you need to stay connected.
            </div>
            <div class="md:leading-8">
              With Socialite, you can also create and join groups that align
              with your interests and hobbies, as well as share photos, videos,
              and updates with your friends and family. We also offer a
              messaging feature, so you can easily connect with your friends and
              loved ones privately.
            </div>
            <div class="md:leading-8">
              So why wait? Join Socialite today and start connecting with people
              from all over the world!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
