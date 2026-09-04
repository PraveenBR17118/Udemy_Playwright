const ExcelJs = require("exceljs");
const {test,expect} = require('@playwright/test');

//let rownum;
//let colnum;
//let output ={rownum:-1, column:-1}

// const workbook = new ExcelJs.Workbook();
// workbook.xlsx
//   .readFile("/Users/praveenbr/Downloads/exceldownloadtest.xlsx")
//   .then(function () {
//     const worksheet = workbook.getWorksheet('Sheet1');
//     worksheet.eachRow((row, rowNumber) => 
//     {
//         row.eachCell((cell, colNumber) => 
//         {
//             console.log(cell.value);
//         });
//     });
//   });


  // async function excelTest()
  // {
  //   //const workbook = new ExcelJs.Workbook();
  //   const workbook = new ExcelJs.Workbook();
  //   await workbook.xlsx.readFile("/Users/praveenbr/Downloads/exceldownloadtest.xlsx")
  //   const worksheet = workbook.getWorksheet('Sheet1');
  //   worksheet.eachRow((row, rowNumber) => 
  //   {
  //       row.eachCell((cell, colNumber) => 
  //       {
  //           //console.log(cell.value);
  //           if(cell.value ==='Apple')
  //               {

  //                   console.log(rowNumber);
  //                   console.log(colNumber);
  //                   output.rownum = rowNumber;
  //                   output.column = colNumber;
  //               }
  //       });
  //   });

  //   const cell = worksheet.getCell(output.rownum,output.column);
  //   cell.value ='iPhone 17 pro max';
  //   await workbook.xlsx.writeFile("/Users/praveenbr/Downloads/exceldownloadtest.xlsx");
  // }




  async function writeexcelTest(searchText,replaceText,change, filepath)
  {
    //const workbook = new ExcelJs.Workbook();
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filepath)
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.rownum,output.column+change.colChange);
    cell.value =replaceText;
    //cell.value ="350";
    await workbook.xlsx.writeFile(filepath);
  }


  async function readExcel(worksheet,searchText)
  {
    let output ={rownum:-1, column:-1}
    worksheet.eachRow((row, rowNumber) => 
      {
          row.eachCell((cell, colNumber) => 
          {
              //console.log(cell.value);
              if(cell.value === searchText)
                  {
  
                      console.log(rowNumber);
                      console.log(colNumber);
                      output.rownum = rowNumber;
                      output.column = colNumber;
                  }
          });
      });

      return output;
  }



// update mango price to 350.
//writeexcelTest("Apple",350,{rowChange:0,colChange:2},"/Users/praveenbr/Downloads/exceldownloadtest.xlsx")

test('Upload download excel validation',async ({page})=>
  {
    const textSearch = 'Apple';
    const updateValue = 350;
    const filePath = "/Users/praveenbr/Downloads/exceldownloadtest.xlsx";
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const downloadPromise= page.waitForEvent('download');
    await page.getByRole('button',{name:'Download'}).click();
    await downloadPromise;

    writeexcelTest(textSearch,updateValue,{rowChange:0,colChange:2},filePath)
    //const uploadPromise= page.waitForEvent('upload');
    //await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles(filePath);

    await expect(page.locator("[role='rowgroup']").first()).toBeVisible();
  
    //const textLocator = page.getByText(textSearch);
    //const desireRow = await page.getByRole('row').filter({has : textLocator});
    const desireRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
    console.log(desireRow);
    await expect(desireRow.locator("#cell-4-undefined")).toContainText(updateValue.toString());

   // /Users/praveenbr/Downloads

   // ✅ Ensure the edit finishes before upload
 
  //const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
 // await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);





  })