import React from "react";
import Typewriter from "typewriter-effect";
const Services = () => {
  return (
    <div style={{ height: "55vh" }}>
      <h1 className="text-center text-black Top-banner-title mt-5">
        <span style={{ color: "#FF6F00" }}>Our </span> Services
      </h1>

      <div
        style={{ height: "20vh" }}
        className="d-flex justify-content-center align-items-center .Top-banner-style"
      >
        <div>
          <h1 className="text-black">
            <Typewriter
              options={{
                strings: [
                  `<strong><span style="color: #0000ff;">“মুজিববর্ষের অঙ্গীকার

                </span>উন্নয়ন-অর্থায়নের <span style="color: #FF6F00;"> উৎস হবে পুঁজিবাজার” </span> </strong>`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
