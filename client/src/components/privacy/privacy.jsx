import React from "react";
import Theme from "../theme/theme";
import Footer from "../footer/footer";

const Privacy = () => {
  Theme();
  const theme = localStorage.theme;
  let background = "";
  theme === "light" ? (background = "bg-gradient-to-tr") : (background = "");
  return (
    <div
      className={`${background} from-blue-400 dark:bg-mainDark  dark:h-[100vh] dark:overflow-y-scroll h-56 items-center justify-center lg:h-80 relative pt-12 to-blue-300 via-blue-400 w-full`}
    >
      <p className="text-white text-3xl font-semibold text-center pb-8">
        Privacy Policy
      </p>
      <div className="main_content ">
        <div className="mcontainer">
          <div className="bg-white dark:bg-subMajorDark max-w-4xl mx-auto md:p-10 p-6 relative rounded-md shadow">
            <div className="md:space-y-6 space-y-4 text-gray-400 md:text-lg dark:text-white">
              <div className="md:leading-8 leading-7">
                {" "}
                Updated July 09, 2021
              </div>
              <div className="font-semibold md:text-2xl text-xl text-gray-700 dark:text-gray-300">
                {" "}
                Privacy Policy{" "}
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                Version 2.1, Revision 4
              </div>

              <div className="font-semibold md:text-2xl text-2xl text-gray-700 md:pt-12 pt-10 dark:text-gray-300">
                {" "}
                Using our services{" "}
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                You must follow any policies made available to you within the
                Services.
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                Don't misuse our Services. For example, don't interfere with our
                Services or try to access them using a method other than the
                interface and the instructions that we provide. You may use our
                Services only as permitted by law, including applicable export
                and re-export control laws and regulations. We may suspend or
                stop providing our Services to you if you do not comply with our
                terms or policies or if we are investigating suspected
                misconduct.{" "}
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                Using our Services does not give you ownership of any
                intellectual property rights in our Services or the content you
                access. You may not use content from our Services unless you
                obtain permission from its owner or are otherwise permitted by
                law. These terms do not grant you the right to use any branding
                or logos used in our Services. Don't remove, obscure, or alter
                any legal notices displayed in or along with our Services.{" "}
              </div>

              <div className="font-semibold md:text-2xl text-2xl text-gray-700 dark:text-gray-300">
                Your content in our services
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual
                property rights that you hold in that content. In short, what
                belongs to you stays yours.
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                When you upload, submit, store, send or receive content to or
                through our Services, you give Front (and those we work with) a
                worldwide license to use, host, store, reproduce, modify, create
                derivative works (such as those resulting from translations,
                adaptations or other changes we make so that your content works
                better with our Services), communicate, publish, publicly
                perform, publicly display and distribute such content. The
                rights you grant in this license are for the limited purpose of
                operating, promoting, and improving our Services, and to develop
                new ones. This license continues even if you stop using our
                Services (for example, for a business listing you have added to
                Front Maps). Some Services may offer you ways to access and
                remove content that has been provided to that Service. Also, in
                some of our Services, there are terms or settings that narrow
                the scope of our use of the content submitted in those Services.
              </div>

              <div className="font-semibold md:text-2xl text-xl text-gray-700 dark:text-gray-300">
                {" "}
                Pay Attention{" "}
              </div>
              <div className="md:leading-8 leading-7">
                {" "}
                Our Services are very diverse, so sometimes additional terms or
                product requirements (including age requirements) may apply.
                Additional terms will be available with the relevant Services,
                and those additional terms become part of your agreement with us
                if you use.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
