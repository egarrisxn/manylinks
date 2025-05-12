const BackgroundSoftGlow = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full'>
    <div className='absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#e0f7fa_0%,transparent_100%)]'></div>
  </div>
);

const BackgroundCottonCandy = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[radial-gradient(circle_800px_at_80%_200px,#fde2f3,transparent)]'></div>
);

const BackgroundPeachMist = () => (
  <div className='bg-background absolute top-0 z-[-10] size-full'>
    <div className='absolute top-0 right-0 size-[400px] translate-x-[-20%] translate-y-[20%] rounded-full bg-[#ffebcd] opacity-40 blur-[100px]'></div>
  </div>
);

const BackgroundLavenderCloud = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full [background:radial-gradient(125%_125%_at_50%_10%,#e6e6fa_20%,#ffffff_100%)]'></div>
);

const BackgroundAuraBeam = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[radial-gradient(100%_50%_at_50%_0%,#bbf7d0_0%,#ffffff00_70%)]'></div>
);

const BackgroundPolkaFade = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[radial-gradient(#f2f2f2_1px,transparent_1px)] [background-size:16px_16px]'></div>
);

const BackgroundBigDots = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[radial-gradient(#ececec_2px,transparent_2px)] [background-size:2rem_2rem]'></div>
);

const BackgroundMutedLines = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px)] bg-[size:4rem_100%]'></div>
);

const BackgroundMeshGrid = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[linear-gradient(to_right,#f0f0f033_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f033_1px,transparent_1px)] bg-[size:24px_24px]'></div>
);

const BackgroundMaskedGrid = () => (
  <div className='bg-background absolute z-[-10] size-full'>
    <div className='absolute size-full bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:48px_48px]'></div>
  </div>
);

const BackgroundWarmGrid = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[linear-gradient(to_right,#dddddd33_1px,transparent_1px),linear-gradient(to_bottom,#dddddd33_1px,transparent_1px)] bg-[size:14px_24px]'>
    <div className='absolute inset-x-0 top-0 m-auto size-[300px] rounded-full bg-[#ffe4e1] opacity-20 blur-[100px]'></div>
  </div>
);

const BackgroundBigGrid = () => (
  <div className='bg-background absolute inset-0 z-[-10] size-full bg-[linear-gradient(to_right,#ececec_1px,transparent_1px),linear-gradient(to_bottom,#ececec_1px,transparent_1px)] bg-[size:6rem_4rem]'></div>
);

export const BACKGROUND_OPTIONS = [
  {
    code: "#e0f2fe",
    component: <BackgroundSoftGlow />,
    name: "Soft Glow",
  },
  {
    code: "#fde2f3",
    component: <BackgroundCottonCandy />,
    name: "Cotton Candy",
  },
  {
    code: "#ffebcd",
    component: <BackgroundPeachMist />,
    name: "Peach Mist",
  },
  {
    code: "#e6e6fa",
    component: <BackgroundLavenderCloud />,
    name: "Lavender Cloud",
  },
  {
    code: "#bbf7d0",
    component: <BackgroundAuraBeam />,
    name: "Aura Beam",
  },
  {
    code: "#f2f2f2",
    component: <BackgroundPolkaFade />,
    name: "Polka Fade",
  },
  {
    code: "#dddddd",
    component: <BackgroundBigDots />,
    name: "Big Dots",
  },
  {
    code: "#eaeaea",
    component: <BackgroundMutedLines />,
    name: "Muted Lines",
  },
  {
    code: "#eeeeee",
    component: <BackgroundMeshGrid />,
    name: "Mesh Grid",
  },
  {
    code: "#eaebea",
    component: <BackgroundMaskedGrid />,
    name: "Masked Grid",
  },
  {
    code: "#ffe4e1",
    component: <BackgroundWarmGrid />,
    name: "Warm Grid",
  },
  {
    code: "#f0f0f0",
    component: <BackgroundBigGrid />,
    name: "Big Grid",
  },
] as const;
