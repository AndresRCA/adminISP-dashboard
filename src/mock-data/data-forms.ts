import { IJsonForm } from "src/app/shared/components/json-form/interfaces/IJsonForm.interface";

export function getMockDataForm(formName: string): Promise<IJsonForm> {
  let form: IJsonForm;
  switch (formName) {
    case 'Subscriber registration':
      form = {
        id: 2,
        name: 'Subscriber registration',
        submitTarget: '/api/forms/submit/1', // just an example endpoint
        formGroups: [
          // FORMGROUP 1 contract details
          {
            id: 5,
            name: 'contract details',
            order: 1,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 6 },
            formControls: [
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 1,
                "styleRules": {
                  "width": 8
                },
                "control": {
                  "name": "subscriber_type",
                  "tag": "input",
                  "label": "subscriber type",
                  "attributes": {
                    "type": "radio",
                    "required": true,
                    "value": "customer"
                  },
                  "validators": ["required"],
                  "data": [{name: 'customer', value: 'customer'}, {name: 'prospect', value: 'prospect'}]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 2,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "billing_type",
                  "tag": "input",
                  "label": "billing type",
                  "attributes": {
                    "type": "radio",
                    "required": true,
                    "value": "prepaid"
                  },
                  "validators": ["required"],
                  "data": [{name: 'prepaid', value: 'prepaid'}, {name: 'postpaid', value: 'postpaid'}]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 3,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "franchise",
                  "tag": "select",
                  "label": "franchise",
                  "attributes": {
                    "placeholder": "select...",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 4,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "affinity_group",
                  "tag": "select",
                  "label": "affinity group",
                  "attributes": {
                    "placeholder": "select...",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 5,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "salesperson",
                  "tag": "select",
                  "label": "salesperson",
                  "attributes": {
                    "placeholder": "select franchise",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 6,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "advisor",
                  "tag": "input",
                  "label": "advisor",
                  "attributes": {
                    "type": "text",
                    "required": true
                  },
                  "validators": ["required"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 7,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "post",
                  "tag": "input",
                  "label": "post",
                  "attributes": {
                    "type": "text",
                    "required": true
                  },
                  "validators": ["required"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 8,
                "styleRules": {
                  "width": 12
                },
                "control": {
                  "name": "contract_observation",
                  "tag": "textarea",
                  "label": "observation",
                  "attributes": {
                    "maxLength": 255
                  },
                  "validators": ["maxLength"]
                }
              }
            ]
          },
          // FORMGROUP 2 subscriber information
          {
            id: 5,
            name: 'subscriber information',
            order: 2,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 6 },
            formControls: [
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 1,
                "styleRules": {
                  "width": 3
                },
                "control": {
                  "name": "birthdate",
                  "tag": "input",
                  "label": "birthdate",
                  "attributes": {
                    "type": "date",
                    "required": true
                  },
                  "validators": ["required"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 2,
                "styleRules": {
                  "width": 3
                },
                "control": {
                  "name": "client_type",
                  "tag": "select",
                  "label": "client type",
                  "attributes": {
                    "placeholder": "select...",
                    "value": "natural",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": [{name: 'natural', value: 'natural'}]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 3,
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "type_doc",
                  "tag": "select",
                  "label": "type doc.",
                  "attributes": {
                    "placeholder": "select...",
                    "value": "v",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": [{name: 'v', value: 'v'}]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 4,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "document_number",
                  "tag": "input",
                  "label": "document n°",
                  "attributes": {
                    "type": "text",
                    "pattern": "[0-9]*",
                    "required": true
                  },
                  "validators": ["required", "pattern"],
                  "buttonGroup": "search"
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 5,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "name",
                  "tag": "input",
                  "label": "name(s)",
                  "attributes": {
                    "type": "text",
                    "required": true
                  },
                  "validators": ["required"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 6,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "last_name",
                  "tag": "input",
                  "label": "last name(s)",
                  "attributes": {
                    "type": "text",
                    "required": true
                  },
                  "validators": ["required"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 7,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "mobile",
                  "tag": "input",
                  "label": "mobile",
                  "attributes": {
                    "type": "tel",
                    "pattern": "[0-9]{3}-[0-9]{7}",
                    "required": true
                  },
                  "validators": ["required", "pattern"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 8,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "home_phone",
                  "tag": "input",
                  "label": "home phone",
                  "attributes": {
                    "type": "tel",
                    "pattern": "[0-9]{3}-[0-9]{7}",
                    "required": true
                  },
                  "validators": ["required", "pattern"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 9,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "aditional_phone",
                  "tag": "input",
                  "label": "aditional phone",
                  "attributes": {
                    "type": "tel",
                    "pattern": "[0-9]{3}-[0-9]{7}"
                  },
                  "validators": ["pattern"]
                }
              },
              {
                "id": 1,
                "description": "",
                "dataSource": "",
                "order": 10,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "email",
                  "tag": "input",
                  "label": "e-mail",
                  "attributes": {
                    "type": "email",
                    "required": true
                  },
                  "validators": ["required", "email"]
                }
              }
            ]
          },
          // FORMGROUP 3 address details
          {
            id: 5,
            name: 'address details',
            order: 3,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 6 },
            formControls: [
              {
                "id": 1,
                "description": null,
                "order": 1,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "department",
                  "tag": "select",
                  "label": "department",
                  "attributes": {
                    "required": true,
                    "placeholder": "selecione..."
                  },
                  "validators": ["required"],
                  "data": [{name: "a", value: 1}]
                },
                "dataSource": "funcName"
              },
              {
                "id": 2,
                "description": null,
                "order": 2,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "city_municipality",
                  "tag": "select",
                  "label": "city/municipality",
                  "attributes": {
                    "required": true,
                    "placeholder": "selecione..."
                  },
                  "validators": ["required"],
                  "data": []
                },
                "dataSource": "funcName"
              },
              {
                "id": 3,
                "description": null,
                "order": 3,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "zone",
                  "tag": "select",
                  "label": "zone",
                  "attributes": {
                    "required": true,
                    "placeholder": "selecione..."
                  },
                  "validators": ["required"],
                  "data": []
                },
                "dataSource": "funcName"
              },
              {
                "id": 4,
                "description": null,
                "order": 4,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "sector",
                  "tag": "select",
                  "label": "sector",
                  "attributes": {
                    "required": true,
                    "placeholder": "selecione..."
                  },
                  "validators": ["required"],
                  "data": []
                },
                "dataSource": "funcName"
              },
              {
                "id": 5,
                "description": null,
                "order": 5,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "nomenclature_1",
                  "tag": "select",
                  "label": "nomenclature 1",
                  "attributes": {
                    "disabled": true,
                    "placeholder": "selecione..."
                  },
                  "validators": ["required"],
                  "data": []
                },
                "dataSource": "funcName"
              },
              {
                "id": 6,
                "description": null,
                "order": 6,
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "value",
                  "tag": "select",
                  "label": "value",
                  "attributes": {
                    "disabled": true
                  },
                  "validators": ["required"],
                  "buttonGroup": "add",
                  "data": []
                },
                "dataSource": "funcName"
              }
            ]
          },
          // FORMGROUP 4 residence details
          {
            id: 5,
            name: 'residence details',
            order: 4,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 6 },
            formControls: [
              {
                "id": 1,
                "description": null,
                "order": 1,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "residence",
                  "tag": "input",
                  "label": "residence",
                  "attributes": {
                    "type": "radio",
                    "required": true,
                    "value": "house"
                  },
                  "validators": ["required"],
                  "data": [{name: 'house', value: 1},{name: 'apartment', value: 2}]
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 2,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 6
                },
                "control": {
                  "name": "house_number",
                  "tag": "input",
                  "label": "house number",
                  "attributes": {
                    "type": "text",
                    "pattern": "[0-9]*"
                  },
                  "validators": ["required", "pattern"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 3,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 12
                },
                "control": {
                  "name": "point_of_reference",
                  "tag": "textarea",
                  "label": "point of reference",
                  "attributes": {
                    "placeholder": "additional address or reference point",
                    "maxLength": 255
                  },
                  "validators": ["maxLength"]
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 4,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 12, "icon": "fa fa-refresh"
                },
                "control": {
                  "name": "fiscal_address",
                  "tag": "textarea",
                  "label": "fiscal address",
                  "attributes": {
                    "placeholder": "fiscal address",
                    "maxLength": 255,
                    "disabled": true
                  },
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 5,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 12, "icon": "fa fa-globe"
                },
                "control": {
                  "name": "georeference_button",
                  "tag": "button",
                  "label": "georeference",
                  "content": "MAP",
                  "action": "openMap",
                  "fills": "fiscal_address"
                }
              }
            ]
          },
          // FORMGROUP 5 instalation request
          {
            id: 5,
            name: 'instalation request',
            order: 5,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 12 },
            formControls: [
              {
                "id": 1,
                "description": null,
                "order": 1,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 12
                },
                "control": {
                  "name": "combo_services",
                  "tag": "input",
                  "label": "¿do combo services apply?",
                  "attributes": {
                    "type": "radio",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": [{name: 'yes', value: true},{name: 'no', value: false}]
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 2,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "service_type",
                  "tag": "select",
                  "label": "type of service",
                  "attributes": {
                    "placeholder": "select...",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 3,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "description",
                  "tag": "select",
                  "label": "description",
                  "attributes": {
                    "placeholder": "select...",
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 4,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 1
                },
                "control": {
                  "name": "tax",
                  "tag": "select",
                  "label": "%tax",
                  "attributes": {
                    "placeholder": "select...",
                    "value": 0,
                    "disabled": true,
                    "required": true
                  },
                  "validators": ["required"],
                  "data": []
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 5,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 1
                },
                "control": {
                  "name": "quantity",
                  "tag": "input",
                  "label": "quantity",
                  "attributes": {
                    "type": "text",
                    "value": 1,
                    "pattern": "[0-9]*",
                  },
                  "validators": ["pattern"]
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 6,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "cost_with_tax",
                  "tag": "input",
                  "label": "cost with tax",
                  "attributes": {
                    "type": "text",
                    "pattern": "[0-9]*",
                    "value": 0,
                    "required": true
                  },
                  "validators": ["required", "pattern"],
                  "buttonLabel": {
                    "content": "USD"
                  }
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 7,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "conversion",
                  "tag": "input",
                  "label": "",
                  "attributes": {
                    "type": "text",
                    "value": 0,
                    "disabled": true,
                  },
                  "buttonLabel": {
                    "content": "BS"
                  }
                }
              },
              {
                "id": 1,
                "description": null,
                "order": 8,
                "dataSource": "funcName",
                "styleRules": {
                  "width": 2
                },
                "control": {
                  "name": "total",
                  "tag": "input",
                  "label": "total",
                  "attributes": {
                    "type": "text",
                    "value": 0,
                    "disabled": true,
                  },
                  "buttonGroup": "add"
                }
              }
            ]
          }
        ]
      };
      break;
    
    case 'Parameter':
      form = {
        id: 3,
        name: 'Parameter',
        submitTarget: '/api/forms/submit/2', // just an example endpoint
        formGroups: [
          // FORMGROUP 1 contract details
          {
            id: 5,
            name: 'general parameter data',
            order: 1,
            isFromApiOrigin: false,
            controlsSource: null,
            styleRules: { width: 12 },
            formControls: [ // these same control would be used in the table form I pressume
              {
                "id": 100,
                "description": null,
                "dataSource": null,
                "order": 1,
                "styleRules": {
                  "width": 4
                },
                "control": {
                  "name": "parameter",
                  "tag": "input",
                  "label": "parameter",
                  "attributes": {
                    "type": "text"
                  }
                }
              },
              {
                "id": 101,
                "description": null,
                "dataSource": null,
                "order": 2,
                "styleRules": {
                  "width": 12
                },
                "control": {
                  "name": "observation",
                  "tag": "textarea",
                  "label": "observation"
                }
              }
            ]
          }
        ]
      };
      break;
  
    default:
      break;
  }

  return new Promise((resolve, reject) => {
    resolve(form)
  });
}