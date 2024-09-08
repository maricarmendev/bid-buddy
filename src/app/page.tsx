import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { bids as bidsSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bids = await database.query.bids.findMany();

  return (
    <main className="container pt-16 px-8">
      <form
        action={async (formData: FormData) => {
          "use server";
          // const bid = formData.get("bid");
          await database.insert(bidsSchema).values({});
          revalidatePath("/");
        }}
      >
        <Input name="bid" placeholder="Bid" />
        <Button type="submit">Place a bid</Button>
      </form>

      <ul>
        {bids.map((bid) => (
          <li key={bid.id}>{bid.id}</li>
        ))}
      </ul>
    </main>
  );
}
