import Button from "@ui/Button";

export default function Home() {
  return (
    <main className="p-5">
      Hello World <br />
      <Button isLoading={false} variant="default" size="default">Submit</Button>
    </main>
  );
}
