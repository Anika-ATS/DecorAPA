import React from "react";

const Accordian = () => {
  return (
    <div className="m-5 gap-3 mb-5">
      <div className="collapse collapse-arrow bg-gradient-to-r from-[#64d9b9] to-[#1d2939] mb-3 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium  text-white">
          What is our goal?
        </div>
        <div className=" collapse-content  text-white">
          <p>
            We prefer to match the level of our customer and our product are eco
            friendly as well as fashionable for maintaining daily life or any
            party /occasion.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gradient-to-r from-[#64d9b9] to-[#1d2939] mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium  text-white">
          Who is our main customer?
        </div>
        <div className="collapse-content  text-white">
          <p>
            We collect and design for any age person.We work for all types of
            people as like student, children,job holder or aged person. We
            notice your preference and maintain our collections.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gradient-to-r from-[#64d9b9] to-[#1d2939] ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium  text-white">
          What we have in our shop?
        </div>
        <div className="collapse-content text-white ">
          <p>
            We have eco friendly tote bags, purse, picnic bags, regular use bags
            etc.For more information you can do visit to our shop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
