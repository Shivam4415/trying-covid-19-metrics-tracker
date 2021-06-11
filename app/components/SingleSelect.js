import React from 'react';
import {Select} from 'antd';
import {LabelDiv} from '@components/common/typography';
import {is} from 'typescript-styled-is';

const {Option} = Select;

// export const SingleSelectDropdown = styled(Select)`
//   &.ant-select {
//     width: 100% !important;
//   }
//   .ant-select-selector {
//     background: ${({theme}) => theme.color.white} !important;
//     min-height: 48px !important;
//     padding-top: 9px !important;
//     padding-bottom: 9px !important;
//     border-radius: 2px !important;
//     border: 1px solid #dedede !important;
//     box-shadow: unset !important;
//     outline: none !important;
//     ${is('hasError')`
//       border: 1px solid #EB0000!important;
//       color:#EB0000!important;
//   `}
//   }
//   .ant-select-clear {
//     align-content: center !important;
//     display: grid !important;
//     font-size: 150%;
//     width: 20px;
//   }
// `;

export default class SingleSelect extends React.Component {
  //   componentDidMount() {
  //     const {field} = this.props;
  //     this.onChange(field.default || field?.defaultOption?.value);
  //   }
  //   state = {
  //     value: this.props.field.default || this.props.field?.defaultOption?.value,
  //   };
  //   componentDidUpdate(prevProps) {
  //     const {preRequisiteValue, field} = this.props;

  //     if (preRequisiteValue !== prevProps.preRequisiteValue) {
  //       this.onChange(field.mode === 'multiple' ? [] : '');
  //     }
  //   }

  //   renderOptions = () => {
  //     const {field, preRequisiteValue} = this.props;
  //     const {options} = field;
  //     let selectOptions = options || [];
  //     if (!Array.isArray(options)) {
  //       selectOptions =
  //         (preRequisiteValue && options.case[preRequisiteValue]) || [];
  //     }
  //     return selectOptions.map(opt => {
  //       let value;
  //       let name;
  //       let optionsProps = {};
  //       if (typeof opt !== 'object') {
  //         value = opt;
  //         name = opt;
  //       } else {
  //         const {value: optionValue, name: optionName, ...props} = opt;
  //         value = optionValue;
  //         name = optionName;
  //         optionsProps = props;
  //       }
  //       return (
  //         <Option
  //           value={value}
  //           key={`single-select-opt-key-${value}`}
  //           {...optionsProps}>
  //           {name}
  //         </Option>
  //       );
  //     });
  //   };

  //   onChange = v => {
  //     const {onChange, field} = this.props;
  //     const value = Array.isArray(v) && v.length === 0 ? undefined : v;
  //     this.setState({value});
  //     onChange(field.value, value);
  //   };

  render() {
    const {field, disabled} = this.props;
    const {value} = this.state;
    return <div>I am Select </div>;
    // return (
    //   <div className="p-t-sm">
    //     <LabelDiv className="m-b-xs">
    //       {field.label}
    //       {field.required && <span style={{color: 'red'}}> *</span>}
    //     </LabelDiv>
    //     <SingleSelectDropdown
    //       showSearch={field.showSearch}
    //       disabled={disabled}
    //       value={value}
    //       mode={field.mode}
    //       defaultValue={field.default || field?.defaultOption?.value}
    //       style={{width: 120}}
    //       onChange={this.onChange}>
    //       {this.renderOptions()}
    //     </SingleSelectDropdown>
    //   </div>
    // );
  }
}
