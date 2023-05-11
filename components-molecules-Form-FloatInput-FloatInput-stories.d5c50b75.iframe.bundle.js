(self.webpackChunkstorybook_app=self.webpackChunkstorybook_app||[]).push([[142,799],{"./src/components/molecules/Form/Input/Input.test.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{b:function(){return PlayBuilder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/molecules/Form/mocks/index.ts");function PlayBuilder(text,delay=50){return async({canvasElement:canvasElement,step:step})=>{const elements=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getAllByPlaceholderText(/.*/);for(let i=0;i<elements.length;++i){const input=elements[i];await step("Width must be increase with text input",(async()=>{const beforeWidth=parseFloat(getComputedStyle(input).width);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(input,text,{delay:delay});const afterWidth=parseFloat(getComputedStyle(input).width);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(beforeWidth).toBeLessThan(afterWidth)}))}}}__webpack_exports__.Z=PlayBuilder(_mocks__WEBPACK_IMPORTED_MODULE_2__.C)},"./src/components/molecules/Form/mocks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{C:function(){return largeText},p:function(){return labels}});const labels=[" label "," label some text"," label some more text text text"],largeText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore est dicta iusto."},"./src/components/molecules/Form/FloatInput/FloatInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithFormatter:function(){return WithFormatter},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/Form/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/molecules/Form/FloatInput/index.tsx"),_Input_Input_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/molecules/Form/Input/Input.test.ts"),_Input_Input_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/molecules/Form/Input/Input.stories.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:___WEBPACK_IMPORTED_MODULE_2__.Z,decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{children:story()})]};const Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{...args}),args:{label:"Float label"},play:_Input_Input_test__WEBPACK_IMPORTED_MODULE_3__.Z},WithFormatter={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{...args}),args:{label:"Float label",formatter:_Input_Input_stories__WEBPACK_IMPORTED_MODULE_4__.WithFormatter.args?.formatter},play:_Input_Input_stories__WEBPACK_IMPORTED_MODULE_4__.WithFormatter.play},__namedExportsOrder=["Default","WithFormatter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => /*#__PURE__*/_jsx(FloatInput, {\n    ...args\n  }),\n  args: {\n    label: 'Float label'\n  },\n  play: PlayInput\n}",...Default.parameters?.docs?.source}}},WithFormatter.parameters={...WithFormatter.parameters,docs:{...WithFormatter.parameters?.docs,source:{originalSource:"{\n  render: args => /*#__PURE__*/_jsx(FloatInput, {\n    ...args\n  }),\n  args: {\n    label: 'Float label',\n    formatter: WithFormatterInput.args?.formatter\n  },\n  play: WithFormatterInput.play\n}",...WithFormatter.parameters?.docs?.source}}}},"./src/components/molecules/Form/Input/Input.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithFormatter:function(){return WithFormatter},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/Form/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/molecules/Form/Input/index.tsx"),_Input_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/molecules/Form/Input/Input.test.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:___WEBPACK_IMPORTED_MODULE_2__.Z,decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{children:story()})]};const Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{...args}),play:_Input_test__WEBPACK_IMPORTED_MODULE_3__.Z},getRandomNumber=legnth=>Array(legnth).fill(null).map((()=>Math.round(9*Math.random()))).join(""),WithFormatter={...Default,args:{formatter:value=>{const matchValue=(value=value.replace(/\s/g,"")).match(/(?<integer>\d*)(?<mantissa>[,,.]\d*)?/);if(!matchValue)return"";value=matchValue[0];const integer=matchValue.groups?.integer??"",mantissa=matchValue.groups?.mantissa??"";return value.trim()?BigInt(integer).toLocaleString()+mantissa:""}},play:(0,_Input_test__WEBPACK_IMPORTED_MODULE_3__.b)(`${getRandomNumber(25)}.${getRandomNumber(10)}`,100)},__namedExportsOrder=["Default","WithFormatter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => /*#__PURE__*/_jsx(Input, {\n    ...args\n  }),\n  play: PlayInput\n}",...Default.parameters?.docs?.source}}},WithFormatter.parameters={...WithFormatter.parameters,docs:{...WithFormatter.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    formatter: value => {\n      value = value.replace(/\\s/g, '');\n      const matchValue = value.match(/(?<integer>\\d*)(?<mantissa>[,,.]\\d*)?/);\n      if (!matchValue) {\n        return '';\n      }\n      value = matchValue[0];\n      const integer = matchValue.groups?.integer ?? '';\n      const mantissa = matchValue.groups?.mantissa ?? '';\n      return value.trim() ? BigInt(integer).toLocaleString() + mantissa : '';\n    }\n  },\n  play: PlayBuilder(`${getRandomNumber(25)}.${getRandomNumber(10)}`, 100)\n}",...WithFormatter.parameters?.docs?.source}}}},"?4f7e":function(){}}]);