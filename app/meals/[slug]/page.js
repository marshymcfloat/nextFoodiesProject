import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";

import Image from "next/image";
import { notFound } from "next/navigation";
export default function mealDetails({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://marshymcfloat-nextjs-demo.s3.ap-southeast-1.amazonaws.com/${image}`}
            fill
            alt={meal.title}
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
