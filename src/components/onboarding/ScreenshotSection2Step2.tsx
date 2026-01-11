import screenshotSection2Step2 from "@/assets/screenshot_section2_step2.png";

export const ScreenshotSection2Step2 = () => {
  return (
    <div className="relative">
      <img
        alt="n8n Settings page showing Users option"
        className="w-full h-auto"
        src={screenshotSection2Step2}
      />

      {/* Arrow pointing to Users button in the settings menu */}
      <svg
        className="absolute w-14 h-14 md:w-16 md:h-16 drop-shadow-lg"
        style={{
          left: "46%",
          top: "24%",
          transform: "rotate(-45deg)",
        }}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arrow shadow */}
        <path
          d="M32 8L32 48M32 48L16 32M32 48L48 32"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(2, 2)"
        />
        {/* White arrow */}
        <path
          d="M32 8L32 48M32 48L16 32M32 48L48 32"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
