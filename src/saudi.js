const SaudiFlag = () => {
    return (
      <svg
        width="300"
        height="200"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Green Background */}
        <rect width="640" height="480" fill="#006C35" />
  
        {/* Shahada (Islamic Creed) */}
        <text
          x="50%"
          y="40%"
          fontSize="65"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          لا إله إلا الله محمد رسول الله
        </text>
  
        {/* Sword */}
        <path
          d="M160 320h320v20H160z"
          fill="white"
          stroke="white"
          strokeWidth="6"
        />
        <circle cx="480" cy="320" r="10" fill="white" />
      </svg>
    );
  };
  
  export default SaudiFlag;
  