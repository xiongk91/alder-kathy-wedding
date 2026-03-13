import React from "react";
import weddingRsvpQr20260312 from "./assets/wedding-rsvp-qr-20260312.png";

export default function MithiWeddingWebsite() {
  const [storyView, setStoryView] = React.useState<"bride" | "groom">("bride");
  const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

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
      <div className="absolute left-[4%] top-[12%] animate-[floatFlower_8s_ease-in-out_infinite] opacity-70">
        <svg viewBox="0 0 120 120" className="h-24 w-24">
          <circle cx="60" cy="60" r="10" fill="#f4d35e" />
          <ellipse cx="60" cy="28" rx="14" ry="24" fill="#9db7d5" />
          <ellipse cx="92" cy="60" rx="24" ry="14" fill="#a8c3a1" />
          <ellipse cx="60" cy="92" rx="14" ry="24" fill="#faf6ef" />
          <ellipse cx="28" cy="60" rx="24" ry="14" fill="#dbeafe" />
          <ellipse cx="82" cy="38" rx="12" ry="18" fill="#fff7cc" />
        </svg>
      </div>
      <div className="absolute right-[7%] top-[18%] animate-[floatFlower_10s_ease-in-out_infinite] opacity-60" style={{ animationDelay: "-2s" }}>
        <svg viewBox="0 0 120 120" className="h-20 w-20">
          <circle cx="60" cy="60" r="9" fill="#f4d35e" />
          <ellipse cx="60" cy="34" rx="12" ry="20" fill="#a8c3a1" />
          <ellipse cx="86" cy="60" rx="20" ry="12" fill="#9db7d5" />
          <ellipse cx="60" cy="86" rx="12" ry="20" fill="#faf6ef" />
          <ellipse cx="34" cy="60" rx="20" ry="12" fill="#d9e9df" />
        </svg>
      </div>
      <div className="absolute left-[10%] bottom-[16%] animate-[floatFlower_9s_ease-in-out_infinite] opacity-55" style={{ animationDelay: "-4s" }}>
        <svg viewBox="0 0 120 120" className="h-16 w-16">
          <circle cx="60" cy="60" r="8" fill="#f4d35e" />
          <ellipse cx="60" cy="36" rx="10" ry="18" fill="#faf6ef" />
          <ellipse cx="84" cy="60" rx="18" ry="10" fill="#9db7d5" />
          <ellipse cx="60" cy="84" rx="10" ry="18" fill="#a8c3a1" />
          <ellipse cx="36" cy="60" rx="18" ry="10" fill="#fff7cc" />
        </svg>
      </div>
      <div className="absolute right-[12%] bottom-[22%] animate-[floatFlower_11s_ease-in-out_infinite] opacity-60" style={{ animationDelay: "-1s" }}>
        <svg viewBox="0 0 140 140" className="h-24 w-24">
          <circle cx="70" cy="70" r="11" fill="#f4d35e" />
          <ellipse cx="70" cy="36" rx="14" ry="24" fill="#faf6ef" />
          <ellipse cx="104" cy="70" rx="24" ry="14" fill="#a8c3a1" />
          <ellipse cx="70" cy="104" rx="14" ry="24" fill="#9db7d5" />
          <ellipse cx="36" cy="70" rx="24" ry="14" fill="#dbeafe" />
        </svg>
      </div>
    </div>
  );
  const navItems = [
    "Home",
    "Our Story",
    "RSVP",
    "Schedule",
    "Travel",
    "Registry",
    "Wedding Gifts",
    "Wedding Party",
  ];

  const schedule = [
    { time: "4:30 PM", event: "Guest Arrival", type: "arrival" },
    { time: "5:00 PM", event: "Ceremony Begins", type: "ceremony" },
    { time: "5:45 PM", event: "Cocktail Hour", type: "cocktail" },
    { time: "6:45 PM", event: "Reception", type: "reception" },
    { time: "8:00 PM", event: "Dinner + Toasts", type: "dinner" },
    { time: "9:00 PM", event: "Dancing + Celebration", type: "dance" },
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
    "If you would like to celebrate with a gift, we are grateful for contributions toward our future together.",
    "Registry details and gift links can be added here.",
  ];

  const gifts = [
    { name: "Send a Wedding Gift", label: "Send via PayPal", link: "https://paypal.me/yourlink" },
    { name: "Honeymoon Fund", label: "Send via PayPal", link: "https://paypal.me/yourlink" },
    { name: "Celebration Gift", label: "Send via PayPal", link: "https://paypal.me/yourlink" },
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f5ee_0%,#dbeafe_30%,#e7f3ea_55%,#fff7cc_75%,#faf6ef_100%)] text-slate-800">
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
      `}</style>
      <header className="sticky top-0 z-20 border-b border-slate-200/40 bg-[#1e3a5f] text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Mithi Resort Wedding</p>
            <h1 className="text-2xl font-semibold">Alder &amp; Kathy</h1>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="site-nav" className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Menu
            </label>
            <select
              id="site-nav"
              defaultValue=""
              onChange={(event) => {
                const target = event.target.value;

                if (target) {
                  window.location.hash = target;
                }
              }}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white outline-none transition hover:bg-white/15"
            >
              <option value="" disabled className="text-slate-800">
                Jump to...
              </option>
              {navItems.map((item) => (
                <option key={item} value={item.toLowerCase().replace(/\s+/g, "-")} className="text-slate-800">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
      >
        <FloatingFlowers />
        <div className="absolute inset-0 opacity-40">
          {/* watercolor background blobs */}
          <div className="absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-yellow-200 blur-[120px] opacity-40" />
          <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-green-200 blur-[120px] opacity-40" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-blue-200 blur-[120px] opacity-40" />

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
            <h2 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
              <span className="text-slate-500 text-lg">(Hero engagement photo will appear here)</span>
            </h2>
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
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm leading-7 text-slate-600">
                This site can be customized with your names, engagement photos, RSVP link,
                hotel booking details, registry links, and your full wedding party list.
              </p>
            </div>
          </div>
        </div>
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
            A relaxed and beautiful evening celebration by the sea.
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
                </div>
              </div>
            </div>
          ))}
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
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Registry</p>
          <h3 className="mt-3 text-4xl font-semibold">Your Presence Is the Best Gift</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {registryItems.map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <GoldDivider />
      <section id="wedding-gifts" className="bg-[#fff7cc]/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Wedding Gifts</p>
            <h3 className="mt-3 text-4xl font-semibold">Wedding Gifts</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gifts.map((gift) => (
              <a
                key={gift.name}
                href={gift.link}
                target="_blank"
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
