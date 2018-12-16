import React from "react";
import PropTypes from 'prop-types'
import Tab from "./Tab";


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

        {/* <Tabs
          tabs={this.state.tabs}
          selectTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        /> */}

            {console.log("testing")}
        {props.tabs.map(tab => (
          <Tab
            key={tab.headline}
            tab={tab}
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf({
    tab:PropTypes.string
  })
}


// Make sure to use PropTypes to validate your types!
export default Tabs;
