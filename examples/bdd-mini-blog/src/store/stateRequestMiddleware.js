/* eslint-disable */

const stateRequest = store => next => action => {
  const path = window.location.pathname;
  if (path.includes('state:')) {
    const stateRequestDetails = path.split('state:');

    // Act on state request
    next({ type: 'SWITCH_STATE_TYPE', stateType: stateRequestDetails[1] });

    // Loop through the store and retrieve available state types,
    // relies on the key _availableStateTypes being set
    const availableStateTypes = Object.entries(store.getState()).map(
      domain => domain[1]._availableStateTypes,
    );

    // Render State Type menu
    document.body.innerHTML += menuString({ availableStateTypes });

    // Freeze state to prevent updates
    return next({ type: 'FREEZE_STATE' });
  }
  return next(action);
};

const menuString = ({ availableStateTypes }) => {
  return `
      <div style="position:fixed;left:0;top:0;width:230px;height:100%;z-index:10;background:#333a42;color:#333a42;padding:30px;">
        ${availableStateTypes.map(stateTypeGroup => {
          return Object.values(stateTypeGroup).map(
            stateType => `
              <a href="/state:${stateType}" style="color:white;display:inline-block;text-decoration:none;width:100%;">
                <small>${stateType}</small>
              </a>
            `,
          );
        })}
      </div>
    `;
};

export default stateRequest;
