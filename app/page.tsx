"use client";
import { Sidebar } from "@/components/sidebar";
import { Wallets } from "@/components/wallets";
import { LastTransaction } from "@/components/last-transaction";
import { useState } from "react";
export default function Home() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("ComponentOne");

  const handleComponentChange = (componentName: string) => {
    setSelectedComponent(componentName);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full">
        <div className="flex w-1/4">
          <Sidebar onSelect={handleComponentChange} />
        </div>
        <div className="w-3/4">
          {selectedComponent === "ComponentOne" && <Wallets />}
          {selectedComponent === "ComponentTwo" && <LastTransaction />}
        </div>
      </div>
    </main>
  );
}
