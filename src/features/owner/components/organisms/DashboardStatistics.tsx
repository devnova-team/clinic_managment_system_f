"use client";

import React from "react";
import StatisticsCard from "../molecules/StatisticsCard";
import { STATISTICS_CARDS_DATA } from "../../data/ownerData";
import { StatisticCardData } from "../../types/owner.types";


interface DashboardCardsProps {
  cards?: StatisticCardData[];
}

export const DashboardStatistics: React.FC<DashboardCardsProps> = ({
  cards = STATISTICS_CARDS_DATA,
}) => {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <StatisticsCard
          key={card.id}
          title={card.titleKey}
          value={card.value}
          subtext={card.subtextKey}
          iconType={card.iconType}
          variant={card.variant}
        />
      ))}
    </section>
  );
};

export default DashboardStatistics;