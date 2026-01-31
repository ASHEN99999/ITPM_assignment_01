import * as ExcelJS from 'exceljs';
import * as path from 'path';
import * as fs from 'fs';

// Configuration
const REG_NO = 'IT22267818'; // Extracted from filename
const INPUT_EXCEL = 'Assignment I - IT22267818_TEST_CASE.xlsx';
const OUTPUT_EXCEL = `${REG_NO}_TestCases.xlsx`;
const RESULTS_JSON = path.join(__dirname, '../test-results/results.json');

async function generateReport() {
    if (!fs.existsSync(RESULTS_JSON)) {
        console.error('Results file not found. Run tests first.');
        process.exit(1);
    }

    if (!fs.existsSync(INPUT_EXCEL)) {
        console.error('Template Excel file not found: ' + INPUT_EXCEL);
        process.exit(1);
    }

    const results = JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf-8'));
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(INPUT_EXCEL);

    // Assuming the first sheet is the one we want
    const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
        console.error('Workbook has no worksheets!');
        process.exit(1);
    }

    console.log('Opened workbook. Writing results...');

    // We need to map our results to the Excel rows.
    // The template likely has headers. We should find where to start writing.
    // Let's assume row 1 is header. We'll verify column names conceptually.
    // Better strategy: Use the ID column to match if it exists, or just append/fill sequentially.
    // Since we created the data based on the assignment, we can try to fill.
    // However, the assignment says "Fill using the template".
    // We will append our 35 rows starting from the first empty data row (or after headers).

    // Let's assume the template is empty or has example rows we should NOT overwrite?
    // "Your test cases must not include those mentioned in the sample template." -> IMPLIES we add new rows.
    // Use `worksheet.addRow` or find the next empty row.

    // Headers are usually: TC ID, Test Case Name, Input Length, Input, Expected, Actual, Status, Comments, Focus
    // Let's guess column indices based on standard Appendix 2 screenshot if possible, or inspection.
    // Standard ITPM template usually:
    // A: TC ID
    // B: Test Case Name (Description)
    // C: Input Length Type
    // D: Input
    // E: Expected Output
    // F: Actual Output
    // G: Status
    // H: Accuracy justification / Description
    // I: What is covered by the test

    // Let's find the last row and start adding.
    // Actually, looking at the user request "A completed Excel file containing the test cases filled using the template".
    // I will append to the end.

    for (const res of results) {
        // Construct standard 4-bullet description for Column I
        // 1. Input Type / Domain
        // 2. Sentence / Grammar Focus
        // 3. Input Length Type
        // 4. Quality Focus
        const coverageDetails = `• ${res.category}\n• ${res.grammarFocus || 'N/A'}\n• ${res.length}\n• ${res.qualityFocus}`;

        const rowValues = [
            res.id,              // A: TC ID
            res.description,     // B: Name
            res.length,         // C: Length
            res.input,          // D: Input
            res.expectedOutput, // E: Expected
            res.actualOutput,   // F: Actual
            res.status,         // G: Status
            res.comment,        // H: Justification
            coverageDetails     // I: What is covered by the test
        ];

        const row = worksheet.addRow(rowValues);
        // Optional: formatting (wrap text)
        row.getCell(9).alignment = { wrapText: true, vertical: 'top' };
    }

    // Save
    await workbook.xlsx.writeFile(OUTPUT_EXCEL);
    console.log(`Report generated successfully: ${OUTPUT_EXCEL}`);
}

generateReport().catch(console.error);
