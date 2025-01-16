"use client";

import React, { useState, ReactElement } from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsViewProps {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export const TabsView: React.FC<TabsViewProps> = ({ children }) => {
  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> =>
      React.isValidElement(child) && child.type === Tab
  );

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="mb-4 border-b border-lightBlue">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.map((tab, index) => (
            <li key={index} className="me-2" role="presentation">
              <button
                className={`
                  inline-block p-4 border-b-2 rounded-t-lg
                  ${
                    activeTab === index
                      ? "border-darkBlue text-darkBlue"
                      : "border-transparent text-skyBlue"
                  }
                `}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-controls={`tab-${index}`}
                aria-selected={activeTab === index}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"} md:p-4`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
          >
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};
