import { test, expect, selectors } from "@playwright/test";
import dayjs from "dayjs";
test("dates", async () => {
  const todaysDay = dayjs();
  let plus7days = todaysDay.add(5, "d").format("DD/MM/YYYY");
  console.log(plus7days);
});
