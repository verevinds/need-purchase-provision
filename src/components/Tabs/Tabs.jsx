import React from 'react';

const Tabs = ({ children, handleTabs, tabs }) => {
  const [numberPage, handleClickTabs] = handleTabs;
  return (
    <div className={`${numberPage === 0 ? '_header-width' : ''}`}>
      {children || (
        <>
          <div className='header__tabs _font-weight'>
            {tabs.map((item) => (
              <div
                key={item.id}
                className={`tabs__tab ${numberPage === item.id ? 'tabs__tab-active' : ''}`}
                onClick={() => handleClickTabs(item.id)}>
                {item.name} {item.badge ? `[${item.badge}]` : ''}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;
