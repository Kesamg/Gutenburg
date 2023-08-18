/* Register the new block, sets an title, icon and a category, plus fields in the block (attributes) */
wp.blocks.registerBlockType('custom/company-block', {
    title: 'Company Contact Information',
    icon: 'building',
    category: 'design',
    attributes: {
        companyName: {type: 'string'},
        companyEmail: {type: 'string'},
        companyPhone: {type: 'string'},
        companyAddress: {type: 'string'},
        companyCity: {type: 'string'},
        companyState: {type: 'string'},
        companyZipCode: {type: 'string'},
    },
    edit: function(props) {

        function updateCompanyName(event) {props.setAttributes({companyName: event.target.value})}
        function updateCompanyEmail(event) {props.setAttributes({companyEmail: event.target.value})}
        function updateCompanyPhone(event) {props.setAttributes({companyPhone: event.target.value})}
        function updateCompanyAddress(event) {props.setAttributes({companyAddress: event.target.value})}
        function updateCompanyCity(event) {props.setAttributes({companyCity: event.target.value})}
        function updateCompanyState(event) {props.setAttributes({companyState: event.target.value})}
        function updateCompanyZipCode(event) {props.setAttributes({companyZipCode: event.target.value})}

        return React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Company Name "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyName,
            onChange: updateCompanyName
          })), React.createElement("div", null, React.createElement("label", null, "Company Email "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyEmail,
            onChange: updateCompanyEmail
          })), React.createElement("div", null, React.createElement("label", null, "Company Phone Number "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyPhone,
            onChange: updateCompanyPhone
          })), React.createElement("div", null, React.createElement("label", null, "Company Address "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyAddress,
            onChange: updateCompanyAddress
          })), React.createElement("div", null, React.createElement("label", null, "Company City "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyCity,
            onChange: updateCompanyCity
          })), React.createElement("div", null, React.createElement("label", null, "Company State "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyState,
            onChange: updateCompanyState
          })), React.createElement("div", null, React.createElement("label", null, "Company Zip Code "), React.createElement("br", null), React.createElement("input", {
            type: "text",
            value: props.attributes.companyZipCode,
            onChange: updateCompanyZipCode
          })));
    },
    save: function(props) {
        return React.createElement("div", null, React.createElement("h3", null, props.attributes.companyName), React.createElement("span", null, props.attributes.companyPhone), React.createElement("br", null), React.createElement("span", null, props.attributes.companyEmail), React.createElement("br", null), React.createElement("span", null, props.attributes.companyAddress), React.createElement("br", null), React.createElement("div", null, React.createElement("span", null, props.attributes.companyCity), React.createElement("br", null), React.createElement("span", null, props.attributes.companyState), React.createElement("br", null), React.createElement("span", null, props.attributes.companyZipCode), " ", React.createElement("br", null)));
    }
}) 