export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[10vh] shadow-2xl bg-white/70 bg-blur-lg ">
      <div className="flex flex-row items-center justify-around w-1/2">
        <a href="https://clerk.dev/" target="_blank">
          <img className="h-14" src={'images/clerk-logo.svg'} />
        </a>
        <a href="https://remix.run/" target="_blank">
          <img src={'images/remix-logo.svg'} className="h-28" />
        </a>
        <a href="https://fauna.com/" target="_blank">
          <img className="h-10" src={'images/fauna-logo.svg'} />
        </a>
        <a href="https://www.netlify.com/" target="_blank">
          <img className="h-28" src={'images/netlify-logo.svg'} />
        </a>
      </div>
    </div>
  );
}
