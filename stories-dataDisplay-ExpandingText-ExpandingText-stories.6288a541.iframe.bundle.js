"use strict";(self.webpackChunkrocket_ui=self.webpackChunkrocket_ui||[]).push([[620],{"./src/components/dataDisplay/ExpandingText/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return dataDisplay_ExpandingText}});var objectWithoutPropertiesLoose=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.21.0-c4ef698c89-7b33e25bfa.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),prop_types=__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-5115fb1860/0/cache/@mui-material-npm-5.11.16-91605e8ed0-2f92f14f30.zip/node_modules/@mui/material/styles/styled.js"),Typography=__webpack_require__("./src/components/dataDisplay/Typography/index.ts"),ExpandingTextStyles=(0,styled.ZP)(Typography.Z)((function(_ref){var theme=_ref.theme;return{color:null==theme?void 0:theme.palette.link.main,cursor:"pointer"}})),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),_excluded=["text","minLength","showLessText","showMoreText","display","textProps","expandingActionProps","expanded"],ExpandingText=function ExpandingText(_ref){var text=_ref.text,minLength=_ref.minLength,_ref$showLessText=_ref.showLessText,showLessText=void 0===_ref$showLessText?"Show less":_ref$showLessText,_ref$showMoreText=_ref.showMoreText,showMoreText=void 0===_ref$showMoreText?"Show more":_ref$showMoreText,_ref$display=_ref.display,display=void 0===_ref$display?"block":_ref$display,textProps=_ref.textProps,expandingActionProps=_ref.expandingActionProps,_ref$expanded=_ref.expanded,expanded=void 0!==_ref$expanded&&_ref$expanded,rest=objectWithoutPropertiesLoose_default()(_ref,_excluded),shouldCollapse=minLength&&text.length>minLength,_useState=(0,react.useState)(expanded),localExpanded=_useState[0],setLocalExpanded=_useState[1],displayedText=shouldCollapse&&!localExpanded?text.substring(0,minLength)+"...":text,toggleExpanded=(0,react.useCallback)((function(){return setLocalExpanded((function(current){return!current}))}),[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.Z,Object.assign({style:{whiteSpace:"pre-wrap"},display:display},textProps,{children:displayedText+" "})),shouldCollapse&&(0,jsx_runtime.jsx)(ExpandingTextStyles,Object.assign({display:display,onClick:toggleExpanded},expandingActionProps,rest,{children:localExpanded?showLessText:showMoreText}))]})};ExpandingText.propTypes={text:prop_types_default().string.isRequired,minLength:prop_types_default().number,showLessText:prop_types_default().node,showMoreText:prop_types_default().node,display:prop_types_default().oneOf(["inline","block","inline-block","flex","inline-flex","none"]),textProps:prop_types_default().object,expandingActionProps:prop_types_default().object,expanded:prop_types_default().bool},ExpandingText.__docgenInfo={description:"The ExpandText component provides expand and collapse functionality for inline-text.",methods:[],displayName:"ExpandingText",props:{showLessText:{defaultValue:{value:"'Show less'",computed:!1},description:"@default 'Show less'\nText of `showLess` button.",type:{name:"node"},required:!1},showMoreText:{defaultValue:{value:"'Show more'",computed:!1},description:"@default 'Show more'\nText of `showMore` button.",type:{name:"node"},required:!1},display:{defaultValue:{value:"'block'",computed:!1},description:"@default 'block'\nCSS `display` prop applied to the text.",type:{name:"enum",value:[{value:"'inline'",computed:!1},{value:"'block'",computed:!1},{value:"'inline-block'",computed:!1},{value:"'flex'",computed:!1},{value:"'inline-flex'",computed:!1},{value:"'none'",computed:!1}]},required:!1},expanded:{defaultValue:{value:"false",computed:!1},description:"@default false\nExpanded state of the text.",type:{name:"bool"},required:!1},text:{description:"Text to be displayed.",type:{name:"string"},required:!0},minLength:{description:"Length of text to be displayed.",type:{name:"number"},required:!1},textProps:{description:"Props applied to the text.",type:{name:"object"},required:!1},expandingActionProps:{description:"Props applied to the ShowLess/ShowMore component.",type:{name:"object"},required:!1}}};var dataDisplay_ExpandingText=ExpandingText},"./src/components/dataDisplay/Typography/Typography.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return dataDisplay_Typography_Typography}});var objectWithoutPropertiesLoose=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.21.0-c4ef698c89-7b33e25bfa.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),prop_types=(__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),Typography=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-5115fb1860/0/cache/@mui-material-npm-5.11.16-91605e8ed0-2f92f14f30.zip/node_modules/@mui/material/Typography/Typography.js"),styled=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-5115fb1860/0/cache/@mui-material-npm-5.11.16-91605e8ed0-2f92f14f30.zip/node_modules/@mui/material/styles/styled.js"),es=__webpack_require__("./.yarn/cache/ramda-npm-0.29.0-ec4babb485-9ab26c06eb.zip/node_modules/ramda/es/index.js"),TypographyStyles=(0,styled.ZP)(Typography.Z)((function(_ref){var theme=_ref.theme,variant=_ref.variant;return{fontFamily:theme.typography.fontFamily,textTransform:(0,es.q9t)(variant,["overline","button"])?"uppercase":"none"}})),Tooltip=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-5115fb1860/0/cache/@mui-material-npm-5.11.16-91605e8ed0-2f92f14f30.zip/node_modules/@mui/material/Tooltip/Tooltip.js"),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),_excluded=["tooltip","emphasis","style","variant"],emphasisToCSSProps={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},overline:{textDecoration:"overline"},"line-through":{textDecoration:"line-through"},underline:{textDecoration:"underline"}},getCSSPropsFromEmphasis=function getCSSPropsFromEmphasis(emphasis){return es.vgT(emphasis,emphasisToCSSProps)},parseEmphasis=function parseEmphasis(emphasis){return emphasis?es.is(String,emphasis)?getCSSPropsFromEmphasis(emphasis):es.is(Array,emphasis)?es.u4g((function(acc,elem){var cssObj=getCSSPropsFromEmphasis(elem);return es.p8q((function(prop,val1,val2){return es.q9t(prop,Object.getOwnPropertyNames(acc))?val1+" "+val2:val2}),acc,cssObj)}),{},emphasis):{}:{}},Typography_Typography=function Typography(_ref){var tooltip=_ref.tooltip,emphasis=_ref.emphasis,style=_ref.style,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"inherit":_ref$variant,rest=objectWithoutPropertiesLoose_default()(_ref,_excluded),base=(0,jsx_runtime.jsx)(TypographyStyles,Object.assign({style:Object.assign({},style,parseEmphasis(emphasis)),variant:variant},rest));return tooltip?(0,jsx_runtime.jsx)(Tooltip.Z,{title:tooltip,placement:"bottom-start",children:base}):base};Typography_Typography.propTypes={tooltip:prop_types_default().node,style:prop_types_default().object,color:prop_types_default().oneOf(["initial","inherit","primary","secondary","textPrimary","textSecondary","error"]),emphasis:prop_types_default().oneOfType([prop_types_default().oneOf(["bold","italic","underline","line-through","overline"]),prop_types_default().arrayOf(prop_types_default().oneOf(["bold","italic","underline","line-through","overline"]).isRequired)]),variant:prop_types_default().oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"])},Typography_Typography.__docgenInfo={description:"Use typography to present your design and content as clearly and efficiently as possible.",methods:[],displayName:"Typography",props:{variant:{defaultValue:{value:"'inherit'",computed:!1},description:"@default 'inherit'\nApplies the theme typography styles.",type:{name:"enum",value:[{value:"'body1'",computed:!1},{value:"'body2'",computed:!1},{value:"'button'",computed:!1},{value:"'caption'",computed:!1},{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1},{value:"'inherit'",computed:!1},{value:"'overline'",computed:!1},{value:"'subtitle1'",computed:!1},{value:"'subtitle2'",computed:!1}]},required:!1},tooltip:{description:"If provided, a text will appear on hover.",type:{name:"node"},required:!1},style:{description:"Inline styles object.",type:{name:"object"},required:!1},color:{description:"The color of the text.",type:{name:"enum",value:[{value:"'initial'",computed:!1},{value:"'inherit'",computed:!1},{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'textPrimary'",computed:!1},{value:"'textSecondary'",computed:!1},{value:"'error'",computed:!1}]},required:!1},emphasis:{description:"Controls the text emphasis. Different font styles can be used individually or in combination.",type:{name:"union",value:[{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'italic'",computed:!1},{value:"'underline'",computed:!1},{value:"'line-through'",computed:!1},{value:"'overline'",computed:!1}]},{name:"arrayOf",value:{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'italic'",computed:!1},{value:"'underline'",computed:!1},{value:"'line-through'",computed:!1},{value:"'overline'",computed:!1}]}}]},required:!1}}};var dataDisplay_Typography_Typography=Typography_Typography},"./src/components/dataDisplay/Typography/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/dataDisplay/Typography/Typography.tsx");__webpack_exports__.Z=_Typography__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{gd:function(){return _dataDisplay_ExpandingText__WEBPACK_IMPORTED_MODULE_3__.Z},hU:function(){return _buttons_IconButton__WEBPACK_IMPORTED_MODULE_1__.Z},zx:function(){return _buttons_Button__WEBPACK_IMPORTED_MODULE_0__.Z}});var _buttons_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/buttons/Button/index.ts"),_buttons_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/buttons/IconButton/index.ts"),_dataDisplay_ExpandingText__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/buttons/BackToButton/index.ts"),__webpack_require__("./src/components/dataDisplay/ExpandingText/index.ts"));__webpack_require__("./src/components/themes/index.ts")},"./src/stories/dataDisplay/ExpandingText/ExpandingText.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Display:function(){return Display},ExpandingText:function(){return ExpandingText_stories_ExpandingText},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ExpandingText_stories}});__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");var ExpandingText=__webpack_require__("./src/components/dataDisplay/ExpandingText/index.ts"),Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-5115fb1860/0/cache/@mui-material-npm-5.11.16-91605e8ed0-2f92f14f30.zip/node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./src/components/dataDisplay/Typography/index.ts"),components=__webpack_require__("./src/components/index.ts"),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),DisplayPreview_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis. Sed in condimentum sapien. Morbi viverra, dolor sed sollicitudin tristique, dui sem pretium odio, nec bibendum nibh velit vel turpis. Maecenas elit velit, molestie quis cursus eu, dignissim a elit. Etiam accumsan cursus ipsum, sit amet semper arcu faucibus sed. Donec aliquam fermentum ligula, a cursus lacus finibus non. Fusce id sollicitudin dui. Suspendisse malesuada lorem enim, at euismod neque tincidunt pellentesque.",DisplayPreview=function DisplayPreview(){return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,rowSpacing:2,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"body2",emphasis:"bold",children:"display: inline-block"}),(0,jsx_runtime.jsx)(components.gd,{text:DisplayPreview_text,display:"inline-block",minLength:250})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"body2",emphasis:"bold",children:"display: block"}),(0,jsx_runtime.jsx)(components.gd,{text:DisplayPreview_text,display:"block",minLength:250})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"body2",emphasis:"bold",children:"display: flex; justify-content: flex-end"}),(0,jsx_runtime.jsx)(components.gd,{text:DisplayPreview_text,display:"flex",justifyContent:"flex-end",minLength:300})]})]})};DisplayPreview.displayName="DisplayPreview",DisplayPreview.__docgenInfo={description:"",methods:[],displayName:"DisplayPreview"};var ExpandingText_stories={title:"Components/DataDisplay/ExpandingText",component:ExpandingText.Z,tags:["autodocs"]},ExpandingText_stories_ExpandingText={args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis."},parameters:{docs:{source:{code:"\n        <ExpandingText text={text to be displayed} />\n        ",format:!0}}}},Display={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n        <ExpandingText text={text to be displayed} display="inline-block" minLength={250} />\n        ',format:!0}}},render:function render(){return(0,jsx_runtime.jsx)(DisplayPreview,{})}},__namedExportsOrder=["ExpandingText","Display"];ExpandingText_stories_ExpandingText.parameters={...ExpandingText_stories_ExpandingText.parameters,docs:{...ExpandingText_stories_ExpandingText.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis.'\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: \"\\n        <ExpandingText text={text to be displayed} />\\n        \",\n        format: true\n      }\n    }\n  }\n}",...ExpandingText_stories_ExpandingText.parameters?.docs?.source}}},Display.parameters={...Display.parameters,docs:{...Display.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: "\\n        <ExpandingText text={text to be displayed} display=\\"inline-block\\" minLength={250} />\\n        ",\n        format: true\n      }\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/_jsx(DisplayPreview, {});\n  }\n}',...Display.parameters?.docs?.source},description:{story:"In order to render the `ExpandAction` component (ShowMore/ShowLess functionality), a `minLength` prop must be provided that is less than length of the text displayed.\nWhen the `ExpandAction` component is rendered, different `display` options can be used.\nAlso, by providing `expandingActionProps` property, the `ExpandAction` component can be customized with `Typography` props.",...Display.parameters?.docs?.description}}}}}]);