import React from "react";
import weddingRsvpQr20260312 from "./assets/wedding-rsvp-qr-20260312.png";

export default function MithiWeddingWebsite() {
  const [storyView, setStoryView] = React.useState<"bride" | "groom">("bride");
  const [scrollY, setScrollY] = React.useState(0);
  const [heroSlide, setHeroSlide] = React.useState(0);
  const [selectedMapStop, setSelectedMapStop] = React.useState("Ceremony");
  const [activeSection, setActiveSection] = React.useState("home");
  const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  const weddingDate = React.useMemo(() => new Date("2027-03-27T17:00:00-04:00"), []);
  const getTimeLeft = React.useCallback(() => {
    const now = new Date();
    const diff = Math.max(0, weddingDate.getTime() - now.getTime());
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return { days, hours, minutes };
  }, [weddingDate]);
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60_000);

    setTimeLeft(getTimeLeft());

    return () => window.clearInterval(intervalId);
  }, [getTimeLeft]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % 5);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const GoldDivider = () => (
    <div className="relative flex items-center justify-center py-10 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-50">
        <div className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-yellow-600/70 to-transparent" />
      </div>
      <div className="relative mx-4 rounded-full border border-yellow-600/30 bg-white/70 px-4 py-1 text-yellow-700 shadow-sm backdrop-blur">
        ✦
      </div>
    </div>
  );

  const OceanWaves = () => (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-none">
      <svg className="relative block h-24 w-[200%] animate-[waveDrift_18s_linear_infinite] opacity-55" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none">
        <path d="M0 82L48 74.7C96 67.3 192 52.7 288 58.7C384 64.7 480 91.3 576 96C672 100.7 768 83.3 864 72C960 60.7 1056 55.3 1152 60C1248 64.7 1344 79.3 1392 86.7L1440 94V160H1392C1344 160 1248 160 1152 160C1056 160 960 160 864 160C768 160 672 160 576 160C480 160 384 160 288 160C192 160 96 160 48 160H0Z" fill="#dbeafe" />
        <path d="M0 108L48 102.7C96 97.3 192 86.7 288 88C384 89.3 480 102.7 576 102.7C672 102.7 768 89.3 864 84C960 78.7 1056 81.3 1152 89.3C1248 97.3 1344 110.7 1392 117.3L1440 124V160H1392C1344 160 1248 160 1152 160C1056 160 960 160 864 160C768 160 672 160 576 160C480 160 384 160 288 160C192 160 96 160 48 160H0Z" fill="#bfdbfe" fillOpacity="0.9" />
      </svg>
      <svg className="relative -mt-12 block h-24 w-[200%] animate-[waveDriftReverse_22s_linear_infinite] opacity-60" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none">
        <path d="M0 92L48 84C96 76 192 60 288 60C384 60 480 76 576 86.7C672 97.3 768 102.7 864 96C960 89.3 1056 70.7 1152 68C1248 65.3 1344 78.7 1392 85.3L1440 92V160H1392C1344 160 1248 160 1152 160C1056 160 960 160 864 160C768 160 672 160 576 160C480 160 384 160 288 160C192 160 96 160 48 160H0Z" fill="#93c5fd" fillOpacity="0.45" />
      </svg>
    </div>
  );

  const FloatingFlowers = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[4%] top-[10%] animate-[floatFlower_10s_ease-in-out_infinite] opacity-80">
        <svg viewBox="0 0 160 160" className="h-28 w-28 drop-shadow-[0_18px_24px_rgba(148,113,127,0.15)]">
          <path d="M80 150C79 110 82 76 88 24" stroke="#88a387" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M88 64C107 50 118 33 120 16C101 22 90 34 82 50" fill="#dce8d8" />
          <path d="M84 88C65 74 54 58 52 40C71 46 82 58 90 74" fill="#e8f0e3" />
          <g transform="translate(78 60)">
            <ellipse cx="0" cy="-24" rx="12" ry="26" fill="#f8e7ea" />
            <ellipse cx="22" cy="-6" rx="24" ry="13" fill="#f3d8de" transform="rotate(24)" />
            <ellipse cx="16" cy="18" rx="14" ry="25" fill="#fbf4ef" transform="rotate(46)" />
            <ellipse cx="-16" cy="18" rx="14" ry="25" fill="#f5dfe5" transform="rotate(-44)" />
            <ellipse cx="-24" cy="-4" rx="24" ry="13" fill="#fbf4ef" transform="rotate(-22)" />
            <circle cx="0" cy="0" r="10" fill="#f2c9a7" />
            <circle cx="0" cy="0" r="4" fill="#d59d68" opacity="0.8" />
          </g>
        </svg>
      </div>
      <div className="absolute right-[7%] top-[14%] animate-[floatFlower_12s_ease-in-out_infinite] opacity-70" style={{ animationDelay: "-3s" }}>
        <svg viewBox="0 0 150 150" className="h-24 w-24 drop-shadow-[0_18px_22px_rgba(148,113,127,0.12)]">
          <path d="M74 140C74 112 74 84 72 44" stroke="#88a387" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M72 76C87 64 96 50 97 34C82 39 75 48 69 62" fill="#d9e7d4" />
          <path d="M70 84C58 75 50 64 48 50C62 54 69 62 74 72" fill="#edf3ea" />
          <g transform="translate(74 44)">
            <ellipse cx="0" cy="-20" rx="11" ry="23" fill="#fbf2f4" />
            <ellipse cx="20" cy="-4" rx="21" ry="11" fill="#f6dfe5" transform="rotate(20)" />
            <ellipse cx="14" cy="16" rx="12" ry="22" fill="#fff8f2" transform="rotate(42)" />
            <ellipse cx="-14" cy="16" rx="12" ry="22" fill="#f7e5ea" transform="rotate(-42)" />
            <ellipse cx="-20" cy="-4" rx="21" ry="11" fill="#fff8f2" transform="rotate(-20)" />
            <circle cx="0" cy="0" r="9" fill="#f1cfb3" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[11%] bottom-[14%] animate-[floatFlower_11s_ease-in-out_infinite] opacity-60" style={{ animationDelay: "-5s" }}>
        <svg viewBox="0 0 130 130" className="h-20 w-20 drop-shadow-[0_14px_18px_rgba(148,113,127,0.12)]">
          <g transform="translate(65 65)">
            <ellipse cx="0" cy="-18" rx="10" ry="20" fill="#fbf1f3" />
            <ellipse cx="18" cy="-4" rx="18" ry="10" fill="#f5dde3" transform="rotate(22)" />
            <ellipse cx="12" cy="14" rx="11" ry="20" fill="#fff7f1" transform="rotate(44)" />
            <ellipse cx="-12" cy="14" rx="11" ry="20" fill="#f7e6ea" transform="rotate(-44)" />
            <ellipse cx="-18" cy="-4" rx="18" ry="10" fill="#fff7f1" transform="rotate(-22)" />
            <circle cx="0" cy="0" r="8" fill="#efcaaa" />
          </g>
        </svg>
      </div>
      <div className="absolute right-[12%] bottom-[18%] animate-[floatFlower_13s_ease-in-out_infinite] opacity-65" style={{ animationDelay: "-2s" }}>
        <svg viewBox="0 0 170 170" className="h-28 w-28 drop-shadow-[0_20px_24px_rgba(148,113,127,0.14)]">
          <path d="M84 158C85 130 86 98 92 42" stroke="#88a387" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M91 80C111 66 122 50 124 30C105 35 94 46 86 62" fill="#dce8d8" />
          <path d="M88 94C69 80 58 66 56 48C75 54 86 66 95 82" fill="#edf3ea" />
          <g transform="translate(86 56)">
            <ellipse cx="0" cy="-24" rx="13" ry="28" fill="#fdf4f4" />
            <ellipse cx="24" cy="-6" rx="24" ry="13" fill="#f2d8df" transform="rotate(24)" />
            <ellipse cx="16" cy="20" rx="14" ry="25" fill="#fff8f3" transform="rotate(46)" />
            <ellipse cx="-16" cy="20" rx="14" ry="25" fill="#f7e2e7" transform="rotate(-46)" />
            <ellipse cx="-24" cy="-6" rx="24" ry="13" fill="#fff8f3" transform="rotate(-24)" />
            <circle cx="0" cy="0" r="10" fill="#efc7a3" />
          </g>
        </svg>
      </div>
    </div>
  );

  const PalmLeaves = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute -left-10 top-8 h-72 w-72 opacity-30 md:h-96 md:w-96" viewBox="0 0 320 320" fill="none">
        <path d="M158 300C150 240 152 170 180 84" stroke="#567a62" strokeWidth="4" strokeLinecap="round" />
        <path d="M176 100C132 78 96 54 74 22C110 26 146 46 186 88" fill="#7fa486" />
        <path d="M176 124C126 116 84 118 42 138C80 154 122 154 184 136" fill="#92b297" />
        <path d="M180 146C134 164 102 188 76 226C116 218 150 198 188 156" fill="#a4c0a7" />
        <path d="M192 108C222 68 254 42 292 28C274 68 242 98 198 120" fill="#6e9477" />
        <path d="M198 138C242 126 278 124 314 138C282 160 244 164 194 148" fill="#85a98b" />
      </svg>
      <svg className="absolute -right-8 top-20 h-64 w-64 opacity-25 md:h-80 md:w-80" viewBox="0 0 320 320" fill="none">
        <path d="M162 292C172 232 170 168 142 78" stroke="#567a62" strokeWidth="4" strokeLinecap="round" />
        <path d="M148 96C188 72 224 48 248 18C212 22 176 44 140 86" fill="#7f9f84" />
        <path d="M144 124C194 114 236 116 280 136C240 152 198 154 138 136" fill="#98b69d" />
        <path d="M140 150C184 166 220 190 246 228C206 220 170 198 134 158" fill="#adc6b0" />
      </svg>
    </div>
  );

  const ParallaxWaves = () => (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-14 h-24 opacity-35"
        style={{ transform: `translateY(${Math.min(scrollY * 0.08, 28)}px)` }}
      >
        <svg viewBox="0 0 1440 180" className="h-full w-[220%]" preserveAspectRatio="none" fill="none">
          <path d="M0 112L48 102.7C96 93.3 192 74.7 288 74.7C384 74.7 480 93.3 576 98.7C672 104 768 96 864 85.3C960 74.7 1056 61.3 1152 64C1248 66.7 1344 85.3 1392 94.7L1440 104V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0Z" fill="#fff3c8" />
        </svg>
      </div>
      <div
        className="absolute inset-x-0 bottom-6 h-28 opacity-55"
        style={{ transform: `translateY(${Math.min(scrollY * 0.12, 42)}px)` }}
      >
        <svg viewBox="0 0 1440 180" className="h-full w-[220%]" preserveAspectRatio="none" fill="none">
          <path d="M0 92L48 84C96 76 192 60 288 60C384 60 480 76 576 90.7C672 105.3 768 134.7 864 136C960 137.3 1056 110.7 1152 98.7C1248 86.7 1344 89.3 1392 90.7L1440 92V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0Z" fill="#8ed6e8" />
        </svg>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-32 opacity-80"
        style={{ transform: `translateY(${Math.min(scrollY * 0.18, 56)}px)` }}
      >
        <svg viewBox="0 0 1440 180" className="h-full w-[220%]" preserveAspectRatio="none" fill="none">
          <path d="M0 74.7L48 80C96 85.3 192 96 288 110.7C384 125.3 480 144 576 145.3C672 146.7 768 130.7 864 118.7C960 106.7 1056 98.7 1152 101.3C1248 104 1344 117.3 1392 124L1440 130.7V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0Z" fill="#4ea8c7" />
        </svg>
      </div>
    </div>
  );
  const navItems = React.useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Our Story", id: "our-story" },
      { label: "Engagement Photos", id: "engagement-photos" },
      { label: "RSVP", id: "rsvp" },
      { label: "Schedule", id: "schedule" },
      { label: "Travel", id: "travel" },
      { label: "Registry & Gifts", id: "registry" },
      { label: "Wedding Party", id: "wedding-party" },
    ],
    [],
  );

  React.useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  const schedule = [
    { time: "4:30 PM", event: "Guest Arrival", type: "arrival", location: "Mithi Resort & Spa" },
    { time: "5:00 PM", event: "Ceremony Begins", type: "ceremony", location: "Mithi Islet" },
    { time: "5:45 PM", event: "Cocktail Hour", type: "cocktail", location: "Beach at Mithi Resort & Spa" },
    { time: "6:45 PM", event: "Reception", type: "reception", location: "Garden Square Garden, Mithi Resort & Spa" },
    { time: "8:00 PM", event: "Dinner + Toasts", type: "dinner", location: "Garden Square Garden, Mithi Resort & Spa" },
    { time: "9:00 PM", event: "Dancing + Celebration", type: "dance", location: "Garden Square Garden, Mithi Resort & Spa" },
  ];

  const ScheduleIcon = ({ type }) => {
    const cls = "h-9 w-9 text-[#6b6a64]";

    if (type === "cocktail") {
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14h36c0 0-7 10-18 16-11-6-18-16-18-16Z" />
          <path d="M32 30v18" />
          <path d="M28 48h8" />
          <path d="M24 52h16" />
          <path d="M39 12l7-5" />
        </svg>
      );
    }

    if (type === "ceremony") {
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 48c0-12 7-22 16-28 9 6 16 16 16 28" />
          <path d="M14 48h36" />
          <path d="M22 48V34" />
          <path d="M42 48V34" />
          <path d="M28 20h8" />
          <path d="M32 16v8" />
        </svg>
      );
    }

    if (type === "reception") {
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="24" r="10" />
          <path d="M22 24h20" />
          <path d="M32 14v20" />
          <path d="M20 44c4-6 12-10 12-10s8 4 12 10" />
          <path d="M18 50h28" />
        </svg>
      );
    }

    if (type === "dinner") {
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 12v16" />
          <path d="M14 12v10" />
          <path d="M22 12v10" />
          <path d="M18 28v24" />
          <path d="M42 12v18" />
          <path d="M42 30c-5 0-8-3-8-8 0-6 3-10 8-10v40" />
        </svg>
      );
    }

    if (type === "dance") {
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="4" />
          <circle cx="40" cy="18" r="4" />
          <path d="M24 20l4 10 8 2" />
          <path d="M28 30l-6 8" />
          <path d="M36 32l6 10" />
          <path d="M40 22l-4 8-8 4" />
          <path d="M20 42l-4 10" />
          <path d="M42 42l8 10" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 32h28" />
        <path d="M30 24l10 8-10 8" />
        <path d="M44 20v24" />
      </svg>
    );
  };

  const travelTips = [
    "The wedding will be held at Mithi Resort & Spa in Bohol, where the couple will also be staying.",
    "Guests are welcome to stay at the resort or at nearby accommodations.",
    "If you are staying at our hotel, shuttle transportation will be available.",
    "If you are staying elsewhere, Grab or taxi will be the easiest transportation option.",
    "A shuttle service will be available to transport guests from the ceremony venue to the reception.",
  ];

  const registryItems = [
    "Your presence at our wedding is the greatest gift of all.",
  ];

  const gifts = [
    { name: "Send a Wedding Gift", label: "Send via PayPal", link: "https://paypal.me/yourlink" },
  ];

  const mapStops = [
    {
      name: "Ceremony",
      area: "Mithi Islet",
      note: "Our ceremony will take place at Mithi Islet.",
      x: "60%",
      y: "34%",
      color: "bg-[#f5b7a5]",
      ring: "ring-[#f5b7a5]/50",
      link: "https://maps.google.com/?q=Mithi+Islet+Bohol",
    },
    {
      name: "Reception",
      area: "Garden Square at Mithi",
      note: "The reception will follow at Garden Square at Mithi.",
      x: "60%",
      y: "42%",
      color: "bg-[#f0d37a]",
      ring: "ring-[#f0d37a]/55",
      link: "https://maps.google.com/?q=Garden+Square+Mithi+Resort+and+Spa+Bohol",
    },
    {
      name: "Mithi Resort",
      area: "Resort Stay",
      note: "This is the main wedding hub and where the couple will be staying.",
      x: "48%",
      y: "56%",
      color: "bg-[#8cc7be]",
      ring: "ring-[#8cc7be]/55",
      link: "https://maps.google.com/?q=Mithi+Resort+and+Spa+Bohol",
    },
    {
      name: "Nearby Hotels",
      area: "Panglao Options",
      note: "A cluster of nearby accommodations for guests staying off property.",
      x: "32%",
      y: "42%",
      color: "bg-[#98b8de]",
      ring: "ring-[#98b8de]/55",
      link: "https://maps.google.com/?q=hotels+near+Mithi+Resort+and+Spa+Bohol",
    },
    {
      name: "Panglao Airport",
      area: "Arrival Point",
      note: "Most guests will arrive here before heading to the resort.",
      x: "18%",
      y: "72%",
      color: "bg-[#d5b0d8]",
      ring: "ring-[#d5b0d8]/55",
      link: "https://maps.google.com/?q=Bohol-Panglao+International+Airport",
    },
  ];
  const activeMapStop = mapStops.find((stop) => stop.name === selectedMapStop) ?? mapStops[0];

  const heroPhotos = [
    { label: "photo 1", accent: "from-[#f6d3b6] via-[#fbead8] to-[#f7c2c7]" },
    { label: "photo 2", accent: "from-[#f8dca8] via-[#fdf3d2] to-[#9fd5e8]" },
    { label: "photo 3", accent: "from-[#d6e8d1] via-[#f7efe3] to-[#f4c3cf]" },
    { label: "photo 4", accent: "from-[#f5c6a4] via-[#ffe6d6] to-[#c9e7ef]" },
    { label: "photo 5", accent: "from-[#f3d6df] via-[#fff5ef] to-[#dce9d7]" },
  ];

  const weddingParty = {
    brideSide: [
      { name: "Cindy", role: "Maid of Honor", photo: publicAsset("photos/cindy.jpg"), desc: "A lifelong friend who has been there through every chapter." },
      { name: "Ryan", role: "Bridesman", photo: publicAsset("photos/ryan.jpg"), desc: "Started as a MapleStory friend and became real-life family." },
      { name: "Dao", role: "Bridesmaid", photo: publicAsset("photos/dao.jpg"), desc: "Always bringing laughter and good energy wherever she goes." },
      { name: "Suachi", role: "Bridesmaid", photo: publicAsset("photos/suachi.jpg"), desc: "A close friend with countless memories together." },
      { name: "Jennifer", role: "Bridesmaid", photo: publicAsset("photos/jennifer.jpg"), desc: "Someone who always shows up with love and support." },
      { name: "Vy", role: "Bridesmaid", photo: publicAsset("photos/vy.jpg"), desc: "A fun and loyal friend who makes every moment brighter." },
      { name: "Sophia", role: "Bridesmaid", photo: publicAsset("photos/sophia.jpg"), desc: "Kind, supportive, and always part of the best memories." },
      { name: "Thao", role: "Bridesmaid", photo: publicAsset("photos/thao.jpg"), desc: "A friend who has been there through every adventure." },
      { name: "Jalyn", role: "Bridesmaid", photo: publicAsset("photos/jalyn.jpg"), desc: "Someone who always brings joy and great energy." }
    ],
    groomSide: [
      { name: "Groomsman", role: "Groomsman", photo: publicAsset("photos/groomsman1.jpg"), desc: "One of the groom's closest friends." },
      { name: "Groomsman", role: "Groomsman", photo: publicAsset("photos/groomsman2.jpg"), desc: "A loyal friend and supporter." },
      { name: "Groomsman", role: "Groomsman", photo: publicAsset("photos/groomsman3.jpg"), desc: "Part of many great memories." }
    ]
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff3d9_0%,#ffd6b5_18%,#f7a8a0_34%,#89c7df_56%,#5eb4c8_72%,#f6e7b2_88%,#faf6ef_100%)] text-slate-800">
      <style>{`
        @keyframes waveDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes waveDriftReverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        @keyframes floatFlower {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(0, -10px, 0) rotate(2.5deg) scale(1.02); }
        }
      `}</style>
      <header className="sticky top-0 z-20 border-b border-slate-200/40 bg-[#1e3a5f] text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Mithi Resort Wedding</p>
            <h1 className="text-2xl font-semibold">Alder &amp; Kathy</h1>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">March 27, 2027</p>
        </div>
      </header>

      <nav className="fixed left-1/2 top-24 z-30 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/70 p-2 shadow-[0_18px_40px_rgba(30,58,95,0.14)] backdrop-blur md:block">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                activeSection === item.id
                  ? "bg-[#1e3a5f] text-white shadow"
                  : "text-slate-600 hover:bg-white/80 hover:text-[#1e3a5f]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="home"
        className="relative overflow-hidden"
      >
        <PalmLeaves />
        <FloatingFlowers />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,245,229,0.92)_0%,rgba(255,212,177,0.78)_18%,rgba(247,161,156,0.45)_36%,rgba(132,203,225,0.4)_60%,rgba(70,160,191,0.22)_78%,rgba(248,240,214,0.88)_100%)]" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-14 left-1/4 h-80 w-80 rounded-full bg-[#ffe7ad] blur-[140px] opacity-70" />
          <div className="absolute top-12 right-[18%] h-72 w-72 rounded-full bg-[#ffc5a6] blur-[130px] opacity-60" />
          <div className="absolute top-1/3 left-[8%] h-80 w-80 rounded-full bg-[#f59ca8] blur-[150px] opacity-35" />
          <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-[#7dd3e8] blur-[140px] opacity-45" />
          <div className="absolute bottom-8 left-1/3 h-72 w-72 rounded-full bg-[#f6e6b6] blur-[120px] opacity-55" />

          {/* sage leaf illustration */}
          <svg className="absolute right-20 top-40 w-40 opacity-40" viewBox="0 0 200 200" fill="none">
            <path d="M100 30 C140 80 140 120 100 170" stroke="#6b8f71" strokeWidth="3" />
            <ellipse cx="100" cy="60" rx="12" ry="20" fill="#a8c3a1" />
            <ellipse cx="110" cy="100" rx="12" ry="20" fill="#a8c3a1" />
            <ellipse cx="100" cy="140" rx="12" ry="20" fill="#a8c3a1" />
          </svg>
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute right-10 top-20 h-52 w-52 rounded-full bg-yellow-100 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-green-100 blur-3xl" />

          {/* Decorative floral art */}
          <svg className="absolute left-10 bottom-10 w-40 opacity-60" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="60" stroke="#94a3b8" strokeWidth="2" />
            <path d="M100 40 C120 80,120 120,100 160" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="100" cy="40" r="8" fill="#fef08a" />
            <circle cx="100" cy="160" r="8" fill="#86efac" />
          </svg>

          <svg className="absolute right-10 bottom-20 w-36 opacity-60" viewBox="0 0 200 200" fill="none">
            <path d="M100 30 C140 80,140 120,100 170" stroke="#64748b" strokeWidth="2" />
            <circle cx="100" cy="30" r="7" fill="#fde68a" />
            <circle cx="130" cy="90" r="7" fill="#bfdbfe" />
            <circle cx="100" cy="170" r="7" fill="#bbf7d0" />
          </svg>
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm">
              March 27, 2027 • Mithi Resort &amp; Spa
            </p>
            <div className="mb-6 max-w-xl rounded-[1.75rem] border border-white/70 bg-white/70 px-6 py-4 shadow-xl backdrop-blur">
              <p className="text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">
                {timeLeft.days} Days • {timeLeft.hours} Hours • {timeLeft.minutes} Minutes
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-500">
                until Alder &amp; Kathy say "I do"
              </p>
            </div>
            <div className="max-w-2xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-3 shadow-[0_24px_70px_rgba(30,58,95,0.12)] backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-white/70 md:aspect-[16/11]">
                  {heroPhotos.map((photo, index) => (
                    <div
                      key={photo.label}
                      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${photo.accent} px-6 text-center transition-opacity duration-700 ${index === heroSlide ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="rounded-[1.8rem] border border-white/70 bg-white/35 px-10 py-12 shadow-[0_18px_40px_rgba(255,255,255,0.22)] backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Engagement Photo</p>
                        <p className="mt-4 text-4xl font-semibold text-[#1e3a5f] md:text-5xl">{photo.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-2">
                  {heroPhotos.map((photo, index) => (
                    <span
                      key={photo.label}
                      className={`h-2.5 rounded-full transition-all duration-500 ${index === heroSlide ? "w-8 bg-[#1e3a5f]" : "w-2.5 bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-500">
                Hero slideshow of engagement photos
              </p>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We are so excited to celebrate our wedding with the people we love most.
              Join us in beautiful Bohol for a romantic destination weekend filled with joy,
              sunshine, and unforgettable memories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#schedule"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                View Schedule
              </a>
              <a
                href="#travel"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                Travel Info
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-2xl backdrop-blur">
              <div className="mb-5 rounded-[1.6rem] border border-[#f2dec7] bg-[linear-gradient(135deg,rgba(255,245,235,0.96),rgba(255,234,214,0.82),rgba(226,241,247,0.86))] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Celebration Snapshot</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1e3a5f]">Sunset vows, ocean air, and a full weekend in Bohol.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A romantic coastal celebration with soft colors, tropical energy, and all our favorite people in one place.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Beach Weekend</span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Destination Wedding</span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Golden Hour Ceremony</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-[#dbeafe] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Palette</p>
                  <p className="mt-2 font-medium">Blue + Yellow + Sage</p>
                </div>
                <div className="rounded-2xl bg-[#fff7cc] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Style</p>
                  <p className="mt-2 font-medium">Romantic Coastal</p>
                </div>
                <div className="rounded-2xl bg-[#e9f1f7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Dress Code</p>
                  <p className="mt-2 font-medium">Anything you feel comfortable in — think tropical destination vibes, colorful outfits, and florals welcome 🌺</p>
                </div>
                <div className="rounded-2xl bg-[#faf6ef] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Venue</p>
                  <p className="mt-2 font-medium">Mithi Resort &amp; Spa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ParallaxWaves />
        <OceanWaves />
      </section>

      <GoldDivider />
      <section id="our-story" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,246,239,0.95),rgba(234,242,248,0.92),rgba(231,243,234,0.92))]" />
        <div className="absolute -top-12 left-10 h-72 w-72 rounded-full bg-yellow-100/70 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-blue-100/70 blur-[120px]" />
        <svg className="absolute left-6 top-16 w-40 opacity-40" viewBox="0 0 200 200" fill="none">
          <path d="M100 24 C132 70 132 124 100 172" stroke="#9ca3af" strokeWidth="2" />
          <path d="M86 58c8-6 20-6 28 0-8 8-20 8-28 0Z" fill="#d9e9df" />
          <path d="M92 102c8-6 18-6 26 0-8 8-18 8-26 0Z" fill="#dbeafe" />
          <path d="M88 146c8-6 20-6 28 0-8 8-20 8-28 0Z" fill="#fef3c7" />
        </svg>
        <svg className="absolute right-10 bottom-16 w-44 opacity-35" viewBox="0 0 200 200" fill="none">
          <path d="M100 22 C138 70 138 126 100 176" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="100" cy="34" r="10" fill="#fff7cc" />
          <circle cx="118" cy="86" r="9" fill="#dbeafe" />
          <circle cx="96" cy="136" r="9" fill="#d9e9df" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Our Story</p>
            <h3 className="mt-4 text-5xl font-semibold tracking-tight text-slate-800">How It All Started</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              From a swipe to snowstorms, slopes, and one unforgettable Denver weekend.
            </p>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur md:p-10">
              <div className="mb-8 flex gap-3">
                <button
                  onClick={() => setStoryView("bride")}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition ${storyView === "bride" ? "bg-[#faf6ef] text-[#1e3a5f] shadow-sm" : "border border-[#1e3a5f]/30 text-[#1e3a5f]"}`}
                >
                  Bride POV
                </button>
                <button
                  onClick={() => setStoryView("groom")}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition ${storyView === "groom" ? "bg-[#faf6ef] text-[#1e3a5f] shadow-sm" : "border border-[#1e3a5f]/30 text-[#1e3a5f]"}`}
                >
                  Groom POV
                </button>
              </div>

              {storyView === "bride" ? (
                <div className="space-y-6 text-[1.05rem] leading-8 text-slate-700">
                  <p>
                    We technically matched on Tinder and added each other on Instagram… and before we even really had time to talk, Alder decided to fly out to Denver to go snowboarding with me. So yes — I picked up a guy I barely knew from the airport.
                  </p>

                  <p>
                    When he walked out, he was wearing a bright red shirt… and my first thought was, <span className="italic text-[#1e3a5f]">“wow, starting off with a red flag already.”</span>
                  </p>

                  <p>
                    Turns out, it wasn’t a red flag — just a very confident color choice and a man who really committed to the bit.
                  </p>

                  <p>
                    He met up with me and my friends that night and we went out together — in the middle of a snowstorm with over two feet of snow on the ground. Somewhere between the laughs, the chaos, and partying through the snow, everything felt easy and natural. We clicked right away.
                  </p>

                  <p>
                    The next morning, running on very little sleep but fully committed, I took him straight to the mountains where the snow was just as deep. He was definitely trying to show off and keep up with me on the slopes — which was bold, considering I’m the better snowboarder.
                  </p>

                  <p>
                    Somehow, he survived the night out, the snow, the cold, and trying to keep up with me… which felt like a very good sign.
                  </p>

                  <p>
                    We warmed up later at a Nuggets basketball game, and somewhere between the snowy slopes and cheering in the arena, I realized this might be the start of something really special.
                  </p>

                  <p className="text-lg font-medium text-[#1e3a5f]">
                    What started with a swipe, a red shirt “red flag,” and a spontaneous airport pickup turned into the best adventure of my life.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 text-[1.05rem] leading-8 text-slate-700">
                  <p>
                    We matched online, and before we had even really gotten to know each other, I found myself booking a flight to Denver to go snowboarding with Kathy. It was spontaneous, a little wild, and somehow felt completely right.
                  </p>

                  <p>
                    She picked me up from the airport, and from the very start I knew this wasn’t going to be an ordinary first meeting. That night, I met up with her and her friends and we went out in the middle of a huge snowstorm.
                  </p>

                  <p>
                    There was snow everywhere, the night was chaotic, and somehow through all of it, being with her felt easy. Natural. Like I had known her longer than I actually had.
                  </p>

                  <p>
                    The next morning, on almost no sleep, she took me straight to the mountains. I definitely tried to keep up with her on the slopes, even though it became obvious pretty quickly that she was the better snowboarder.
                  </p>

                  <p>
                    Between the snow, the laughs, the adventure, and the way everything just clicked, I realized this trip was becoming something much bigger than I expected.
                  </p>

                  <p>
                    Later, warming up at a Nuggets game, it hit me that this could be the beginning of something really special.
                  </p>

                  <p className="text-lg font-medium text-[#1e3a5f]">
                    What started as a spontaneous trip turned into the best love story I could have asked for.
                  </p>
                </div>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group rotate-[-2deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
                <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2">
                  <div className="aspect-[4/5] rounded-[1rem] bg-[linear-gradient(180deg,#eaf2f8,#faf6ef)] flex items-center justify-center text-sm text-slate-500">Airport Pickup</div>
                </div>
                <p className="px-3 pb-2 pt-4 text-center text-sm italic text-slate-600">The beginning of the adventure</p>
              </div>

              <div className="group rotate-[2deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
                <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2">
                  <div className="aspect-[4/5] rounded-[1rem] bg-[linear-gradient(180deg,#fef3c7,#faf6ef)] flex items-center justify-center text-sm text-slate-500">Snowboarding</div>
                </div>
                <p className="px-3 pb-2 pt-4 text-center text-sm italic text-slate-600">Cold weather, warm memories</p>
              </div>

              <div className="group rotate-[1.5deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
                <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2">
                  <div className="aspect-[4/5] rounded-[1rem] bg-[linear-gradient(180deg,#e7f3ea,#faf6ef)] flex items-center justify-center text-sm text-slate-500">Snowy Night Out</div>
                </div>
                <p className="px-3 pb-2 pt-4 text-center text-sm italic text-slate-600">Laughs, chaos, and clicking right away</p>
              </div>

              <div className="group rotate-[-1.5deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
                <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2">
                  <div className="aspect-[4/5] rounded-[1rem] bg-[linear-gradient(180deg,#dbeafe,#faf6ef)] flex items-center justify-center text-sm text-slate-500">Nuggets Game</div>
                </div>
                <p className="px-3 pb-2 pt-4 text-center text-sm italic text-slate-600">Where it started feeling special</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      <section id="engagement-photos" className="relative bg-[linear-gradient(180deg,#faf6ef,#e0ecff,#e7f3ea)] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-10 left-16 h-64 w-64 rounded-full bg-yellow-200 blur-[100px]" />
          <div className="absolute bottom-10 right-16 h-72 w-72 rounded-full bg-blue-200 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Moments We Love</p>
            <h3 className="mt-3 text-4xl font-semibold">Engagement Photos</h3>
            <p className="mt-4 text-slate-600">
              A few favorite moments from our journey together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rotate-[-2deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#eaf2f8] flex items-center justify-center text-slate-500 text-sm">Photo 1</div></div>
            </div>
            <div className="group rotate-[1.5deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#fef3c7] flex items-center justify-center text-slate-500 text-sm">Photo 2</div></div>
            </div>
            <div className="group rotate-[-1deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#e7f3ea] flex items-center justify-center text-slate-500 text-sm">Photo 3</div></div>
            </div>
            <div className="group rotate-[2deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#e0ecff] flex items-center justify-center text-slate-500 text-sm">Photo 4</div></div>
            </div>
            <div className="group rotate-[-1.5deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#f8f4ff] flex items-center justify-center text-slate-500 text-sm">Photo 5</div></div>
            </div>
            <div className="group rotate-[1deg] rounded-[1.8rem] border border-[#d4af37]/40 bg-white p-3 shadow-xl transition duration-300 hover:-translate-y-2 hover:rotate-0">
              <div className="rounded-[1.4rem] border-4 border-[#f3e7b3] bg-[#faf6ef] p-2"><div className="aspect-[4/5] rounded-[1rem] bg-[#fff7ed] flex items-center justify-center text-slate-500 text-sm">Photo 6</div></div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      <section id="rsvp" className="mx-auto max-w-5xl px-6 py-20 text-center bg-[#fff7cc]/40">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">RSVP</p>
        <h3 className="mt-3 text-4xl font-semibold">Please Scan to RSVP</h3>
        <p className="mt-6 text-slate-600 max-w-xl mx-auto">
          Kindly confirm your attendance by scanning the QR code below.
          The QR code will take you directly to our RSVP form where you can
          let us know if you will be attending and provide your guest details.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
            <img
              src={weddingRsvpQr20260312}
              alt="Wedding RSVP QR code"
              className="h-56 w-56 rounded-2xl object-contain"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          RSVP via QR code by the requested response date on your invitation.
        </p>

        <p className="mt-4 text-sm">
          If the QR code does not work, you can RSVP here:
          <br />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd85aTw1aYOaiyIQp-x6zU_Dby_zjZvCJ67R6Tw65_99LYEBA/viewform?usp=dialog"
            target="_blank"
            className="text-[#1e3a5f] underline font-medium"
          >
            Open RSVP Form
          </a>
        </p>
      </section>

      <GoldDivider />
      <section id="schedule" className="mx-auto max-w-7xl px-6 py-20 bg-[#e7f3ea]/40">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Schedule</p>
          <h3 className="mt-3 text-4xl font-semibold">Wedding Day Timeline</h3>
          <p className="mt-4 text-slate-600">
            Our wedding day will take place at <span className="font-semibold text-[#1e3a5f]">Mithi Resort &amp; Spa</span>, with each part of the celebration unfolding across the property.
          </p>
        </div>
        <div className="max-w-xl mx-auto space-y-6">
          {schedule.map((item) => (
            <div key={item.time} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ef] ring-1 ring-[#d4af37]/30">
                  <ScheduleIcon type={item.type} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800">{item.event}</h4>
                  <p className="mt-1 text-sm uppercase tracking-[0.15em] text-slate-500">{item.time}</p>
                  <p className="mt-3 text-sm font-medium text-[#1e3a5f]">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GoldDivider />
      <section id="map" className="relative overflow-hidden bg-[linear-gradient(180deg,#f9f3e8,#e8f3f8,#edf5ec)] py-20">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-[#ffe0c8] blur-[110px]" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#cfe8ef] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Interactive Map</p>
            <h3 className="mt-3 text-4xl font-semibold">Show Where Everything Is</h3>
            <p className="mt-4 text-slate-600">
              Tap a stop to see where each part of the weekend fits into the celebration.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {mapStops.map((stop) => (
                <button
                  key={stop.name}
                  type="button"
                  onClick={() => setSelectedMapStop(stop.name)}
                  className={`rounded-[1.8rem] border px-5 py-5 text-left shadow-sm transition hover:-translate-y-1 ${selectedMapStop === stop.name ? "border-slate-300 bg-white shadow-lg" : "border-white/70 bg-white/70"}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-1 h-4 w-4 rounded-full ${stop.color} ring-4 ${stop.ring}`} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{stop.area}</p>
                      <h4 className="mt-2 text-xl font-semibold text-slate-800">{stop.name}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stop.note}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-[2.2rem] border border-white/80 bg-white/75 p-5 shadow-[0_18px_50px_rgba(30,58,95,0.1)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#cfe2e8] bg-[linear-gradient(180deg,#cfe8ef_0%,#eff8fb_45%,#f4e7b8_78%,#f8efe0_100%)] p-6">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(119,192,215,0)_0%,rgba(119,192,215,0.18)_40%,rgba(82,161,187,0.42)_100%)]" />
                <div className="absolute left-[12%] top-[18%] h-12 w-20 rounded-full bg-white/25 blur-xl" />
                <div className="absolute right-[18%] top-[14%] h-10 w-16 rounded-full bg-white/30 blur-xl" />
                <div className="relative h-[420px] rounded-[1.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))]">
                  <div className="absolute left-[12%] top-[16%] h-40 w-56 rounded-[52%] border border-[#90c9c4]/40 bg-[#9fd8d1]/20 blur-[2px]" />
                  <div className="absolute right-[10%] bottom-[18%] h-44 w-64 rounded-[58%] border border-[#e5d79c]/40 bg-[#f5e4a7]/20 blur-[2px]" />
                  <div className="absolute left-[22%] top-[28%] h-[2px] w-[42%] rotate-[14deg] bg-white/70" />
                  <div className="absolute left-[24%] top-[58%] h-[2px] w-[38%] -rotate-[24deg] bg-white/60" />
                  <div className="absolute left-[44%] top-[38%] h-[24%] w-[2px] bg-white/60" />

                  {mapStops.map((stop) => (
                    <button
                      key={stop.name}
                      type="button"
                      onClick={() => setSelectedMapStop(stop.name)}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: stop.x, top: stop.y }}
                    >
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${stop.color} ring-8 ${selectedMapStop === stop.name ? stop.ring : "ring-white/50"} transition`} />
                      <span className="mt-3 block whitespace-nowrap rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow">
                        {stop.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#f8fbfc] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{activeMapStop.area}</p>
                <h4 className="mt-2 text-2xl font-semibold text-[#1e3a5f]">{activeMapStop.name}</h4>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{activeMapStop.note}</p>
                <a
                  href={activeMapStop.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[#1e3a5f] px-5 py-3 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      <section id="travel" className="bg-[#e0ecff]/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Travel</p>
            <h3 className="mt-3 text-4xl font-semibold">Traveling to Mithi Resort & Spa</h3>
            <p className="mt-4 text-slate-600">The wedding will take place at Mithi Resort & Spa in Bohol, Philippines. Below is a helpful guide for flights, transportation, and hotel options for guests traveling internationally.</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-[2rem] border border-slate-200 bg-[#eaf2f8] p-8 shadow-sm">
              <h4 className="text-2xl font-semibold">✈️ Flights</h4>
              <p className="mt-4 text-slate-600">Guests can fly into <strong>Manila (MNL)</strong> or directly into <strong>Panglao (TAG)</strong>.</p>

              <div className="mt-6 space-y-3 text-slate-700">
                <p>U.S. → Panglao (TAG): ~$1,000–$1,400 round trip</p>
                <p>U.S. → Manila (MNL): ~$700–$1,200 round trip</p>
                <p>Manila → Panglao (TAG): ~$60–$150 round trip</p>
                <p>Cebu → Panglao (TAG): ~$50–$120 round trip</p>
              </div>

              <p className="mt-6 text-sm text-slate-600">💡 Tip: It’s often cheaper to fly into Manila or Cebu first, then take a short domestic flight to Panglao (TAG).</p>

              <div className="mt-8">
                <h5 className="text-xl font-semibold">🚗 Airport to Resort</h5>
                <div className="mt-3 space-y-2 text-slate-700">
                  <p>Panglao Airport → Mithi Resort</p>
                  <p>20–30 minute drive</p>
                  <p>~$10–$20 per car (taxi or resort transfer)</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#faf6ef] p-8 shadow-sm">
              <h4 className="text-2xl font-semibold">🏝️ Mithi Resort & Spa</h4>
              <p className="mt-3 text-slate-600">Panglao Island Circumferential Road, Dauis, Central Visayas 6339, Philippines</p>

              <div className="mt-6 space-y-3 text-slate-700">
                <p>Deluxe Room: ~$180–$250/night</p>
                <p>Superior Room: ~$200–$280/night</p>
                <p>Villa (Garden/Seaview): ~$300–$450/night</p>
                <p>Family Villa / Suite: ~$450–$700+/night</p>
              </div>

              <p className="mt-6 text-sm text-slate-600">Rates vary by season and availability. Wedding guests may receive group pricing.</p>

              <div className="mt-6 text-slate-700 space-y-2">
                <p>• Rooms typically fit 2 guests</p>
                <p>• Extra beds available for a fee</p>
                <p>• Breakfast usually included</p>
                <p>• Beachfront resort with spa, pools, and private transfers</p>
              </div>

              <p className="mt-6 text-sm text-slate-600">💡 Budget Tip: Most guests spend about $250–$400 per night per room. Sharing rooms can reduce the cost to about $125–$200 per person per night.</p>
            </div>

          </div>

          <div className="mt-16">
            <h4 className="text-3xl font-semibold mb-6">💸 Budget Hotels Near Mithi Resort</h4>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Bluewater Panglao Beach Resort</h5>
                <p className="text-sm mt-2">~$70–$90/night</p>
                <p className="text-sm text-slate-600">Beachfront resort with great pools. ~10–15 min drive to Mithi.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Solea Coast Resort Panglao</h5>
                <p className="text-sm mt-2">~$60–$90/night</p>
                <p className="text-sm text-slate-600">Modern resort good for groups. ~10 min drive.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Alona Vida Beach Resort</h5>
                <p className="text-sm mt-2">~$60–$80/night</p>
                <p className="text-sm text-slate-600">Located on Alona Beach with restaurants and nightlife. ~15 min drive.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Panglao Sea Resort</h5>
                <p className="text-sm mt-2">~$70–$90/night</p>
                <p className="text-sm text-slate-600">Quiet beachfront resort. ~10 min drive.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Thistle Inn Panglao</h5>
                <p className="text-sm mt-2">~$30–$60/night</p>
                <p className="text-sm text-slate-600">Clean boutique stay ~5 min from Mithi.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h5 className="font-semibold">Abraham Bohol</h5>
                <p className="text-sm mt-2">~$25–$60/night</p>
                <p className="text-sm text-slate-600">Trendy budget stay popular with younger travelers. ~10 min drive.</p>
              </div>

            </div>

            <p className="mt-8 text-sm text-slate-600">💡 Most nearby stays range from $50–$100 per night and are within a 5–15 minute taxi ride to Mithi Resort (~$5–$10 ride).</p>

          </div>

        </div>
      </section>

      <GoldDivider />
      <section id="registry" className="mx-auto max-w-7xl px-6 py-20 bg-[#faf6ef]">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Registry &amp; Gifts</p>
          <h3 className="mt-3 text-4xl font-semibold">Your Presence Is the Best Gift</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {registryItems.map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Gift Options</p>
            <h4 className="mt-3 text-3xl font-semibold">Ways to Celebrate With a Gift</h4>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If you would like to celebrate with a gift, we are grateful for contributions toward our future together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gifts.map((gift) => (
              <a
                key={gift.name}
                href={gift.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
              >
                <h4 className="text-lg font-semibold">{gift.name}</h4>
                <p className="text-sm text-slate-500 mt-2">{gift.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />
      <section id="wedding-party" className="relative mx-auto max-w-7xl px-6 py-20 bg-[#e7f3ea]/40 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-yellow-200 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-[110px]" />
          <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-green-200 blur-[100px]" />

          <svg className="absolute left-8 top-16 w-36 opacity-60" viewBox="0 0 200 200" fill="none">
            <path d="M100 35 C130 80 130 120 100 165" stroke="#6b8f71" strokeWidth="2.5" />
            <circle cx="100" cy="35" r="8" fill="#facc15" />
            <circle cx="120" cy="85" r="8" fill="#bfdbfe" />
            <circle cx="95" cy="130" r="8" fill="#bbf7d0" />
            <circle cx="108" cy="160" r="8" fill="#f8fafc" />
          </svg>

          <svg className="absolute right-10 bottom-12 w-40 opacity-60" viewBox="0 0 200 200" fill="none">
            <path d="M100 30 C145 78 140 122 100 172" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="100" cy="30" r="8" fill="#fde68a" />
            <circle cx="125" cy="85" r="8" fill="#93c5fd" />
            <circle cx="102" cy="130" r="8" fill="#a7f3d0" />
            <circle cx="115" cy="165" r="8" fill="#fff7ed" />
          </svg>
        </div>

        <div className="relative mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Wedding Party</p>
          <h3 className="mt-3 text-4xl font-semibold">The People Standing Beside Us</h3>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-[#eaf2f8]/80 p-8 shadow-sm backdrop-blur">
            <h4 className="text-2xl font-semibold">Bride’s Side</h4>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {weddingParty.brideSide.map((person, index) => (
                <div
                  key={person.name}
                  className={`group rotate-[-1deg] rounded-[1.5rem] border border-[#d4af37]/50 bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl ${index % 2 === 1 ? 'rotate-[1.5deg]' : ''}`}
                >
                  <div className="rounded-[1.2rem] border-4 border-[#d4af37]/60 bg-[#faf6ef] p-2 shadow-inner">
                    <div className="aspect-[4/5] overflow-hidden rounded-[0.9rem] bg-gradient-to-br from-[#e0ecff] via-[#faf6ef] to-[#e7f3ea]">
                      <img src={person.photo} alt={person.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-4 text-center">
                    <p className="font-semibold text-slate-800">{person.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#1e3a5f]">{person.role}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{person.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#faf6ef]/85 p-8 shadow-sm backdrop-blur">
            <h4 className="text-2xl font-semibold">Groom’s Side</h4>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {weddingParty.groomSide.map((person, index) => (
                <div
                  key={`${person.name}-${index}`}
                  className={`group rotate-[1deg] rounded-[1.5rem] border border-[#d4af37]/50 bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl ${index % 2 === 1 ? 'rotate-[-1.5deg]' : ''}`}
                >
                  <div className="rounded-[1.2rem] border-4 border-[#d4af37]/60 bg-[#faf6ef] p-2 shadow-inner">
                    <div className="aspect-[4/5] overflow-hidden rounded-[0.9rem] bg-gradient-to-br from-[#e0ecff] via-[#faf6ef] to-[#e7f3ea]">
                      <img src={person.photo} alt={person.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-4 text-center">
                    <p className="font-semibold text-slate-800">{person.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#1e3a5f]">{person.role}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{person.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#1e3a5f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Mithi Resort &amp; Spa Wedding</p>
          <p className="mt-3 text-lg text-white/80">With love, we can’t wait to celebrate with you.</p>
        </div>
      </footer>
    </div>
  );
}
