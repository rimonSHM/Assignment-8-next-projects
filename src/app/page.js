import Banner from "@/components/Banner";
import GetStartedCards from "@/components/GetStartedCards";
import TopGenerations from "@/components/TopGenerations";


import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner></Banner>

    <GetStartedCards></GetStartedCards>
    <TopGenerations></TopGenerations>

   </div>
  );
}
