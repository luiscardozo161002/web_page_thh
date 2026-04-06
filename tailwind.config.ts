/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#002366",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#D32F2F",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "navy-blue": "#002366",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-pattern": "url('https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/558281753_122184214952351822_6555964461095758379_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGwgNN40kzqA0IyrSCD8IDTnYkTvifi9RediRO-J-L1Fy0zN-72C-ni8i6P3eFBm3uzMcubkh3e9pezlokyNStd&_nc_ohc=UPtdpX6pejQQ7kNvwEdT0C9&_nc_oc=AdqJQ856jo7B84Q6EYGLzAws7LI-qSjo6gEOxcOWuPngrOTYTi74KWvLj9B3EgGKb2M&_nc_zt=23&_nc_ht=scontent.ftlc1-1.fna&_nc_gid=O-2V3dVv3U_KyESOC0Uv2g&_nc_ss=7a32e&oh=00_Afy0FECCWKKeHWzN602uWOwaWLLneHbtcjuoEQkeWuHIkQ&oe=69C91E7B')",
        "footer-pattern": "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
