import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function Page({ params }) {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
