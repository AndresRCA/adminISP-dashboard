import { ContentBlockType, IContentBlock } from "src/shared-interfaces/IContentBlock.interface";
import { IDummyDataResponse } from "src/shared-interfaces/IDummyDataResponse.interface";
import { getMockDataForm } from "./data-forms";
import { getMockFilterForms } from "./filter-forms";
import { getMockActionButtons } from "./action-buttons";
import { getMockTables } from "./tables";

export async function getMockModuleContent(contentRoute: string): Promise<IDummyDataResponse<IContentBlock[]>> {
  let data: IContentBlock[];

  switch (contentRoute) {
    case '/modules/5/content-blocks': // this value is very much linked to what is set in user.ts (5 is the module id)
      data = [
        {
          id: 1,
          order: 1,
          type: ContentBlockType.FILTER_FORM, // defines the format that should be used in the template
          form: {
            id: 0,
            name: '',
            submitTarget: '',
            formGroups: []
          },
          filterForms: await getMockFilterForms(),
          actionButtons: [],
          tables: []
        },
        {
          id: 0,
          order: 2,
          type: ContentBlockType.ACTION_BUTTONS, // defines the format that should be used in the template
          form: null,
          filterForms: [],
          actionButtons: await getMockActionButtons(),
          tables: []
        }
      ];
      break;
  
    case '/modules/3/content-blocks':
      data = [
        {
          id: 2,
          order: 1,
          type: ContentBlockType.FORM, // defines the format that should be used in the template
          form: await getMockDataForm('Subscriber registration'),
          filterForms: [],
          actionButtons: [],
          tables: []
        },
        {
          id: 0,
          order: 2,
          type: ContentBlockType.ACTION_BUTTONS, // defines the format that should be used in the template
          form: null,
          filterForms: [],
          actionButtons: await getMockActionButtons(),
          tables: []
        }
      ];
      break;
    
    case '/modules/800/content-blocks':
      data = [
        {
          id: 2,
          order: 1,
          type: ContentBlockType.FORM, // defines the format that should be used in the template
          form: await getMockDataForm('Parameter'),
          filterForms: [],
          actionButtons: [],
          tables: []
        },
        {
          id: 2,
          order: 1,
          type: ContentBlockType.ACTION_BUTTONS, // defines the format that should be used in the template
          form: null,
          filterForms: [],
          actionButtons: await getMockActionButtons(),
          tables: []
        },
        {
          id: 2,
          order: 1,
          type: ContentBlockType.TABLE, // defines the format that should be used in the template
          form: null,
          filterForms: [],
          actionButtons: [],
          tables: await getMockTables()
        }
      ];
      break;
      
    default:
      // set content values as you see fit here
      data = [];
      break;
  }

  const res = { data }
  return new Promise((resolve, reject) => {
    resolve(res)
  });
}