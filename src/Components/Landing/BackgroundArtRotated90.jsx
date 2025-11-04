import React from "react";

const BackgroundArtRotated90 = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible blur-md">
      <div 
        className="relative w-full flex flex-col items-center justify-center"
        style={{ 
          rotate: '90deg',
          gap: '90vw', // Large gap to spread lines horizontally to edges
          transformOrigin: 'center center'
        }}
      >
        {/* Top Red Lines */}
        <div className="relative w-full flex justify-center">
          {/* Main horizontal glowing line */}
          <div
            className="relative h-[5px] w-[400px] bg-[var(--primary-800)] 
        shadow-[0_0_250px_0_var(--primary-800),0_0_230.4px_0_var(--primary-800),0_0_134.4px_0_var(--primary-800),0_0_67.2px_0_var(--primary-800),0_0_19.2px_0_var(--primary-800),0_0_9.6px_0_var(--primary-800)]"
          >
            {/* Right upward diagonal */}
            <div
              className="absolute right-[calc(50%-300px)] top-0 h-[5px] w-[100px] bg-[var(--primary-800)] -rotate-45 origin-bottom-left"
              style={{
                boxShadow:
                  "0 0 100.8px 0 var(--primary-800), 0 0 57.6px 0 var(--primary-800), 0 0 33.6px 0 var(--primary-800), 0 0 16.8px 0 var(--primary-800), 0 0 4.8px 0 var(--primary-800), 0 0 2.4px 0 var(--primary-800)",
              }}
            />

            {/* Left upward diagonal */}
            <div
              className="absolute left-[calc(50%-300px)] top-0 h-[5px] w-[100px] bg-[var(--primary-800)] rotate-45 origin-bottom-right"
              style={{
                boxShadow:
                  "0 0 100.8px 0 var(--primary-800), 0 0 57.6px 0 var(--primary-800), 0 0 33.6px 0 var(--primary-800), 0 0 16.8px 0 var(--primary-800), 0 0 4.8px 0 var(--primary-800), 0 0 2.4px 0 var(--primary-800)",
              }}
            />
          </div>
        </div>

        {/* Bottom White Lines */}
        <div className="relative w-full flex justify-center">
          {/* Main horizontal glowing line */}
          <div
            className="relative h-[4px] w-[400px] bg-white 
        shadow-[0_0_150px_0_#FFF,0_0_85px_0_#FFF,0_0_50px_0_#FFF,0_0_25px_0_#FFF,0_0_8px_0_#FFF]"
          >
            {/* Right downward diagonal */}
            <div
              className="absolute right-[calc(50%-300px)] bottom-0 h-[4px] w-[100px] bg-white rotate-45 origin-top-left"
              style={{
                boxShadow:
                  "0 0 40px 0 #FFF, 0 0 22px 0 #FFF, 0 0 12px 0 #FFF",
              }}
            />

            {/* Left downward diagonal */}
            <div
              className="absolute left-[calc(50%-300px)] bottom-0 h-[4px] w-[100px] bg-white -rotate-45 origin-top-right"
              style={{
                boxShadow:
                  "0 0 40px 0 #FFF, 0 0 22px 0 #FFF, 0 0 12px 0 #FFF",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundArtRotated90;

