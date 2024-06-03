import { ITable } from "src/app/shared/components/data-table/interfaces/ITable.interface";

export function getMockTables(): Promise<ITable[]> {
  let tables: ITable[] = [
    {
      id: 1,
      tableOrigin: 'cb_dbTable'
    }
  ];

  return new Promise((resolve, reject) => {
    resolve(tables)
  });
}