import Navbar from "@/components/navbar";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <h1 className="text-[min(10vw,4rem)] tracking-tighter font-medium">Heading 1</h1>

      <h2 className="text-[min(8vw,3rem)] tracking-tighter font-medium">Heading 2</h2>

      <h3 className="text-[min(6vw,2.5rem)] tracking-tighter font-medium">Heading 3</h3>

      <h4 className="text-[min(5vw,2rem)] tracking-tighter font-medium">Heading 4</h4>

      <h5 className="text-[min(4vw,1.75rem)] tracking-tighter font-medium">Heading 5</h5>

      <h6 className="text-[min(3vw,1.5rem)] tracking-tighter font-medium">Heading 6</h6>
    </Container>
  )
}
