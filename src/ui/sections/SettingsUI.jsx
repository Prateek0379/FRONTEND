import TopHeader from "./TopHeader";

import "../styles/settings.css";
import "../styles/animations.css";

function SettingsUI() {
  return (
    <div className="ui-settings">

      {/* Header */}
      <div className="animate-fade-up">
        <TopHeader
          title="Settings"
          subtitle="Manage application preferences and visibility options"
        />
      </div>

      {/* Content */}
      <div className="ui-settings__content animate-fade-up delay-1">

        {/* Section */}
        <div className="ui-settings__card">
          <h3>General</h3>

          <div className="ui-settings__row">
            <span>Show placement insights</span>
            <span className="ui-settings__value">Enabled</span>
          </div>

          <div className="ui-settings__row">
            <span>Display analytics charts</span>
            <span className="ui-settings__value">Enabled</span>
          </div>
        </div>

        {/* Section */}
        <div className="ui-settings__card">
          <h3>Visibility</h3>

          <div className="ui-settings__row">
            <span>Allow recruiters to view profile</span>
            <span className="ui-settings__value">Enabled</span>
          </div>

          <div className="ui-settings__row">
            <span>Show skill association data</span>
            <span className="ui-settings__value">Enabled</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SettingsUI;
