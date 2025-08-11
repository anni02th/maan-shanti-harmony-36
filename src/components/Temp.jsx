import React from "react";
import meditation from "@/assets/meditation.png";
import shadow from "@/assets/shadow.png";


const Temp = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-teal-50">
      <div className=" w-64 h-64 flex justify-center flex-col gap-16">
        {/* Meditation Image */}
        <img
          src={meditation}
          alt="Meditation"
          className=" w-48 animate-float"
        />

        {/* Shadow Image */}
        <img
          src={shadow}
          alt="Shadow"
          className=" bottom-0 w-32 animate-shadow"
        />
      </div>
    </section>
  );
};

export default Temp;
