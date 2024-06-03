import { IFilterForm } from "src/app/shared/components/filter-form/interfaces/IFilterForm.interface";
import { IJsonForm } from "src/app/shared/components/json-form/interfaces/IJsonForm.interface";
import { IJsonFormControl } from "src/app/shared/components/json-form/interfaces/IJsonFormControl.interface";
import { IJsonFormGroup } from "src/app/shared/components/json-form/interfaces/IJsonFormGroup.interface";

export function getMockFilterForms(): Promise<IFilterForm[]> {
  const formGroup1: IJsonFormGroup = {
    id: 1,
    name: 'filter1',
    order: 1,
    isFromApiOrigin: false,
    controlsSource: null,
    styleRules: null,
    formControls: [
      {
        id: 1,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'franchise1',
          tag: 'select',
          label: 'franchise1',
          attributes: {
            placeholder: 'select...'
          },
          data: []
        },
        dataSource: null
      },
      {
        id: 1,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'franchise2',
          tag: 'select',
          label: 'franchise2',
          attributes: {
            placeholder: 'select...'
          },
          data: []
        },
        dataSource: null
      },
      {
        id: 1,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'franchise3',
          tag: 'select',
          label: 'franchise3',
          attributes: {
            placeholder: 'select...'
          },
          data: []
        },
        dataSource: null
      },
      {
        id: 1,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'franchise4',
          tag: 'select',
          label: 'franchise4',
          attributes: {
            placeholder: 'select...'
          },
          data: []
        },
        dataSource: null
      },
      {
        id: 1,
        description: null,
        order: 1,
        dataSource: "funcName",
        styleRules: {
          "width": 3
        },
        control: {
          "name": "active",
          "tag": "input",
          "attributes": {
            "type": "checkbox"
          },
          "data": [{name: "active", value: "active"}]
        }
      },
      {
        id: 1,
        description: null,
        order: 1,
        dataSource: null,
        styleRules: {
          "width": 3
        },
        control: {
          "name": "updated",
          "tag": "input",
          "attributes": {
            "type": "checkbox"
          },
          "data": [{name: "updated", value: "updated"}]
        }
      }
    ]
  };

  const formGroup2: IJsonFormGroup = {
    id: 1,
    name: 'filter2',
    order: 1,
    isFromApiOrigin: false,
    controlsSource: null,
    styleRules: null,
    formControls: [
      {
        id: 1,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'franchise',
          tag: 'select',
          label: 'franchise',
          attributes: {
            placeholder: 'select...'
          },
          data: []
        },
        dataSource: null
      }
    ]
  };

  const formGroup3: IJsonFormGroup = {
    id: 2,
    name: 'report & invoice',
    order: 1,
    isFromApiOrigin: false,
    controlsSource: null,
    styleRules: null,
    formControls: [
      {
        id: 3,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'report type',
          tag: 'select',
          label: 'report type',
          attributes: {
            value: 'invoice detail'
          },
          data: [{name: 'invoice detail', value: 'invoice detail'}]
        },
        dataSource: null
      },
      {
        id: 3,
        order: 1,
        description: null,
        styleRules: {
          width: 3
        },
        control: {
          name: 'invoice formats',
          tag: 'select',
          label: 'invoice formats',
          attributes: {
            value: 'invoice format xxx_xx'
          },
          data: [{name: 'invoice format xxx_xx', value: 'invoice format xxx_xx'}]
        },
        dataSource: null
      }
    ]
  };
  /*-----------------------------------------------------*/

  let control: IJsonFormControl = {
    id: 0,
    description: null,
    order: 1,
    dataSource: null,
    styleRules: {
      "width": 3
    },
    control: {
      "name": "test",
      "tag": "input",
      "attributes": {
        "type": "checkbox"
      },
      "data": [{name: "test", value: "test"}],
      "group": "test group"
    }
  };
  // form that has a group control
  let form: IJsonForm = {
    id: 412,
    name: '',
    submitTarget: '',
    formGroups: [
      {
        name: 'test4',
        order: 1,
        id: 0,
        styleRules: null,
        isFromApiOrigin: true,
        controlsSource: 'funcName',
        formControls: []
      },
      formGroup3
    ]
  };
  for (let i = 0; i < 4; i++) {
    let newControl = JSON.parse(JSON.stringify(control));
    newControl.control.name = control.control.name + i;
    form.formGroups[0].formControls.push(newControl)
  }



  let filterForms: IFilterForm[] = [
    {
      id: 1,
      name: 'Billing details',
      styleRules: { icon: 'fa fa-search-plus' },
      form: null,
      childrenFilterForms: [
        {
          id: 2,
          name: 'Billing',
          styleRules: { icon: 'fa fa-file-text-o' },
          form: {
              id: 1,
              name: '...',
              submitTarget: '/api/forms/submit', // just an example endpoint
              formGroups: [
                formGroup1,
                formGroup3
              ]
          },
          childrenFilterForms: []
        },
        {
          id: 3,
          name: 'Status',
          styleRules: { icon: 'fa fa-check-square-o' },
          form: {
            id: 1,
            name: '...',
            submitTarget: '/api/forms/submit', // just an example endpoint
            formGroups: [
              formGroup2,
              formGroup3
            ]
          },
          childrenFilterForms: []
        }
      ]
    },
    {
      id: 3,
      name: 'Billing Summary',
      styleRules: { icon: 'fa fa-file-text-o' },
      form: form,
      childrenFilterForms: []
    }
  ];

  return new Promise((resolve, reject) => {
    resolve(filterForms)
  });
}
