import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('gridReference') myGrid!: jqxGridComponent;

  ngAfterViewInit():void{
	// this.myBarGauge.val([123, 136, 142]);
	// this.myBarGauge.createComponent();
	// this.myGrid.createComponent(this.settings);
  }


//   onFilter(): void
//   {
// 	  //Do something
//   }
   
//   data: any = generatedata(500);

//   source: any =
//   {
// 	  localdata: this.data,
// 	  datafields:
// 	  [
// 		  { name: 'firstname', type: 'string' },
// 		  { name: 'lastname', type: 'string' },
// 		  { name: 'productname', type: 'string' },
// 		  { name: 'date', type: 'date' },
// 		  { name: 'quantity', type: 'number' },
// 		  { name: 'price', type: 'number' }
// 	  ],
// 	  datatype: "array"
//   };

//   dataAdapter: any = new jqx.dataAdapter(this.source);

//   columns: any[] =
//   [
// 	  { text: 'First Name', datafield: 'firstname', width: 160 },
// 	  { text: 'Last Name', datafield: 'lastname', width: 160 },
// 	  { text: 'Product', datafield: 'productname', width: 170 },
// 	  { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
// 	  { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
// 	  { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
//   ]

//   source =
//     {
//         datatype: "xml",
//         datafields: [
//             { name: 'ProductName', type: 'string' },
//             { name: 'QuantityPerUnit', type: 'int' },
//             { name: 'UnitPrice', type: 'float' },
//             { name: 'UnitsInStock', type: 'float' },
//             { name: 'Discontinued', type: 'bool' }
//         ],
//         root: "Products",
//         record: "Product",
//         id: 'ProductID',
//         url: "../sampledata/products.xml"
//     };
     
//     dataAdapter = new jqx.dataAdapter(this.source);
     
//     cellsrenderer = (row:any, columnfield:any, value:any, defaulthtml:any, columnproperties:any, rowdata:any) =>
//     {
//         if (value < 20)
//         {
//             return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
//         }
//         else
//         {
//             return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
//         }
//     };
//     settings: jqwidgets.GridOptions = {
//         width: 850,
//         source: this.dataAdapter,
//         pageable: true,
//         autoheight: true,
//         sortable: true,
//         altrows: true,
//         enabletooltips: true,
//         editable: true,
//         selectionmode: 'multiplecellsadvanced',
//         columns:
//         [
//             { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
//             { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
//             { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
//             { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
//             { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
//         ],
//         columngroups: [ { text: 'Product Details', align: 'center', name: 'ProductDetails' } ]
//     };

//   barGaugeSettings: jqwidgets.BarGaugeOptions =
//   {
// 	  colorScheme: 'scheme02',
// 	  width: 600,
// 	  height: 600,
// 	  max: 150,
// 	  values: [102, 115, 130, 137],
// 	  tooltip: {
// 		  visible: true,
// 		  formatFunction: (value: string): string =>
// 		  {
// 			  let realVal = parseInt(value);
// 			  return ("Year: 2016<br />Price Index: " + realVal);
// 		  }
// 	  }
//   }


//   title = 'jQWidgets';

//   columns = [
// 		{text: 'Id', datafield: 'id'},
// 		{text: 'Name', datafield: 'name'},
//   	    {text: 'Type', datafield: 'type'}
//   ];

//   source = new jqx.dataAdapter({
// 		localData: [
// 		  {id: 1, name: 'Hydrogen', type: 'Hy'},
// 		  {id: 2, name: 'Helium', type: 'H3'},
// 		  {id: 3, name: 'Lithium', type: 'Li'},
// 		  {id: 4, name: 'Beryllium', type: 'Be'},
// 		  {id: 5, name: 'Boron', type: 'Bo'},
// 		  {id: 6, name: 'Carbon', type: 'Ca'},
// 		  {id: 7, name: 'Nitrogen', type: 'Ni'},
// 		  {id: 8, name: 'Oxygen', type: 'O'},
// 		  {id: 9, name: 'Fluorine', type: 'Fl'},
// 		  {id: 10, name: 'Neon', type: 'Ne'},
// 		  {id: 11, name: 'Sodium', type: 'Na'},
// 		  {id: 12, name: 'Magnesium', type: 'Mg'},
// 		  {id: 13, name: 'Aluminum', type: 'Al'},
// 		  {id: 14, name: 'Silicon', type: 'Si'},
// 		  {id: 15, name: 'Phosphorus', type: 'Pr'},
// 		  {id: 16, name: 'Sulfur', type: 'Sl'},
// 		  {id: 17, name: 'Chlorine', type: 'Cl'},
// 		  {id: 18, name: 'Argon', type: 'Ar'},
// 		  {id: 19, name: 'Potassium', type: 'Pt'},
// 		  {id: 20, name: 'Calcium', type: 'Ca'}
// 		]
// 	 });

// 	//  Events (jqxBarGuage)
	
// 	somethingToDo(event : any){
// 		console.log(event.target);
// 	}

// 	tooltip: any =
//     {
//         visible: false,
//         formatFunction: (value: string) => 
//         {
//             let realVal = parseInt(value);
//             return ('Year: 2016<br/>Price Index:' + realVal);
//         }
//     }
 
//     values: number[] = [102, 115, 130, 137];

