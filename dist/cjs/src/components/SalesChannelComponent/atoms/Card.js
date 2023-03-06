"use strict";var e=require("react");require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/base/common.scss.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/node_modules/classnames/index.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Autocomplete/Autocomplete.scss.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Badge/Badge.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Button/Button.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Card/Card.scss.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Checkbox/Checkbox.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Chip/Chip.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Dropdown/Dropdown.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Validation/Validation.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Input/Input.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Menu/Menu.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/MenuItem/MenuItem.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Pagination/Pagination.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Radio/Radio.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Stepper/Stepper.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Tooltip/Tooltip.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Tab/Tab.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/TabItem/TabItem.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/ToggleButton/ToggleButton.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Dialog/Dialog.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/node_modules/react-dom/client.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Toast/Toast.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Toast/Toast.scss.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Code/Code.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Nudge/Nudge.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Nudge/Nudge.scss.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Table/Table.js"),require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/components/Alert/Alert.scss.js");var o=require("../../../../node_modules/@gofynd/nitrozen-react/dist/esm/src/assets/svg-components/Navigation/index.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./card.scss.js");var n=s(e);module.exports=function(e){return n.default.createElement("div",{className:"sales-channel-card"},n.default.createElement("div",{className:"card-logo-style"},n.default.createElement("img",{src:e.logo})),n.default.createElement("div",{className:"card-content"},n.default.createElement("h4",null,e.title),n.default.createElement("p",null,e.description)),n.default.createElement("div",{className:"button-container"},n.default.createElement("div",{className:!0===e.isActive?"active_button float-left":"inactive_button float-left"},!0===e.isActive?"ACTIVE":"INACTIVE"),n.default.createElement("div",{onClick:()=>e.handleClick(e.id),className:"select-widget float-right go-arrow"},n.default.createElement(o.SvgArrowForward,null))))};
//# sourceMappingURL=Card.js.map