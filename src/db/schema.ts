// Here we define out tables 
// https://orm.drizzle.team/docs/schemas

import { pgTable, serial } from "drizzle-orm/pg-core";

// bb = bid buddy
export const bids = pgTable("bb_bids", {
  id: serial("id").primaryKey(),
});