// 	tooltip2: any =
//     {
//         visible: true,
//         formatFunction: (value: string) => 
//         {
//             let realVal = parseInt(value);
//             return ('Year: 2016<br/>Price Values:' + realVal + ' <br/> Code Values' + realVal);
//         }
//     }
// 	values2: number[] = [115,140,133, 146];

	// jQGrid Example 2

	// source2 =
    // {
    //     datatype: "xml",
    //     datafields: [
    //         { name: 'ProductName', type: 'string' },
    //         { name: 'QuantityPerUnit', type: 'int' },
    //         { name: 'UnitPrice', type: 'float' },
    //         { name: 'UnitsInStock', type: 'float' },
    //         { name: 'Discontinued', type: 'bool' }
    //     ],
    //     root: "Products",
    //     record: "Product",
    //     id: 'ProductID',
    //     url: "../sampledata/products.xml"
    // };
 
    // dataAdapter2 = new jqx.dataAdapter(this.source2);
 
    // cellsrenderer2 = (row:any, columnfield:any, value:any, defaulthtml:any, columnproperties:any, rowdata:any) =>
    // {
    //     if (value < 20)
    //     {
    //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
    //     }
    //     else
    //     {
    //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
    //     }
    // };
 
    // columns2: any[] =
    // [
	// {
	//     text: 'Product Name', columngroup: 'ProductDetails',
	//     datafield: 'ProductName', width: 250
	// },
	// {
	//     text: 'Quantity per Unit', columngroup: 'ProductDetails',
	//     datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200
	// },
	// {
	//     xt: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200
	// },
	// {
	//     t: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer2, width: 100
	// },
	// {
	//     xt: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued'
	// }
    // ];
 
    // columngroups2: any[] = [ { text: 'Product Details', align: 'center', name: 'ProductDetails' } ];
	
	// Grid

	source: any =
    {
        localdata: 
        [
            ['Bundled Services Policy', 'Packaged Services for the Outpatient Hospital', '11369', 'Deny packaged HCPCS codes(Status Indicator N) when billed by an outpatient hospital(CMS-1 450)', 'Flag', '$54,629,198', '$27,315,242', '301107','Opportunity', '-'],
            ['Bundled Services Policy', 'Packaged Services for the Outpatient Hospital', '11367', 'Deny STV packaged services when billed on the same claim as a procedure or service that has an APC status indicator of S, T or V, (Cms - 1450)','-', '$6,762,457', '$3,381,481', '111676', 'Opportunity', 'No Decision'],
            ['Bundled Services Policy', 'Packaged Services for the Ambulatory Surgical Center(ASC)', '5954', 'Deny packaged HCPCS codes when billed by an ambulatory surgical center. (CMS 1500)','-', '$65,453', '$32,727','230', 'Opportunity', 'Multiple'],
            ['Bundled Services Policy', 'Packaged Service for the Ambilatory Surgical Center(ASC)', '15311', 'Deny packaged HCPCS codes when billed by an ambulatory surgical center (CMS- 1450)','-', '$61,604', '$15,401', '174', 'Opportunity', '-'],
            ['Bundled Services Policy', 'Packaged Revenue Codes for the Outpatient Hospital', '3610', 'Deny packaged revenue codes when billed without a HCPCS code.','-', '$19,651', '$9,826', '46', 'Opportunity', 'Multiple'],
			['Bundled Services Policy', 'Packaged Services for the Ambulatory Surgical Center(ASC)', '5954', 'Deny packaged HCPCS codes when billed by an ambulatory surgical center. (CMS 1500)','-', '$65,453', '$32,727','230', 'Opportunity', 'Multiple'],
			['Bundled Services Policy', 'Packaged Services for the Outpatient Hospital', '11367', 'Deny STV packaged services when billed on the same claim as a procedure or service that has an APC status indicator of S, T or V, (Cms - 1450)','-', '$6,762,457', '$3,381,481', '111676', 'Opportunity', 'No Decision'],
			['Bundled Services Policy', 'Packaged Revenue Codes for the Outpatient Hospital', '3610', 'Deny packaged revenue codes when billed without a HCPCS code.','-', '$19,651', '$9,826', '46', 'Opportunity', 'Multiple']
        ],
        datafields: 
        [
            { name: 'MP', type: 'string', map: '0'},
            { name: 'Topic', type: 'string', map: '1' },
            { name: 'DP', type: 'string', map: '2' },
            { name: 'DP Description', type: 'string', map: '3' },
            { name: 'Flag', type: 'string', map: '4' },
            { name: 'Raw Savings', type: 'string', map: '5' },
			{ name: 'Agressive Savings', type: 'string', map: '6' },
			{ name: 'Edits', type: 'string', map: '7' },
			{ name: 'Savings Status', type: 'string', map: '8' },
			{ name: 'Latest Client Description', type: 'string', map: '9' }
        ],
        datatype: 'array'
    };
 
    dataAdapter: any = new jqx.dataAdapter(this.source);
 
    columns: any[] =
    [
        { text: 'MP', datafield: 'MP', width: 200, cellsalign: 'center', align: 'center',cellclassname: 'column'},
        { text: 'Topic', datafield: 'Topic', width: 150 , cellsalign: 'center', align: 'center'},
        { text: 'DP', datafield: 'DP', width: 100 , align: 'center', cellsalign: 'center'},
        { text: 'DP Description', datafield: 'DP Description', width: 220, cellsalign: 'center', align: 'center' },
        { text: 'Flag', datafield: 'Flag', width: 70, cellsalign: 'center', align: 'center' },
        { text: 'Raw Savings', datafield: 'Raw Savings', width: 150, cellsalign: 'center', align: 'center' },
		{ text: 'Agressive Savings', datafield: 'Agressive Savings', width: 160, cellsalign: 'center', align: 'center' },
		{ text: 'Edits', datafield: 'Edits' , width: 150, cellsalign: 'center', align: 'center'},
		{ text: 'Savings Status', datafield: 'Savings Status', width: 200, cellsalign: 'center', align: 'center'},
		{ text: 'Latest Client Desc', datafield: 'Latest Client Description', width: 200, cellsalign: 'center', align: 'center'}
    ];
}