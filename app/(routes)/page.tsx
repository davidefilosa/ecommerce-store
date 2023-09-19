import getBillboards from "@/actions/get-billboard";
import React from "react";
import Billboard from "../components/billboard";
import Container from "../components/ui/Container";

const HomePage = async () => {
  const billboards = await getBillboards(
    "9ea603df-2e1a-429d-bb44-e486913b7bc1"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
    </Container>
  );
};

export default HomePage;
