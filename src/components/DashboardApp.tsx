'use client';

import { useState } from 'react';
import Sidebar, { PageKey } from '@/components/layout/Sidebar';
import DashboardPage from '@/components/pages/DashboardPage';
import InventoryPage from '@/components/pages/InventoryPage';
import ProductsPage from '@/components/pages/ProductsPage';
import SalesVelocityPage from '@/components/pages/SalesVelocityPage';
import ExchangeRatesPage from '@/components/pages/ExchangeRatesPage';
import MarketNewsPage from '@/components/pages/MarketNewsPage';
import AIRecommendationsPage from '@/components/pages/AIRecommendationsPage';
import StrategyValidationPage from '@/components/pages/StrategyValidationPage';

const pages: Record<PageKey, React.ComponentType> = {
  dashboard: DashboardPage,
  inventory: InventoryPage,
  products: ProductsPage,
  'sales-velocity': SalesVelocityPage,
  'exchange-rates': ExchangeRatesPage,
  'market-news': MarketNewsPage,
  'ai-recommendations': AIRecommendationsPage,
  'strategy-validation': StrategyValidationPage,
};

const pageTitles: Record<PageKey, string> = {
  dashboard: 'Dashboard',
  inventory: 'Inventory',
  products: 'Products & Suppliers',
  'sales-velocity': 'Sales Velocity',
  'exchange-rates': 'Exchange Rates',
  'market-news': 'Market News',
  'ai-recommendations': 'AI Recommendations',
  'strategy-validation': 'Strategy Validation',
};

export default function DashboardApp() {
  const [currentPage, setCurrentPage] = useState<PageKey>('dashboard');
  const PageComponent = pages[currentPage];

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="min-h-screen lg:ml-64">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/80 px-6 py-4 backdrop-blur-sm lg:px-8">
          <h1 className="pl-10 text-xl font-bold text-white lg:pl-0">{pageTitles[currentPage]}</h1>
        </header>
        <div className="p-4 lg:p-6"><PageComponent /></div>
      </main>
    </div>
  );
}
