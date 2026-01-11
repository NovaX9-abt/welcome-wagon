import screenshotSection2Step1 from "@/assets/screenshot_section2_step1.png";

export const ScreenshotSection2Step1 = () => {
  return (
    <div className="relative">
      <img
        alt="n8n dashboard showing Settings in sidebar"
        className="w-full h-auto"
        src={screenshotSection2Step1}
      />

      {/* Blur overlay for project name rows - positioned over the center content area */}
      <div
        className="absolute backdrop-blur-md bg-background/30 rounded"
        style={{
          left: "19%",
          top: "30%",
          width: "78%",
          height: "48%",
        }}
      />

      {/* Arrow pointing to Settings button in bottom-left sidebar */}
      <svg
        className="absolute w-14 h-14 md:w-16 md:h-16 drop-shadow-lg"
        style={{
          left: "14%",
          bottom: "3%",
          transform: "rotate(-135deg)",
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
