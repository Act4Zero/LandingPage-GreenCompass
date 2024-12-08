import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectTimeline = () => {
  
  const [visibleIndex, setVisibleIndex] = useState(0);
  const refs = useRef([]);
  const { t } = useTranslation();
const getText = () => {
    return t('project-timeline.milestones', { returnObjects: true }) || {};
};

const milestonesData = [
    { title: getText()['1'].title, description: getText()['1'].description, details: getText()['1'].details },
    { title: getText()['2'].title, description: getText()['2'].description, details: getText()['2'].details },
    { title: getText()['3'].title, description: getText()['3'].description, details: getText()['3'].details },
    { title: getText()['4'].title, description: getText()['4'].description, details: getText()['4'].details },
    { title: getText()['5'].title, description: getText()['5'].description, details: getText()['5'].details },
    { title: getText()['6'].title, description: getText()['6'].description, details: getText()['6'].details },
    { title: getText()['7'].title, description: getText()['7'].description, details: getText()['7'].details },
    { title: getText()['8'].title, description: getText()['8'].description, details: getText()['8'].details }
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const index = parseInt(visibleEntries[0].target.dataset.index, 10);
          setVisibleIndex(index);
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.5, 1]
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observer && refs.current) {
        refs.current.forEach((ref) => ref && observer.unobserve(ref));
      }
    };
  }, []);

  const scrollToMilestone = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-10 relative z-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">{t('project-timeline.title')}</h1>

        {/* Scrollable area */}
        <div className="relative h-[800px] overflow-y-scroll no-scrollbar py-10">
          <div className="relative w-full" style={{ height: '2000px' }}>
            {/* Straight vertical line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-green-500 to-green-600 z-0" />

            {milestonesData.map((m, i) => {
              const topPosition = (i / (milestonesData.length - 1)) * 1800 + 100;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (refs.current[i] = el)}
                  data-index={i}
                  className={`absolute transition-opacity duration-500 ease-out ${visibleIndex === i ? 'opacity-100' : 'opacity-75'} min-h-[80px] min-w-[80px]`}
                  style={{ top: `${topPosition}px`, left: '50%', transform: 'translateX(-50%)' }}
                >
                  <div className="relative flex justify-center items-center">
                    <MilestoneMarker details={m.details} />
                    <div
                      className={`bg-white rounded-lg shadow p-4 max-w-sm absolute top-1/2 transform -translate-y-1/2 ${
                        isEven
                          ? 'right-full mr-6 text-right'
                          : 'left-full ml-6 text-left'
                      }`}
                    >
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">{m.title}</h2>
                      <p className="text-gray-700 text-sm">{m.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Smaller, elegant dots */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col items-center space-y-3 z-20">
        {milestonesData.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToMilestone(i)}
            className={`w-3 h-3 rounded-full border border-green-500 transition-transform duration-300
              ${visibleIndex === i ? 'bg-green-500 scale-125' : 'bg-white hover:bg-green-100'}`}
          />
        ))}
      </div>
    </div>
  );
};

const MilestoneMarker = ({ details }) => {
  return (
    <div className="relative group flex-shrink-0 z-10">
      <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-3 w-56 p-4 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10">
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

export default ProjectTimeline;

