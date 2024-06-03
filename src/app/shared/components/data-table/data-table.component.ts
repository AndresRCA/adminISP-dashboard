import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import $ from 'jquery';
import 'src/assets/lib/datatables/jquery.dataTables.js'; // using the one from npm presents issues
import { ITable } from './interfaces/ITable.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @Input() table!: ITable;
  public tableId!: string;
  @Input() tableClasses: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tableId = 'dataTable' + this.table.id;
  }

  ngAfterViewInit(): void {
    console.log('data table is starting with data:', this.table);
    //@ts-ignore
    $('#'+ this.tableId).DataTable({
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: 'SHOW _MENU_ REGISTERS',
      }
    });
  }
}
