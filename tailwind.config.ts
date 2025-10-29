module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Includes all JSX/JS files in app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Includes component files
  ],
  theme: {
    extend: {
      // Custom color palette for employment/job portal
      colors: {
        primary: "#003366", // Professional blue (trust)
        secondary: "#28a745", // Green (growth/opportunity)
        accent: "#ff9100", // Orange (highlight/notification)
        success: "#28a745", // Consistent with secondary
        warning: "#ffc107", // Yellow for warnings
        danger: "#dc3545", // Red for errors
        background: "#f8f9fa", // Light background
        card: "#ffffff", // Clean card background
        border: "#e9ecef", // Subtle border color
        text: "#212529", // Dark text color
        link: "#0d6efd", // Link color
      },
      
      // Professional font options
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Modern sans-serif
        serif: ["Georgia", "serif"], // For headings
        mono: ["Courier New", "monospace"], // Code snippets
      },
      
      // Optional: Add custom responsive breakpoints
      // screens: {
      //   xxxs: "320px",
      //   xxsm: "480px",
      //   xs: "576px",
      //   sm: "768px",
      //   md: "992px",
      //   lg: "1200px",
      //   xl: "1400px",
      //   xxl: "1600px",
      // },
    },
  },
  plugins: [
    // Add plugins if needed (e.g., for forms, animations, etc.)
  ],
};