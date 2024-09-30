import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
          <p>choose your favorite recipe and cook it yourself.</p>
          <p className={classes.cta}>
            <Link href={"/meals/share"}>Share your favorite recipe</Link>
          </p>
        </h1>
      </header>
      <main>
        <Suspense
          fallback={<h1 className={classes.loading}>Fetching meals...</h1>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
