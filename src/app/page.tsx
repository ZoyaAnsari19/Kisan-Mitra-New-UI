import { PAGE } from "@/lib/page";

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: PAGE }} />
  );
}
