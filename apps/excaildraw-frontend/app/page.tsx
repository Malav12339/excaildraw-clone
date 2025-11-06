import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <button className="">
        <Link href="/signin">sign in</Link>
      </button>
      <br /> <br />
      <button>
        <Link href="/signup">sign up</Link>
      </button>
    </div>
  );
}
