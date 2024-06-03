import { IUser } from "src/app/core/interfaces/IUser.interface";
import { IDummyDataResponse } from "src/shared-interfaces/IDummyDataResponse.interface";

export function getMockUserPublicInfo(): Promise<IDummyDataResponse<IUser>> {
  let data: IUser = {
    id: 1,
    username: "user",
    email: "user@gmail.com",
    roles: [],
    modules: [
      {
        id: 2,
        name: 'Home',
        order: 1,
        route: 'home',
        styleRules: { icon: 'fa fa-home' },
        childrenModules: []
      },
      {
        id: 4,
        name: 'Subscribers',
        order: 3,
        styleRules: { icon: 'fa fa-users' },
        childrenModules: [
          {
            id: 5,
            name: 'Register Subscriber',
            order: 1,
            route: 'subscribers/register',
            contentRoute: '/modules/3/content-blocks',
            childrenModules: [],
          },
          {
            id: 6,
            name: 'Consult Subscriber',
            order: 2,
            styleRules: { icon: 'fa fa-search' },
            childrenModules: [
              {
                id: 102,
                name: 'Home Customer',
                order: 1,
                route: 'subscribers/consult/home',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 103,
                name: 'Enterprise Customer',
                order: 2,
                route: 'subscribers/consult/enterprise',
                contentRoute: '/modules/3/content-blocks',
                childrenModules: []
              }
            ]
          },
          {
            id: 8,
            name: 'Create O.V Account',
            order: 4,
            route: 'subscribers/ov-account',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 9,
        name: 'Register Payment',
        order: 4,
        route: 'payment',
        styleRules: { icon: 'fa fa-pencil-square-o' },
        childrenModules: []
      },
      {
        id: 26,
        name: 'Technical Requests',
        order: 7,
        styleRules: { icon: 'fa fa-file' },
        childrenModules: [
          {
            id: 27,
            name: 'Create Request',
            order: 1,
            route: 'technical-requests/create',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 28,
            name: 'Consult Request',
            order: 2,
            route: 'technical-requests/consult',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 54,
        name: 'Customer Service',
        order: 11,
        styleRules: { icon: 'fa fa-thumbs-up' },
        childrenModules: [
          {
            id: 55,
            name: 'Outgoing Registration',
            order: 1,
            route: 'customer-service/outgoing-registration',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 56,
                name: 'Register',
                order: 1,
                route: 'customer-service/register',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 57,
                name: 'Assign Calls',
                order: 2,
                route: 'customer-service/assign-calls',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 58,
                name: 'Make Assigned Calls',
                order: 3,
                route: 'customer-service/make-assigned-calls',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 59,
                name: 'Call History',
                order: 4,
                route: 'customer-service/call-history',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
            ]
          }
        ]
      },
      {
        id: 70,
        name: 'Configuration',
        order: 13,
        styleRules: { icon: 'fa fa-cog' },
        childrenModules: [
          {
            id: 71,
            name: 'General Parameters',
            order: 1,
            route: 'configuration/general-parameters',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }  
        ]
      },
    ]
  }
  
  const res = { data }
  return new Promise((resolve, reject) => {
    resolve(res)
  });
}