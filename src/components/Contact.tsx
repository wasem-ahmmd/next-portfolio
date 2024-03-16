import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
const Contact = () => {
  return (
    <div className="contact-us bg-dark py-32">
      <div className="container max-w-screen-xxl">
        <div className="contact-us-contant flex gap-[300px]">
          <div className="contact-us-title-part max-w-screen-xxs">
            <div className="contact-us-title">
              <h1 className="text-light font-Montserrat font-500 text-h2-48 leading-h2 -tracking-h1-h2 uppercase mb-4">
                Contact
              </h1>
              <p className="text-light font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2">
                Ready to elevate your visual presence? I'm here to bring your
                creative visions to life. Feel free to reach out
              </p>
            </div>
            <div className="bg-light/15 h-[1px] my-10"></div>
            <div className="contact-us-live flex justify-between">
              <div className="contact-us-location">
                <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                  Location
                </h1>
                <h6 className="text-light font-Montserrat font-400 text-card-text leading-card tracking-h1-h2">
                  India, jammu & kashmir
                </h6>
              </div>
              <div className="contact-us-phone">
                <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                  Phone:
                </h1>
                <h6 className="text-light font-Montserrat font-400 text-card-text leading-card tracking-h1-h2">
                  +917051715667
                </h6>
              </div>
            </div>
          </div>
          <div className="contact-us-form">
            <form className="form">
              <div className="flex justify-between gap-1 mb-5">
                <div className="form-first-name">
                  <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                    First Name
                  </h1>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="bg-dark w-[274px] font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 text-light/60 rounded-3xl border border-light/25 py-3 px-6"
                  />
                </div>
                <div className="form-last-name">
                  <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                    Last Name
                  </h1>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="bg-dark w-[274px] font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 text-light/60 rounded-3xl border border-light/25 py-3 px-6"
                  />
                </div>
              </div>
              <div className="form-Email-name mb-5">
                <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                  Email Address
                </h1>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-dark  w-full font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 text-light/60 rounded-3xl border border-light/25 py-3 px-6"
                />
              </div>
              <div className="contact-us-checked-btns mb-5">
                <div className="checked-btn-title">
                  <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                    Select Service
                  </h1>
                </div>
                <div className="grid grid-cols-2 mb-2">
                  <div className="">
                    <input
                      type="checkbox"
                      className="rounded-full w-[16px] h-[16px] bg-light border border-light/25 align-middle checked:bg-color-3 cursor-pointer appearance-none"
                    />
                    <span className="text-light/60 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 px-4">
                      Graphic Design
                    </span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      className="rounded-full w-[16px] h-[16px] bg-light border border-light/25 align-middle checked:bg-color-3 cursor-pointer appearance-none"
                    />
                    <span className="text-light/60 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 px-4 ">
                      3D Modeling&Animation
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="">
                    <input
                      type="checkbox"
                      className="rounded-full w-[16px] h-[16px] bg-light border border-light/25 align-middle checked:bg-color-3 cursor-pointer appearance-none"
                    />
                    <span className="text-light/60 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 px-4">
                      Video Editing
                    </span>
                  </div>
                  <div className="">
                    <input
                      defaultChecked
                      type="checkbox"
                      className="rounded-full w-[16px] h-[16px] bg-light border border-light/25 align-middle checked:bg-color-3 cursor-pointer appearance-none"
                    />
                    <span className="text-light/60 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 px-4 ">
                      Video Production
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-us-message mb-8 ">
                <h1 className="text-light font-Montserrat font-500 text-card-text leading-[19px] tracking-h1-h2 mb-2">
                  Message
                </h1>
                <textarea
                  placeholder="Write your message here"
                  className="bg-dark w-full h-40 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 text-light/60 rounded-3xl border border-light/25 py-3 px-6"
                ></textarea>
              </div>
              <div className="contact-us-action-part flex justify-between gap-4 items-center">
                <div className="sunmit-btn">
                  <Button
                    className={cn(
                      buttonVariants({
                        variant: "dark",
                        size: "medium",
                        className:
                          " font-Montserrat border border-light px-8 py-[10px]",
                      })
                    )}
                  >
                    submit
                  </Button>
                </div>
                <div className="btn-txt">
                  <p className="text-light/60 font-Montserrat font-500 text-card-text leading-logo tracking-h1-h2">
                    By submitting this form you read and agree to the Terms &
                    Conditions and our privacy policy.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
